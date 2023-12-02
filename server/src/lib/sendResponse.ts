import { Response } from 'express';

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

const sendResponse = <T>(res: Response, responses: IResponse<T>) => {
  return res.status(responses.statusCode).json({
    statusCode: responses.statusCode,
    success: responses.success,
    message: responses.message,
    data: responses.data,
  });
};

export default sendResponse;
