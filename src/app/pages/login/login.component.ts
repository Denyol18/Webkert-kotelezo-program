import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    if(this.loginForm.get('email')?.value && this.loginForm.get('password')?.value) {
      console.log(this.loginForm.value);
      this.router.navigateByUrl('/home');
    }
    else {
      console.error('no bueno');
    }
  }
}
