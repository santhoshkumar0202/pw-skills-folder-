// Define the Student prototype object
function Student(name) {
    this.name = name;
  }
  
  // Add a method to the prototype of the Student object
  Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object with the name "Mithun"
  const mithun = new Student("Mithun");
  
  // Call the printDetails method for the instantiated Student object
  mithun.printDetails(); // prints Hello, my name is Mithun
  