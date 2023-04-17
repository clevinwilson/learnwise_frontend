import React from 'react'
import axiosInstance, { userInstance } from '../axios/axios';

const getToken = () => {
    return { Authorization: `Bearer ${localStorage.getItem('JwtToken')}` };
}


//user authentication in useeffect
export const authUser = () => {
    return userInstance.get('/user-authenticate')
}

//top courses in home page 
export const getTopCourse = () => {
    return userInstance.get('/top-course');
}

//course details
export const getCourseDetails = (courseId) => {
    return userInstance.get(`/course-details/${courseId}`)
}

//checkout page
export const handleCheckout = (values, courseId) => {
    return userInstance.post('/create-checkout-session', { ...values, courseId })
}

//get all courses
export const getCourses = () => {
    return userInstance.get('/course')
}

//get Enrolled Course
export const getEnrolledCourse = () => {
    return userInstance.get('/enrolled-course')
}

//check whether user alread enrolled the couser
export const isCourseEnrolled = (courseId) => {
    return userInstance.get(`/is-course-enrolled/${courseId}`)
}

//search course
export const search = (query)=>{
    return userInstance.get(`/search?q=${query}`)
}

//create community
export const createCommunity=(data)=>{
    return userInstance.post('/create-community',{...data}, { headers: { "Content-Type": "multipart/form-data" } })
}

export const getCommunity=()=>{
    return userInstance.get('/community');
}

export const joinCommunity=(userId,communityId)=>{
    return userInstance.put('/join-community', { userId, communityId });
}

export const getJoinedCommunity=()=>{
    return userInstance.get('/joined-community');
}

export const getCommunityDetails=(communityId)=>{
    return userInstance.get(`/community-details/${communityId}`);
}


export const createCommunityPost=(data)=>{
    return userInstance.post('/create-community/post', { ...data }, { headers: {  "Content-Type": "multipart/form-data" } })
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



//leave from a community api
export const leaveCommunity=(communityId)=>{
    return userInstance.get(`/community/leave/${communityId}`)
}

//delte community 
export const deleteCommunity=(communityId)=>{
    return userInstance.get(`/commuinty/delete/${communityId}`)
}



//group
//commuinty groups

export const createGroup = (data) => {
    return userInstance.post('/create-group', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
}

export const getCommunityGroups = (communityId) => {
    return userInstance.get(`/community/groups/${communityId}`)
}

//join group
export const joinGroup = (communityId, groupId) => {
    return userInstance.get(`/community/groups/join/${communityId}/${groupId}`)
}

//get all joined groups
export const getJoinedGroups = () => {
    return userInstance.get(`/community/group/joinedGroups`)
}

//get all groups 
export const getAllGroups=()=>{
    return userInstance.get('/community/groups')
}


//message
//send message
export const sendMessage=(message)=>{
    return userInstance.post('/messages', message )
}

//load group messages
export const getMessages=(groupId)=>{
    return userInstance.get(`/messages/${groupId}`)
}

//get user full details
export const getUserDetails=()=>{
    return userInstance.get('/account')
}

//update user detals
export const updateUserDetails=(data)=>{
    return userInstance.patch('/update-profile',{...data})
}

//update user image
export const updateUserAvatar=(image)=>{
    return userInstance.patch('/udate-avatar', { ...image }, { headers: { "Content-Type": "multipart/form-data" } })
}

