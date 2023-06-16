//constructor function
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
//whatever object we are creating for that we are allocating space into our system
const rakeshAccount = new BankAccount("Rakesh", 1000);
const johnAccount = new BankAccount("John");
//below is illegal thing to do in oops and goes against oops
johnAccount.balance = 50;
//below is right way to do this
johnAccount.deposit(50);
johnAccount.withdraw(50);
console.log(rakeshAccount);
console.log(johnAccount);
