import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyappointmentsRoutingModule } from './myappointments-routing.module';
import {MyappointmentsComponent} from "./myappointments.component";


@NgModule({
  declarations: [
    MyappointmentsComponent
  ],
  imports: [
    CommonModule,
    MyappointmentsRoutingModule
  ]
})
export class MyappointmentsModule { }
