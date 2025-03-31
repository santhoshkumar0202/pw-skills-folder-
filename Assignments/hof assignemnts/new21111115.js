function reversStr(inputString) {
    // Store the input string (unnecessary, but retained from your original code)
    this.inputString = inputString;
    
    // Base Case: If the input string is empty, return an empty string
    if (inputString === "") {
        console.log(`Base case reached with inputString: "${inputString}"`);
        return "";
    } else {
        // Recursive Step: Reverse the string
        console.log(`Reversing the string: "${inputString}"`);
        var reversedSubstring = reversStr(inputString.substr(1));
        console.log(`Reversed substring: "${reversedSubstring}"`);
        console.log("helo")
        return  inputString[0];
    }
}

const originalString = "Hello, World!";
const reversedString = reversStr(originalString);
console.log(`Reversed String: "${reversedString}"`);
