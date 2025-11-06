import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { MainLayout } from './layouts/main-layout/main-layout';

@NgModule({
  declarations: [MainLayout],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
