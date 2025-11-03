import { Component, computed, inject, Input } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Dialog } from '@angular/cdk/dialog';
import { ITask } from '../../interfaces/ITask.interface';

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

  handleChangeOption(event: { option: string; id: number }) {
    if (event.option === 'delete') {
      this.taskService.deleteTask(event.id);
    }
  }

  taskCount = computed(() => this.tasks().length);

  highPriorityTasks = computed(() => {
    return this.tasks().filter((t) => t.priority?.name === 'high' ).length;
  });
}
