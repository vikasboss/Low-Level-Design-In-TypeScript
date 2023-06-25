//1.Startegy Design Pattern
//  -|> is a relationship
// -> has a relationship
//Refer to picture 0.png what do we see here??????
//Here we see that Vehicle class has a function drive which has some implementation as Normal Capacity
//Sport Vehicle and OffRoad vehicle has extended this class and wrote the same implementation which is kind of
//code duplication ,which is problamatic.
//so to break down I mean if two classes at same level don't use their parent's capapbilty and uses their own which is same 
//for two classes then it is code duplication.

//How do we avoid it?
