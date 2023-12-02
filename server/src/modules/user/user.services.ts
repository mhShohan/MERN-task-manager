import bcrypt from 'bcrypt';
import CustomError from '../../utils/customError';
import { IUser } from './user.interface';
import User from './user.model';

const userServices: Record<string, unknown> = {};

userServices.create = async (userData: IUser) => {
  return await User.create(userData);
};

userServices.login = async (userData: { email: string; password: string }) => {
  const isUserExists = await User.findOne({ email: userData.email });

  if (isUserExists) {
    const matchPassword = await bcrypt.compare(
      userData.password,
      isUserExists.password,
    );

    if (matchPassword) return isUserExists;
    else throw new CustomError(400, 'Wrong Credentials!');
  } else {
    throw new CustomError(404, 'User Not Found!');
  }
};

export default userServices;
