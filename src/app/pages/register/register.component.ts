import { Component } from '@angular/core';
import { PhoneTypeList } from "../../shared/constants/values";
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  phoneTypeList: Array<any> = PhoneTypeList;
  chosenPhoneType: any;

  constructor(private location: Location, private router: Router) {
    this.chosenPhoneType = this.phoneTypeList[0];
  }

  registerForm = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordconfirm: new FormControl(''),
    phonenumber: new FormControl(''),
    phonetype: new FormControl(''),
    address: new FormControl('')
  });


  onSubmit() {
    if(this.registerForm.get('lastname')?.value && this.registerForm.get('firstname')?.value &&
      this.registerForm.get('email')?.value && this.registerForm.get('password')?.value &&
      this.registerForm.get('passwordconfirm')?.value && this.registerForm.get('phonenumber')?.value &&
      this.registerForm.get('address')?.value) {

      if(this.registerForm.get('password')?.value === this.registerForm.get('passwordconfirm')?.value) {
        console.log(this.registerForm.value);
        this.router.navigateByUrl('/home');
      }
      else {
        console.error('no bueno passwordo');
      }
    }
    else {
      console.error('no bueno');
    }
  }

  goBack() {
    this.location.back();
  }
}
