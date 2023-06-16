function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  //below was wastage of memory
//   this.deposit = function (amount) {
//     this.balance += amount;
//   };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
const rakeshAccount = new BankAccount("Rakesh", 1000);
const johnAccount = new BankAccount("John");
//method is manipulator and for every object we create it should not be existing as it is wastage of memory
//prototype helps us acheive that
console.log(BankAccount.prototype);
BankAccount.prototype.test = "this is a test";
console.log(BankAccount.prototype);
//In javascript whenever we create a function Javascript add a proprty by default i.e prototype
//that prototype is nothing but an empty object 
// and in any empty object we can add any property 
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
  };
  console.log(BankAccount.prototype);
  console.log(rakeshAccount);
//here we could not use arrow function because arrow function don't have any context the this inside arrow function it takes from outer function 
//so in this case since it is out of that constructor class it will take from window object and it will not get that
rakeshAccount.deposit(500);
//how function invoking would happen is first js will check for deposit function in the object and then in constructor 's prototype would be checked this is called (prototype chain)
console.log(rakeshAccount);