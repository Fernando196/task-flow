import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { ITaskResponse } from '../../interfaces/ITaskReponse.interface';
import { firstValueFrom } from 'rxjs';
import { ITask } from '../../interfaces/ITask.interface';
@Component({
  selector: 'app-task-flow-layout',
  standalone: false,
  templateUrl: './task-flow-layout.html',
  styleUrl: './task-flow-layout.css',
})
export class TaskFlowLayout {
  isLoading = signal<boolean>(false);
  taskService: TaskService = inject(TaskService);

  taskCompleted = computed(
    () => this.taskService.tasks().filter((t) => t.completed).length
  );

  constructor() {
    this.getTaks();
  }

  async getTaks() {
    try {
      this.isLoading.set(true);
      const { data, count, succes } = await this.taskService.getTasks();
      this.taskService.tasks.set(data as ITask[]);
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoading.set(false);
    }
  }
}
