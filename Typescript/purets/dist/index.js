"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
class User {
    constructor(email, name) {
        this.city = "";
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
    constructor(email, publicname) {
        this.email = email;
        this.city = "";
    }
}
//Getters and Setters
class ModernUserWithGettersAndSetters {
    constructor(email, publicname) {
        this.email = email;
        this.city = "";
        this._courseCount = 1;
        this._cityCount = 1;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should not be less than 1");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("deleted token");
    }
}
class SubUser extends ModernUserWithGettersAndSetters {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCityCount() {
        this._cityCount = 4;
    }
}
