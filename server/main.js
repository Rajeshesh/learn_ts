"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
let b;
let c;
let d;
let userInput;
let userName;
userInput = "Hello";
userName = userInput; // Type assertion
// or
if (typeof userInput === "string") {
    userName = userInput; // Type narrowing
}
//don't return anything only undefined
function logIt(msg) {
    console.log(msg);
}
//cannot have a reachable end point
function throwError(message) {
    throw new Error(message);
}
let obj = { name: "rajesh", age: 24 };
const isThere = logIt("5, 3");
let e = [1, 2, 3, 4];
let f = [
    1,
    "rajesh",
    true,
    { name: "rajesh" },
    (name, age) => `${name} + ${age} + 63 kg`, //return should be string
];
let str, num;
str = "hello";
num = 99.987987;
// console.log((<string>str).charAt(1));
// console.log((num as number).toFixed(2)); // log like 99.99
var Color;
(function (Color) {
    Color[Color["GrayCode"] = 1] = "GrayCode";
    Color[Color["YellowCode"] = 2] = "YellowCode";
    Color[Color["OrangeCode"] = 5] = "OrangeCode";
    Color[Color["pinkCode"] = 6] = "pinkCode";
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
let bg = Color.pinkCode;
console.log(Color.Green);
console.log("this is to check color", Color.Orange, bg);
let draw = (x, y) => {
    console.log(x, y);
};
draw("hi", 55);
let drawWithType = (x, y) => {
    console.log(x, y);
};
drawWithType(33, 55);
let family = {
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
let drawWithInterface = ({ x, y, work }) => {
    console.log(x, y);
    work("hello my so called friend");
};
drawWithInterface(family); // but but only Me interface properties are accessible inside the function
let list = ["food", "work", "money"];
let isItTrue;
isItTrue = (str, subStr) => {
    return str.search(subStr) !== -1;
};
function createCounter() {
    let count = 0;
    let counter = function () {
        return count++;
    };
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
const tsClass_1 = require("./tsClass");
let tsFirst = new tsClass_1.TsClass("rajesh", 23, 1, 654, 23, "applied geology");
console.log(tsFirst); //can see all including the private one in the console.log only.
tsFirst.x = 99;
tsFirst.y = 99;
tsFirst.z = 99;
tsFirst.drawRectangle();
tsFirst.setSrc = 876;
function setStatus(status) {
    return status;
}
console.log(setStatus("active")); //diff value cause err like "pending", ...
let user1 = {
    id: 928357,
    name: "rajesh",
    email: "rajesh1@gmail.com",
    isAdmin: true,
    work: (a, b) => a - b,
    kindOfPerson: "active",
};
const add = (a, b) => a + b;
//type guard are allow you to handle different types within a union type safely and accurately   //without bird is Duck(for if block), it cause error
function isDuck(bird) {
    return bird.swim !== undefined;
}
function performAction(bird) {
    if (isDuck(bird))
        bird.swim();
    else
        bird.waddle();
}
performAction({ swim: () => console.log("I can swim  ") });
performAction({ waddle: () => console.log("I can waddle  ") });
