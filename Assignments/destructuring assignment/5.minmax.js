function maxandmin(arg){
let max = Math.max(...arg)
let min=Math.min(...arg)
return {
    min:min,
    max:max}
}
let arg=[5,2,5,2,5,2,52,86,98,85,8,6,89,8,2]
let result= maxandmin(arg)
console.log(result)