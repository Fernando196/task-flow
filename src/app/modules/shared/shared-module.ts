import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapIcon } from './components/icon/map-icon/map-icon';
import { IconMenu } from './components/icon/icon-menu/icon-menu';

@NgModule({
  declarations: [MapIcon, IconMenu],
  exports: [MapIcon],
  imports: [CommonModule],
})
export class SharedModule {}
