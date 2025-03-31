const calculateTotalCost = (cart) => {
    let total=0;
    for (item of cart){

        console.log(item)
        total +=item.unitPrice*item.quantity
    }
    return total
};

// cart with items
const customerCart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 3 },
    { unitPrice: 8, quantity: 1 }
];

const totalCost = calculateTotalCost(customerCart);
console.log("Total Cost:", totalCost);
