import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskMenuService {
  private _isMenuOpen: boolean = false;

  toggleMenu() {
    this._isMenuOpen = !this._isMenuOpen;
  }
}
