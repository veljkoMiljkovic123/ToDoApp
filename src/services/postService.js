import axios from 'axios';

class PostService {
    static getAllProduct = () => axios.get('https://dummyjson.com/products');
}

export default PostService;