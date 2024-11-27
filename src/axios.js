import axios from 'axios';

const api = axios.create({
  baseURL: "http://46.250.238.183:2000",
  withCredentials: true,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


export default api;