class Vehicle {
  drive(): void {
    console.log("Normal Drive Capability");
  }
}

class SportVehicle extends Vehicle {
  drive(): void {
    console.log("Sports  Drive Capability");
  }
}

class PassengerVehicle extends Vehicle {}

class OffRoadVehicle extends Vehicle {
  drive(): void {
    console.log("Sports  Drive Capability");
  }
}
class GoodVehicle extends Vehicle {
  drive(): void {
    console.log("Good Drive Capability");
  }
}


//The thing to notice here is that both classes OffRoadVehicle and SportVehicle have same implementation
export {};
