import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskMenuService {
  private _openMenuId = signal<number | null>(null);

  get openMenuId() {
    return this._openMenuId.asReadonly();
  }

  toggleMenu(taskId: number) {
    if (this._openMenuId() === taskId) {
      this._openMenuId.set(null); // Cerrar el menú actual
    } else {
      this._openMenuId.set(taskId); // Abrir el nuevo menú y cerrar los demás automáticamente
    }
  }

  closeMenu() {
    this._openMenuId.set(null);
  }

  isMenuOpen(taskId: number): boolean {
    return this._openMenuId() === taskId;
  }

  // Método adicional para obtener el ID del menú abierto actual
  getCurrentOpenMenuId(): number | null {
    return this._openMenuId();
  }
}
