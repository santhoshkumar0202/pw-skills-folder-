//definig numchecker function
function numchecker(arr){
    return function(number){
       return arr.includes(number)
    }
}
// array ehich we pass to function as a argument
let arr=[1,2,3,4,58,8,2,6,1,1815,2,82,18,5]
let checker=numchecker(arr)


console.log(checker(10))// it outputs false
console.log(checker(2))// this outputs true