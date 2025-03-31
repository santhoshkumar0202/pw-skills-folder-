// function that takes input and callback function
function manipulatestring(input,callback){
     let input1= input
    return callback(input1)

}

// here is the input value
let str= "santhosh kumar"
// returing to teh manipulate
let manipulate= manipulatestring(str,()=>{
    let modified= str.toUpperCase()
    return modified
})
//logging the result to console
console.log(`Before converting to uppercase:- "${str}"`)
console.log(`converted to uppercase:- "${manipulate}"`)