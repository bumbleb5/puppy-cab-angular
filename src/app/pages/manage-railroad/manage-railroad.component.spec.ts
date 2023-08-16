import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRailroadComponent } from './manage-railroad.component';

describe('ManageRailroadComponent', () => {
  let component: ManageRailroadComponent;
  let fixture: ComponentFixture<ManageRailroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRailroadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRailroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
