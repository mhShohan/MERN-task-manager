import { RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../app/config';
import CustomError from '../errorHandler/customError';

const verifyAuth: RequestHandler = async (req, _res, next) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.split(' ')[1];
    if (token) {
      const decode = jwt.verify(token, config.jwt_secret as string) as JwtPayload;

      req.user = {
        _id: decode?._id,
        email: decode?.email,
        firstName: decode?.firstName,
        lastName: decode?.lastName,
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
