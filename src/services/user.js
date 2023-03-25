import React from 'react'
import axiosInstance from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
}


//user authentication in useeffect
const authUser =()=>{
    return axiosInstance.get('/user-authenticate', { headers:getToken() })
}

//top courses in home page 
const getTopCourse=()=>{
    return axiosInstance.get('/top-course');
}

//course details
const getCourseDetails=(courseId)=>{
    return axiosInstance.get(`/course-details/${courseId}`)
}

//checkout page
const handleCheckout = (values, courseId) => {
    return axiosInstance.post('/create-checkout-session', { ...values, courseId }, { headers: getToken() })
}

const getCourses=()=>{
    return axiosInstance.get('/course')
}
export { authUser, getTopCourse, getCourseDetails, handleCheckout, getCourses }