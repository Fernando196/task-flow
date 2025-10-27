import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { StatusTask } from '../../enums/StatusTask.enum';
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

  statusTask = signal<StatusTask[]>(Object.values(StatusTask));

  constructor() {
    this.taskService.getTasks();
  }
}
