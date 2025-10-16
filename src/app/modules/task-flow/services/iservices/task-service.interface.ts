import { Observable } from 'rxjs';
import { ITaskResponse } from '../../interfaces/ITaskReponse.interface';
import { WritableSignal } from '@angular/core';

export interface ITaskService {
  tasks: WritableSignal<ITask[]>;
  getTasks(): Promise<ITaskResponse>;
  addTask(task: ITask | null): Promise<ITaskResponse>;
  deleteTask(id: number): void;
  updateTask(id: number, task: ITask): void;
}
