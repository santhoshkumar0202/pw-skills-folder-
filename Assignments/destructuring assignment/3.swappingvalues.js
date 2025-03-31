//defining swap function
function swap(a,b){

  [a,b]=[b,a];
  return [a,b];
}

//defining variables
let a=10;
let b=20;


console.log(`before swapping ${a},${b}`);

[a,b]=swap(a,b) //function calling

console.log(`after swapping ${a},${b}`);

