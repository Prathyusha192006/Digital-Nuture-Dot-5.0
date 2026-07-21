import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Optionally map data to Post objects if needed, but not strictly required
                const mappedPosts = data.map(post => new Post(post.userId, post.id, post.title, post.body));
                this.setState({ posts: mappedPosts });
            })
            .catch(error => {
                // If there's a fetch error, we might want to handle it. 
                // The instructions specify componentDidCatch for errors though.
                console.error("Error fetching posts:", error);
                throw error; // Throw so componentDidCatch could theoretically catch it
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("Error occurred: " + error.message);
    }

    render() {
        return (
            <div>
                <h2>Blog Posts</h2>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
