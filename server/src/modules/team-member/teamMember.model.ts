import { Schema, model } from 'mongoose';
import ITeamMember from './teamMember.interface';

const teamSchema = new Schema<ITeamMember>(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    teamId: { type: Schema.Types.ObjectId, required: true, ref: 'team' },
  },
  { timestamps: true },
);

const TeamMember = model<ITeamMember>('team-member', teamSchema);

export default TeamMember;
