import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyappointmentsComponent} from "./myappointments.component";

const routes: Routes = [
  { path: '', component: MyappointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyappointmentsRoutingModule { }
