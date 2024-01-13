"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsClass = void 0;
class TsClass {
    constructor(first, age = 24, third, fourth, fifth, UG) {
        this.age = age;
        this.UG = UG;
        this.src = 765;
        this.draw = () => {
            console.log("hi, i am from private draw function.", this.x, this.y, this.z);
        };
        this.drawRectangle = () => {
            this.draw();
            console.log(this.UG);
        };
        this.first = first;
        this.x = third || 2;
        this.y = fourth || 3;
        this.z = fifth || 4;
    }
    get getSrc() {
        return this.src || 5646;
    }
    get getUG() {
        return this.UG || 987;
    }
    set setSrc(v) {
        this.src = v;
    }
}
exports.TsClass = TsClass;
class Shape {
}
class CreateShape extends Shape {
    static log(mes) {
        console.log(mes);
    }
    constructor(mes, times, totalTime = 0) {
        super();
        this.mes = mes;
        this.times = times;
        this.totalTime = totalTime;
        this.property = 99;
        this.property = 88; //readonly only can possible to change here
    }
    getStarted() {
        console.log("creating", this.mes);
        return this.mes;
    }
    get getTimes() {
        return this.times;
    }
}
CreateShape.config = "manual configuration";
class CreatedShape extends CreateShape {
    constructor(mes, times, totalTime) {
        super(mes, times, totalTime);
    }
    getStarted() {
        console.log("created", this.mes, this.totalTime);
        return this.mes;
    }
    get ParentProtectedValue() {
        return this.totalTime;
    }
    set ParentProtectedValue(arg) {
        this.totalTime = arg;
    }
}
let createPlan = new CreateShape("plan", 0, 5);
// createPlan.property=876 //throw err, cause read only
console.log("read-only:", createPlan.property, createPlan);
let createdPlan = new CreatedShape("plane", 0, 7);
createdPlan.getStarted(); //method overridden
console.log("read-only", createdPlan.property); //inherited read only property
createdPlan.ParentProtectedValue = 7;
console.log(createdPlan.ParentProtectedValue);
console.log(createdPlan);
