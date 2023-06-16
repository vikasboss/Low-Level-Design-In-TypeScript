//It is made to follow DRY principle
/*

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

// function CurrentAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
//   this.transactionlimit = 50000;
// }
// CurrentAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };
// CurrentAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("Taking Business loan " + amount);
// };
// const rakeshAccount = new CurrentAccount("Rakesh", 200);
// console.log(rakeshAccount);

// function SavingAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
//   this.transactionlimit = 1000;
// }
// SavingAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };
// SavingAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// SavingAccount.prototype.takePersonal = function (amount) {
//   console.log("Taking Personal loan " + amount);
// };
// const vikasAccount = new SavingAccount("Vikas", 200);
// console.log(vikasAccount);

//Issue we were seeing above was that we were repeating codes

function CurrentAccount(customerName, balance = 0) {
  //get all params in child class this will not give prototype method (This is called constructor linking )
  BankAccount.call(this, customerName, balance);
  this.transactionlimit = 50000;
}

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
  console.log("Taking Business loan " + amount);
};
const rakeshAccount = new CurrentAccount("Rakesh", 200);
console.log(rakeshAccount);
CurrentAccount.prototype = Object.create(BankAccount.prototype);
function SavingAccount(customerName, balance = 0) {
  this.transactionlimit = 1000;
}
//get that parents protupe in child
SavingAccount.prototype.takePersonal = function (amount) {
  BankAccount.call(this, customerName, balance);

  console.log("Taking Personal loan " + amount);
};
const vikasAccount = new SavingAccount("Vikas", 200);
console.log(vikasAccount);
SavingAccount.prototype = Object.create(BankAccount.prototype);


*/

class BankAccount {
  customerName;
  accountNumber;
  balance = 0;

  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
const RakeshAccount = new BankAccount("Rakesh", 50);
console.log(RakeshAccount);
RakeshAccount.deposit(50);

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;
  constructor(customerName, balance) {
    //dont pass this
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
console.log(vikasSaving);
console.log(vikasPersonal);
