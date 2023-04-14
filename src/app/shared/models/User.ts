export class User {
  lastname: string;
  firstname: string;
  email: string;
  phonenumber: string;
  phonetype: string;
  address: string;

  constructor(lastname: string, firstname: string, email: string, phonenumber: string, phonetype: string, address: string) {
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.phonetype = phonetype;
    this.address = address;
  }
}
