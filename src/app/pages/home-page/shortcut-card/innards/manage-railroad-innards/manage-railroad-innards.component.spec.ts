import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRailroadInnardsComponent } from './manage-railroad-innards.component';

describe('ManageRailroadInnardsComponent', () => {
  let component: ManageRailroadInnardsComponent;
  let fixture: ComponentFixture<ManageRailroadInnardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRailroadInnardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRailroadInnardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
