//Interface Segmented Priciple
//Interface should be such that the client should not  implement un-necessary function they do not need
//Let us see a bad example and it's drawback
/*
//You can see the drawbacks here waiter having to implement function that is not required
interface ResturantEmployee {
  washDishes(): void;
  serveCustomers(): void;
  cookFood(): void;
}
class Waiter implements ResturantEmployee {
  washDishes(): void {
    //not my job dude
    throw new Error("Not my Job dude");
  }
  serveCustomers(): void {
    //here is the implementation
  }
  cookFood(): void {
    //not my job dude
    throw new Error("Not my Job dude");
  }
}
*/
//How do we fix these shitt
interface WaiterInterface {
  serveCustomers(): void;
  takeOrder(): void;
}
interface ChefInterface {
  cookFood(): void;
  decideMenu(): void;
}
class Waiter implements WaiterInterface {
  serveCustomers(): void {
    //serving the customer
  }
  takeOrder(): void {
    //taking new orders
  }
}
class Chef implements ChefInterface {
  cookFood(): void {
    //cooking food
  }
  decideMenu(): void {
    //deciding the menu
  }
}

export {};
