import { Component } from '@angular/core';
import { PhoneTypeList } from "../../shared/constants/values";
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  phoneTypeList: Array<any> = PhoneTypeList;
  chosenPhoneType: any;

  constructor(private location: Location, private router: Router,  private authService: AuthService) {
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


  register() {
    if(this.registerForm.get('lastname')?.value && this.registerForm.get('firstname')?.value &&
      this.registerForm.get('email')?.value && this.registerForm.get('password')?.value &&
      this.registerForm.get('passwordconfirm')?.value && this.registerForm.get('phonenumber')?.value &&
      this.registerForm.get('address')?.value) {

      if(this.registerForm.get('password')?.value === this.registerForm.get('passwordconfirm')?.value) {
        this.authService.register(String(this.registerForm.get('email')?.value),
          String(this.registerForm.get('password')?.value)).then(cred => {
          console.log(cred);
          this.router.navigateByUrl('/home');
        }).catch(error => {
          console.error(error);
        });
      }
      else {
        console.error('Nem egyeznek a jelszavak!');
      }
    }
    else {
      console.error('Minden mező kitöltése kötelező!');
    }
  }

  goBack() {
    this.location.back();
  }
}
