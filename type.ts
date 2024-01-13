// F8 and shift+F8 for err check & Esc to close err tooltip.
type Obj = {
  name: string;
} & (female | male);

type male = { gender: "male"; salary: number };
type female = { gender: "female"; wight: number };
let me: Obj = {
  //wont work like how like func
  name: "rajesh",
  gender: "male",
  salary: 98888888,
};
let child = (prop: Obj) => {
  //work as expected
  if (prop.gender === "male") {
    console.log(prop.salary);
  } else if (prop.gender === "female") {
    console.log(prop.wight);
  }
};
//useCase in api response
type ApiResponse<T> = {
  status: "success" | "error";
  timestamp: Date;
} & ({ data: T } | { message: string });

//conditional types
type stringBolOrNum<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : number;

let isThere: stringBolOrNum<boolean>;
isThere = true;

//it will check array's value type and then set the type. in this case it will be number
type Flatten<T> = T extends Array<infer U> ? U : T;
let checkType: Flatten<string | number[]>; //its type is string or number
checkType = "jhg";
checkType = 8;

// should verify. even if we don't use "T extends null | undefined ?never", it show like string or number like null and undefined are not accepting as type.
type NonNull<T> = T extends null | undefined ? boolean : T;
type MyString = NonNull<string | null | undefined | number>; // Results in 'string' |"number" just like filtering
let otherThenNull: MyString;
otherThenNull = 876.876876;
otherThenNull.toFixed();
otherThenNull = "lkj";
otherThenNull.charCodeAt(6);

//required to optional
type Lead = {
  name: string;
  salary: number;
  isAdmin: boolean;
};
//all are optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};
interface Person {
  name: string;
  age: number;
  address: string;
}
//type arg can be also interface not only types but also like Optional<Person>
let lead1: Optional<Lead> = {
  name: "esh",
  salary: 1888888888, //skipped isAdmin because all are optional
};
//Keyof and Lookup Types
type PersonKey = keyof Person; //like union
type AgeType = Person["age"]; //Lookup Types. number
let key: PersonKey = "address";
let age: AgeType = 1;

//Template Literal Types
type WelcomeMessage<Str extends string> =
  | `Welcome, ${Str}!`
  | `hello, ${Str}!`
  | `hi, ${Str}!`
  | `come back again, ${Str}!`;
type Greeting = WelcomeMessage<"user">; // Results in 'Welcome, user!'
let greetAnyOne: WelcomeMessage<"sir">;
greetAnyOne = "come back again, sir!";
let str: Greeting = "Welcome, user!";

//want to clarify
type ReturnTy<T> = T extends (...args: any[]) => infer R ? R : any;
type Func = () => string;
type Result = ReturnTy<Func>; // Results in 'string'

//Recursive Types
type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

//Constraining Types with Conditional Types
type Check<T> = T extends { a: number } | { b: string } ? T : never;
type CheckedType = Check<
  | { a: number; b: string }
  | { a: boolean; b: boolean }
  | { a: number; b: boolean; c: string }
>; // Result except '{ a: boolean; b: boolean }'
type UncheckedType = Check<{ b: boolean }>; // Results in 'never'
let conditionalPropObj: CheckedType = {
  a: 98,
  b: true, //if gave number to b, or c, it will show err
  c: "ljk",
};

function doWhatever<T>(mes: T): T {
  console.log("hello", mes);
  return mes;
}

console.log(doWhatever<number>(66));
console.log(doWhatever<string>("rajesh pachamuthu"));

interface UseGeneric<T, U> {
  name: T;
  age: U;
}
const person: UseGeneric<string, number> = { name: "rajesh", age: 24 };

class Book<O, T, Th> {
  constructor(public name: O, public price: T, private author?: Th) {}
  get AuthorName(): Th {
    return this.author;
  }
}
let myStory = new Book<string, number, string>("My Story", 999, "rajesh");
console.log(myStory.AuthorName);
console.log(myStory.AuthorName, 1);
console.log(myStory.AuthorName, 2);
