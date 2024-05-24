console.log("Pratibha Singh");

const user = { name: "Pratibha", age: "19" }

console.log(user.name);
console.log(user.age);


let variableName: String = "This is my first typescript program";

console.log(variableName);

//variableName = true ---> Throws Error

let num1 = 6;

variableName.toLowerCase();

// Number and boolean

let userId: number = 4747;

console.log(userId.toExponential());
console.log(userId.valueOf());
console.log(userId.toPrecision());
console.log(userId.toString());
console.log(userId.toLocaleString());

let userid = 8787;
userid.toFixed();

let isLoggedIn: boolean = false;

let hero;

function getHero() {
    return "Thor";
}

hero = getHero();

let obj: any = { x: 0 };
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

export { }