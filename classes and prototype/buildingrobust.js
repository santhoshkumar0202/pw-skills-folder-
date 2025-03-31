function robust(input){
    try{
        if(typeof input!=="object" && !("name" in input) && !("age" in input)){
           throw new Error("invalid")
        }
        let  obj=input
        return {
            name:obj.name,
            age:obj.age
        }
    }
    catch(error){
        console.log(error.message)

    }
   

}

let obj1={
    name:"santhosh",
    age:24
}
result=robust(obj1)

console.log(result)