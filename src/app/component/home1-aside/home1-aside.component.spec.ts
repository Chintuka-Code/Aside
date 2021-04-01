import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1AsideComponent } from './home1-aside.component';

describe('Home1AsideComponent', () => {
  let component: Home1AsideComponent;
  let fixture: ComponentFixture<Home1AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home1AsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home1AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
