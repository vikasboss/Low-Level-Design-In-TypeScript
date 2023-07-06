import PhoneNumber from "./1PhoneNumber";
import Contact from "./2Contact";

export default class PhoneBook {
  contacts: Contact[];
  constructor() {
    this.contacts = [];
  }
  private removeElementsFromArray<T>(
    array: T[],
    elementsToRemoveFromArray: T
  ): T[] {
    return array.filter((element) => element != elementsToRemoveFromArray);
  }

  addContacts(newContact: Contact) {
    this.contacts.push(newContact);
  }
  removeContacts(removableContact: Contact) {
    this.contacts = this.removeElementsFromArray(
      this.contacts,
      removableContact
    );
  }
  searchContacts(contactToSearch: PhoneNumber): Contact[] {
    return this.contacts.filter(
      (contact) => contact.getName() == contactToSearch.phoneNumber
    );
  }
}
