import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppointmentbookComponent} from "./appointmentbook.component";

const routes: Routes = [
  { path: '', component: AppointmentbookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentbookRoutingModule { }
