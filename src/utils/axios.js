import axios from 'axios';

const authToken = localStorage.getItem('token');

const Axios = axios.create({
  baseURL: 'https://youtube-share-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.authorization = authToken;

export default Axios;