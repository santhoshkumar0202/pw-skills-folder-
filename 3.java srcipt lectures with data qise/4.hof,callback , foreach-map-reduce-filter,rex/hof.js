
//higer order function is function which takes one or more functions as a parameter

/*var two=(n)=>{
    return n**2
}

//console.log(square(4))

var cube=(two,n)=>{
    return two(n) * n
}
console.log(cube(two,3))

function sayhello(){
    return (()=>{
 console.log("hi man")
    })();
}

console.log(sayhello())

*/

/*//higer order of function
const higherorder=n=>{
    const one=m=>{
        const two=p=>{
            return m+n+p;
    
    }
    return two
    }
return one
    
}
console.log(higherorder(20)(1)(3))

num=[1,2,3,5,8,7]

function sum(arry){
    let total=0
    arry.forEach(function(element){
        total+=element
    });
    return total
}
console.log(sum(num))
//timeinterval

function hello(){
    console.log("hi ,click here", Math.random())
}
//setInterval(hello, 1000)
setTimeout(hello, 9000)

//setinterval(hello,9000)*/
var two=(n=4)=>{
    return n**2
}

console.log(two())

/*var cube=(two,n)=>{
    return two() * n
}
console.log(cube(two,3))*/
