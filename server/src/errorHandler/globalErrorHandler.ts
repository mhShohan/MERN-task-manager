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

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const errorResponse = {
    success: false,
    statusCode: 500,
    message: 'Internal Server Error!',
    errors: {},
  };

  if (err instanceof ZodError) {
    const errors = zodErrorSanitize(err as ZodError);
    errorResponse.statusCode = 400;
    errorResponse.message = 'Validation failed!';
    errorResponse.errors = errors;
  } else if (err?.name === 'ValidationError') {
    const errors = handleValidationError(err as mongoose.Error.ValidationError);
    errorResponse.statusCode = 400;
    errorResponse.message = 'Validation failed!';
    errorResponse.errors = errors;
  } else if (err?.name === 'CastError') {
    // @TODO sanitize the CastError
    const errors = handleCastError(err as mongoose.Error.CastError);
    errorResponse.statusCode = 400;
    errorResponse.message = 'Invalid Id!';
    errorResponse.errors = errors;
  } else if (err?.code === 11000) {
    const errors = handleDuplicateError(err);
    errorResponse.statusCode = 400;
    errorResponse.message = 'Duplicate field Error!';
    errorResponse.errors = errors;
  } else if (err instanceof CustomError) {
    errorResponse.statusCode = err.statusCode;
    errorResponse.message = err.message;
    errorResponse.errors = {};
  }

  return res.status(err.statusCode || 500).json(errorResponse);
};

export default globalErrorHandler;
