function removedubs(input){

let unique= new Set(input)
let uniquearr= Array.from(unique)

return(`These are unique numbers: ${uniquearr} `)

}

let num=[1,2,3,4,5,6,8,7,121,21,1,2,3,4,6,8,14,79,2]

let filterandretuenunique=removedubs(num)
console.log(filterandretuenunique)
