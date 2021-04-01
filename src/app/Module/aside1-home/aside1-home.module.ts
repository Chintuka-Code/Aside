import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aside1HomeRoutingModule } from './aside1-home-routing.module';
import { Home1AsideComponent } from '../../component/home1-aside/home1-aside.component';
@NgModule({
  declarations: [Home1AsideComponent],
  imports: [CommonModule, Aside1HomeRoutingModule],
})
export class Aside1HomeModule {}
