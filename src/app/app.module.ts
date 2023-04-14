import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from './pages/login/login.component';
//import { RegisterComponent } from './pages/register/register.component';
//import { ContactsComponent } from './pages/contacts/contacts.component';
//import { HomeComponent } from './pages/home/home.component';
//import { AppointmentbookComponent } from './pages/appointmentbook/appointmentbook.component';
//import { MyappointmentsComponent } from './pages/myappointments/myappointments.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from "@angular/forms";
import { MenuBeforeAuthComponent } from './shared/menu-before-auth/menu-before-auth.component';
//import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
//import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //RegisterComponent,
    //ContactsComponent,
    //HomeComponent,
    //AppointmentbookComponent,
    //MyappointmentsComponent,
    MenuComponent,
    MenuBeforeAuthComponent,
    //NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
