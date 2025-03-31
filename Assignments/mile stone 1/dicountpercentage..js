function dicper(orginalprice,dicprice){
let discountamount=orginalprice-dicprice;
let discpercentage=(discountamount/orginalprice)*100

return parseFloat(discpercentage.toFixed(10))

}

orginalprice=250
dicprice=120
console.log(dicper(orginalprice,dicprice),"%")