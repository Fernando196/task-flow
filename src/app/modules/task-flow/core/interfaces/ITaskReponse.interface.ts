import { ITask } from './ITask.interface';

export interface ITaskResponse {
  succes: boolean;
  data: ITask[] | ITask;
  count: number;
}
