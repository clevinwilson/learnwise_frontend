import React from 'react'
import axiosInstance, { userInstance } from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
}


//user authentication in useeffect
export const authUser = () => {
    return axiosInstance.get('/user-authenticate', { headers: getToken() })
}

//top courses in home page 
export const getTopCourse = () => {
    return axiosInstance.get('/top-course');
}

//course details
export const getCourseDetails = (courseId) => {
    return axiosInstance.get(`/course-details/${courseId}`)
}

//checkout page
export const handleCheckout = (values, courseId) => {
    return axiosInstance.post('/create-checkout-session', { ...values, courseId }, { headers: getToken() })
}

//get all courses
export const getCourses = () => {
    return axiosInstance.get('/course')
}

//get Enrolled Course
export const getEnrolledCourse = () => {
    return axiosInstance.get('/enrolled-course', { headers: getToken() })
}

//check whether user alread enrolled the couser
export const isCourseEnrolled = (courseId) => {
    return axiosInstance.get(`/is-course-enrolled/${courseId}`, { headers: getToken() })
}

//search course
export const search = (query)=>{
    return axiosInstance.get(`/search?q=${query}`)
}

//create community
export const createCommunity=(data)=>{
    const headers = { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
    return axiosInstance.post('/create-community',{...data}, { headers: { ...headers, "Content-Type": "multipart/form-data" } })
}

export const getCommunity=()=>{
    return axiosInstance.get('/community',{headers:getToken()});
}

export const joinCommunity=(userId,communityId)=>{
    return axiosInstance.put('/join-community', { userId, communityId }, { headers: getToken() });
}

export const getJoinedCommunity=()=>{
    return axiosInstance.get('/joined-community', { headers: getToken() });
}

export const getCommunityDetails=(communityId)=>{
    return userInstance.get(`/community-details/${communityId}`)
}


export const createCommunityPost=(data)=>{
    return userInstance.post('/create-communityPost', { ...data }, { headers: {  "Content-Type": "multipart/form-data" } })
}

//load community feeds 
export const getFeeds=(communityId)=>{
    return userInstance.get(`/community/feeds/${communityId}`,)
}

//get community members details
export const getMembersDetails = (communityId)=>{
    return userInstance.get(`/community/members/${communityId}`)
}

//edit community
export const editCommunity =(data)=>{
    return userInstance.post('/edit-community', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
}

//commuinty groups

export const createGroup=(data)=>{

    return userInstance.post('/create-group', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
}

export const getCommunityGroups=(communityId)=>{
    return userInstance.get(`/community/groups/${communityId}`)
}

//join group
export const joinGroup = (communityId, groupId)=>{
    return userInstance.get(`/community/groups/join/${communityId}/${groupId}`)
}

//leave from a community api
export const leaveCommunity=(communityId)=>{
    return userInstance.get(`/community/leave/${communityId}`)
}

//delte community 
export const deleteCommunity=(communityId)=>{
    return userInstance.get(`/commuinty/delete/${communityId}`)
}