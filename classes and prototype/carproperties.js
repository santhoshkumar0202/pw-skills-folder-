//defining a class
class cardetails{

    // defining consturctor
    constructor(company,model,year){
        this.company=company
        this.model= model
        this.year=year

    }

  // description method
    get description(){
  console.log(`This is a ${this.year} ${this.company} ${this.model}`)
}}


car1 = new cardetails("toyota","inova","2023")

car1.description // calling the description method