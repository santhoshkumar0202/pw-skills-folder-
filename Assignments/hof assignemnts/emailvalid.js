function isValidEmail(email) {
    // Define a regular expression pattern for a basic email format
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]+)?$/;
  
    // Test the email against the pattern
    return pattern.test(email);
  }
  
  // Example usage:
  const email = "user@example.com";
  if (isValidEmail(email)) {
    console.log("Valid email address");
  } else {
    console.log("Invalid email address");
  }
  