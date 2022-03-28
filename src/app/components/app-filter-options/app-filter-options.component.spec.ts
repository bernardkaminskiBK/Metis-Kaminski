import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterOptionsComponent } from './app-filter-options.component';

describe('AppFilterOptionsComponent', () => {
  let component: AppFilterOptionsComponent;
  let fixture: ComponentFixture<AppFilterOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFilterOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
