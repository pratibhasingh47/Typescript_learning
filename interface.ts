interface Userr {
    readonly dbID: number
    email: string,
    userID: number,
    googleId: string
    // startTrail : ()=> string
    starttrail(): string
    getCoupon(couponname: string): number

}

interface Userr {
    githubToken: string
}

interface Adminn extends Userr {
    role: "admin" | "ta" | "student"
}

const Pratibha: Userr = {
    dbID: 41,
    email: "ps.com",
    userID: 123,
    googleId: "ps@.com",
    starttrail: () => {
        return "trail started"
    },
    getCoupon: (name: "pratibha") => {
        return 10
    },
    githubToken: "ps47",
}

const pratibha_singh: Adminn = {
    role: "student",
    dbID: 414,
    email: "ps.com",
    userID: 123,
    googleId: "ps@.com",
    starttrail: () => {
        return "trail started"
    },
    getCoupon: (name: "pratibha") => {
        return 10
    },
    githubToken: "ps47",
}