var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// add item function
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // crreate new element in thmlk of li
    var li = document.createElement('li');
    // adding class to baove li
    li.className = 'list-group-item';
    // console.log(li);
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create the delete button element
    var deleteBtn = document.createElement('button');
    // add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // add x to button
    deleteBtn.appendChild(document.createTextNode('X'));
    //  append btn to li
    li.appendChild(deleteBtn);

    // append li to list
    itemList.appendChild(li);
}

// remove item function
function removeItem(e) {
    if (e.target.classList.contains('delete')) //we check if click on deelete btn
    {
        if (confirm('Are you sure?')) //popup confirming they want to delete
        {
            var li = e.target.parentElement; //jahaan click kiya ka arent element
            itemList.removeChild(li); //list is parent of li, removing li
        }
    }
}

// filter items function
function filterItems(e) {
    // we convert all to lower case 
    var text = e.target.value.toLowerCase();
    // get all the li in list
    var items = itemList.getElementsByTagName('li');
    // convert html collection to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}