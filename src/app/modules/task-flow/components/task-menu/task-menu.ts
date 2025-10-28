import { Component, output } from '@angular/core';

@Component({
  selector: 'app-task-menu',
  standalone: false,
  templateUrl: './task-menu.html',
  styleUrl: './task-menu.css',
})
export class TaskMenu {
  onClickOption = output<string>();
}
