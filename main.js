"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a;
var b;
var c;
var d;
//don't return anything only undefined
function logIt(msg) {
    console.log(msg);
}
var isThere = logIt("5, 3");
var e = [1, 2, 3, 4];
var f = [
    1,
    "rajesh",
    true,
    { name: "rajesh" },
    function (name, age) { return "".concat(name, " + ").concat(age, " + 63 kg"); },
];
var Color;
(function (Color) {
    Color[Color["Graycode"] = 1] = "Graycode";
    Color[Color["YellowCode"] = 2] = "YellowCode";
    Color[Color["OrangeCode"] = 5] = "OrangeCode";
    Color[Color["pinkCode"] = 6] = "pinkCode";
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
var bg = Color.Blue;
var str, num;
str = "hello";
num = 99.987987;
console.log(Color.Green);
var draw = function (x, y) {
    console.log(x, y);
};
draw("hi", 55);
var drawWithType = function (x, y) {
    console.log(x, y);
};
drawWithType(33, 55);
var family = {
    name: "rajesh",
    // age: 23,
    x: 10,
    y: 13,
    work: function (mss) { return console.log(mss); },
    bro: "ramesh",
    sis: "thirumala",
    mom: "kamatchi",
    dad: "pachamuthu",
};
var drawWithInterface = function (_a) {
    var x = _a.x, y = _a.y, work = _a.work;
    console.log(x, y);
    work("hello my so called friend");
};
drawWithInterface({
    x: 1,
    y: 5,
    name: "rajesh",
    work: function (msg) { return console.log(msg); },
});
var list = ["food", "work", "money"];
var isItTrue;
isItTrue = function (str, subStr) {
    return str.search(subStr) !== -1;
};
function createCounter() {
    var count = 0;
    var counter = function () {
        return count++;
    };
    counter.interval = 10;
    counter.reset = function () {
        count = 0;
    };
    Object.defineProperty(counter, "value", {
        // get() {
        //   return count;
        // },
        get: function () { return count; },
    });
    return counter;
}
var count = createCounter();
// console.log(count());
// console.log(count.interval);
// count.reset();
// console.log(count());
// console.log(count.value);
//class
var tsClass_1 = require("./tsClass");
var tsfirst = new tsClass_1.TsClass("rajesh", 23, 1, 654, 23, "applied geology");
// console.log(tsfirst);
tsfirst.x = 99;
tsfirst.y = 99;
tsfirst.z = 99;
tsfirst.drawRectange();
tsfirst.setSrc = 876;
function setStatus(status) {
    return status;
}
console.log(setStatus("active")); //diff value cause err like pending, ...
var user1 = {
    id: 928357,
    name: "rajesh",
    email: "rajesh1@gmail.com",
    isAdmin: true,
    work: function (a, b) { return a - b; },
};
var add = function (a, b) { return a + b; };
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
performAction({ swim: function () { return console.log("I can swim  "); } });
console.log(1);
