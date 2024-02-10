import axios from 'axios';

export const apiServiceProvider = axios.create({
    baseURL: `http://${import.meta.env.VITE_REACT_APP_API_ADDR}:${import.meta.env.VITE_REACT_APP_API_PORT}`
});