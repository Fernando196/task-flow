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

  async addTask(task: ITask | null) {
    return await firstValueFrom(
      this._http.post<ITaskResponse>(`${API_URL}/tasks`, task)
    );
  }
  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((t) => t.id !== id));
    // return await firstValueFrom(
    //   this._http.delete<ITaskResponse>(`${API_URL}/tasks/${id}`)
    // );
  }
  async updateTask(id: number, updateTask: ITask) {
    const completedChange = this.tasks().find((t) => t.id === id);
    if (
      completedChange &&
      JSON.stringify(completedChange) !== JSON.stringify(updateTask)
    ) {
      await firstValueFrom(
        this._http.put<ITaskResponse>(`${API_URL}/tasks/${id}`, updateTask)
      );
    }

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
  getTasks() {
    this.tasks.set(mockTasks);
  }
}
