import React from 'react'
import axiosInstance from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
}


//user authentication in useeffect
const authUser = () => {
    return axiosInstance.get('/user-authenticate', { headers: getToken() })
}

//top courses in home page 
const getTopCourse = () => {
    return axiosInstance.get('/top-course');
}

//course details
const getCourseDetails = (courseId) => {
    return axiosInstance.get(`/course-details/${courseId}`)
}

//checkout page
const handleCheckout = (values, courseId) => {
    return axiosInstance.post('/create-checkout-session', { ...values, courseId }, { headers: getToken() })
}

//get all courses
const getCourses = () => {
    return axiosInstance.get('/course')
}

//get Enrolled Course
const getEnrolledCourse = () => {
    return axiosInstance.get('/enrolled-course', { headers: getToken() })
}

//check whether user alread enrolled the couser
const isCourseEnrolled = (courseId) => {
    return axiosInstance.get(`/is-course-enrolled/${courseId}`, { headers: getToken() })
}

//search course
const search = (query)=>{
    return axiosInstance.get(`/search?q=${query}`)
}

//create community
const createCommunity=(data)=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
    return axiosInstance.post('/create-community',{...data}, { headers: { ...headers, "Content-Type": "multipart/form-data" } })
}

const getCommunity=()=>{
    return axiosInstance.get('/community',{headers:getToken()});
}

const joinCommunity=(userId,communityId)=>{
    return axiosInstance.put('/join-community', { userId, communityId }, { headers: getToken() });

}
export { authUser, getTopCourse, getCourseDetails, handleCheckout, getCourses, getEnrolledCourse, isCourseEnrolled, search, createCommunity, getCommunity, joinCommunity }