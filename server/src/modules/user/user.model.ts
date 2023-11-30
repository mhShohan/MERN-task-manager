import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const useSchema = new Schema<IUser>({}, { timestamps: true });

const User = model<IUser>('user', useSchema);

export default User;
