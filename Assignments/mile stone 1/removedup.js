
let cartitems=[]
function isitempresentincart(item){
           for ( let cartitem of cartitems) {
            if(cartitem.id==item.id){
                return cartitem
            }
            else{
                return null
            }
           }
          // return null
}

function addingtocart(item){
    const exist=isitempresentincart(item)


    if (exist){
        exist.quantity+=item.quantity;
    }
    else
    {
        cartitems.push(item);
    }
}


const item1 = { id: 1, name: "Product A", price: 20.0, quantity: 2 };
const item2 = { id: 2, name: "Product B", price: 15.0, quantity: 1 };

addingtocart(item1);
addingtocart(item2);
addingtocart(item1);


console.log(cartitems);