let dec=document.querySelector(".dec")
console.log(dec)
let inc=document.querySelector(".inc")
let reset=document.querySelector(".reset")
let displayvalue=document.querySelector(".disv")
console.log(dec,inc,reset,displayvalue)
console.log(displayvalue.innerText)
dec.innerText="decrement by 1"
inc.innerText="increment by 1"
dec.addEventListener("click",()=>{
    const value=Number(displayvalue.innerText)
    if (value>0){
        displayvalue.innerText=value-1
    }
    else
    {
        alert("Cant go beyond that")
        
    }
      //return displayvalue;
})

inc.addEventListener("click",()=>{
    let value=Number(displayvalue.innerText)
    if(value<10){
        displayvalue.innerText=value+1
        
    }
    else{
        
        alert("You cant go beyond 10")
    }
})

reset.addEventListener("click",()=>{
    let value = Number(displayvalue.innerText)
    if(value>0){
        return displayvalue.innerText=0
    }
})