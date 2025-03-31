/*function multiplyBy7(m){

    return function(x,y) { return x * y+m};
    
    }
    const changedValue = multiplyBy7(2);// it is expecting only one value
    console.log(changedValue(10,10))


    /*let hello=function(hello1){
        console.log(hello1,"hello hnk.")
    }

    console.log(hello("jhs"))

    let itemsInCart = [

        "apple",
           
       "comb",
           
       "mike",
           
       "keyboard",
           
       "t-shirt","mobile holder",
           
           ];
   
        let names= itemsInCart.forEach((items)=>{  /////it return undefined since it cant be return it cant be stored in any variable
               return items
           })
           console.log(names)

           let techStack = ["HTML", "CSS", "Javascript", "NodeJS", "React JS"];



// Apply find method.



let result = techStack.find(function (curr) {
  return curr === "JavaScript" || curr.indexOf("Javascrip") !== -1;
});

if (result) {
  const index = techStack.indexOf(result);
  console.log("js is present at index", index);
} else {
  console.log("not");
}
console.log(result)
const currentDate = new Date('January 24, 2023, 12:00:00');

const sameDate = new Date();

sameDate.setTime(currentDate.getTime());

console.log(sameDate);
let string = "someone52@gmail.com";

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(pattern.test(string));
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.length

console.log(text)*/
const fullNames = ["Adam Benson","Clare Donaldson","Ben Adams","Donald Clarkson"]

const names = [ { firstName: 'Anil', lastName: 'Seervi' } ]

fullNames.forEach((n) => {
 const obj = {};                             // empty object for initialization
 [obj.firstName, obj.lastName] = n.split(" ") // split at spaces and destructure initialize
 names.push(obj)                            // push the object to names array
})

console.log(names)