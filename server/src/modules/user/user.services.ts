/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from 'bcrypt';
import CustomError from '../../errorHandler/customError';
import User from './user.model';
import StatusCode from '../../lib/StatusCode';
import BaseService from '../base/BaseServices';

class UserServices extends BaseService<any> {
  constructor(model: any) {
    super(model);
  }

  async login(payload: { email: string; password: string }) {
    const user = await this.model.findOne({ email: payload.email }).select('+password');

    if (user) {
      const matchPassword = await bcrypt.compare(payload.password, user.password);

      if (matchPassword) return user;
      else throw new CustomError(StatusCode.BAD_REQUEST, 'Wrong Credentials!', 'WrongCredentials');
    } else {
      throw new CustomError(StatusCode.BAD_REQUEST, 'User Not Found!', 'WrongCredentials');
    }
  }
}

const userServices = new UserServices(User);

export default userServices;
