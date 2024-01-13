import { Schema, model } from "mongoose";
import { ITask } from "./task.interface";

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teamId: { type: Schema.Types.ObjectId, required: true, ref: 'team' },
  assignTo: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  deadLine: { type: Date },
}, { timestamps: true })


const Task = model<ITask>('task', taskSchema)

export default Task