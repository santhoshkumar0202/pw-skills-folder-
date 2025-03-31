function reverseString(inputString) {
    // Base Case: If the input string is empty, return an empty string
    let he=inputString
    console.log(he)
    if (inputString === "") {
        return "";
    } else {
        // Recursive Step: Reverse the string

        // 1. Get the last character of the inputString
        const lastCharacter = inputString[inputString.length - 1];
        console.log(lastCharacter)

      
        // 2. Recursively call the function with the inputString minus the last character
        const reversedSubstring = reverseString(inputString.slice(0, -1))
             console.log("this revsub",reversedSubstring)
// 
        return lastCharacter + reversedSubstring;
    }
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(`Reversed String: "${reversedString}"`);
