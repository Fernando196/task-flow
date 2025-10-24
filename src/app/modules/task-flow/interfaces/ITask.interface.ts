import { Priority } from '../enums/Priotiry.enum';
import { StatusTask } from '../enums/StatusTask.enum';
import { IUser } from './IUser.interface';

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
  statusId: StatusTask;
  users?: IUser[];
  priority?: Priority;
}
