import { Component } from '@angular/core';
import { DeviceList } from "../../shared/constants/values";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appointmentbook',
  templateUrl: './appointmentbook.component.html',
  styleUrls: ['./appointmentbook.component.scss']
})
export class AppointmentbookComponent {
  deviceList: Array<any> = DeviceList;
  chosenDevice: any;

  constructor(private router: Router) {
    this.chosenDevice = this.deviceList[0];
  }

  appointmentForm = new FormGroup({
    device: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl('')
  })

  onSubmit() {
    if(this.appointmentForm.get('date')?.value &&
      this.appointmentForm.get('description')?.value) {
      console.log(this.appointmentForm.value);
      this.router.navigateByUrl('/myappointments');
    }
    else {
      console.error('no bueno');
    }
  }
}
