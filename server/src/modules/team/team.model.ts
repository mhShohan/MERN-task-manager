import { Schema, model } from "mongoose";
import { ITeam } from "./team.interface";


const teamSchema = new Schema<ITeam>({
  name: { type: String, required: [true, 'Team name is required!'], trim: true },
  userId: { type: Schema.Types.ObjectId, required: [true, 'Team name is required!'] },
  role: {
    type: String, enum: {
      values: ['CREATOR', 'MEMBER'],
      message: '{VALUE}'
    }
  }
}, { timestamps: true })


const Team = model<ITeam>('team', teamSchema)

export default Team