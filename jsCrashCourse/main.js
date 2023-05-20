// console.log('hiee');
// console.error('Error here');
// console.warn('warning here');

// Variables: 
// var (dont use- scope issues)
// let (re-assignable)
// const (constant, always use const unless you know youll reassign)


// Primitive Data Types:
// Strings (can double or single qoutes): const name = 'John';
// Numbers: const age = 30;
// Boolean(true or false) : isCool = true;
// number: const rating = 4.5; (same as number)
// null const x = null;
// undefined const y = undefined; / let z;
// symbol(later)
// CL: console.log(typeof varname);
// typeof null gives 'object' which is wrong

// const name = "Esha";
// const age = 21;

// // Concatenation (old way)
// console.log('My name is ' + name + ' and I am ' + age);
// // Template Strings/ literals (new way)
// console.log(`My name is ${name} and I am ${age}`);
// // or
// const hello = `My name is ${name} and I am ${age}`;
// console.log(hello);
// string stuff we can do
// const s = 'hello world, hey, bleh';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 3).toUpperCase());
// console.log(s.split(', '));

// // Arrays
// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ['apples', 'oranges', 'pears', 2, true];
// fruits[3] = 'grapes';
// fruits[5] = 'qwerty';
// fruits.push('mangoes'); add at end
// fruits.unshift('strawberries'); add at start
// fruits.pop(); remove end
// console.log(Array.isArray(fruits)); check if array
// console.log(fruits.indexOf('oranges')); index of element
// console.log(fruits);
// console.log(fruits[1]);

// // Object Literals
// const person = {
//     firstname: 'Esha',
//     lastname: 'Tomon',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'boston',
//         state: 'ma'
//     }
// }
// console.log(person);
// console.log(person.firstname, person.lastname);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// const { firstname, lastname, address: { city } } = person;
// console.log(firstname, city);
// person.email = 'esha@gmail.com';

// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'meeting',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'sleep',
//         isCompleted: false
//     }
// ];
// console.log(todos);
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos); (convert to json type string)
// console.log(todoJSON);


// // For loop
// for (let i = 0; i < 10; i++) {
//     console.log(`for loop number: ${i}`);
// }

// // while
// let i = 0;
// while (i < 10) {
//     console.log(`while loop number: ${i}`);
//     i++;
// }

// // loop an array
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }
// for (let xyz of todos) {
//     console.log(xyz.text);
// }


// foreach (gets for each)
// todos.forEach(function (xyz) {
//     console.log(xyz.text);
// });

// map (returns an array of one type values)
// const todoText = todos.map(function (xyz) {
//     return xyz.text;
// });
// console.log(todoText);

// filter (gives array with filter/constrains)
// const todoCompleted = todos.filter(function (xyz) {
//     return xyz.isCompleted === true;
// });
// console.log(todoCompleted);

// // filter plus map
// const todoCompleted = todos.filter(function (xyz) {
//     return xyz.isCompleted === true;
// }).map(function (xyz) {
//     return xyz.text;
// })
// console.log(todoCompleted);


// // // Conditionals
// // IF ELSE
// const x = 100;
// const y = 10;
// if (x === 10) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x>10');
// }
// else {
//     console.log('xis not 10');
// }
// // TERNARY
// const x = 10;
// const color = x > 10 ? 'red' : 'blue';
// console.log(color);
// // SWITCH
// const color = 'green';
// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue');
//         break;
// }

// // FUNCTIONS
// function addNums(num1 = 1, num2 = 1) {
//     console.log(num1 + num2);
//     return num1 + num2;
// }
// const addNums = (num1 = 1, num2 = 1) => {
//     console.log(num1 + num2);
//     return num1 + num2;
// }
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// const addNums = num1 => num1 + 5;
// addNums(5, 4);
// addNums();
// console.log(addNums(5));
// todos.forEach(todo) => console.log(todo);

// // // Constructor Function

// // 1st WAY
// function Person(fname, lname, dob) {
//     this.fname = fname;
//     this.lname = lname;
//     this.dob = new Date(dob);
// }
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function () {
//     return `${this.fname} ${this.lname}`;
// }

// // 2nd way - classes
// class Person {
//     constructor(fname, lname, dob) {
//         this.fname = fname;
//         this.lname = lname;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.fname} ${this.lname}`;
//     }
// }

// // Instantiate Object
// const person1 = new Person('esha', 'tomon', '4-6-2001');
// const person2 = new Person('grace', 'gomez', '9-4-2001');
// console.log(person1, person2);
// console.log(person1.fname);
// console.log(person1.dob);
// console.log(person1.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
