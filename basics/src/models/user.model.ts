import { Address } from "./address.model";

export class User { //STEP-4
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.address = new Address();
  }
}
