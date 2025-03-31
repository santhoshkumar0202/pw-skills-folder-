let cart=[2,6,7,8]
function bug(cart){
    let fixedcart=[ ];

    for (let i = 0; i < cart.length; i++){
        fixedcart.push(cart[i]*2)
    }
  return fixedcart
}

let fixedquantities=bug(cart)
console.log(`fixed the cart quantities:${[fixedquantities]}`)

let str="asblabalfkabfk"
let str1="asn"
console.log(str1.length)

let li=[1,2,4,4,5,7,4,7]
console.log(li.indexOf(7))

console.log(Math.floor( Math.random()*10))