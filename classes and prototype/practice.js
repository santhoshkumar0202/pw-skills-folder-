/*let obj={}

obj.name="santhosh"
obj.name="sam"
console.log(obj)
*/
/*
function countWordOccurrences(inputString) {
    const words = inputString.split(/\s+/); // Split the string into words

    const wordCount = new Map();
let count;
    words.forEach(word => {
    if(wordCount.has(word)){
        count= wordCount.get(word)
        
    
    wordCount.set(word, count+1);
    }else{
        count= 1
        wordCount.set(word, count);
    }
        //wordCount.set(word, count + 1);
    });

    return wordCount;
}

const inputText = "Your task is to write a function that can count the occurrences of each word in the string Your task is to write a function";
const wordOccurrences = countWordOccurrences(inputText);

wordOccurrences.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
*/
/*
function countWordOccurrences(inputString) {
    const words = inputString.split(/\s+/); // Split the string into words

    const wordCount = new Object();

    words.forEach(word => {
        const count = wordCount.word || 0;
        wordCount.set(word, count + 1);
    });

    return wordCount;
}

const inputText = "Your task is to write a function that can count the occurrences of each word in the string Your task is to write a function";
const wordOccurrences = countWordOccurrences(inputText);

wordOccurrences.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});

function countWordOccurrences(inputString) {
    const words = inputString.split(/\s+/); // Split the string into words

    const wordCount = {};

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++; // Increment count if the word exists
        } else {
            wordCount[word] = 1; // Set count to 1 for a new word
        }
    });

    return wordCount;
}

const inputText = "Your task is to write a function that can count the occurrences of each word in the string Your task is to write a function";
const wordOccurrences = countWordOccurrences(inputText);

for (const word in wordOccurrences) {
    console.log(`${word}: ${wordOccurrences[word]}`);
}
// */
// class Car {

//       setMake(make) {
    
//         this.make = make;
    
//       }
    
//       setModel(model) {
    
//         this.model = model;
    
//       }
    
//       setYear(year) {
    
//         this.year = year;
    
//       }
    
    
//       honk() {
    
//         console.log("Beep Beep!");
    
//       }
    
//     }

//     // let obj1= new Car()

//     // obj1.honk()
//     // //obj1.setMake("hundai")
//     // console.log(obj1)

//     // obj1.setMake("toyota")
//     // console.log(obj1)
//     // obj1.setModel("i20")
//     // console.log(obj1)
//     // obj1.setYear("1388")
//     // console.log(obj1)



// // class car1{
// //     constructor(name="hi",age){
// //         this.name=name
// //         this.age=age || "bolo"
// //     }

// //     honk(){
// //         console.log("honk please")
// //     }
// // }
// // let obj2 =new car1("bdak")
// // obj2.honk()
// // console.log(obj2)

// // class Person {

// //       constructor(fName, lName, age, city) {
    
//         this.fName = fName
    
//         this.lName = lName
    
//         this.age = age
    
//         this.city = city
    
//         this.level = 0
    
//         this.skills = []
    
//       }
    
//       getFullName() {
    
//         const fullName = this.fName + ' ' + this.lName
    
//         return fullName
    
//       }
    
//     }
    
    
//     const person1 = new Person('Anuj', 'Kumar', 31 , 'Delhi')
    
//     const person2 = new Person('Rohan', 'Sharma', 28 , 'Jaipur')
    
    
//     console.log(person1.level)
    
//     console.log(person2.level)
    
//     console.log(person1.skills)
    
//     console.log(person2.skills)


// class Person{
//     constructor(first,last){
//         this.first=first
//         this.last=last
//     }
//     get fullname(){
//         return `fullname: ${this.first} ${this.last}`
//     }
//     set fullname(name){
//         let parts=name.split(" ")
//          this.first=parts[0]
//          this.last=parts[1]
//     }
// }

// let Person12= new Person("Santhosh","kumar")
// console.log(Person12.fullname)
// Person12.fullname="santhosh name"
// Person12.fullname="san name"
// // console.log(Person12)
// class Person1234 {
// constructor(name){
//       this.name = name;
    
//     }
//     ram(){
//        return `this is ram`
//     }
// }
    
//     // adding a method to the Person prototype
    
//     Person1234.prototype.sayHello = function() {
    
//       console.log(`Hello, my name is ${this.name}.`);
//     }

//     let p= new Person1234("sam")
//     console.log(p)
//     p.sayHello()

function Car(make, model) {

      this.make = make;
    
      this.model = model;
    
    }
    
    
    // Add a property to the Car prototype
    
    Car.prototype.year = 2022;
    
    Car.prototype.model = "Fortuner"
    
    
    // Create a new Car object
    
    const myCar = new Car("Toyota","carmy");
    
    
    // Access the instance object property
    
    console.log(myCar.model)
    
    
    // Access the year property on the myCar object
    
    console.log(myCar.year); // Output: 2022
    
    
    //Access the not defined property
    
    console.log(myCar.horsePower); //Output: undefined
    let p2213= new Car("somemake","somemake")
    console.log(p2213.model)

    