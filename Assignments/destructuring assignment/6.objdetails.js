//defining object details function here
function objdetails(personobj){
  let{name,address:{street}}  =personobj

  return{
    name:name,
    street:street
}
}

let personobj={
    name:"mithun", age:21,
    address:{
        street:"b8,block b,industrial area",
        city:"sector 22,noida",
        state:"uttar pradesh"
    }
}
//calling and returning to the result variable
let result=objdetails(personobj)
//here is the final output
console.log(result)