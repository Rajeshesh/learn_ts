let a: number;
let b: string;
let c: boolean;
let d: any;

let userInput: unknown;
let userName: string;

userInput = "Hello";
userName = userInput as string; // Type assertion
// or
if (typeof userInput === "string") {
  userName = userInput; // Type narrowing
}

//don't return anything only undefined
function logIt(msg): void {
  console.log(msg);
}

//cannot have a reachable end point
function throwError(message: string): never {
  throw new Error(message);
}

let obj: Object = { name: "rajesh", age: 24 };

const isThere: void = logIt("5, 3");
let e: number[] = [1, 2, 3, 4];
let f: any[] = [
  1,
  "rajesh",
  true,
  { name: "rajesh" },
  (name: string, age: number): string => `${name} + ${age} + 63 kg`, //return should be string
];

let str, num;
str = "hello";
num = 99.987987;
// console.log((<string>str).charAt(1));
// console.log((num as number).toFixed(2)); // log like 99.99

enum Color {
  GrayCode = 1,
  YellowCode, //return 2
  OrangeCode = 5,
  pinkCode, // return 6
  Red = "red",
  Blue = "blue",
  Green = "green",
}

//getting undefined so i should check in next application
declare enum Color {
  Yellow = "yellow",
  Purple = "purple",
  Orange = "orange",
}

let bg: Color = Color.pinkCode;

console.log(Color.Green);
console.log("this is to check color", Color.Orange, bg);

let draw = (x, y) => {
  console.log(x, y);
};
draw("hi", 55);

let drawWithType = (x: number, y: number) => {
  console.log(x, y);
};
drawWithType(33, 55);

// object's interface
interface Me {
  name: string;
  age?: number;
  x: number;
  y: number;
  work: (msg: string) => void;
}

interface withFamily extends Me {
  readonly bro: string;
  readonly sis: string;
  readonly mom: string;
  readonly dad: string;
}

let family: withFamily = {
  name: "rajesh",
  // age: 23,
  x: 10,
  y: 13,
  work: (mss) => console.log(mss),
  bro: "ramesh",
  sis: "thirumala",
  mom: "kamatchi",
  dad: "pachamuthu",
};

let drawWithInterface = ({ x, y, work }: Me) => {
  console.log(x, y);
  work("hello my so called friend");
};
drawWithInterface(family); // but but only Me interface properties are accessible inside the function

//array's interface
interface SomeList {
  [index: number]: string;
}

let list: SomeList = ["food", "work", "money"];

/*//object can also made like this
interface SomeList {
  [index: string]: string;
}
let list: SomeList = { food: "lkj", work: "lkj", 7: "lkj" };
console.log(list);*/

//function's interface
interface AnyFunction {
  (string: string, substring: string): boolean;
}

let isItTrue: AnyFunction;
isItTrue = (str, subStr) => {
  return str.search(subStr) !== -1;
};

interface Counter {
  (): number; //callable signature.
  interval: number;
  reset(): void;
  readonly value: number;
}

function createCounter(): Counter {
  let count = 0;
  let counter = function (): number {
    return count++;
  } as Counter;
  counter.interval = 10;
  counter.reset = () => {
    count = 0;
  };
  Object.defineProperty(counter, "value", {
    // get() {
    //   return count;
    // },
    get: () => count,
  });
  return counter;
}

// let count = createCounter();
// console.log(count()); //0
// console.log(count.interval); //10
// count.reset();
// console.log(count()); //0
// console.log(count.value); //1

console.log("from here class started");
//class
import { TsClass } from "./tsClass";

let tsFirst = new TsClass("rajesh", 23, 1, 654, 23, "applied geology");
console.log(tsFirst); //can see all including the private one in the console.log only.
tsFirst.x = 99;
tsFirst.y = 99;
tsFirst.z = 99;
tsFirst.drawRectangle();
tsFirst.setSrc = 876;

//start about type
type Status = "active" | "inActive"; //Union Type Alias
function setStatus(status: Status): string {
  return status;
}
console.log(setStatus("active")); //diff value cause err like "pending", ...

type Id = number;
type Name = String;
type SubWithSalary = (a: number, b: number) => number;

//Combining Types with Type Aliases
type User = {
  id: Id;
  name: Name;
  email: string;
  isAdmin: boolean;
  age?: number;
  work: SubWithSalary;
  kindOfPerson: Status;
};

let user1: User = {
  id: 928357,
  name: "rajesh",
  email: "rajesh1@gmail.com",
  isAdmin: true,
  work: (a, b) => a - b,
  kindOfPerson: "active",
};

const add: SubWithSalary = (a, b) => a + b;

interface Duck {
  swim: () => void;
}
interface Penguin {
  waddle: () => void;
}
type Bird = Duck | Penguin; //union type

//type guard are allow you to handle different types within a union type safely and accurately   //without bird is Duck(for if block), it cause error
function isDuck(bird: Bird): bird is Duck {
  return (bird as Duck).swim !== undefined;
}
function performAction(bird: Bird) {
  if (isDuck(bird)) bird.swim();
  else bird.waddle();
}
performAction({ swim: () => console.log("I can swim  ") });
performAction({ waddle: () => console.log("I can waddle  ") });
