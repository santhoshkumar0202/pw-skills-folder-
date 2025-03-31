function filter(products){
    return function(cat){
    return   products.filter(items=>items.category===cat)
    }
}

// entries or yet to be inputs to filter function
const productsArray = [
    { id: 1, name: 'shirts', category: 'Clothing' },
    { id: 2, name: 'Pants', category: 'Clothing' },
    { id: 3, name: 'phone', category: 'Electronics' },
    { id: 4, name: 'stationary', category: 'Books' },
    { id: 5, name: 'Ps5', category: 'Electronics' }
  ];


  let filtered=filter(productsArray)("Electronics")// returning the output to the filtered

  console.log(filtered) /// printing the output