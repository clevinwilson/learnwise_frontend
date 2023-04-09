import React from 'react';
import axiosInstance from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
}

const authTeacher = () => {
    const token = localStorage.getItem('teacherJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/teacher/auth', { headers })
}


const addCourse = (values, course, image) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
    return axiosInstance.post('/teacher/add-course', { ...values, course, image }, { headers: { ...headers, "Content-Type": "multipart/form-data" } })
}

const getCourses = () => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken') }` };
    return axiosInstance.get('/teacher/course', { headers })
}


const deleteCourse=(courseId)=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
    return axiosInstance.delete(`/teacher/delete-course/${courseId}`, { headers })
}

const getCourseDetails=(courseId)=>{
    return axiosInstance.get(`/teacher/course-details/${courseId}`, { headers: getToken()})
}

const updateCourse = (values, course, image, courseId)=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
    return axiosInstance.put('/teacher/update-course', { ...values, course, image, courseId }, { headers: { ...headers, "Content-Type": "multipart/form-data" } })
}

const changePassword=(data)=>{
    return axiosInstance.put('/teacher/change-password', { ...data }, { headers: getToken() })
}


export { authTeacher, addCourse, getCourses, deleteCourse, getCourseDetails, updateCourse, changePassword }