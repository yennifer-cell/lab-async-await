// Step 1: Create the function to display posts
function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    posts.forEach(post => {
        // Create elements
        const li = document.createElement('li');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');

        // Add content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append to hierarchy
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

// Step 2: Create async function to fetch data
async function getPosts() {
    try {
        // Fetch data from the API
        const response = await fetch('jsonplaceholder.typicode.com');
        
        // Parse the JSON data
        const posts = await response.json();

        // Step 3: Call displayPosts after fetch is successful
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Initialize the fetch
getPosts();

