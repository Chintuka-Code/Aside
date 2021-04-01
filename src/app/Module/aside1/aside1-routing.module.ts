import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Main1AsideComponent } from '../../component/main1-aside/main1-aside.component';
const routes: Routes = [
  {
    path: '',
    component: Main1AsideComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../aside1-home/aside1-home.module').then(
            (m) => m.Aside1HomeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aside1RoutingModule {}
