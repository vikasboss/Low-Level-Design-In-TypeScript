//Open/Closed principle
//Open for Extension but closed for modification
//The principle can be explained using the following analogy: Imagine you have a well-designed and sealed box (the existing code) that contains a certain functionality. Now, you want to add new features or modify the existing ones. Instead of opening the box and directly modifying the existing code, you should strive to extend the box or add a new box (extension points) that works alongside the existing code. This way, you can introduce new functionality without risking unintended side effects or breaking the existing code.
//In TypeScript, you can apply the Open/Closed Principle by utilizing features such as inheritance, interfaces, and dependency injection. Here's how you can achieve it:

//1.Inheritance: You can create a base class that defines the common behavior and then derive specific classes from it to add or modify functionality. This way, you extend the functionality without modifying the base class.
class Shape {
  // Common behavior
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  // Additional functionality
  draw() {
    super.draw(); // Invoke the base implementation
    console.log("Drawing a circle");
  }
}
//2.Interfaces: Define interfaces that specify the contract for a certain behavior, and implement those interfaces in different classes. This allows you to add new implementations without modifying existing code.
interface Printer {
  print(): void;
}

class LaserPrinter implements Printer {
  print() {
    console.log("Printing using a laser printer");
  }
}

class InkjetPrinter implements Printer {
  print() {
    console.log("Printing using an inkjet printer");
  }
}

//Dependency Injection: Instead of directly instantiating dependencies within a class, you can inject them through constructor parameters or setters. This enables you to change or extend the behavior of a class by providing different implementations of its dependencies.
class Logger {
  private printer: Printer;

  constructor(printer: Printer) {
    this.printer = printer;
  }

  log(message: string) {
    console.log("Logging message: " + message);
    this.printer.print(); // Delegate printing to injected dependency
  }
}

const laserPrinter = new LaserPrinter();
const logger = new Logger(laserPrinter);
logger.log("Hello, world!");

//By following the Open/Closed Principle, your code becomes more maintainable, modular, and easier to extend. It reduces the risk of introducing bugs or unintended consequences when making changes and promotes a more scalable and flexible design.

export {};
