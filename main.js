const myLibrary = [];

function Books(title, author, pages, read) {
	this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
  	return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "read book" : "not read yet"}`;
  };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function

const hobbit = new Books("The Hobbit", "J.R.R Tolkien", 295, true);
const harryPotter = new Books("Harry Potter", "J.K. Rowling", 320, false);