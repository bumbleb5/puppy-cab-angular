import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerLookupComponent } from './volunteer-lookup.component';

describe('VolunteerLookupComponent', () => {
  let component: VolunteerLookupComponent;
  let fixture: ComponentFixture<VolunteerLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerLookupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
