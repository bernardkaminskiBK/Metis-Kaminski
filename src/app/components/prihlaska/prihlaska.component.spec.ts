import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrihlaskaComponent } from './prihlaska.component';

describe('PrihlaskaComponent', () => {
  let component: PrihlaskaComponent;
  let fixture: ComponentFixture<PrihlaskaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrihlaskaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrihlaskaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
