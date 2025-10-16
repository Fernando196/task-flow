import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFlowLayout } from './layouts/task-flow-layout/task-flow-layout';

const routes: Routes = [
  {
    path: '',
    component: TaskFlowLayout,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskFlowRoutingModule {}
