import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Appointment} from "../models/Appointment";
//import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  collectionName = 'Appointments';

  constructor(private afs: AngularFirestore) {
  }

  create(appointment: Appointment) {
    return this.afs.collection<Appointment>(this.collectionName).add(appointment);
  }

  getAll() {
    return this.afs.collection<Appointment>(this.collectionName).valueChanges();
  }
}
