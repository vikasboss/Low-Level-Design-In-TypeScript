//Here we will learn how to avoid LSP Liskov Substitution Priciple
//It says if we have a parent class and a child class you should be able to substitute the object without breaking the code
/*
//Below code works fine 
class Vehicle {
  getNumberOfWheels(): number {
    return 2;
  }
  hasEngine(): boolean {
    return true;
  }
}
class MotorCycle extends Vehicle {}
class Car extends Vehicle {
  override getNumberOfWheels(): number {
    return 4;
  }
}
const VehicleList: Vehicle[] = []; // Create an empty array of Vehicle objects
VehicleList.push(new MotorCycle());
VehicleList.push(new Car());
VehicleList.map((Vehicle): void => {
  console.log(Vehicle.hasEngine.toString());
});
*/
//problem comes in when we add a new child to Vehicle
//now null to string will throw null pointer exception
/*
class Vehicle {
  getNumberOfWheels(): number {
    return 2;
  }
  hasEngine(): boolean | null {
    return true;
  }
}
class MotorCycle extends Vehicle {}
class Car extends Vehicle {
  override getNumberOfWheels(): number {
    return 4;
  }
}
class Bicycle extends Vehicle {
  override hasEngine(): boolean | null {
    return null;
  }
}

const VehicleList: Vehicle[] = []; // Create an empty array of Vehicle objects
VehicleList.push(new MotorCycle());
VehicleList.push(new Car());
VehicleList.map((Vehicle): void => {
  console.log(Vehicle.hasEngine.toString());
});
*/
//How do we solve it???????????????????
class Vehicle {
  getNumberOfWheels(): number {
    return 2;
  }
}
class EngineVehicle extends Vehicle {
  hasEngine(): boolean {
    return true;
  }
}
class Bicycle extends Vehicle {}
class Car extends EngineVehicle {}
class MotorCycle extends EngineVehicle {}
const VehicleList: Vehicle[] = []; // Create an empty array of Vehicle objects
VehicleList.push(new MotorCycle());
VehicleList.push(new Car());
VehicleList.map((Vehicle): void => {
  console.log(Vehicle.getNumberOfWheels.toString());
});
//For other condition we get complile time error itself
export {};
