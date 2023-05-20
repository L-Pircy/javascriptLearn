// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// // run function on loading
// window.onload = function () {

//     // Put all your code here
//     // And at the end run start() function
//     fetchBookmarks();
// }

// var x = 9;
// console.log(9 / 0);

// Save a bookmark
function saveBookmark(e) {
    // Prevent form from submitting
    e.preventDefault();

    // Get the values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    // call validation function
    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    // put values in an object
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    // test if bookmark us null
    if (localStorage.getItem('bookmarks') === null) {
        // Init array
        var bookmarks = [];
        // add bookmark obkject to array
        bookmarks.push(bookmark);
        // set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        // get bookmarks from local storage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmark toi array
        bookmarks.push(bookmark);
        // Re-set to local xstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    // clear form
    document.getElementById('myForm').reset();

    // re fetch bookmakrs (deletes from the screen)
    fetchBookmarks();
    /*
    // local storage (only stores strings)
    localStorage.setItem('test', 'Hello World');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(bookmark);
    */
}

// function delete bookmark
function deleteBookmark(url) {
    // console.log(url);
    // Get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // loopp through above
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            // remove from array
            bookmarks.splice(i, 1); //NEW~NEW~NEW~NEW~NEW~
        }
    }
    // re set the local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // re fetch bookmakrs (deletes from the screen)
    fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
    // get bookmarks from local storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);

    // get output ki ID
    var bookmarksresults = document.getElementById('bookmarksResults');

    // build output
    bookmarksresults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksresults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a class = "btn btn-secondary" target="_blank" href="' + url + '">Visit</a> ' +
            ' <a onclick="deleteBookmark(\'' + url + '\')" class = "btn btn-danger" href="#">Delete</a> ' +
            '</h3>'
        '</div>';
    }
}

function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill in form');
        return false;
    }
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (!siteUrl.match(regex)) {
        alert("Enter valid URL");
        return false;
    }

    return true;
}