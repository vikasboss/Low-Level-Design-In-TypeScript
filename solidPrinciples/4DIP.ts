//Dependency Inversion Principle
//Class should depend on interfaces rather than concrete class

//The Dependency Inversion Principle (DIP) is another important principle of object-oriented design. It states that high-level modules or classes should not depend on low-level modules or classes directly. Instead, both should depend on abstractions (interfaces or abstract classes). In other words, the principle suggests that classes should depend on interfaces rather than concrete implementations
//By depending on interfaces rather than concrete classes, you decouple the higher-level modules from the specific implementations, which leads to code that is more flexible, maintainable, and easier to test and extend. The DIP promotes the idea of programming against abstractions rather than implementations.

//Here's an explanation of how you can apply the Dependency Inversion Principle in TypeScript:

//Define an interface or an abstract class that represents the desired behavior or functionality.
interface Database {
  save(data: any): void;
}

class MySQLDatabase implements Database {
  save(data: any) {
    // Save data using MySQL implementation
  }
}

class MongoDBDatabase implements Database {
  save(data: any) {
    // Save data using MongoDB implementation
  }
}

//Rather than directly instantiating the concrete classes in your higher-level modules, inject the dependency through constructor parameters or setters.
class UserRepository {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  saveUser(user: User) {
    // Use the injected database to save the user
    this.database.save(user);
  }
}
//In the client code, create an instance of the concrete class and pass it to the higher-level module.
const database = new MySQLDatabase(); // Or MongoDBDatabase
const userRepository = new UserRepository(database);
userRepository.saveUser(user);

//By following the Dependency Inversion Principle, you achieve several benefits:

// The higher-level module (UserRepository) is not tightly coupled to the specific implementation of the database. This allows you to easily switch between different database implementations without modifying the UserRepository class.
// It becomes easier to test the higher-level module by providing mock or stub implementations of the dependencies.
// The code becomes more modular and flexible, as you can introduce new implementations of the interface without affecting the existing codebase.
// The principle encourages a clear separation of concerns and promotes the Single Responsibility Principle (SRP) by ensuring that each class has a single responsibility.
// Applying the Dependency Inversion Principle in TypeScript promotes a more loosely coupled and modular codebase, making your code easier to maintain, test, and extend.





export {};
