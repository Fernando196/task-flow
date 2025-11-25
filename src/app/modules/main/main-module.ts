import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing-module';
import { MainLayout } from './layouts/main-layout/main-layout';
import { SideBarMenu } from './components/sidebar-menu/sidebar-menu';
import { Navbar } from './components/navbar/navbar';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [MainLayout, SideBarMenu, Navbar],
  imports: [CommonModule, MainRoutingModule, MatIcon],
})
export class MainModule {}
