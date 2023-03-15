import React from 'react';
import axiosInstance from '../axios/axios';

const authAdmin = () => {
    const token = localStorage.getItem('adminJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/admin/auth', { headers })
}

export { authAdmin }