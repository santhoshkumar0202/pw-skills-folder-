//defining a function called reversethesting
function reversethestring(arg){
    let reversed=arg.split("").reverse().join("")
   return reversed
}
//without timer reversed string
console.log("Rerversed string without timer function:-",reversethestring("Hello"))

//with timer reversed string
//defining and performing the settimerout finction
setTimeout(function(arg){
    reversedarg=reversethestring(arg)
console.log("Reversed string with settimerout function:-",reversedarg)
}
    ,2000,"pw skills")