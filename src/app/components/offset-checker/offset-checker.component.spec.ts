import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetCheckerComponent } from './offset-checker.component';

describe('OffsetCheckerComponent', () => {
  let component: OffsetCheckerComponent;
  let fixture: ComponentFixture<OffsetCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffsetCheckerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
