import React from 'react';
import axiosInstance from '../axios/axios';

const authTeacher = () => {
    const token = localStorage.getItem('teacherJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/teacher/auth', { headers })
}

export { authTeacher }