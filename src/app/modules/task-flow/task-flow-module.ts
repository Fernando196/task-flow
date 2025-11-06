import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFlowRoutingModule } from './task-flow-routing-module';
import { TaskFlowView } from './views/task-flow-view/task-flow-view';
import { TaskItem } from './components/task-item/task-item';
import { TaskList } from './components/task-list/task-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TaskForm } from './components/task-form/task-form';
import { DialogModule } from '@angular/cdk/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TaskMenu } from './components/task-menu/task-menu';
import { SharedModule } from '../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskFlowView, TaskItem, TaskList, TaskForm, TaskMenu],
  imports: [
    CommonModule,
    TaskFlowRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    DialogModule,
    MatSnackBarModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class TaskFlowModule {}
