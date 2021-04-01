import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside1',
  templateUrl: './aside1.component.html',
  styleUrls: ['./aside1.component.scss'],
})
export class Aside1Component implements OnInit {
  is_aside_active: boolean = false;
  constructor() {}

  hide() {
    this.is_aside_active = !this.is_aside_active;
  }

  ngOnInit(): void {
    console.log(this.is_aside_active);
  }
}
