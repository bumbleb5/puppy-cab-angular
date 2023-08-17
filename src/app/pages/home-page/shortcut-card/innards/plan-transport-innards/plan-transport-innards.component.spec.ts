import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTransportInnardsComponent } from './plan-transport-innards.component';

describe('PlanTransportInnardsComponent', () => {
  let component: PlanTransportInnardsComponent;
  let fixture: ComponentFixture<PlanTransportInnardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTransportInnardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTransportInnardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
