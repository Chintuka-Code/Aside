import { Component, OnInit, ViewChild } from '@angular/core';
import { Aside1Component } from '../aside1/aside1.component';

@Component({
  selector: 'app-header1-aside',
  templateUrl: './header1-aside.component.html',
  styleUrls: ['./header1-aside.component.scss'],
})
export class Header1AsideComponent implements OnInit {
  @ViewChild(Aside1Component) aside: Aside1Component;
  active: boolean = false;
  constructor() {}

  show_Aside() {
    this.aside.is_aside_active = !this.aside.is_aside_active;
    this.active = this.aside.is_aside_active;
  }

  ngOnInit(): void {}
}
