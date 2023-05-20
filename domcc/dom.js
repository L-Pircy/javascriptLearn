// Examine the DOCUMENT OBJECT
// console.dir(document); // all different prop and methods attached to document object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 1234; // change title of page
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all); //displays everything in html as array with index
// console.log(document.all[10]);
// document.all[10].textContent = 'hello'; //change using the array index but NOT GOOD way to do
// console.log(document.forms); //gives all the forms in console
// console.log(document.links); //same with links
// console.log(document.images);



// GET ELEMENT BY ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';//text content tell the content inside disregarding the styling
// headerTitle.innerText = 'Goodbye';// inner text tells content inside but has regard for styling
// headerTitle.innerHTML = '<h3> Hello </h3>';// doesnt change h1 to h3, ADDS h3 inside h1
// header.style.borderBottom = 'solid 3px #000'; //change style

// GET ELEMENTS BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'bleh';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';
// items.style.backgroundColor = "yellow"; //CANNOT DO THIS, gives error, we need to loop through since its an array
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'grey';
// }

// GET ELEMENTS BY TAG NAME 
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'bleh';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';
// // // items.style.backgroundColor = "yellow"; //CANNOT DO THIS, gives error, we need to loop through since its an array
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'grey';
// }

// QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 3px #ccc';

// var input = document.querySelector('input'); // if there are more than one it graps the first one by default
// input.value = 'hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'blue';

//  QUERY SELECTOR ALL //granbs more than 1 thing
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'black';
// }

// TRAVERSING THE DOM
// var itemList = document.querySelector('#items');

// parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode);

// parentElement property
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement);

// // childNodes
// console.log(itemList.childNodes); //gives array with the li and also text node which is the new line or enter with each li in html
// console.log(itemList.children); //gives array of li, no line breaks etc 
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);//includes line breaks and child nodes
// console.log(itemList.firstElementChild);
// //same for last

// // nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);//same difference
// //same for previous

// // createElement

// // create a div
// var newDiv = document.createElement('div');
// // add class
// newDiv.className = 'hello';
// // add id
// newDiv.id = 'helloid';
// // add attribute
// newDiv.setAttribute('title', 'hellow div');
// // create text node
// var newDivText = document.createTextNode('hello world');
// // add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);

// function buttonClick() {
//     console.log("button clicked");
// }

// Event Listener
// var button = document.getElementById('button').addEventListener('click', function () {
//     console.log('123');
// });
// OR
// var button = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick() {
//     console.log('123');
// };

// // EVENT OBJECT
// function buttonClick(e) {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id); //id of what clicked
//     console.log(e.target.className); //class of what clicked
// var output = document.getElementById('output');
//     output.innerHTML = '<h3>' + e.target.id + '</h3>'; //displaying the id of wjat was clicked
//     console.log(e.type); //type of event
//     console.log(e.clientX);//distance of pointer from browser end
//     console.log(e.clientY);
//     console.log(e.offsetX);//dist of pointer froom element
//     console.log(e.offsetY);
//     console.log(e.altKey);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent); //double click
// button.addEventListener('mousedown', runEvent); //click without rleasing
// button.addEventListener('mouseup', runEvent); //click ka release

// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent); //shows everytime mouse comes in the area of element
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent); //shows everytime mouse comes in area of the text of the element
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent); //when just moving mouse in the element

// function runEvent(e) {
//     console.log('EVENT TYPE:' + e.type);
//     // output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY;
//     // box.style.backgroundColor = "rgb(40," + e.offsetX + "," + e.offsetY + ")";
//     // or
//     // document.body.style.backgroundColor = "rgb(40," + e.offsetX + "," + e.offsetY + ")";
// }

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent); //everytime keyboard any key pressed
// itemInput.addEventListener('keyup', runEvent); //everytime keyboard any key released
// itemInput.addEventListener('keypress', runEvent); //everytime keyboard any key pressed and released

// itemInput.addEventListener('focus', runEvent); //just when you click in an input area
// itemInput.addEventListener('blur', runEvent); //just when you click out an input area

// itemInput.addEventListener('cut', runEvent); //when you cut
// itemInput.addEventListener('paste', runEvent); //when you aste something

// itemInput.addEventListener('input', runEvent); //anything you do with input

// select.addEventListener('change', runEvent); //for drop down mai anything when choosen
// select.addEventListener('input', runEvent); //for drop down mai anything when choosen

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//     e.preventDefault(); //stops the submit console log to disappear when submit pressed 
//     console.log('EVENT TYPE:' + e.type);
//     // console.log(e.target); //gives the element of html jahaan jaa raha hai
//     // console.log(e.target.value); //gives what jaraha hai
//     // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
// }