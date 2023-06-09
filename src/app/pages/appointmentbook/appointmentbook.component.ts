import {Component, OnInit} from '@angular/core';
import { DeviceList } from "../../shared/constants/values";
import {FormControl, FormGroup, UntypedFormControl} from "@angular/forms";
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
  datetime?: string;
  dateString?: string;

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
    date: new UntypedFormControl(''),
    time: new FormControl(''),
    description: new FormControl('')
  })


  bookAppointment() {
    if(this.appointmentForm.get('date')?.value &&
      this.appointmentForm.get('time')?.value && this.appointmentForm.get('description')?.value) {

      this.dateString = new Date(this.appointmentForm.get('date')?.value).toDateString();

      this.datetime = this.dateString + ' '
        + this.appointmentForm.get('time')?.value

      console.log(this.appointmentForm.value);

      const appointmentToStore: Appointment = {
        id: '',
        user: this.user as User,
        device: this.appointmentForm.get('device')?.value as string,
        date: this.datetime,
        description: this.appointmentForm.get('description')?.value as string
      }

      this.appointmentService.create(appointmentToStore).then(_ => {
        alert('Új időpont rögzítve!');
      }).catch(error => {
        alert(error);
      });

      this.router.navigateByUrl('/myappointments');
    }
    else {
      alert('Minden mező kitöltése kötelező!');
    }
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
