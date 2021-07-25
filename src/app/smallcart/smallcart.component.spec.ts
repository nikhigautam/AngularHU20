import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcartComponent } from './smallcart.component';

describe('SmallcartComponent', () => {
  let component: SmallcartComponent;
  let fixture: ComponentFixture<SmallcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
