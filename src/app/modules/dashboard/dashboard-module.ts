import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardView } from './views/dashboard-view/dashboard-view';
import { StatusChart } from './components/status-chart/status-chart';
import { PriorityChart } from './components/priority-chart/priority-chart';
import { DateFilter } from './components/date-filter/date-filter';

@NgModule({
  declarations: [DashboardView, StatusChart, PriorityChart, DateFilter],
  imports: [CommonModule],
  exports: [DashboardView],
})
export class DashboardModule {}
