import {User} from "./User";

export interface Appointment {
  id: string;
  user: User;
  device: string;
  date: Date;
  description: string;
}
