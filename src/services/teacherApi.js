import React from 'react';
import axiosInstance from '../axios/axios';
const token = localStorage.getItem('teacherJwtToken');
const headers = { Authorization: `Bearer ${token}` };

const authTeacher = () => {
    return axiosInstance.get('/teacher/auth', { headers })
}


const addCourse = (values, course, image)=>{
    return axiosInstance.post('/teacher/add-course', { ...values, course, image }, { headers:{ ...headers, "Content-Type": "multipart/form-data" } })
}

export { authTeacher, addCourse }