import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
    }, error => {
      console.error(error);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Kijelentkezes megtortent.');
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error(error);
    });
  }
}
