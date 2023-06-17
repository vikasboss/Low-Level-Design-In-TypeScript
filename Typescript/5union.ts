let score: number | string = 33;
score = "55";
type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};
let vikas: User | Admin = {
  name: "Hitest",
  id: 334,
};
vikas = { username: "abhdwdj", id: 123 };
function getDBId(id: number | string) {
  //making some Api calls
  console.log(`Db id is : ${id}`);
}
function dummyFunction(id: number | string) {
  //making some Api calls
  if (typeof id == "string") {
    id.toUpperCase();
  } else {
    id = id + 2;
  }
}
getDBId(3);
getDBId("3");

const data: (number | string)[] = [1, 23, 23, 23, "vikas"];
let seatAllotment: "aisle" | "middle";
seatAllotment = "middle";
export {};
