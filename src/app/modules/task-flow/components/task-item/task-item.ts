import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
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

  openMenu = signal<boolean>(false);

  toggleMenu() {
    this.openMenu.set(!this.openMenu());
  }

  handleChangeOption(option: string) {
    this.toggleMenu();
  }
}
