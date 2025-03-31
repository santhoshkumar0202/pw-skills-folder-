function calculateBillPerPerson(costPerDish, numberOfPeople) {
    const totalBill1 = costPerDish * numberOfPeople;
    const billPerPerson = totalBill1 / numberOfPeople;
      let hello=10
    return {
        totalBill: totalBill1,
        billPerPerson: billPerPerson
    };
}

// Example usage
const dishCost = 25;
const peopleCount = 4;
const billInfo = calculateBillPerPerson(dishCost, peopleCount);
console.log(calculateBillPerPerson.hello)
console.log("Total Bill:", billInfo.totalBill);
console.log("Bill Per Person:", billInfo.billPerPerson);

