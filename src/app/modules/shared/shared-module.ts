import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapIcon } from './components/icon/map-icon/map-icon';
import { IconMenu } from './components/icon/icon-menu/icon-menu';
import { ModalContainer } from './components/modal/modal-container/modal-container';
import { IconClose } from './components/icon/icon-close/icon-close';

@NgModule({
  declarations: [MapIcon, IconMenu, ModalContainer, IconClose],
  exports: [MapIcon,ModalContainer],
  imports: [CommonModule],
})
export class SharedModule {}
