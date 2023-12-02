import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { IAddress, ISocialLinks, IUser } from './user.interface';

const addressSchema = new Schema<IAddress>(
  {
    city: { type: String, required: [true, 'city is required!'], trim: true },
    country: {
      type: String,
      required: [true, 'country is required!'],
      trim: true,
    },
  },
  { _id: false },
);

const linksSchema = new Schema<ISocialLinks>(
  {
    github: { type: String },
    linkendin: { type: String },
    facebook: { type: String },
    twitter: { type: String },
  },
  { _id: false },
);

const useSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, 'FirstName is required!'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'LastName is required!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      trim: true,
      min: [6, 'Must have 6 characters'],
      max: [20, 'Not more then 20 characters'],
    },
    title: { type: String },
    birthDate: { type: String },
    description: { type: String },
    avatar: { type: String },
    status: { type: String, enum: ['ACTIVE', 'BLOCK'], default: 'ACTIVE' },
    address: { type: addressSchema },
    links: { type: linksSchema },
  },
  { timestamps: true },
);

useSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

const User = model<IUser>('user', useSchema);

export default User;
