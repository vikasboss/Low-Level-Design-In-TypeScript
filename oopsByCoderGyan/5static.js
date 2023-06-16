/*
class User {
  name;
  age;
  income;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }
  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}
const user1 = new User("vikas", 22, 20);
const user2 = new User("aman", 26, 16);
const user3 = new User("shivam", 24, 15);
const users = [user1, user2, user3];
console.log(users);
// users.sort((a, b) => a.age - b.age);
// console.log(users);
//static method /properties is not called over instance of class this is stored on class
users.sort(User.compareByAge);
console.log(users);
users.sort(User.compareByIncome);
console.log(users);


*/

//auto increment id's
class User {
  static id = 1;
  name;
  age;
  income;
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
    this.id = User.id++;
  }
}
const user1 = new User("vikas", 22, 20);
const user2 = new User("aman", 26, 16);
const user3 = new User("shivam", 24, 15);
const users = [user1, user2, user3];
console.log(users);

class Config {
  static dbUser = "username";
  static dbPassword = "password";
  static apitoken = "akjsiwjsiwjs";
  static cache = {
    1: "Some value",
  };
  static hasInCache() {
    console.log(this.cache);
  }
  static checkCache() {
    //below works
    this.hasInCache();
  }
  checkCachePublic() {
    this.hasInCache();
  }
  checkCachePublicNonStatic() {
    Config.hasInCache();
  }
  //blocks
  static {
    console.log("Initialised");
  }
}
console.log(Config.dbPassword);
Config.hasInCache();
Config.checkCache();
const configObj = new Config();
//below won't work
//configObj.checkCachePublic();
//below should work
configObj.checkCachePublicNonStatic();
