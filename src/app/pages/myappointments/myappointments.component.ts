import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../shared/models/Appointment";
import {AppointmentService} from "../../shared/services/appointment.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.scss']
})
export class MyappointmentsComponent implements OnInit{
  appointments: Array<Appointment> = [];
  user?: User;

  constructor(private appointmentService: AppointmentService,
              private userService: UserService) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.appointmentService.getByUserId(this.user?.id as string).subscribe(data => {
        this.appointments = data;
      });
    });
  }

  toUrgent(appointment: Appointment) {
    if(appointment.description.includes('[SÜRGŐS]')) {
      console.log('Ez az időpont már megvan jelölve sürgősnek!');
    }
    else {
      this.appointmentService.update(appointment).then(_ => {
        console.log('Appointment updated.');
      }).catch(error => {
        console.error(error);
      });
    }
  }

  delete(appointment: Appointment) {
    this.appointmentService.delete(appointment.id).then(_ => {
      console.log('Appointment deleted.');
    }).catch(error => {
      console.error(error);
    });
  }
}
