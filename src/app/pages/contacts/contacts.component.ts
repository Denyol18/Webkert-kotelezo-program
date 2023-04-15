import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  constructor(private router: Router) {
  }

  backToHome() {
    this.router.navigateByUrl('/home');
  }
}
