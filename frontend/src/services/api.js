// src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust if your backend runs elsewhere
});

// Add a request interceptor to include JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
