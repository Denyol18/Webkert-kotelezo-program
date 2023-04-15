import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });


  login() {
    if(this.loginForm.get('email')?.value && this.loginForm.get('password')?.value) {
      this.authService.login(String(this.loginForm.get('email')?.value),
        String(this.loginForm.get('password')?.value)).then(cred => {
        console.log(cred);
        this.authService.isUserLoggedIn().subscribe(user => {
          this.loggedInUser = user;
          localStorage.setItem('user', JSON.stringify(this.loggedInUser));
          this.router.navigateByUrl('/home');
        }, error => {
          console.error(error);
          localStorage.setItem('user', JSON.stringify('null'));
        });
      }).catch(error => {
        console.error(error);
      });
    }
    else {
      console.error('Minden mező kitöltése kötelező!');
    }
  }

}
