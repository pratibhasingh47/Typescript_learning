function add2(num : number): number{
    return num+2;
    // return "Hello";
}

console.log(add2(5));
let myvalue = add2(10);

// function getUpper(value ){
//     return value.toUpperCase();
// }  ----> Throws Error


function getUpper(value : string){
    return value.toUpperCase();
}

console.log(getUpper("pratibha"));


function signUp(name : string , email : string, password: string){}


let loginUser = (name: string , email : string, isPaid : boolean = false) =>{}

loginUser("PS" , "ps@gmai.com");

function getValue(val_1:number){
    if(val_1 >5){
        return true;
    }
    return "200 OK";
}

const getHello = (s : string) : string =>{
    return "";
}

const heros = [ "Thor" , "Spider-Man" , "Iron-Man"];

heros.map(hero =>{
    return `hero is ${hero}`;
});

function consoleError(errmsg : string) : void{
    console.log(errmsg);
}


function handleError(errmsg : string) : never{
    throw new Error(errmsg);
    
}

export{}

