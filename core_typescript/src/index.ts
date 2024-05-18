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

    private coursecount = 1

    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name;
    }

    get appleEmail():string{
        return `apple ${this.email}`
    }

    get courseCount():number{
        return this.coursecount
    }

    set cc(courseNum: number){

        if(courseNum <=1){
            throw new Error("course count is 1")
        }
        this.coursecount =courseNum

    }
}

const ps = new user1("ps.com", "prats")
// ps.city = "udaipur";