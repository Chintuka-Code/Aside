import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1AsideComponent } from '../../component/home1-aside/home1-aside.component';

const routes: Routes = [{ path: '', component: Home1AsideComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aside1HomeRoutingModule {}
