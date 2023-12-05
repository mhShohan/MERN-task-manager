import { Types } from "mongoose"

export interface ITeam {
  name: string
  creator: string
  members: Array<Types.ObjectId>
}