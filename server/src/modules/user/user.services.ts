import bcrypt from 'bcrypt';
import CustomError from '../../errorHandler/customError';
import { IUser } from './user.interface';
import User from './user.model';

const create = async (userData: IUser) => {
  return await User.create(userData);
};

const login = async (userData: { email: string; password: string }) => {
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

const getUser = async (id: string) => {
  return await User.findById(id)
}

const userServices = { create, login, getUser };

export default userServices;
