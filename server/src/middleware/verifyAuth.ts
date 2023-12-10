import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../app/config';
import CustomError from '../errorHandler/customError';
import User from '../modules/user/user.model';
import { Types } from 'mongoose';

interface MiddlewareRequest extends Request {
  user: {
    _id?: Types.ObjectId;
    email?: string;
    firstName?: string;
    lastName?: string;
  };
}

interface JWTPayload {
  _id: Types.ObjectId;
  name: string;
}

const verifyAuth = async (
  req: MiddlewareRequest,
  _res: Response,
  next: NextFunction,
) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.split(' ')[1];
    if (token) {
      const decode = jwt.verify(
        token,
        config.jwt_secret as string,
      ) as JWTPayload;
      const user = await User.findById(decode._id as Types.ObjectId);

      req.user = {
        _id: user?._id,
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
      };

      next();
    } else {
      throw new CustomError(401, 'Unauthorize! please login', 'Unauthorize');
    }
  } else {
    throw new CustomError(401, 'Unauthorize! please login', 'Unauthorize');
  }
};

export default verifyAuth;
