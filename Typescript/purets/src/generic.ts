const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identitytwo(val: any): any {
  return val;
}
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree("3");
function identityFour<T>(val: T): T {
  return val;
}
identityFour(4);
interface Bottle {
  brand: string;
  type: number;
}
identityFour<Bottle>({});

function getSearchProducts<T>(products: T[]): T {
  //doing some ops
  return products[3];
}
const getMoreSearchProduct = <T>(products: T[]): T => {
  //doing some ops
  return products[1];
};


//Using Type Param in Generic Cpojstraints


export {};
