function addTwoNum(number: number) {
  return number + 2;
}
addTwoNum(5);
//passing on default values
const loginUser = (name: string, email: string, isPaid: boolean = false) => {};
function addTwoNumBer(number: number): number | string {
  return "Hello";
}

function getValue(myval: number) {
  if (myval > 5) {
    return true;
  }
  return "200 Ok";
}
const getHello = (s: string): string => {
  return "";
};

const Heroes = ["IronMan", 5, "WonderMan"];
Heroes.map((hero): string => {
  return `Hereo is ${hero}`;
});

function consoleError(errorMessage: string): void {
  console.log(errorMessage);
}

function handleError(errorMessage: string): never {
  throw new Error(errorMessage);
}

//bad behaviour JS

//Object
const User1 = {
  name: "Vikas",
  email: "vikassharma.0407@gmail.com",
  isActive: true,
};

// function createUser({ name: string, email: string, isPaid: boolean }): void {
//   console.log(name, email);
// }
// createUser({ name: "vikas", email: "vikas.mail", isPaid: true });


export {};
