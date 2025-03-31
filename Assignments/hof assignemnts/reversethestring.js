function revese(string){
    let reverse= ""
    for(let i=string.length-1;i>=0;i--){
        reverse = reverse+string[i]
    }
    return reverse
}

reversefun=revese("hello")

console.log(reversefun)

/*setTimeout(function(){
    let reverseafterdelay = revese("hello world")
    console.log(reverseafterdelay)
},2000)*/
// here we are passing the arg from the global scope or from outside of settimeout  function
// and we have define the argument
let argument="santhosh kumar"
setTimeout(function(arg){
    let reverseafterdelay = revese(arg)
    console.log(reverseafterdelay)
},2000,argument)