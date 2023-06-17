//close form of class
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleID?: string;
  startTrial: () => string;
  endTrial(): string;
  getCoupon(couponName: string): string;
}
//reopening of interface
interface User {
  gitHubToken: string;
}
const Hitest: User = {
  dbId: 121,
  email: "iwjsiwjs",
  userId: 121,
  startTrial: () => {
    return "trial period staryed";
  },
  endTrial: () => {
    return "ended Trial";
  },
  getCoupon: (couponName: string) => {
    return couponName;
  },
  gitHubToken: "jwdiwjd",
};


//inheritance in interfaces
interface Admin extends User {
  role: "Admin" | "TA";
}

const Vikas: Admin = {
  dbId: 121,
  email: "iwjsiwjs",
  userId: 121,
  startTrial: () => {
    return "trial period staryed";
  },
  endTrial: () => {
    return "ended Trial";
  },
  getCoupon: (couponName: string) => {
    return couponName;
  },
  gitHubToken: "jwdiwjd",
  role: "Admin",
};
export {};
