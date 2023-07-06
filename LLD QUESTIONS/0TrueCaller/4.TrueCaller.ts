import PhoneNumber from "./1PhoneNumber";
import PhoneBook from "./3Phonebook";

export default class TrueCaller {
  phoneBook: PhoneBook;
  blockedNumber: PhoneNumber[];
  constructor(phoneBook: PhoneBook) {
    this.phoneBook = phoneBook;
    this.blockedNumber = [];
  }
  private removeElementsFromArray<T>(
    array: T[],
    elementsToRemoveFromArray: T
  ): T[] {
    return array.filter((element) => element != elementsToRemoveFromArray);
  }
  makeCall(phoneNumber: PhoneNumber): void {
    if (this.blockedNumber.includes(phoneNumber)) {
      console.log(`The number ${phoneNumber} is blocked by you`);
    } else {
      const searchResult = this.phoneBook.searchContacts(phoneNumber);
      if (searchResult.length > 0) {
        console.log(`Calling the number ${searchResult[0].name}`);
      } else {
        console.log(`Calling the number ${phoneNumber.phoneNumber}`);
      }
    }
    return;
  }
  blockNumber(numberToBlock: PhoneNumber): void {
    this.blockedNumber.push(numberToBlock);
  }
  unblockNumber(numberToBlock: PhoneNumber): void {
    this.blockedNumber = this.removeElementsFromArray(
      this.blockedNumber,
      numberToBlock
    );
  }
}
