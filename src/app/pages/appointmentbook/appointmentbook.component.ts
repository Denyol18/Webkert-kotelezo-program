import { Component } from '@angular/core';
import { DeviceList } from "../../shared/constants/values";

@Component({
  selector: 'app-appointmentbook',
  templateUrl: './appointmentbook.component.html',
  styleUrls: ['./appointmentbook.component.scss']
})
export class AppointmentbookComponent {
  deviceList: Array<any> = DeviceList;
  chosenDevice: any;

  constructor() {
    this.chosenDevice = this.deviceList[0];
  }
}
