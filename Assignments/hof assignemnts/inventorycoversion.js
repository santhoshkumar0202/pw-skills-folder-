const storeInventory = {
    item1: {
        name: "Product A",
        priceUSD: 10.99,
    },
    item2: {
        name: "Product B",
        priceUSD: 25.49,
    },
    item3: {
        name: "Product C",
        priceUSD: 5.99,
    },
};

// Define the exchange rate
const exchangeRateUSDToINR = 80;

// Use the map higher-order function to create a new object with converted prices
const inventoryInRupees = Object.keys(storeInventory).map((key) => {

   let items= storeInventory[key]
    //let items= storeInventory.key.name
    let price=items.priceUSD *exchangeRateUSDToINR
    return{
        name:items.name,
        priceinr:price
    }
})

let item1=inventoryInRupees[0]
let item2=inventoryInRupees[1]
let item3=inventoryInRupees[2]
console.log(inventoryInRupees)