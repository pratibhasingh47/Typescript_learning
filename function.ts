function add2(num : number){
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

export{}

