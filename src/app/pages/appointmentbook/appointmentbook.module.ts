import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentbookRoutingModule } from './appointmentbook-routing.module';
import {AppointmentbookComponent} from "./appointmentbook.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {NgxMatTimepickerModule} from "ngx-mat-timepicker";


@NgModule({
  declarations: [
    AppointmentbookComponent
  ],
  imports: [
    CommonModule,
    AppointmentbookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule
  ]
})
export class AppointmentbookModule { }
