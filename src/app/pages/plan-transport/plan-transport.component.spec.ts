import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTransportComponent } from './plan-transport.component';

describe('PlanTransportComponent', () => {
  let component: PlanTransportComponent;
  let fixture: ComponentFixture<PlanTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
