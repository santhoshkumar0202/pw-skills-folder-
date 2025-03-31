// dounnle function
function doublethearrat(input,callback){
    let arr=input

return callback(arr)

}

//call back function which goes into double func
function callback(array){


    result= array.map(arry=>{
       return arry*2
    })

    return result
}

//array of intigers

let array= [1, 2, 3, 4, 5]

//returning them to modified
let modified= doublethearrat(array,callback)

console.log(modified)