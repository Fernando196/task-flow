import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFlowView } from './views/task-flow-view/task-flow-view';

const routes: Routes = [
  {
    path: '',
    component: TaskFlowView,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskFlowRoutingModule {}
