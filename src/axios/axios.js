import axios from 'axios';

const axiosInstance =(tokenName)=>{
     const instance = axios.create({
        baseURL: import.meta.env.VITE_SERVER_URL,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    instance.interceptors.request.use((request) => {
        const token = localStorage.getItem(tokenName)
        request.headers.Authorization = `Bearer ${token}`
        return request
    })

    return instance;
}

export default axiosInstance;