//The Factory Pattern is a creational design pattern that provides an interface for creating objects without specifying their concrete classes. It encapsulates the object creation logic and allows the client code to interact with the objects through a common interface.
interface Shape {
    draw(): void;
  }
  
  class Rectangle implements Shape {
    draw(): void {
      console.log("Drawing Rectangle.....");
    }
  }
  
  class Circle implements Shape {
    draw(): void {
      console.log("Drawing Circle.....");
    }
  }
  
  class ShapeFactory {
    getShape(input: string): Shape | null {
      switch (input) {
        case "Circle":
          return new Circle();
        case "Rectangle":
          return new Rectangle();
        default:
          return null;
      }
    }
  }
  
  // Example usage:
  const factory = new ShapeFactory();
  
  const circle = factory.getShape("Circle");
  if (circle) {
    circle.draw(); // Output: Drawing Circle.....
  }
  
  const rectangle = factory.getShape("Rectangle");
  if (rectangle) {
    rectangle.draw(); // Output: Drawing Rectangle.....
  }
  
  const triangle = factory.getShape("Triangle");
  if (triangle) {
    triangle.draw(); // Output: (nothing, as Triangle is not supported)
  }
  


  /*
  The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. It encapsulates the creation of multiple objects that are designed to work together and ensures that the created objects are compatible.

The Abstract Factory Pattern consists of the following key components:

Abstract Factory: This is an interface or an abstract class that declares the methods for creating the related objects. It provides a common interface for creating different types of products or objects.

Concrete Factories: These are the implementations of the Abstract Factory interface. Each concrete factory is responsible for creating a family of related objects.

Abstract Products: These are the interfaces or abstract classes that declare the common operations that the concrete products will implement.

Concrete Products: These are the implementations of the Abstract Products. Each concrete product represents a specific type of object created by the corresponding concrete factory.

*/



// Abstract Product A
interface Button {
    display(): void;
  }
  
  // Concrete Product A1
  class WindowsButton implements Button {
    display(): void {
      console.log("Displaying a Windows button.");
    }
  }
  
  // Concrete Product A2
  class MacButton implements Button {
    display(): void {
      console.log("Displaying a Mac button.");
    }
  }
  
  // Abstract Product B
  interface Checkbox {
    display(): void;
  }
  
  // Concrete Product B1
  class WindowsCheckbox implements Checkbox {
    display(): void {
      console.log("Displaying a Windows checkbox.");
    }
  }
  
  // Concrete Product B2
  class MacCheckbox implements Checkbox {
    display(): void {
      console.log("Displaying a Mac checkbox.");
    }
  }
  
  // Abstract Factory
  interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
  }
  
  // Concrete Factory 1
  class WindowsFactory implements GUIFactory {
    createButton(): Button {
      return new WindowsButton();
    }
  
    createCheckbox(): Checkbox {
      return new WindowsCheckbox();
    }
  }
  
  // Concrete Factory 2
  class MacFactory implements GUIFactory {
    createButton(): Button {
      return new MacButton();
    }
  
    createCheckbox(): Checkbox {
      return new MacCheckbox();
    }
  }
  
  // Client code
  function createUI(factory: GUIFactory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
  
    button.display();
    checkbox.display();
  }
  
  // Usage
  const windowsFactory = new WindowsFactory();
  createUI(windowsFactory);
  // Output:
  // Displaying a Windows button.
  // Displaying a Windows checkbox.
  
  const macFactory = new MacFactory();
  createUI(macFactory);
  // Output:
  // Displaying a Mac button.
  // Displaying a Mac checkbox.
  

export {};
