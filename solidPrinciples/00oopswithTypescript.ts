// The reason we moved to TypeScript was that Node.js was not having much workaround
// We did not find much of OOP support in Node.js

// Here are some reasons why TypeScript may be considered better for OOP:

// Type Safety: TypeScript introduces static typing, allowing you to define and enforce types for variables, function parameters, and return values. This helps catch type-related errors during development and provides better code quality and maintainability. Strong typing is a fundamental aspect of OOP, enabling you to define classes and interfaces with precise type information.

// Class-based OOP: TypeScript supports class-based object-oriented programming, which aligns well with traditional OOP concepts. You can define classes, inheritance hierarchies, interfaces, and access modifiers (public, private, protected) to encapsulate and organize your code.

// Decorators: TypeScript introduces decorators, which are a powerful feature for adding metadata and behavior to classes and class members. Decorators enable you to implement aspects like logging, validation, or authorization with ease, promoting cleaner and more maintainable code.

// IDE Support: TypeScript's type system enhances development tools like IDEs, enabling features like autocompletion, type checking, and refactoring support. This can significantly improve productivity and code quality when working with OOP principles.

// Node.js, on the other hand, being a JavaScript runtime, does not have the built-in features and benefits of TypeScript. However, you can still utilize OOP principles in Node.js by leveraging JavaScript's prototypal inheritance, closures, and other language features. While JavaScript lacks static typing and some advanced OOP features found in TypeScript, it can still support OOP practices.

// In summary, TypeScript provides a more robust and expressive OOP experience due to its static typing, class-based syntax, decorators, and enhanced tooling. If you prioritize OOP principles and want the benefits of a statically typed language, TypeScript would be a better choice for OOP development in the Node.js ecosystem.

// Object-oriented programming (OOP) is a programming paradigm that revolves around the concept of objects, which are instances of classes. TypeScript, being a superset of JavaScript, extends JavaScript's capabilities with additional features that enhance the OOP experience. Let's explore the key aspects of OOP in TypeScript:

// Classes and Objects:
// In TypeScript, you can define classes using the class keyword. Classes serve as blueprints for creating objects that share common properties and behaviors. Here's an example of a simple class:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// Creating an object from the Person class
const john = new Person("John", 25);
john.sayHello(); // Output: Hello, my name is John and I'm 25 years old.

// Inheritance:
// Inheritance allows you to create new classes (derived classes) based on existing classes (base classes). Derived classes inherit properties and methods from their base classes and can extend or override them. TypeScript supports single inheritance. Here's an example:

class Student extends Person {
  studentId: string;

  constructor(name: string, age: number, studentId: string) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying with student ID ${this.studentId}.`);
  }
}

const alice = new Student("Alice", 20, "123456");
alice.sayHello(); // Output: Hello, my name is Alice and I'm 20 years old.
alice.study(); // Output: Alice is studying with student ID 123456.

// Encapsulation:
// Encapsulation refers to the bundling of data and methods within a class, hiding the internal details and exposing only necessary interfaces. In TypeScript, you can use access modifiers (public, private, protected) to control the visibility and accessibility of class members. Here's an example:

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance.");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // Output: 1300

// Polymorphism:
// Polymorphism allows objects of different classes to be treated as instances of a common base class, enabling code reuse and flexibility. TypeScript supports polymorphism through method overriding. Here's an example:

class Animal {
  makeSound() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks.");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Cat meows.");
  }
}

function performSound(animal: Animal) {
  animal.makeSound();
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

performSound(animal); // Output: Animal makes a sound.
performSound(dog); // Output: Dog barks.
performSound(cat); // Output: Cat meows.

// Interfaces:
// Interfaces in TypeScript define contracts for implementing classes. They allow you to specify the expected shape of an object, including property names, types, and method signatures. Here's an example:

interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log("Printing document...");
  }
}

const doc = new Document();
doc.print(); // Output: Printing document...

// Abstract Classes:
// Abstract classes are base classes that cannot be instantiated directly but can be inherited by other classes. They provide a common structure and behavior that derived classes can extend and implement. Abstract classes can have abstract methods, which are methods without an implementation. Here's an example:

abstract class Shape {
  abstract calculateArea(): number;

  display() {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
circle.display(); // Output: Area: 78.53981633974483

// In this updated TypeScript file, I have added explanations and examples of interfaces and abstract classes. Interfaces define contracts for implementing classes, while abstract classes provide a common structure and behavior for derived classes. These concepts further enhance the object-oriented programming experience in TypeScript.

//Overiding parent class in Typescript
class Parent {
  greet() {
    console.log("Hello, I am the parent.");
  }
}

class Child extends Parent {
  override greet() {
    console.log("Hello, I am the child.");
  }
}

const child = new Child();
child.greet(); // Output: Hello, I am the child.

export {};
/*
  In TypeScript, the export {} syntax is used as a workaround in certain situations to indicate that a file is an ES module, even if it doesn't export anything explicitly. When you use this syntax, it acts as a placeholder export statement, telling TypeScript that the file is intended to be treated as a module.

The purpose of including export {} is to prevent TypeScript from considering the file as a script and instead treat it as a module. Modules have a different scoping behavior compared to scripts, and they allow for better encapsulation and organization of code.

When you omit export {} in a file that doesn't have any explicit exports, TypeScript may show an error because it assumes that the file is intended to be a script. Without the export {} statement, the file will be treated as a script, and any declarations inside it might pollute the global scope. The error message is TypeScript's way of reminding you to clarify whether the file is intended to be a module or a script.

Including export {} in such files ensures that they are treated consistently as modules, regardless of whether they have any actual exports. It helps maintain a modular code structure and provides better control over the scope of declarations within the file.

*/
