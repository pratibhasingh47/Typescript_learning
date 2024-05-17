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