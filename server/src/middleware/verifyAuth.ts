import { RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../app/config';
import CustomError from '../errorHandler/customError';
import StatusCode from '../lib/StatusCode';

const verifyAuth: RequestHandler = (req, _res, next) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.split(' ')[1];

    if (token) {
      const decode = jwt.verify(token, config.jwt_secret as string) as JwtPayload;

      if (decode) {
        req.user = {
          _id: decode?._id,
          email: decode?.email
        };

        next();
      } else {
        throw new CustomError(StatusCode.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
      }
    } else {
      throw new CustomError(StatusCode.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
    }
  } else {
    throw new CustomError(StatusCode.UNAUTHORIZED, 'Unauthorize! please login', 'Unauthorize');
  }
};

export default verifyAuth;
