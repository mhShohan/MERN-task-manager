/* eslint-disable @typescript-eslint/no-explicit-any */
import BaseServices from '../base/BaseServices';
import Task from './task.model';

class TaskServices extends BaseServices<any> {
  constructor(model: any) {
    super(model);
  }
}

const taskServices = new TaskServices(Task);

export default taskServices;
