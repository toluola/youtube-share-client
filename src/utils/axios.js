import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://youtube-share-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default Axios;