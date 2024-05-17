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

export { }