let lis=[];
function div(numbers){
//for(i=0;i<numbers.length;i++){
for(let num of numbers){
    let result=[];
    let num1=num
    if(num1%3===0&& num1%2 !==0){
        result=lis.push(num1)
        
    }/*
    else
    {
        console.log(num1,"is not divisible by 3")
    }
    return result*/
}
return lis
}

let divt=div([1,3,6,87,4,51,84,12,21,3,2,201,52,42,5,9,])
console.log(divt)