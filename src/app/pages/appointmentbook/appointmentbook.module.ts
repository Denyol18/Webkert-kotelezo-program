import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentbookRoutingModule } from './appointmentbook-routing.module';
import {AppointmentbookComponent} from "./appointmentbook.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppointmentbookComponent
  ],
  imports: [
    CommonModule,
    AppointmentbookRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppointmentbookModule { }
