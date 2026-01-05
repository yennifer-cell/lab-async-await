// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  // Loop through each post
  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Call displayPosts after fetch
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the async fetch function
fetchPosts();

