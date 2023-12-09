import { Schema, model } from 'mongoose';
import { ITeam } from './team.interface';

const teamSchema = new Schema<ITeam>(
  {
    name: {
      type: String,
      required: [true, 'Team name is required!'],
      trim: true,
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      required: [true, 'UserId is required!'],
    },
  },
  { timestamps: true },
);

const Team = model<ITeam>('team', teamSchema);

export default Team;
