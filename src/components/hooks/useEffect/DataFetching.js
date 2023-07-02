import React,{ useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});

    const getPosts = useCallback(async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
    }, [id]);

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

    const onChange = (event) => setId(event.target.value);

    return (
        <div>
            <input type='text' onChange={onChange} value={id}/>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    );
};

export default DataFetching;