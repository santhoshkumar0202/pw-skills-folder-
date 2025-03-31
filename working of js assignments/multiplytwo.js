//calling before declaration
console.log(result(10,20))
// since it doest allow to hoiste the function expression it cant go to the top of the respective scope


const result =function(x,y){

    let multi= x*y
    return multi
}