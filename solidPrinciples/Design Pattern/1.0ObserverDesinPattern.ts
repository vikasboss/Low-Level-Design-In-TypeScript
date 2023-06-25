//Imeplenent Notify me Feature of same as Flipkart
//Here there are two objects observable and observer
//If there is a change in state of  Observable then observable will update all observer that my state is changed

interface NotificationAlertObserver {
  update(): void;
}

class EmailAlertObserver implements NotificationAlertObserver {
  emailId: string;
  observable: StockObservable;
  constructor(emailId: string, observable: StockObservable) {
    this.observable = observable;
    this.emailId = emailId;
  }
  update(): void {
    this.sendMail(this.emailId, "product is in stock hurry Up!!");
  }
  private sendMail(emailId: string, message: string): void {
    console.log(message + emailId);
  }
}

class MobileAlertObserver implements NotificationAlertObserver {
  userName: string;
  observable: StockObservable;
  constructor(userName: string, observable: StockObservable) {
    this.observable = observable;
    this.userName = userName;
  }
  update(): void {
    this.sendMessageOnMobile(this.userName, "product is in stock hurry Up!!");
  }
  private sendMessageOnMobile(userName: string, message: string): void {
    console.log(message + userName);
  }
}

interface StockObservable {
  add(observer: NotificationAlertObserver): void;
  remove(observer: NotificationAlertObserver): void;
  notifySuscribers(): void;
  setStockCount(newStockAdded: number): void;
  getStockCount(): number;
}

class IphoneObservable implements StockObservable {
  observerList: NotificationAlertObserver[] = [];
  stockCount = 0;
  add(observer: NotificationAlertObserver): void {
    this.observerList.push(observer);
  }
  remove(observer: NotificationAlertObserver): void {
    const index = this.observerList.indexOf(observer);
    if (index > -1) {
      // only splice array when item is found
      this.observerList.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
  notifySuscribers(): void {
    this.observerList.map((observer: NotificationAlertObserver) => {
      observer.update();
    });
  }
  setStockCount(newStockAdded: number): void {
    if (this.stockCount == 0) {
      //tell users that new product is back
      this.notifySuscribers();
    }
    this.stockCount += newStockAdded;
  }
  getStockCount(): number {
    return this.stockCount;
  }
}

//Let us make orcherstation
class Store {
  constructor() {
    const iphoneStockObservable = new IphoneObservable();
    const observer1 = new EmailAlertObserver(
      "abc1@gmail.com",
      iphoneStockObservable
    );
    const observer2 = new EmailAlertObserver(
      "abc2@gmail.com",
      iphoneStockObservable
    );

    const observer3 = new EmailAlertObserver(
      "abc3@gmail.com",
      iphoneStockObservable
    );
    iphoneStockObservable.add(observer1);
    iphoneStockObservable.add(observer2);
    iphoneStockObservable.add(observer3);
    iphoneStockObservable.setStockCount(10);
  }
}
const vikasRun = new Store();
export {};
