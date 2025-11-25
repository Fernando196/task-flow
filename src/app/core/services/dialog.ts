import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class Dialog {
  constructor(private matSnackbar: MatSnackBar) {}

  showSnackbar(message: string, action: string, type: string = 'done') {
    return this.matSnackbar.open(message, action, {
      duration: 6000,
      panelClass: [`snackbar-${type}`],
    });
  }
}
