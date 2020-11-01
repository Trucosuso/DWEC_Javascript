/** Class representing a book */
class Book {
    /**
     * Constructs a book
     * @param {String} title 
     * @param {String} genre 
     * @param {String} author 
     * @param {Boolean} read False by default
     * @param {Date} readDate Null by default
     */
    constructor(title, genre, author, read = false, readDate = null) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

/** Class representing a booklist */
class Booklist {
    /**
     * Constructs a booklist
     * @param {Array} booklist Array of all books
     * @param {Book} lastBook Last readed book
     */
    constructor(booklist = [], lastBook = null) {
        this.booklist = booklist;
        this.lastBook = lastBook;
    }

    // GETTERS

    /**
     * Gets the book currently being read
     * @public
     * @returns {Book}
     */
    get currentBook() {
        for (const book of this.booklist) {
            if (!book.read) {
                return book;
            }
        }
        return null;
    }

    /**
     * Gets the book that will be read next
     * @public
     * @returns {Book}
     */
    get nextBook() {
        for (const book of this.booklist) {
            if (!book.read && book != this.currentBook) {
                return book;
            }
        }
        return null;
    }

    /**
     * Quantity of books marked as readed
     * @public
     * @returns {Number}
     */
    get readedBooks() {
        return this.booklist.filter(book => book.read).length;
    }

    /**
     * Quantity of books not marked as readed
     * @public
     * @returns {Number}
     */
    get unreadedBooks() {
        return this.booklist.filter(book => !book.read).length;
    }

    /**
     * Total of books in the booklist
     * @public
     * @returns {Number}
     */
    get totalBooks() {
        return this.booklist.length;
    }

    // Methods

    /**
     * Adds books to the list
     * @param {...Book} book 
     */
    add(...book) {
        this.booklist.push(...book);
    }

    /**
     * Gives the current book a read date, change the last readed book to current book and sets the read state of the current book to true.
     * @returns {Book} Book that has just being read.
     */
    finishCurrentBook() {
        if (this.currentBook != null) {
            this.currentBook.readDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.currentBook.read = true;
            return this.lastBook;
        }
        return null;
    }
}

window.addEventListener("load", main);
var booklist = new Booklist();

/**
 * Starts the script
 */
function main() {
    pintarTabla(document.getElementById("list"), booklist);
    document.getElementById("addBookButton").addEventListener("click", añadirLibro);
    document.getElementById("bookReaded").addEventListener("click", activarFecha);
    document.getElementById("finishCurrentBookButton").addEventListener("click", finishCurrentBook);
}

/**
 * Enables the date input if the book being added has been read and disables it if the book has not been read
 * @param {MouseEvent} e 
 */
function activarFecha(e) {
    if (e.target.checked) {
        document.getElementById("bookDate").disabled = false;
    } else {
        document.getElementById("bookDate").disabled = true;
    }
}

/**
 * Draws a table inside element and fill it with books from booklist.
 * Writes the current book being read and updates the readed book counter
 * @param {HTMLElement} element
 * @param {Booklist} booklist 
 */
function pintarTabla(element, booklist) {
    let table = "";
    table += "<table class=\"table table-sm table-striped\" id=\"booklistTable\">";
    table += "<thead><th>Title</th><th>Genre</th><th>Author</th><th>Has been read?</th><th>Read date</th></thead>";
    table += "<tbody>";


    booklist.booklist.forEach( /** @param {Book} book */ book => {

        // If the book being added to the table is the current book, color its row
        if (book === booklist.currentBook) {
            table += "<tr class=\"table-primary\">";
        } else {
            table += "<tr>";
        }

        // If the book has been readed set readed to Sí to show it in the table
        let readed = "No";
        if (book.read) {
            readed = "Sí";
        }

        // If the book has a valid date print day/month/year
        let date = "-";
        if (book.readDate instanceof Date && !isNaN(book.readDate.getDate())) {
            const options = { year: "numeric", month: "numeric", day: "numeric" };
            date = book.readDate.toLocaleDateString("es-ES", options);
        }

        // Print book into 
        table += "<td>" + book.title + "</td>" + "<td>" + book.genre + "</td>" + "<td>" + book.author + "</td>" + "<td>" + readed + "</td>" + "<td>" + date + "</td>";

        table += "</tr>";
    });
    table += "</tbody>";
    element.innerHTML = table;

    // Update current book if exists else say there is no book
    if (booklist.currentBook != null) {
        let currentBook = `You are now reading ${booklist.currentBook.title} by ${booklist.currentBook.author}.`;
        document.getElementById("currentBook").innerHTML = currentBook;
    } else {
        let currentBook = "You are not reading anything right now.";
        document.getElementById("currentBook").innerHTML = currentBook;
    }


    // Update readed books counter
    let readedBooksCounter = `You have read ${booklist.readedBooks} out of ${booklist.totalBooks} books.`;
    document.getElementById("numberOfReadedBooks").innerHTML = readedBooksCounter;
}

/**
 * Adds a book from the form to the booklist
 */
function añadirLibro() {
    let title = document.getElementById("bookTitle").value;
    // Do not add the book the title is empty
    if (title == "") {
        document.getElementById("bookTitle").style.borderColor = "red";
    } else {
        document.getElementById("bookTitle").style.borderColor = "#ced4da";
        let genre = document.getElementById("bookGenre").value;
        let author = document.getElementById("bookAuthor").value;
        let read = document.getElementById("bookReaded").checked;
        let readDate = document.getElementById("bookDate").value;
        if (read) {
            booklist.add(new Book(title, genre, author, read, new Date(readDate)));
        } else {
            booklist.add(new Book(title, genre, author));
        }
        limpiarInputs();
        pintarTabla(document.getElementById("list"), booklist);
    }
}

/**
 * Cleans the form
 */
function limpiarInputs() {
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookGenre").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookReaded").checked = false;
    document.getElementById("bookDate").value = "";
    document.getElementById("bookDate").disabled = true;
}

/**
 * Finish current book and redraws the table
 */
function finishCurrentBook() {
    booklist.finishCurrentBook();
    pintarTabla(document.getElementById("list"), booklist);
}