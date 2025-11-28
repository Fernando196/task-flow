import { Component, output } from '@angular/core';

export interface DateRange {
  label: string;
  value: string;
  days?: number;
}

@Component({
  selector: 'app-date-filter',
  standalone: false,
  templateUrl: './date-filter.html',
  styleUrl: './date-filter.css',
})
export class DateFilter {
  onFilterChange = output<DateRange>();

  selectedFilter = 'all';

  dateRanges: DateRange[] = [
    { label: 'Todas', value: 'all' },
    { label: 'Hoy', value: 'today', days: 0 },
    { label: 'Esta Semana', value: 'week', days: 7 },
    { label: 'Este Mes', value: 'month', days: 30 },
    { label: 'Último Trimestre', value: 'quarter', days: 90 },
  ];

  selectFilter(filter: DateRange) {
    this.selectedFilter = filter.value;
    this.onFilterChange.emit(filter);
  }
}
