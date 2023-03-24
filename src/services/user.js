import React from 'react'
import axiosInstance from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
}


const authUser =()=>{
    return axiosInstance.get('/user-authenticate', { headers:getToken() })
}

const getTopCourse=()=>{
    return axiosInstance.get('/top-course');
}


const getCourseDetails=(courseId)=>{
    return axiosInstance.get(`/course-details/${courseId}`)
}

const handleCheckout = (values, courseId) => {
    return axiosInstance.post('/create-checkout-session', { ...values, courseId }, { headers: getToken() })
}
export { authUser, getTopCourse, getCourseDetails, handleCheckout }