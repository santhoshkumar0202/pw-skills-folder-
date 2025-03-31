 /*function filterandcap(books){
            return books.filter(book=>
                   book.year>2010 )
               //can we do this without riting function
               .map(book=>{
                  
                   return{
                       title:book.title,
                       author: book.author.toUpperCase(),
                       year:book.year
                   }
               })
              
           
           }
        


const books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2012 },
    { title: "Book 3", author: "Author 3", year: 2015 },
    { title: "Book 4", author: "Author 4", year: 2020 },
    { title: "Book 5", author: "Author 5", year: 2016 },
  ];
   
  let filtered=filterandcap(books)
  
  //printing final output

  filtered.map(book=>{
    console.log(`title:${book.title}, author:${book.author}, year:${book.year}`)
  })*/


  function filterAndCap(books) {
    books.forEach(book => {
        if (book.year > 2010) {
            book.author = book.author.toUpperCase();
        }
    });
}

const books = [
    { title: "Book 1", author: "Author 1", year: 2005 },
    { title: "Book 2", author: "Author 2", year: 2012 },
    { title: "Book 3", author: "Author 3", year: 2015 },
    { title: "Book 4", author: "Author 4", year: 2020 },
    { title: "Book 5", author: "Author 5", year: 2016 },
];

let books1=filterAndCap(books); // Modify the 'books' array in place

// Printing the modified books
books.forEach(book => {
    console.log(`title: ${book.title}, author: ${book.author}, year: ${book.year}`);
});
