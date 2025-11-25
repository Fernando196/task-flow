import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardView } from '../dashboard/views/dashboard-view/dashboard-view';

const routes: Routes = [
  {
    path: 'road-map',
    loadChildren: () =>
      import('../task-flow/task-flow-module').then((m) => m.TaskFlowModule),
  },
  {
    path: 'dashboard',
    component: DashboardView,
    loadChildren: () =>
      import('../dashboard/dashboard-module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
