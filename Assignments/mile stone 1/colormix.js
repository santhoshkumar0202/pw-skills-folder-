function color(color1,color2){

    switch(color1,color2){
        case ("blue "&&"red"||"red"&&"blue"):
            console.log("purple")
            break;
        case ("yello"&&"red"||"red"&&"yellow"):
            console.log("orange")
            break;
        case ("blue"&&"yellow"||"yello"&&"blue"):
            console.log("green")
            break;
       default:
        console.log("give valid input")
    }

}
let color1="yellow"
let color2="red"
color(color1,color2)