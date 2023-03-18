import React from 'react';
import axiosInstance from '../axios/axios';

const authAdmin = () => {
    const token = localStorage.getItem('adminJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/admin/auth', { headers })
}


const addTeacher = (values) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('adminJwtToken') }` };
    return axiosInstance.post("/admin/add-teacher",
        { ...values },
        { headers }
    )
}

export { authAdmin, addTeacher }