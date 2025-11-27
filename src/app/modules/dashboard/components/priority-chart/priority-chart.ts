import { Component, computed, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../task-flow/core/services/task-service';

@Component({
  selector: 'app-priority-chart',
  standalone: false,
  templateUrl: './priority-chart.html',
  styleUrl: './priority-chart.css',
})
export class PriorityChart implements OnInit {
  private taskService = inject(TaskService);

  priorityData = computed(() => {
    const tasks = this.taskService.tasks();
    const priorityCount = new Map<string, { count: number; color: string }>();

    // Contar tareas por prioridad
    tasks.forEach((task) => {
      if (task.priority) {
        const key = task.priority.name;
        const current = priorityCount.get(key) || {
          count: 0,
          color: task.priority.color,
        };
        priorityCount.set(key, {
          count: current.count + 1,
          color: task.priority.color,
        });
      }
    });

    const total = tasks.length;
    return Array.from(priorityCount.entries()).map(([name, data]) => ({
      name,
      count: data.count,
      color: data.color,
      percentage: total > 0 ? (data.count / total) * 100 : 0,
    }));
  });

  totalTasks = computed(() => this.taskService.tasks().length);

  ngOnInit() {
    this.taskService.getTasks();
  }

  // Calcular el offset para el círculo SVG
  getStrokeDashoffset(index: number): number {
    const circumference = 2 * Math.PI * 70; // radio = 70
    let offset = 0;

    for (let i = 0; i < index; i++) {
      offset += (this.priorityData()[i].percentage / 100) * circumference;
    }

    return -offset;
  }

  getStrokeDasharray(percentage: number): string {
    const circumference = 2 * Math.PI * 70;
    const dash = (percentage / 100) * circumference;
    return `${dash} ${circumference}`;
  }
}
