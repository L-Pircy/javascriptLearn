const posts = [
    { title: 'Post One', body: 'This is post One' },
    { title: 'Post Two', body: 'This is post Two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); //deelays 1000 micro sec ie 1 sec
}

function createPost(post, callBack) {
    setTimeout(() => {
        posts.push(post);
        callBack();
    }, 2000);
}

// getPosts();
createPost({ title: 'Post Three', body: 'this is post three' }, getPosts);
// getPosts(); //create takes 2 secs but get took 1 sec so 3rd post not displayed
