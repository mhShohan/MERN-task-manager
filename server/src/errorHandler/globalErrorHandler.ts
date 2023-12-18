/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ZodError } from 'zod';
import mongoose from 'mongoose';
import { ErrorRequestHandler } from 'express';
import zodErrorSanitize from './zodErrorSanitize';
import handleValidationError from './handleValidationError';
import handleCastError from './handleCastError';
import handleDuplicateError from './handleDuplicateError';
import CustomError from './customError';
import handleCustomError from './handleCustomError';
import StatusCode from '../lib/StatusCode';

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const errorResponse = {
    success: false,
    statusCode: 500,
    message: 'Internal Server Error!',
    errors: {},
  };

  if (err instanceof ZodError) {
    const errors = zodErrorSanitize(err as ZodError);
    errorResponse.statusCode = StatusCode.BAD_REQUEST;
    errorResponse.message = 'Validation failed!';
    errorResponse.errors = errors;
  } else if (err?.name === 'ValidationError') {
    const errors = handleValidationError(err as mongoose.Error.ValidationError);
    errorResponse.statusCode = StatusCode.BAD_REQUEST;
    errorResponse.message = 'Validation failed!';
    errorResponse.errors = errors;
  } else if (err?.name === 'CastError') {
    const errors = handleCastError(err as mongoose.Error.CastError);
    errorResponse.statusCode = StatusCode.BAD_REQUEST;
    errorResponse.message = 'Invalid field!';
    errorResponse.errors = errors;
  } else if (err?.code === 11000) {
    const errors = handleDuplicateError(err);
    errorResponse.statusCode = StatusCode.BAD_REQUEST;
    errorResponse.message = 'Duplicate field Error!';
    errorResponse.errors = errors;
  } else if (err instanceof CustomError) {
    const errors = handleCustomError(err);
    errorResponse.statusCode = err.statusCode;
    errorResponse.message = err.message;
    errorResponse.errors = errors;
  }

  return res.status(errorResponse.statusCode).json(errorResponse);
};

export default globalErrorHandler;
