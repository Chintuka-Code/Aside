import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer1AsideComponent } from './footer1-aside.component';

describe('Footer1AsideComponent', () => {
  let component: Footer1AsideComponent;
  let fixture: ComponentFixture<Footer1AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Footer1AsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer1AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
