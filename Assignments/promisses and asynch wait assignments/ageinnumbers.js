//writing a function to caluclate the age with days 
function ageinnum(obj){
    let fullname= obj.firstname+" "+ obj.lastname
    let age = obj.age*365
    return `fullname is ${fullname.toUpperCase()} and age in day "${age}"`
}

//object
let obj= {
    firstname:"mithun",
    lastname:"s",
    age:25
}

let result=ageinnum(obj)
console.log(result)