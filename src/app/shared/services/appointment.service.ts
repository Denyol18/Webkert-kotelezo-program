import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import firebase from 'firebase/compat/app';
import {Appointment} from "../models/Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  collectionName = 'Appointments';
  fieldPath = new firebase.firestore.FieldPath('user', 'id')

  constructor(private afs: AngularFirestore) {
  }

  create(appointment: Appointment) {
    appointment.id = this.afs.createId();
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).set(appointment);
  }

  getByUserId(userId: string) {
    return this.afs.collection<Appointment>(this.collectionName, ref =>
      ref.where(this.fieldPath, '==', userId)).valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<Appointment>(this.collectionName).doc(id).delete();
  }

  update(appointment: Appointment) {
    return this.afs.collection<Appointment>(this.collectionName).doc(appointment.id).update(
      {description:'[SÜRGŐS] ' + appointment.description});
  }
}
