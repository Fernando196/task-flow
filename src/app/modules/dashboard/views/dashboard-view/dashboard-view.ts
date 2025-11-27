import { Component, computed, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../task-flow/core/services/task-service';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css',
})
export class DashboardView implements OnInit {
  private taskService = inject(TaskService);

  totalTasks = computed(() => this.taskService.tasks().length);
  completedTasks = computed(
    () => this.taskService.tasks().filter((t) => t.completed).length
  );
  pendingTasks = computed(() => this.totalTasks() - this.completedTasks());
  highPriorityTasks = computed(
    () =>
      this.taskService.tasks().filter((t) => t.priority?.name === 'High').length
  );

  ngOnInit() {
    this.taskService.getTasks();
  }
}
