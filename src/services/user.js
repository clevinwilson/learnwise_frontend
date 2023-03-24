import React from 'react'
import axiosInstance from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
}


const authUser =()=>{
    console.log("user nodeeeeee");
}

const getTopCourse=()=>{
    return axiosInstance.get('/top-course');
}


const getCourseDetails=(courseId)=>{
    return axiosInstance.get(`/course-details/${courseId}`)
}

const handleCheckout = (values, courseId) => {
   return axiosInstance.post('/create-checkout-session',{...values,courseId})
}
export { authUser, getTopCourse, getCourseDetails, handleCheckout }