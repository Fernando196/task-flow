import { Observable } from 'rxjs';
import { ITaskResponse } from '../../interfaces/ITaskReponse.interface';
import { WritableSignal } from '@angular/core';
import { ITask } from '../../interfaces/ITask.interface';

export interface ITaskService {
  tasks: WritableSignal<ITask[]>;
  getTasks(): void;
  addTask(task: ITask | null): void;
  deleteTask(id: number): void;
  updateTask(id: number, task: ITask): void;
}
