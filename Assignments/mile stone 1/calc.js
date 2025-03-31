function cal(sum1,sun2,operator){
    
     switch(operator){
        case "+":
        result=sum1+sun2
        break;
        case "-":
        result=sum1-sun2
        break;
        case "*":
        result=sum1*sun2
        break;
        case "/":
        result=sum1/sun2
        break;
        case "%":
        result=sum1%sun2
        break;
        case "**":
        result=sum1**sun2
        break;
        default:
        console.log("invalid input")
     }

      console.log(`result = ${result}`)
      
}
sum1=2
sun2=4
operator="**"
console.log(cal(sum1,sun2,operator))