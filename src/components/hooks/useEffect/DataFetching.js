import React,{ useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 

const DataFetching = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('posts', posts);
        setPosts(response.data);
    }, [posts]);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         console.log('response', response);
        //         setPosts(response.data);
        //     })
        //     .catch(error => {
        //         console.log('error', error);
        //     });
        getPosts();
    }, [getPosts]);

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    );
};

export default DataFetching;