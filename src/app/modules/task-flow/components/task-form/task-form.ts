import { Component } from '@angular/core';
import { ModalRef } from '../../../shared/components/modal/modal-ref';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  constructor(public modalRef: ModalRef<TaskForm>) {}

  close() {
    this.modalRef.close('Some result data');
  }
}
