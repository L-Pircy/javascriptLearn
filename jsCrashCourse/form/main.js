// // Window Object-> parent object of the Browser
// console.log(window);
// can do alert(); or window.alert();

// // Single Element
// console.log(document.getElementById('my-form'));
// // or
// const form = document.getElementById('my-form');
// console.log(form);
//console.log(document.querySelector('.container')); //selects the first one only

// Multiple Element
// console.log(document.querySelectorAll('.item')); //always use
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// loop through elements using for each
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// // Manipulating the dom
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.lastChild.remove();//last child vs last element child ???
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'esha';
// ul.lastElementChild.innerHTML = '<h1> Hello </h1>';
// // change color
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// // Events
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {    // e is event parameter
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     console.log(e.target.className);
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });
// // event can be "mouseover" "mouseout"



// Making the form functional
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter Fields'); // alert is ugly so we use other
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        //console.log('success');

        //Cleafr fields
        nameInput.value = '';
        emailInput.value = '';
    }
    // console.log(nameInput.value);
}