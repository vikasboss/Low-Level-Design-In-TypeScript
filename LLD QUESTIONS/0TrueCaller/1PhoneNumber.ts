class PhoneNumber {
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
  constructor(countrycode: string, areacode: string, phonenumber: string) {
    this.countryCode = countrycode;
    this.areaCode = areacode;
    this.phoneNumber = phonenumber;
  }
  getFormattedNumber(): string {
    return (
      "+" + this.countryCode + " " + this.areaCode + " " + this.phoneNumber
    );
    //we can have additional method also
  }
}

export default PhoneNumber;
