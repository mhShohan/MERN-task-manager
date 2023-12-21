import bcrypt from 'bcrypt';
import CustomError from '../../errorHandler/customError';
import { IUser } from './user.interface';
import User from './user.model';
import StatusCode from '../../lib/StatusCode';

const create = async (payload: IUser) => {
  return await User.create(payload);
};

const login = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload.email }).select('+password');

  if (user) {
    const matchPassword = await bcrypt.compare(payload.password, user.password);

    if (matchPassword) return user;
    else throw new CustomError(StatusCode.BAD_REQUEST, 'Wrong Credentials!', 'WrongCredentials');
  } else {
    throw new CustomError(StatusCode.BAD_REQUEST, 'User Not Found!', 'WrongCredentials');
  }
};

const getUser = async (id: string) => {
  return await User.findById(id);
};

const getAllUser = async () => {
  return await User.find();
};

const userServices = { create, login, getUser, getAllUser };

export default userServices;
