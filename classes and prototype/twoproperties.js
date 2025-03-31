class person{
    constructor(name,age){
        this.name=name || "unknown"
        this.age=age   || "0"

    }

    get details(){
       return `Name:${this.name} Age:${this.age}`
    }

}


let person1= new person("mithun",25)

let person2= new person()

console.log(person1.details)
console.log(person2.details)