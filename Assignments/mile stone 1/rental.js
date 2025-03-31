function rentalcost(days,cartype){
let rental;

    switch(cartype){
case "economy":
    rental=4000;
    break;
case "midsize":
    rental=15000;
    break;
case "luxury":
    rental=25000;
    break;
    default:
        console.log("inavalid input")

    }
    let total=rental*days
    return total
}

const days = 5;
const carType = "luxury";

totalCost1=rentalcost(days,carType)
console.log(totalCost1)