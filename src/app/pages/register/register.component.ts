import { Component } from '@angular/core';
import { PhoneTypeList } from "../../shared/constants/values";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {User} from  "../../shared/models/User";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  phoneTypeList: Array<any> = PhoneTypeList;
  chosenPhoneType: any;

  constructor(private router: Router, private authService: AuthService,
              private userService: UserService) {
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


  async register() {
    if(this.registerForm.get('lastname')?.value && this.registerForm.get('firstname')?.value &&
      this.registerForm.get('email')?.value && this.registerForm.get('password')?.value &&
      this.registerForm.get('passwordconfirm')?.value && this.registerForm.get('phonenumber')?.value &&
      this.registerForm.get('address')?.value) {

      if(this.registerForm.get('password')?.value === this.registerForm.get('passwordconfirm')?.value) {
        this.authService.register(String(this.registerForm.get('email')?.value),
          String(this.registerForm.get('password')?.value)).then(cred => {

          console.log(cred);

          const userToStore: User = {
            id: cred.user?.uid as string,
            lastname: this.registerForm.get('lastname')?.value as string,
            firstname: this.registerForm.get('firstname')?.value as string,
            email: this.registerForm.get('email')?.value as string,
            phonenumber: this.registerForm.get('phonenumber')?.value as string,
            phonetype: this.registerForm.get('phonetype')?.value as string,
            address: this.registerForm.get('address')?.value as string
          }

          this.userService.create(userToStore).then(_ => {
            console.log('User added.');
          }).catch(error => {
            console.error(error);
          });

          this.router.navigateByUrl('/login');

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

  backToLogin() {
    this.router.navigateByUrl('/login');
  }
}
