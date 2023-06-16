//Single Responsibilty principle
//A class should has only one reason to change

/*
class Marker {
  name;
  color;
  year;
  price;
  constructor(name, color, year, price) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.price = price;
  }
}
class Invoice {
  marker;
  quantity;
  constructor(marker, quantity) {
    this.marker = marker;
    this.quantity = quantity;
  }
  calculateTotal() {
    const price = this.marker.price * this.quantity;
    return price;
  }
  printInvoice() {
    console.log("Printing Ivnoices");
  }
  saveToDB() {
    console.log("Saving the data to DB");
  }
}
//above style is giving 3 reason to change class
//it should have only one reason to change



*/
//Now let us see how we broke things into 3 classes
class Marker {
  name;
  color;
  year;
  price;
  constructor(name, color, year, price) {
    this.name = name;
    this.color = color;
    this.year = year;
    this.price = price;
  }
}
class Invoice {
  marker;
  quantity;
  constructor(marker, quantity) {
    this.marker = marker;
    this.quantity = quantity;
  }
  calculateTotal() {
    const price = this.marker.price * this.quantity;
    return price;
  }
  // printInvoice() {
  //   console.log("Printing Ivnoices");
  // }
  // saveToDB() {
  //   console.log("Saving the data to DB");
  // }
}

class InvoiceDao {
  invoice;
  constructor(invoice) {
    this.invoice = invoice;
  }
  saveToDB() {
    console.log("Saving the data to DB");
  }
}
class InvoicePrinter {
  invoice;
  constructor(invoice) {
    this.invoice = invoice;
  }
  printInvoice() {
    console.log("Printing Ivnoices");
  }
}

//Now there is only reason to change a class other reason should not affect it

//Advantages of SRP
//Avoid duplication of code
//Easy to maintain
//Easy to understand
//Flexible Software
//Reduce Complexity
