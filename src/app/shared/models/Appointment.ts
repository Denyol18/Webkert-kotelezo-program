import {User} from "./User";

export class Appointment {
  user: User;
  device: string;
  date: Date;
  description: string;

  constructor(user: User, device: string, date: Date, description: string) {
    this.user = user;
    this.device = device;
    this.date = date;
    this.description = description;
  }
}
