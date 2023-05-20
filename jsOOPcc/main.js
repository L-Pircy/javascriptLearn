// const s = 'hello'; // creating pritive string
// const s2 = new String('helllooo'); //creating an object
// console.log(typeof s);
// console.log(typeof s2);

// console.log(window); //window is the highest object everyfuntion underthis can be written as either window.function or just funtion
// alert(1);
// console.log(navigator.appVersion)

// // Object Literals
// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year} `
//     }
// };

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year} `
//     }
// };
// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.values(book2)); //gives all values of object
// console.log(Object.keys(book2)); //gives all keys or var in the object



// //Contructor
// function Book(title, author, year) {
//     // console.log('Book Instantiated');
//     this.title = title;
//     this.author = author;
//     this.year = year;
// this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };
// }
//Instantiate an object
// const book1 = new Book('Book One', 'Jhon Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');
// console.log(book1.getSummary());



// // Prototypes

// // getSummary
// // putting get summary as prototype istead of in the constructor defination
// Book.prototype.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// // // getAge
// // Book.prototype.getAge = function () {
// //     const years = new Date().getFullYear() - this.year;
// //     return `${this.title} is ${years} years old`;
// // }
// // console.log(book1.getAge());

// // // Revise/ Change Year
// // Book.prototype.revise = function (newYear) {
// //     this.year = newYear;
// //     this.revised = true;
// // }



// // Inheritance
// function Magazine(title, author, year, month) {
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// // Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);
// // instantiate magazine object
// const mag1 = new Magazine('Book One', 'Jhon Doe', '2013', 'jan');
// // note: pprototype methods dont get inherited auto matic just by instantiate
// // Use magazine Constructor
// Magazine.prototype.constructor = Magazine;
// console.log(mag1);



// // object Of Protos

// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     },
//     getAge: function () {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }
// }

// // Create object
// const book1 = Object.create(bookProtos);
// book1.title = 'BookOne';
// book1.author = 'John Doe';
// book1.year = '2013';
// or
// const book1 = Object.create(bookProtos, {
//     title: { value: 'Book One' },
//     author: { value: 'John Doe' },
//     year: { value: '2013' }
// });
// console.log(book1);



// // Classes
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

//     getSummary() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }

//     getAge() {
//         const years = new Date().getFullYear() - this.year;
//         return `${this.title} is ${years} years old`;
//     }

//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }

//     static topBookStores() { //static means i dont need to instantiate it  
//         return 'barns and Noble';
//     }
// }

// // instantiate Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// console.log(book1);
// book1.revise('2018');
// console.log(book1.topBookStores()); //ERROR
// console.log(Book.topBookStores());
// console.log(Book);

// // Sub Classes- magazine
// class Magazine extends Book {
//     constructor(title, author, year, month) {
//         super(title, author, year);
//         this.month = month;
//     }
// }
// // instantiate
// const mag1 = new Magazine('Book One', 'John doe', '2013', 'jan');

// console.log(mag1);
