import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.217:5000/api', // or your backend URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Include token in headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.data.message === 'Token expired' && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('token');
      const response = await axios.post('http://192.168.0.217:5000/api/users/refresh-token', { token: refreshToken });
      localStorage.setItem('token', response.data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;