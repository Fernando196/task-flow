import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../core/services/task-service';
import { StatusTask } from '../../core/enums/StatusTask.enum';
@Component({
  selector: 'app-task-flow-view',
  standalone: false,
  templateUrl: './task-flow-view.html',
  styleUrl: './task-flow-view.css',
})
export class TaskFlowView {
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
