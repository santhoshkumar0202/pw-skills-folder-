/*function reversStr(inputString) {
    this.inputString=inputString
    if (inputString === "") {
        return "";
    } else {
        return this.inputString.substr(1)+ this.inputString[0];
    }
}

const originalString = "Hello, World!";
const reversedString = reversStr(originalString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"
*/
function outerFunction(outerParam) {
    // This is the outer function
    function innerFunction(innerParam) {
      // This is the inner function
      console.log(`Inner function called with ${innerParam}`);
      return innerFunction(outerParam)
    }
  
    console.log(`Outer function called with ${outerParam}`);
    innerFunction(outerParam); // Call the inner function
  }
  
  outerFunction("Hello"); // Call the outer function
  