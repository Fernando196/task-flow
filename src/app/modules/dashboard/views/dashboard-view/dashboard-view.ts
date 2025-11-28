import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { TaskService } from '../../../task-flow/core/services/task-service';
import { DateRange } from '../../components/date-filter/date-filter';

@Component({
  selector: 'app-dashboard-view',
  standalone: false,
  templateUrl: './dashboard-view.html',
  styleUrl: './dashboard-view.css',
})
export class DashboardView implements OnInit {
  private taskService = inject(TaskService);
  selectedDateRange = signal<DateRange>({ label: 'Todas', value: 'all' });

  filteredTasks = computed(() => {
    const range = this.selectedDateRange();
    const allTasks = this.taskService.tasks();

    if (range.value === 'all' || !range.days) {
      return allTasks;
    }

    const now = new Date();
    const cutoffDate = new Date();
    cutoffDate.setDate(now.getDate() - range.days);

    return allTasks.filter((task) => {
      const taskDate = new Date(task.createdDate);
      return taskDate >= cutoffDate;
    });
  });

  totalTasks = computed(() => this.filteredTasks().length);
  completedTasks = computed(
    () => this.filteredTasks().filter((t) => t.completed).length
  );
  pendingTasks = computed(() => this.totalTasks() - this.completedTasks());
  highPriorityTasks = computed(
    () => this.filteredTasks().filter((t) => t.priority?.name === 'High').length
  );

  ngOnInit() {
    this.taskService.getTasks();
  }

  handleFilterChange(range: DateRange) {
    this.selectedDateRange.set(range);
  }
}
