
console.log(threevars())

function threevars(){
    console.log(x) //it cant be hosted to top of their scope thows reference error since it is not following hoisted meachanisum or behaviour
    let x="name"
    console.log(`you ${y}`)//  return or prints undefined since it  can only declare the varaibes and hoisted to top of the  scope
    var y= "age"
    console.log(`your identity type${z}`)// consoles reference error it cant be hoisted same as x
    const z= "roll no"
}