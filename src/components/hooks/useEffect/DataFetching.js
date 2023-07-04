import React,{ useState, useEffect, useCallback } from 'react';
import axios from 'axios'; 

import useDataFetching from '../customHooks/useDataFetching';

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(5);
    const [post, setPost] = useState({});
    const { getPosts } = useDataFetching();
 
    // const getPosts = useCallback(async () => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //     console.log(response.data);
    //     setPost(response.data);
    // }, [id]);

    const getInitialPost = async () => {
        if (id) {
            const response = await getPosts(id);
            setPost(response);
        }
    };

    const onChange = (event) => setId(event.target.value);

    const onClickHandler = async() => {
       const response =  await getPosts(id);
       setPost(response);
    };

    useEffect(() => {
        getInitialPost();
    }, []);

      // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => {
    //             console.log('response', response);
    //             setPosts(response.data);
    //         })
    //         .catch(error => {
    //             console.log('error', error);
    //         });
    // }, [getPosts]);

    console.log('post', post);

    return (
        <div>
            <input type='text' onChange={onChange} value={id}/>
            <button type='button' onClick={onClickHandler}>Click</button>
            <div>{post?.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    );
};

export default DataFetching;