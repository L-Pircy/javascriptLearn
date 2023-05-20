// Book class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

}

// Ui class: handles ui tasks, display remove alert
class UI {
    static displayBooks() {
        // const StoredBooks = [
        //     {
        //         title: 'Book One',
        //         author: 'John Doe',
        //         isbn: '3433434'
        //     },
        //     {
        //         title: 'Book Two',
        //         author: 'Jane Doe',
        //         isbn: '45545'
        //     }
        // ];
        // const books = StoredBooks;
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;
        list.appendChild(row);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
            return 0;
        }
        else {
            return -1;
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`; //we would pass green or red in the class name parameter
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form); //in the parent container insert div before the form

        // vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}


// Store class: handles storage
class Store {
    static getBooks() {
        let books; //declare a var books
        if (localStorage.getItem('books') === null) { //check if local storage empty
            books = [];
        }
        else { //if not empty , the var sets to the books in the local storage in form of string
            books = JSON.parse(localStorage.getItem('books')); //json parse converts the string to array
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks); //dom content does as soon as content loaded on page

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // get form ki values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate: making sure all fields filled
    if (title === '' || author === '' || isbn === '') {
        // alert('please fill in all fields');
        UI.showAlert('please fill in all fields', 'danger');
    }
    else {
        // instantiating a book
        const book = new Book(title, author, isbn);
        // console.log(book);

        // add book to ui
        UI.addBookToList(book);

        // add book to store
        Store.addBook(book);

        // show sucess message
        UI.showAlert('Successfully Added New Book', 'success');

        // clear fields of form
        UI.clearFields();
    }
});

// Event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    // remove from ui
    const check = UI.deleteBook(e.target);

    if (check === 0) {
        // remove from store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
        // remove alert
        UI.showAlert('Book Removed', 'success');
    }
    else {
        UI.showAlert('Click Red box to remove book', 'info');
    }


});