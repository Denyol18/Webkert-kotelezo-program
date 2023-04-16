import {User} from "./User";

export interface Appointment {
  id: string;
  user: User;
  device: string;
  date: string;
  description: string;
}
