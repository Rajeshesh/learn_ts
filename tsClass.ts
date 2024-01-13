interface Blueprint {
  first: string;
  age: number;
  // src: number; //it will cause err because it will only watch public
}

export class TsClass implements Blueprint {
  x: number;
  y: number;
  z: number;
  private src: number = 765;
  first: string; //first is required but others are optional
  constructor(
    first: string,
    public age: number = 24,
    third?: number,
    fourth?: number,
    fifth?: number,
    private UG?: string
  ) {
    this.first = first;
    this.x = third || 2;
    this.y = fourth || 3;
    this.z = fifth || 4;
  }
  private draw = (): any => {
    console.log("hi, i am from private draw function.", this.x, this.y, this.z);
  };
  drawRectangle = (): any => {
    this.draw();
    console.log(this.UG);
  };
  get getSrc(): number {
    return this.src || 5646;
  }
  get getUG(): any {
    return this.UG || 987;
  }
  set setSrc(v: number) {
    this.src = v;
  }
}

abstract class Shape {
  abstract getStarted(): string;
}
class CreateShape extends Shape {
  static config: string = "manual configuration";
  static log(mes: any): void {
    console.log(mes);
  }

  readonly property: number = 99;
  constructor(
    public mes: string,
    private times: number,
    protected totalTime: number = 0
  ) {
    super();
    this.property = 88; //readonly only can possible to change here
  }
  getStarted() {
    console.log("creating", this.mes);
    return this.mes;
  }
  get getTimes(): number {
    return this.times;
  }
}

class CreatedShape extends CreateShape {
  constructor(mes: string, times: number, totalTime: number) {
    super(mes, times, totalTime);
  }
  getStarted(): string {
    console.log("created", this.mes, this.totalTime);
    return this.mes;
  }
  get ParentProtectedValue(): number {
    return this.totalTime;
  }
  set ParentProtectedValue(arg: number) {
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

