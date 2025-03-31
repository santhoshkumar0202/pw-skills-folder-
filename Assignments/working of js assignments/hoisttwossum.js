 function sum(x,y){
    console.log(result)// result is hoisted to too of the block scope
 var x=10
 var y=20
  var result=x+y
 return result 

 }

// it return or prints the output the above prints undefined because only declaration of variables are hoisted
 console.log(`2nd console value ${sum()}`)