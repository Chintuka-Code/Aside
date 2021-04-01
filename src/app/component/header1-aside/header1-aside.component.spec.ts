import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header1AsideComponent } from './header1-aside.component';

describe('Header1AsideComponent', () => {
  let component: Header1AsideComponent;
  let fixture: ComponentFixture<Header1AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Header1AsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Header1AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
