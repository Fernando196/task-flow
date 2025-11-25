import { Component } from '@angular/core';
import { MenuOption } from '../../core/interfaces/menuOptions.interface';

@Component({
  selector: 'app-sidebar-menu',
  standalone: false,
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css',
})
export class SideBarMenu {
  optionsMenu: MenuOption[] = [
    { id: 1, label: 'Dashboard', route: '/', icon: 'dashboard' },
    { id: 2, label: 'Road Map', route: '/road-map', icon: 'table_chart' },
    { id: 3, label: 'Users', route: '/users', icon: 'groups' },
    { id: 4, label: 'Help', route: '/help', icon: 'help' },
  ];

  constructor() {}
}
