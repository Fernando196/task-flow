import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFlowRoutingModule } from './task-flow-routing-module';
import { TaskFlowLayout } from './layouts/task-flow-layout/task-flow-layout';
import { TaskItem } from './components/task-item/task-item';
import { TaskList } from './components/task-list/task-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TaskForm } from './components/task-form/task-form';
import { DialogModule } from '@angular/cdk/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [TaskFlowLayout, TaskItem, TaskList, TaskForm],
  imports: [
    CommonModule,
    TaskFlowRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    DialogModule,
    MatSnackBarModule,
  ],
})
export class TaskFlowModule {}
