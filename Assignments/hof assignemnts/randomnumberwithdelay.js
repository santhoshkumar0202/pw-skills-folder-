

function generatingrandom(delayintime){
    
    console.log(`generating random number after ${delayintime} seconds`)
let timeremaining=delayintime
let clearcountdown=setInterval(function(){
    if(timeremaining>=1){
        console.log(`remaining time is:- ${timeremaining} seconds`)
        timeremaining--;
    }else
    {
      clearInterval(clearcountdown)
      let random= Math.floor(Math.random()*100)
      console.log("Random number is generated ", random)
    }
},1000)

return{
    timeremaining:timeremaining
}
}
 generatingrandom(2)





