//Liskov Substitution Priciple
//If class B is subtype of Class A then we should be able to replace object of A with B without breaking the behaviour of program
//i.e. Subclass should extend the capability of Parent class not narrow it down
interface Bike {
  turnOnEngine(): void;
  accelerate(): void;
}
class MotorCycle implements Bike {
  isEngineOn: boolean;
  speed: number;
  constructor(isEngineOn: boolean, speed: number) {
    this.isEngineOn = isEngineOn;
    this.speed = speed;
  }
  turnOnEngine(): void {
    //turn on Engine
    this.isEngineOn = true;
  }
  accelerate(): void {
    this.speed += 10;
  }
}

//Below class is defying things because it is not extending the logic instead it is narrowing down
class Bicycle implements Bike {
  speed: number;
  constructor(speed: number) {
    this.speed = speed;
  }

  turnOnEngine(): void {
    //No Engine here and things sucks
    throw new Error("No Engine found in Bicyle ");
  }
  accelerate(): void {
    this.speed += 10;
  }
}
export {};
