import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import {ContactsComponent} from "./contacts.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ContactsComponent
  ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        MatButtonModule
    ]
})
export class ContactsModule { }
