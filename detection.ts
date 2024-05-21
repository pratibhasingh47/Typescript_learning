function detectTypes(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideID(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}


function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        // (parameter) x: Date
    } else {
        console.log(x.toUpperCase());
        // (parameter) x: string
    }
}


type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet : Fish|Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    }
    else{
        pet
        return "Bird Food"
    }
}