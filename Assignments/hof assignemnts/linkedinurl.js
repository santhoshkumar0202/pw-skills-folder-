function isValidLinkedInURL(input) {
    // Define a regular expression pattern for valid LinkedIn profile URLs
    const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the input pattern
    return urlPattern.test(input);
}

// Example usage:
const url1 = "https://www.linkedin.com/in/johndoe123";
const url2 = "https://www.linkedin.com/in/susan-smith-1234";
const url3 = "https://www.linkedin.com/in/invalid@example";
const url4 = "https://www.linkedin.com/in/s";

console.log(isValidLinkedInURL(url1) ? `${url1} is a valid LinkedIn profile URL` : `${url1} is not a valid LinkedIn profile URL`);
console.log(isValidLinkedInURL(url2) ? `${url2} is a valid LinkedIn profile URL` : `${url2} is not a valid LinkedIn profile URL`);
console.log(isValidLinkedInURL(url3) ? `${url3} is a valid LinkedIn profile URL` : `${url3} is not a valid LinkedIn profile URL`);
console.log(isValidLinkedInURL(url4) ? `${url4} is a valid LinkedIn profile URL` : `${url4} is not a valid LinkedIn profile URL`);
