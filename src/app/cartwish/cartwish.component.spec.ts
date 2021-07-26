import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartwishComponent } from './cartwish.component';

describe('CartwishComponent', () => {
  let component: CartwishComponent;
  let fixture: ComponentFixture<CartwishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartwishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
