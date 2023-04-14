import { Component } from '@angular/core';
import { PhoneTypeList } from "../../shared/constants/values";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  phoneTypeList: Array<any> = PhoneTypeList;
  chosenPhoneType: any;

  constructor() {
    this.chosenPhoneType = this.phoneTypeList[0];
  }
}
