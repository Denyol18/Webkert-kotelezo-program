import {User} from "./User";

export interface Appointment {
  user: User;
  device: string;
  date: string;
  description: string;
}
