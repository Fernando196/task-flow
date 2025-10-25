import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/ITask.interface';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: ITask;
  @Output() onComplete = new EventEmitter<number>();
}
