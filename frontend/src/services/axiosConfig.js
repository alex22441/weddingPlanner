// src/services/axiosConfig.js
import axios from 'axios';

// Create an axios instance with base URL
const axiosInstance = axios.create({
  baseURL: 'http://192.168.0.217:5000/api',
});

// Add a request interceptor to include the token in all requests
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
