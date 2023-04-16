import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../shared/models/Appointment";
import {AppointmentService} from "../../shared/services/appointment.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.scss']
})
export class MyappointmentsComponent implements OnInit{
  appointments: Array<Appointment> = [];
  user?: User;
  appointmentNumber?: number;

  constructor(private appointmentService: AppointmentService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.appointmentService.getByUserId(this.user?.id as string).subscribe(data => {
        this.appointments = data;
        this.appointmentNumber = this.appointments.length;
      });
    });
  }

  toUrgent(appointment: Appointment) {
    if(appointment.description.includes('[SÜRGŐS]')) {
      alert('Ez az időpont már megvan jelölve sürgősnek!');
    }
    else {
      this.appointmentService.update(appointment).then(_ => {
        alert('Sürgősség hozzáadva! Kollégáink a megadott időpont előtt felkeresik ez ügyben!');
      }).catch(error => {
        alert(error);
      });
    }
  }

  delete(appointment: Appointment) {
    this.appointmentService.delete(appointment.id).then(_ => {
      alert('Időpont törölve!');
    }).catch(error => {
      alert(error);
    });
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
