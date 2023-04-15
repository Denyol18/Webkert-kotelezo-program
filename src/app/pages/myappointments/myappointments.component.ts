import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../shared/models/Appointment";
import {AppointmentService} from "../../shared/services/appointment.service";

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.scss']
})
export class MyappointmentsComponent implements OnInit{
  appointments: Array<Appointment> = [];

  constructor(private appointmentService: AppointmentService) {
  }

  ngOnInit() {
    this.appointmentService.getAll().subscribe(data => {
      this.appointments = data;
    });
  }

}
