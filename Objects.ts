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

export { }