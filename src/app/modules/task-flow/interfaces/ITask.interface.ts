import { IUser } from './IUser.interface';

export interface ITask {
  id: number;
  description: string;
  completed: boolean;
  startDate: Date;
  endDate: Date;
  createdDate: Date;
  statusId: IStatusTask;
  users?: IUser[];
}

export enum IStatusTask {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  IN_REVIEW = 'IN_REVIEW',
}
