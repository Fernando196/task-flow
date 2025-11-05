import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { API_URL } from '../../../config/config';
import { ITaskResponse } from '../interfaces/ITaskReponse.interface';
import { ITaskService } from './iservices/task-service.interface';
import { ITask } from '../interfaces/ITask.interface';
import { mockTasks } from '../../../data/data';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements ITaskService {
  tasks = signal<ITask[]>([]);

  constructor(private _http: HttpClient) {}

  completedTasks(id: number) {
    this.tasks.update((tasks) => {
      return tasks.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          completed: true,
        };
      });
    });
  }

  getLastTaskId(): number {
    return this.tasks().length > 0
      ? Math.max(...this.tasks().map((t) => t.id))
      : 0;
  }

  addTask(task: ITask) {
    const lastId = this.getLastTaskId();
    task.id = lastId + 1;
    this.tasks.update((tasks) => [...tasks, task]);
  }
  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
  }
  updateTask(id: number, updateTask: ITask) {
    this.tasks.update((tasks) => {
      return tasks.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          ...updateTask,
        };
      });
    });
  }
  getTasks() {
    this.tasks.set(mockTasks);
  }
}
