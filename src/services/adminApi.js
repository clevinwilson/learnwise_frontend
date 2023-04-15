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

const getTeachers=(page)=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('adminJwtToken')}` };
    return axiosInstance.get(`/admin/teacher?model=${"teacher"}&page=${page}&limit=${10}`,{ headers })
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

const changeCourseStatus = (courseId, status)=>{
    console.log(courseId, status);
    return axiosInstance.get(`/admin/course/change-status/${courseId}/${status}`, { headers: getToken() })
}



//get community details
const getAllCommunity=()=>{
    return axiosInstance.get('/admin/community', { headers: getToken() });
}
const changeCommunityStatus = (id, status)=>{
    return axiosInstance.get(`/admin/community/change-status/${id}/${status}`, { headers: getToken() })
}


//get all groups
const getAllGroups=()=>{
    return axiosInstance.get('/admin/group', { headers: getToken() })
}

const changeGroupStatus=(id,status)=>{
    return axiosInstance.get(`/admin/group/change-status/${id}/${status}`, { headers: getToken() })
}

export { authAdmin, addTeacher, getTeachers, blockTeacher, getUsers, blockUser, unBlockUser, unBlockTeacher, getAllCourse, getAllCommunity, getAllGroups, changeCommunityStatus, changeCourseStatus, changeGroupStatus }