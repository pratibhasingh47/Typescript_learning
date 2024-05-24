const User = {
    name: "Pratibha",
    email: "pratibhasingh@gmail.com",
    isActive: true
}

function createUser({ name: string, isPaid: boolean }) { }

let newUser = {
    name: "Pratibha Singh",
    isPaid: false,
    email: "ps@.com"
}

createUser(newUser)

createUser({ name: "ABC", isPaid: false })


function createCourse(): { name: string, price: number } {
    return { name: "reactjs", price: 399 }
}

type User = {
    fullname: string;
    email: string;
    isActive: boolean
}

function createuser(user: User) { }

createuser({ fullname: "abc", email: "abc", isActive: true })

type user1 = {
    readonly _id: string
    Name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}

let user_1: user1 = {
    _id: "1234",
    Name: "PS",
    email: "ps@.com",
    isActive: false
}

user_1.Name = "ASSSS"
// user_1._id= "1255" --> Error

type cardnum = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardnum & cardDate & {
    cvv: number
}

type Person = {
    name: string;
    age: number;
};

function greet(person: Person) {
    return "Hello " + person.name;
}

interface Person2 {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};


let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

interface ColorfulCircle extends Colorful, Circle { }

const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
};

class Point {
    x = 0;
    y = 0;
}

const pt = new Point();
console.log(`${pt.x}, ${pt.y}`);

function PrintCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


type point = {
    x: number;
    y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

export { }