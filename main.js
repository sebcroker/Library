const myLibrary = [];
const openBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

const hobbit = new Books("The Hobbit", "J.R.R Tolkien", 295, true);
const harryPotter = new Books("Harry Potter", "J.K. Rowling", 320, false);

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
/**    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === true ? "read book" : "not read yet"}`;
    };*/
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

//Loops through array of books and displays each book on the HTML page IN A TABLE
function displayBooksOnPage(data) {
    let myTable = document.querySelector('#myTable'); //referencing the DOM element with the id = myTable
    for (let i = 0; i < data.length; i++) { //loop through the objects in data (which is the object of myLibrary)
        //add them to tBody in the syntax as <tr> <td>data[i].books</td> <td>blah</td>  <td>blah</td> </tr>
        let newRow = myTable.insertRow() //added row when there is a new book object
        newRow.insertCell(0).innerHTML = data[i].title;
        newRow.insertCell(1).innerHTML = data[i].author;
        newRow.insertCell(2).innerHTML = data[i].pages;
        newRow.insertCell(3).innerHTML = data[i].read;
    }
}

addBookToLibrary(hobbit);
addBookToLibrary(harryPotter);

displayBooksOnPage(myLibrary);

//displayBooksOnPage();
//console.log(hobbit.info());