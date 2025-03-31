function countWordOccurrences(inputString) {
    const words = inputString.split(/\s+/); // Split the string into words

    const wordCount = new Map();

   words.forEach(word=>{
    let count=wordCount.get(word)||0
    wordCount.set(word,count+1)
   })
    return wordCount;
}

// Example usage:
const inputText = "Your task is to write a function that can count the occurrences of each word in the string Your task is to write a function";
const wordOccurrences = countWordOccurrences(inputText);
//console.log(wordOccurrences)
// Display the word occurrences
wordOccurrences.forEach(( count1,word212) => {
    console.log(`${word212}: ${count1}`);
});
