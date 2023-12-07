import { Types } from 'mongoose';

export interface ITeam {
  name: string;
  userId: Types.ObjectId;
  role: 'CREATOR' | 'MEMBER';
}
