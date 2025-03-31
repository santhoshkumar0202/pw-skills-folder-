function conversion(input){
    //defining try catch , error handling
    try{
        // try block
        let conversion= +input
    if (isNaN(conversion) ){
         throw new Error("inavlid")
    }
        

    
    // returning the result
    
    return conversion
}
    
    catch(Error){
        // catch block
        return Error.message;

    }


}

//defining chars

let char="abc"
let char1="123"
// call the function here with inputs
console.log(conversion(char)) //it will return invalid number
console.log(conversion(char1)) // this will be writing 123





