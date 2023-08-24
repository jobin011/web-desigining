// Define the Book object
function Book(title, author) {
    this.title = title
    this.author = author
    this.isAvailable = true
}


// Array to store books
const library = []

// Function to add a new book to the library
function addBook(title, author) {
    const newBook = new Book(title, author)
    library.push(newBook)
}

function findBookByTitle(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            return library[i];
        }
    }
    return null; // Book not found
}

// Function to borrow a book
function borrowBook(title) {
    const book = findBookByTitle(title)
    if (book) {
        if (book.isAvailable) {
            book.isAvailable = false
            console.log(`You have borrowed "${book.title}" by ${book.author}.`)
        } else {
            console.log(`"${book.title}" is not available for borrowing.`)
        }
    } else {
        console.log(`"${title}" is not found in the library.`)
    }
}

// Function to return a book
function returnBook(title) {
    
    const book = findBookByTitle(title)
    if (book) {
        if (!book.isAvailable) {
            book.isAvailable = true
            console.log(`You have returned "${book.title}" by ${book.author}.`)
        } else {
            console.log(`"${book.title}" is already available.`)
        }
    } else {
        console.log(`"${title}" is not found in the library.`)
    }
}

// Function to list all books
function listBooks() {
    console.log("Library Catalog:")
    library.forEach(book => {
        console.log(`Title: ${book.title}`)
        console.log(`Author: ${book.author}`)
        console.log(`Availability: ${book.isAvailable ? "Available" : "Borrowed"}`)
        console.log("---------------------")
    })
}

// Example usage
addBook("The Hobbit", "J.R.R. Tolkien")
addBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling")
borrowBook("The Hobbit")
listBooks()
returnBook("The Hobbit")
