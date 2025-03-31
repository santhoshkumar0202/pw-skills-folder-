class employeedetails{
  //constuctor
    constructor(name,position,salary){
        this.name=name
        this.position=position
        this.salary=salary
    }
   //salary method
    get salarydetails(){
        return `salary of the empoyee is ${this.salary } INR`

    }

    
}
//instance of obj
let Person= new employeedetails("vivek","manager",80000)

console.log(Person.salarydetails)