// API configuration using Axios
import axios from 'axios';
import config from '../config';

// Create an instance of axios with custom configuration
const api = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
