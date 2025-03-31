/*function isValidURL(input) {
    // Define a regular expression pattern for valid URLs
    const urlPattern = /^(https?|https):\/\/[A-Za-z0-9-]+[\.]?[A-Za-z]+(\.[A-Za-z]+)?$/;

    // Test the input against the pattern
    return urlPattern.test(input);
}

// Example usage:
const url1 = "http://www.example.com";
const url2 = "https://www.pwskills.com";
const url3 = "ftp://invalid-url.com";
const url4 = "https://www.example.co.uk";
const url5 = "https://www.example.com.co.uk";

console.log(isValidURL(url1) ? `${url1} is a valid URL` : `${url1} is not a valid URL`);
console.log(isValidURL(url2) ? `${url2} is a valid URL` : `${url2} is not a valid URL`);
console.log(isValidURL(url3) ? `${url3} is a valid URL` : `${url3} is not a valid URL`);
console.log(isValidURL(url4) ? `${url4} is a valid URL` : `${url4} is not a valid URL`);
console.log(isValidURL(url5) ? `${url5} is a valid URL` : `${url5} is not a valid URL`);
*/


// actuall code
function isValidURL(input) {
    // Define a regular expression pattern for valid URLs
    const urlPattern = /^(https?|https):\/\/[A-Za-z0-9-]+(\.[A-Za-z]+)+$/;

    // Test the input against the pattern
    return urlPattern.test(input);
}

// Example usage:
const url1 = "http://www.example.com";
const url2 = "https://www.pwskills.com";
const url3 = "ftp://invalid-url.com";
const url4 = "https://www.example.co.uk";
const url5 = "https://www.example.com.co.uk";

console.log(isValidURL(url1) ? `${url1} is a valid URL` : `${url1} is not a valid URL`);
console.log(isValidURL(url2) ? `${url2} is a valid URL` : `${url2} is not a valid URL`);
console.log(isValidURL(url3) ? `${url3} is a valid URL` : `${url3} is not a valid URL`);
console.log(isValidURL(url4) ? `${url4} is a valid URL` : `${url4} is not a valid URL`);
console.log(isValidURL(url5) ? `${url5} is a valid URL` : `${url5} is not a valid URL`);
