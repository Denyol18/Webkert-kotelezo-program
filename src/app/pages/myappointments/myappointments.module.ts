import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyappointmentsRoutingModule } from './myappointments-routing.module';
import {MyappointmentsComponent} from "./myappointments.component";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MyappointmentsComponent
  ],
    imports: [
        CommonModule,
        MyappointmentsRoutingModule,
        MatButtonModule
    ]
})
export class MyappointmentsModule { }
