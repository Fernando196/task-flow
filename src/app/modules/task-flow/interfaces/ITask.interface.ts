import { StatusTask } from '../enums/StatusTask.enum';
import { IUser } from './IUser.interface';

export interface ITask {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
  statusId: StatusTask;
  users?: IUser[];
  priority?: Priority;
}

export interface Priority {
  id: number;
  name: string;
  color: string;
  textColor: string;
}
