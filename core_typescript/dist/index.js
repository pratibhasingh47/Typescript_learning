"use strict";
console.log("Typescript is here");
console.log("Typescript is still here");
class user1 {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
        this.city = "udaipur";
    }
}
class user2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.coursecount = 1;
        this.email = email;
        this.name = name;
    }
    get appleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this.coursecount;
    }
    set cc(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count is 1");
        }
        this.coursecount = courseNum;
    }
}
const ps = new user1("ps.com", "prats");
// ps.city = "udaipur";
