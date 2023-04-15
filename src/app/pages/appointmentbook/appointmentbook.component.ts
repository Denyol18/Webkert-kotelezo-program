import {Component, OnInit} from '@angular/core';
import { DeviceList } from "../../shared/constants/values";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Appointment} from "../../shared/models/Appointment";
import {AuthService} from "../../shared/services/auth.service";
import {AppointmentService} from "../../shared/services/appointment.service";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";

@Component({
  selector: 'app-appointmentbook',
  templateUrl: './appointmentbook.component.html',
  styleUrls: ['./appointmentbook.component.scss']
})
export class AppointmentbookComponent implements OnInit{

  deviceList: Array<any> = DeviceList;
  chosenDevice: any;
  user?: User;

  constructor(private authService: AuthService,
              private router: Router,
              private appointmentService: AppointmentService,
              private userService: UserService) {
    this.chosenDevice = this.deviceList[0];

  }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
    });
  }

  appointmentForm = new FormGroup({
    device: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl('')
  })

  bookAppointment() {
    if(this.appointmentForm.get('date')?.value &&
      this.appointmentForm.get('description')?.value) {

      console.log(this.appointmentForm.value);

      const appointmentToStore: Appointment = {
        id: '',
        user: this.user as User,
        device: this.appointmentForm.get('device')?.value as string,
        date: this.appointmentForm.get('date')?.value as unknown as Date,
        description: this.appointmentForm.get('description')?.value as string
      }

      this.appointmentService.create(appointmentToStore).then(_ => {
        console.log('Appointment added.');
      }).catch(error => {
        console.error(error);
      });

      this.router.navigateByUrl('/myappointments');
    }
    else {
      console.error('Minden mezo kotelezo');
    }
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
