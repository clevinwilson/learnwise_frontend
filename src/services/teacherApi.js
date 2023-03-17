import React from 'react';
import axiosInstance from '../axios/axios';
const token = localStorage.getItem('teacherJwtToken');

const headers = { Authorization: `Bearer ${token}` };


const authTeacher = () => {
    const token = localStorage.getItem('teacherJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/teacher/auth', { headers })


}


const addCourse = (values, course, image) => {

    return axiosInstance.post('/teacher/add-course', { ...values, course, image }, { headers: { ...headers, "Content-Type": "multipart/form-data" } })
}

const getCourses = () => {
    return axiosInstance.get('/teacher/course', { headers })
}

export { authTeacher, addCourse, getCourses }