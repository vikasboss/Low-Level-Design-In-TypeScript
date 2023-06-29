//On one class with f1 feature we write another class with f1+f2 and same goes on till fn
//Why you need decorator pattern?
//to avoid class explosion
//Just imagine making pizz so base pizza is the one where on top of that we kinda add more toppings
//Another example we can take is one base coffe on top you get added choclolate etc.
/*
An IS-A relationship is inheritance. The classes which inherit are known as sub classes or child classes. On the other hand, HAS-A relationship is composition.

In OOP, IS-A relationship is completely inheritance. This means, that the child class is a type of parent class. For example, an apple is a fruit. So you will extend fruit to get apple.

class Apple extends Fruit {

}
On the other hand, composition means creating instances which have references to other objects. For example, a room has a table. So you will create a class room and then in that class create an instance of type table.

class Room {

    Table table = new Table();

}
A HAS-A relationship is dynamic (run time) binding while inheritance is a static (compile time) binding. If you just want to reuse the code and you know that the two are not of same kind use composition. For example, you cannot inherit an oven from a kitchen. A kitchen HAS-A oven. When you feel there is a natural relationship like Apple is a Fruit use inheritance.

*/

abstract class BasePizza {
  abstract cost(): number;
}

class FarmHouse extends BasePizza {
  cost(): number {
    return 200;
  }
}

class VegieDelight extends BasePizza {
  cost(): number {
    return 100;
  }
}

class Margherita extends BasePizza {
  cost(): number {
    return 150;
  }
}

//Establishing IS A RELATIONSHIP
abstract class ToppingDecorator extends BasePizza {}
class ExtraCheese extends ToppingDecorator {
  basePizza: BasePizza;
  //has a relation ship
  constructor(basePizza: BasePizza) {
    super();
    this.basePizza = basePizza;
  }
  cost(): number {
    return this.basePizza.cost() + 100;
  }
}

class ExtraMushroom extends ToppingDecorator {
  //has a relation ship
  basePizza: BasePizza;
  constructor(basePizza: BasePizza) {
    super();
    this.basePizza = basePizza;
  }
  cost(): number {
    return this.basePizza.cost() + 200;
  }
}

//SO basically we estanlished both has a and is a relationship

// Now let us say that i want margherita + Extra cheese then see how am I doing it
const wishedPizza = new ExtraCheese(new Margherita());
console.log(wishedPizza.cost());
//let us say on abve pizaa we would have wanted msuhrom also
const wishedPizzawithMushroom = new ExtraMushroom(
  new ExtraCheese(new Margherita())
);
console.log(wishedPizzawithMushroom.cost());
export {};
