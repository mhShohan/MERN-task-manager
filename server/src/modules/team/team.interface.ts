import { Types } from 'mongoose';

export interface ITeam {
  name: string;
  creatorId: Types.ObjectId;
}
