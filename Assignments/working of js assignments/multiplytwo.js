//calling before declaration
// note only function declaration are hoisted
console.log(name(1,2))
// since it is hoisting goes to the top of the respective scope


function name(x,y){

    let multi= x*y
    return multi
}
