import React from 'react';
import axiosInstance from '../axios/axios';


const getToken=()=>{
    return { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
}

const authAdmin = () => {
    const token = localStorage.getItem('adminJwtToken');
    const headers = { Authorization: `Bearer ${token}` };
    return axiosInstance.get('/admin/auth', { headers })
}


const addTeacher = (values) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('adminJwtToken') }` };
    return axiosInstance.post("/admin/add-teacher",
        { ...values },
        { headers }
    )
}

const getTeachers=()=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
    return axiosInstance.get("/admin/teacher",{ headers })
}

const blockTeacher =(teacherId)=>{
    return axiosInstance.get(`/admin/block-teacher/${teacherId}`, { headers:getToken()})
}

const getUsers=()=>{
    return axiosInstance.get('/admin/user',{headers:getToken()})
}


const blockUser = (userId) => {
    return axiosInstance.get(`/admin/block-user/${userId}`, { headers: getToken() })
}

const unBlockUser=(userId)=>{
    return axiosInstance.get(`/admin/unblock-user/${userId}`, { headers: getToken() })

}

const unBlockTeacher=(teacherId)=>{
    return axiosInstance.get(`/admin/unblock-teacher/${teacherId}`, { headers: getToken() }) 
}

//get course details
const getAllCourse=()=>{
    return axiosInstance.get('/admin/course', { headers: getToken() })
}

//get community details
const getAllCommunity=()=>{
    return axiosInstance.get('/admin/community', { headers: getToken() })
}

export { authAdmin, addTeacher, getTeachers, blockTeacher, getUsers, blockUser, unBlockUser, unBlockTeacher, getAllCourse, getAllCommunity }