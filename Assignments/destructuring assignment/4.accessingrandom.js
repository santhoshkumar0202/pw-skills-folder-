/*function accessrandom(arg){
   let [first,second,,,last]=arg

   return[first,second,last]
}
let arg=[1,2,3,4,5]
 console.log(accessrandom(arg))*/

 //or we achieve this with another way aswell

 function accessrandom(arg){
    let [first,second,...rest]=arg
        let last;
    return[first,second,last ||rest.pop()]
 }
 let arg=[1,2,3,4,5]
  console.log(accessrandom(arg))