import { Schema, model } from 'mongoose';
import ITeamMember from './teamMember.interface';

const teamSchema = new Schema<ITeamMember>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    teamId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

const Team = model<ITeamMember>('team-member', teamSchema);

export default Team;
