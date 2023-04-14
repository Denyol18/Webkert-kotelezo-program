import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentbookComponent } from './pages/appointmentbook/appointmentbook.component';
import { MyappointmentsComponent } from './pages/myappointments/myappointments.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from "@angular/forms";
import { MenuBeforeAuthComponent } from './shared/menu-before-auth/menu-before-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactsComponent,
    HomeComponent,
    AppointmentbookComponent,
    MyappointmentsComponent,
    MenuComponent,
    MenuBeforeAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
