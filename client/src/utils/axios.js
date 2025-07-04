import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:5000', 
  baseURL: 'https://k-n-taxmark-backend.onrender.com', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;