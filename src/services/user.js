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

export { authUser, getTopCourse }