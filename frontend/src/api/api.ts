import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.APP_API_URL || 'http://localhost:8000',
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
