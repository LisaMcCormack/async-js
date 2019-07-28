// mimic blog posts on a server - getting them and creating a blog post
const posts = [
  { title: 'Post One', body: 'This is post one'},
  { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

 // callback can be called anything
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}





getPosts();

// You do not see 'Post Three' on index.html.  This is because the createPost method takes longer (2000) than
// getPosts (1000).  So my the time creatPost is called the DOM is already created.  To make it work we need to
// use a callback.  I added callback as a parameter to createPost and getPosts as a parameter when I call createPost below:
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
