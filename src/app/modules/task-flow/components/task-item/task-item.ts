import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  inject,
  computed,
  HostListener,
} from '@angular/core';
import { ITask } from '../../interfaces/ITask.interface';
import { TaskMenuService } from '../../services/task-menu-service';

@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {
  @Input() task!: ITask;
  @Output() onComplete = new EventEmitter<number>();

  private taskMenuService = inject(TaskMenuService);

  // Computed que indica si este menú específico está abierto
  isMenuOpen = computed(() =>
    this.taskMenuService.isMenuOpen(this.task?.id || 0)
  );

  toggleMenu(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (this.task?.id) {
      this.taskMenuService.toggleMenu(this.task.id);
    }
  }

  handleChangeOption(option: string) {
    // Cerrar el menú al seleccionar una opción
    this.taskMenuService.closeMenu();

    // Aquí puedes manejar las diferentes opciones
    switch (option) {
      case 'complete':
        this.onComplete.emit(this.task.id);
        break;
      case 'edit':
        // Lógica para editar
        break;
      case 'delete':
        // Lógica para eliminar
        break;
      default:
        break;
    }
  }

  // Listener global para cerrar menús al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    // Solo procesar si hay algún menú abierto
    const currentOpenMenuId = this.taskMenuService.getCurrentOpenMenuId();
    if (currentOpenMenuId !== null) {
      const target = event.target as HTMLElement;
      const menuElement = target.closest('.task-menu-container');
      const buttonElement = target.closest('[data-menu-button]');

      // Si no se hizo clic en un menú o botón de menú, cerrar todos los menús
      if (!menuElement && !buttonElement) {
        this.taskMenuService.closeMenu();
      }
    }
  }
}
