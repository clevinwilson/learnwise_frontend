import React from 'react';
import axiosInstance from '../axios/axios';



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
export { authTeacher, addCourse, getCourses, deleteCourse }