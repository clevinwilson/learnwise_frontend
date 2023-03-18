import React from 'react';
import axiosInstance from '../axios/axios';


const getToken=()=>{
    return { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
}

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

const getTeachers=()=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
    return axiosInstance.get("/admin/teacher",{ headers })
}

const blockTeacher =(teacherId)=>{
    return axiosInstance.get(`/admin/block-teacher/${teacherId}`, { headers:getToken()})
}

export { authAdmin, addTeacher, getTeachers, blockTeacher }