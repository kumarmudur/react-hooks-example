import axios from 'axios';

const useDataFetching = () => {

    const getPosts = async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
    }   
    return {
        getPosts
    };
};

export default useDataFetching;