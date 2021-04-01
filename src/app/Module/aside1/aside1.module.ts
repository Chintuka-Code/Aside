import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aside1RoutingModule } from './aside1-routing.module';
import { Header1AsideComponent } from '../../component/header1-aside/header1-aside.component';
import { Footer1AsideComponent } from '../../component/footer1-aside/footer1-aside.component';
import { Main1AsideComponent } from '../../component/main1-aside/main1-aside.component';
import { Aside1Component } from '../../component/aside1/aside1.component';

@NgModule({
  declarations: [
    Header1AsideComponent,
    Footer1AsideComponent,
    Main1AsideComponent,
    Aside1Component,
  ],
  imports: [CommonModule, Aside1RoutingModule],
})
export class Aside1Module {}
