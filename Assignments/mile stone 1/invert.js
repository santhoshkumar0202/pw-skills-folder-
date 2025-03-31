
function invert(i){
    let pattern= " 123";

for(let row=1; row<=i ;row++){
     pattern= "-> ";
    // console.log(row,pattern)
    for(let j =1;j<=row;j++){
    pattern +="*";
}
console.log(pattern)
}
}

invert(10)