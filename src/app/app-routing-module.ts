import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './modules/main/layouts/main-layout/main-layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    loadChildren: () =>
      import('./modules/main/main-module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
