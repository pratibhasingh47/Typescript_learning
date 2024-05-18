console.log("Typescript is here");
console.log("Typescript is still here");

class user1 {
    email: string
    name: string
    private city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
        this.city = "udaipur"
    }
}

const ps = new user1("ps.com", "prats")
// ps.city = "udaipur";