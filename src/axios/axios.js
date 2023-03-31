import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const userInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

userInstance.interceptors.request.use((request)=>{
    const token = localStorage.getItem('JwtToken')
    request.headers.Authorization = `Bearer ${token}`
})

export default axiosInstance;