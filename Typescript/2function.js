"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwoNum(number) {
    return number + 2;
}
addTwoNum(5);
//passing on default values
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function addTwoNumBer(number) {
    return "Hello";
}
function getValue(myval) {
    if (myval > 5) {
        return true;
    }
    return "200 Ok";
}
var getHello = function (s) {
    return "";
};
var Heroes = ["IronMan", 5, "WonderMan"];
Heroes.map(function (hero) {
    return "Hereo is ".concat(hero);
});
function consoleError(errorMessage) {
    console.log(errorMessage);
}
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
//bad behaviour JS
//Object
var User1 = {
    name: "Vikas",
    email: "vikassharma.0407@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var userName = _a.name, userEmail = _a.email, userIsPaid = _a.isPaid;
    // Function implementation goes here
}
createUser({ name: "vikas", email: "vikas.mail", isPaid: true });
