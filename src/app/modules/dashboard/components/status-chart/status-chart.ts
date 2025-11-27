import { Component, computed, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../task-flow/core/services/task-service';
import { StatusTask } from '../../../task-flow/core/enums/StatusTask.enum';

@Component({
  selector: 'app-status-chart',
  standalone: false,
  templateUrl: './status-chart.html',
  styleUrl: './status-chart.css',
})
export class StatusChart implements OnInit {
  private taskService = inject(TaskService);

  statusData = computed(() => {
    const tasks = this.taskService.tasks();
    const statusCount = new Map<string, number>();

    // Inicializar todos los estados con 0
    Object.values(StatusTask).forEach((status) => {
      statusCount.set(status, 0);
    });

    // Contar tareas por estado
    tasks.forEach((task) => {
      const currentCount = statusCount.get(task.statusId) || 0;
      statusCount.set(task.statusId, currentCount + 1);
    });

    return Array.from(statusCount.entries()).map(([status, count]) => ({
      status,
      count,
      percentage: tasks.length > 0 ? (count / tasks.length) * 100 : 0,
    }));
  });

  maxCount = computed(() => {
    const counts = this.statusData().map((d) => d.count);
    return Math.max(...counts, 1);
  });

  ngOnInit() {
    this.taskService.getTasks();
  }

  getBarHeight(count: number): number {
    return (count / this.maxCount()) * 100;
  }

  getStatusColor(status: string): string {
    const colors: Record<string, string> = {
      TODO: 'bg-blue-500',
      'IN PROGRESS': 'bg-yellow-500',
      COMPLETED: 'bg-green-500',
      'IN REVIEW': 'bg-purple-500',
      ARCHIVED: 'bg-gray-500',
    };
    return colors[status] || 'bg-gray-400';
  }
}
