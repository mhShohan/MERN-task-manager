import { Types } from "mongoose"


export interface ITask {
  title: string
  description: string
  teamId: Types.ObjectId
  assignTo: Types.ObjectId
  deadLine: string
}