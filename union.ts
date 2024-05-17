let score : number | string  = 47

score = 61
score = "54"

type Users ={
    Name : string;
    id : number
}

type Admin ={
    userName : string;
    id : number
}

let pratibha : Users | Admin ={
    Name : "Pratibha",
    id : 147
}

pratibha = {userName :"debug" , id:147}

function getdbid(id : number | string){
    console.log(`DB id is : ${id}`)

    if(typeof id == "string"){
        id.toLowerCase()
    }
}


const data: (number | string )[] = [1,2,3,"4"]

let pi: 3.14 = 3.14
// pi=3.15

let seatAllotment: "aisle" | "middle" | "window"
