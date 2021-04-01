import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Main1AsideComponent } from './main1-aside.component';

describe('Main1AsideComponent', () => {
  let component: Main1AsideComponent;
  let fixture: ComponentFixture<Main1AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Main1AsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main1AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
