function detectTypes(val:number|string){
    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideID(id:string|null){
    if( !id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}