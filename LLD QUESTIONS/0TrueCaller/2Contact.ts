import PhoneNumber from "./1PhoneNumber";

class Contact {
  name: string;
  phoneNumber: PhoneNumber;
  email: string;
  address: string;
  constructor(
    name: string,
    phoneNumber: PhoneNumber,
    email: string,
    address: string
  ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.address = address;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setAddress(address: string) {
    this.address = address;
  }
  getName(): string {
    return this.name;
  }
  getPhoneNumber(): PhoneNumber {
    return this.phoneNumber;
  }
}

export default Contact;
