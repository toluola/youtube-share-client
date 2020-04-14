import axios from 'axios';

const authToken = localStorage.getItem('token');

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.authorization = authToken;

export default Axios;