interface DriverStrategy {
  drive(): void;
}

class NormalDriveStrategy implements DriverStrategy {
  drive(): void {
    console.log("Normal Drive Capability");
  }
}

class SportsDriveStrategy implements DriverStrategy {
  drive(): void {
    console.log("Sports  Drive Capability");
  }
}
class Vehicle {
  driverObject: DriverStrategy;
  constructor(driverObject: DriverStrategy) {
    this.driverObject = driverObject;
  }
}
class OffRoadVehicle extends Vehicle {
  constructor() {
    super(new SportsDriveStrategy());
  }
}
class SportVehicle extends Vehicle {
  constructor() {
    super(new SportsDriveStrategy());
  }
}

class GoodVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}

// Create an instance of GoodVehicle
const goodVehicle = new GoodVehicle();

// Call the drive() method on the goodVehicle instance
goodVehicle.driverObject.drive();

export {};
