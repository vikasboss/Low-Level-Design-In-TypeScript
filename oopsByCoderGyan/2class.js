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
console.log(RakeshAccount);
hello();
function hello() {
  console.log("Hello");
}
hello();
//hositing does not work for classes like it works normally
//function declaration/hoisting both does work in js
// const hello = class {};
