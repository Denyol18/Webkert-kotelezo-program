import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentbookComponent } from './appointmentbook.component';

describe('AppointmentbookComponent', () => {
  let component: AppointmentbookComponent;
  let fixture: ComponentFixture<AppointmentbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
