console.log("Hello world");
class User {
  email: string;
  name: string;
  private city: string = "";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const user = new User("Vikas", "Vikas");
//console.log(user.city, "hello");
//user.city = "patna";

//Modifier  Keyword

//Shortcut class
class ModernUser {
  readonly city: string = "";
  constructor(public email: string, publicname: string) {}
}

//Getters and Setters

class ModernUserWithGettersAndSetters {
  readonly city: string = "";
  private _courseCount = 1;
  protected _cityCount = 1;
  constructor(public email: string, publicname: string) {}
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNumber) {
    if (courseNumber <= 1) {
      throw new Error("Course count should not be less than 1");
    }
    this._courseCount = courseNumber;
  }
  private deleteToken() {
    console.log("deleted token");
  }
}
class SubUser extends ModernUserWithGettersAndSetters {
  isFamily: boolean = true;
  changeCityCount() {
    this._cityCount = 4;
  }
}

export {};
