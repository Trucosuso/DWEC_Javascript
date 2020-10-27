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