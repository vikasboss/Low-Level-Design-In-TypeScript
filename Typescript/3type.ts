type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser(user: User): User {
  return user;
}
createUser({ name: "", email: "", isActive: true });

type MongoUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardNumber?: number;
};

// function createMongoUser(u: MongoUser) {}
const myMongoUser: MongoUser = {
  _id: "1232",
  name: "vikas",
  email: "he@ksoksow",
  isActive: false,
};
myMongoUser.email = "vikawjdiwjsiwjd";
myMongoUser._id = "vikas";
type cardNumber = {
  cardNumber: number;
};
type cardDate = {
  cardDate: string;
};
type cardDetails = cardNumber &
  cardDate & {
    cvvNumber: number;
  };
  
export {};
