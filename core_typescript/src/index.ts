console.log("Typescript is here");
console.log("Typescript is still here");

class user1 {
    public email: string
    private name: string
    private city: string = ""
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
        this.city = "udaipur"
    }


}
class user2 {
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }
}

const ps = new user1("ps.com", "prats")
// ps.city = "udaipur";