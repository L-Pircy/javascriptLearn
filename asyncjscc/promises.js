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
    }, 1000); //delays 1000 micro sec ie 1 sec
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error')
            }
        }, 2000);
    });
}

// createPost({ title: 'post3', body: 'this is post 3' })
//     .then(getPosts)
//     .catch(err => console.log(err));


// Async / Await //waits for await to be finished to execute aage ka
async function init() {
    await createPost({ title: 'post3', body: 'this is post 3' });
    getPosts();
}

init();


// // Promise.all
// const promise1 = Promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'GoodBye')
// );
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json()
//     );

// Promise.all([promise1, promise2, promise3, promise4]).then(((values) => console.log(values)));
// // it takes 2 secs for all as it takes however long the longest promise is
