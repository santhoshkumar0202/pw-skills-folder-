function countWordOccurrences(inputString) {
    const words = inputString.split(/\s+/); // Split the string into words

    const wordCount = {}; // Object to store word counts

    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word] += 1; // Increment the count if the word is already present
        } else {
            wordCount[word] = 1; // Set count to 1 if the word is encountered for the first time
        }
    });

    return wordCount;
}

// Example usage:
const inputText = "Your task is to write a function that can count the occurrences of each word in the string Your task is to write a function";
const wordOccurrences = countWordOccurrences(inputText);

// Display the word occurrences
for (const word in wordOccurrences) {
    console.log(`${word}: ${wordOccurrences[word]}`);
}
