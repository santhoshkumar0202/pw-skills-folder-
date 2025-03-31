function countVowels(name) {
    const vowels = "aeiouAEIOU"; // List of vowels
    let vowelCount = 0;

    for (const char of name) {
        if (vowels.indexOf(char) !== -1) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// arguments passwd
const personName = "santhosh";
const numberOfVowels = countVowels(personName);
console.log("Number of vowels:", numberOfVowels);
