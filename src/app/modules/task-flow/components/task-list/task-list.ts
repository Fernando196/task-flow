import { Component, computed, inject, Input } from '@angular/core';
import { TaskService } from '../../core/services/task-service';
import { ITask } from '../../core/interfaces/ITask.interface';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() status: string = '';
  taskService = inject(TaskService);

  tasks = computed<ITask[]>(() =>
    this.taskService.tasks().filter((t) => t.statusId === this.status)
  );

  taskCount = computed(() => this.tasks().length);

  highPriorityTasks = computed(() => {
    return this.tasks().filter((t) => t.priority?.name === 'high').length;
  });
}
