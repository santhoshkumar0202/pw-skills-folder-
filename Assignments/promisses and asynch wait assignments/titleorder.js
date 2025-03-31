// Function that takes list of books and a callback function
function processBooks(books, callback) {
    // Extracting titles using map function
    const titles = books.map(book => book.title);
    
    // Sorting the titles in alphabetical order
    const sortedTitles = titles.sort();
    
    // Passing the sorted titles to the callback function
    callback(sortedTitles);
}

const bookList = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
    
];

// Callback function to log titles to the console in order
function logTitles(titles) {
    console.log("Titles of the books in alphabetical order:");
    titles.forEach(title => {
        console.log(title);
    });
}

// Calling the processBooks function with the book list and the callback function
processBooks(bookList, logTitles);
