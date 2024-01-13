let me = {
    //wont work like how like func
    name: "rajesh",
    gender: "male",
    salary: 98888888,
};
let child = (prop) => {
    //work as expected
    if (prop.gender === "male") {
        console.log(prop.salary);
    }
    else if (prop.gender === "female") {
        console.log(prop.wight);
    }
};
let isThere;
isThere = true;
let checkType; //its type is string or number
checkType = "jhg";
checkType = 8;
let otherThenNull;
otherThenNull = 876.876876;
otherThenNull.toFixed();
otherThenNull = "lkj";
otherThenNull.charCodeAt(6);
//type arg can be also interface not only types but also like Optional<Person>
let lead1 = {
    name: "esh",
    salary: 1888888888, //skipped isAdmin because all are optional
};
let key = "address";
let age = 1;
let greetAnyOne;
greetAnyOne = "come back again, sir!";
let str = "Welcome, user!";
let conditionalPropObj = {
    a: 98,
    b: true, //if gave number to b, or c, it will show err
    c: "ljk",
};
function doWhatever(mes) {
    console.log("hello", mes);
    return mes;
}
console.log(doWhatever(66));
console.log(doWhatever("rajesh pachamuthu"));
const person = { name: "rajesh", age: 24 };
class Book {
    constructor(name, price, author) {
        this.name = name;
        this.price = price;
        this.author = author;
    }
    get AuthorName() {
        return this.author;
    }
}
let myStory = new Book("My Story", 999, "rajesh");
console.log(myStory.AuthorName);
console.log(myStory.AuthorName, 1);
console.log(myStory.AuthorName, 2);
