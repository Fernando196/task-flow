import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  inject,
} from '@angular/core';
import { ModalService } from '../../../services/modal';

@Component({
  selector: 'app-modal-container',
  standalone: false,
  templateUrl: './modal-container.html',
})
export class ModalContainer implements AfterViewInit {
  @ViewChild('modalHost', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  private modalService = inject(ModalService);

  ngAfterViewInit() {
    this.modalService.registerContainer(this);
  }

  clear() {
    this.viewContainer.clear();
  }
}
