//
class BankAccount {
  customerName;
  accountNumber;
  #balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }
  setBalance(balance) {
    this.#balance = balance;
  }
  getBalance() {
    return this.#balance;
  }
  //getter and setters
  get balance() {
    return this.#balance;
  }
  set balance(amount) {
    this.balance = amount;
  }
  //private method
  #banCustomer() {
    console.log(
      "I am banning the customer but this can be called only from inside of this class only"
    );
  }
}
const RakeshAccount = new BankAccount("Rakesh", 50);
RakeshAccount.deposit(50);
//below throws error
//RakeshAccount.#balance = 20;
RakeshAccount.setBalance(500);
console.log(RakeshAccount.getBalance());

//js provided setters and getters
console.log(RakeshAccount.balance);
RakeshAccount.balance = 200;
console.log(RakeshAccount.balance);

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;
  constructor(customerName, balance) {
    super(customerName, balance);
  }
  takeBusinessLoan(amount) {
    console.log("Taking Business loan " + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 1000;
  constructor(customerName, balance) {
    super(customerName, balance);
  }
  takePersonalLoan(amount) {
    console.log("Taking Personal loan " + amount);
  }
}

const vikasSaving = new SavingAccount("vikas", 2000);
const vikasPersonal = new CurrentAccount("vikas", 20);

//we are able to access class variable outside of class which is harmful
//below throws error
//vikasSaving.#balance = "hello";
// we will let getter settter only set values not other folks
