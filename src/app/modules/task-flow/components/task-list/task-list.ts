import { Component, computed, inject } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  icompletedTasks = computed(() =>
    this.taskService.tasks().filter((t) => !t.completed)
  );
  taskService: TaskService = inject(TaskService);

  async handleChangeTask(task: ITask | null = null) {
    this.taskService.addTask(task);
  }

  trackById(index: number, task: ITask) {
    return task.id;
  }

  async completedTask(id: number) {
    try {
      const task = this.icompletedTasks().find((t) => t.id === id);
      if (task) {
        const updateTask = { ...task };
        updateTask.completed = true;
        await this.taskService.updateTask(id, updateTask);
      }
    } catch (err) {
      console.log(err);
    }
  }
}
