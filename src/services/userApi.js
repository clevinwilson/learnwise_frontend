import axiosInstance from '../axios/axios'

//signup
export const userSignup = (values)=>{
    return axiosInstance('JwtToken').post("/signup", { ...values });
}

//verify otp
export const verifyOtp=(values)=>{
    return axiosInstance('JwtToken').post("/otp", { otp: values.otp.join("") })
}

//login
export const userLogin = (loginData)=>{
    return axiosInstance('JwtToken').post("/login", { ...loginData, });
}

//login with google
export const loginWithGoogl=(data)=>{
    return axiosInstance('JwtToken').post("/login/google", { ...data });
}

//user authentication in useeffect
export const authUser = () => {
    return axiosInstance("JwtToken").get('/user-authenticate')
}

//top courses in home page 
export const getTopCourse = () => {
    return axiosInstance("JwtToken").get('/top-course');
}

//course details
export const getCourseDetails = (courseId) => {
    return axiosInstance("JwtToken").get(`/course-details/${courseId}`)
}

//checkout page
export const handleCheckout = (values, courseId) => {
    return axiosInstance("JwtToken").post('/create-checkout-session', { ...values, courseId })
}

//get all courses
export const getCourses = () => {
    return axiosInstance("JwtToken").get('/course')
}

//get Enrolled Course
export const getEnrolledCourse = () => {
    return axiosInstance("JwtToken").get('/enrolled-course')
}

//check whether user alread enrolled the couser
export const isCourseEnrolled = (courseId) => {
    return axiosInstance("JwtToken").get(`/is-course-enrolled/${courseId}`)
}

//search course
export const search = (query)=>{
    return axiosInstance("JwtToken").get(`/search?q=${query}`)
}

//create community
export const createCommunity=(data)=>{
    return axiosInstance("JwtToken").post('/create-community',{...data}, { headers: { "Content-Type": "multipart/form-data" } })
}

export const getCommunity=()=>{
    return axiosInstance("JwtToken").get('/community');
}

export const joinCommunity=(userId,communityId)=>{
    return axiosInstance("JwtToken").put('/join-community', { userId, communityId });
}

export const getJoinedCommunity=()=>{
    return axiosInstance("JwtToken").get('/joined-community');
}

export const getCommunityDetails=(communityId)=>{
    return axiosInstance("JwtToken").get(`/community-details/${communityId}`);
}


export const createCommunityPost=(data)=>{
    return axiosInstance("JwtToken").post('/create-community/post', { ...data }, { headers: {  "Content-Type": "multipart/form-data" } })
}

//load community feeds 
export const getFeeds=(communityId)=>{
    return axiosInstance("JwtToken").get(`/community/feeds/${communityId}`,)
}

//get community members details
export const getMembersDetails = (communityId)=>{
    return axiosInstance("JwtToken").get(`/community/members/${communityId}`)
}

//edit community
export const editCommunity =(data)=>{
    return axiosInstance("JwtToken").post('/edit-community', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
}



//leave from a community api
export const leaveCommunity=(communityId)=>{
    return axiosInstance("JwtToken").get(`/community/leave/${communityId}`)
}

//delte community 
export const deleteCommunity=(communityId)=>{
    return axiosInstance("JwtToken").get(`/commuinty/delete/${communityId}`)
}



//group
//commuinty groups

export const createGroup = (data) => {
    return axiosInstance("JwtToken").post('/create-group', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
}

export const getCommunityGroups = (communityId) => {
    return axiosInstance("JwtToken").get(`/community/groups/${communityId}`)
}

//join group
export const joinGroup = (communityId, groupId) => {
    return axiosInstance("JwtToken").get(`/community/groups/join/${communityId}/${groupId}`)
}

//get all joined groups
export const getJoinedGroups = () => {
    return axiosInstance("JwtToken").get(`/community/group/joinedGroups`)
}

//get all groups 
export const getAllGroups=()=>{
    return axiosInstance("JwtToken").get('/community/groups')
}


//message
//send message
export const sendMessage=(message)=>{
    return axiosInstance("JwtToken").post('/messages', message )
}

//load group messages
export const getMessages=(groupId)=>{
    return axiosInstance("JwtToken").get(`/messages/${groupId}`)
}

//get user full details
export const getUserDetails=()=>{
    return axiosInstance("JwtToken").get('/account')
}

//update user detals
export const updateUserDetails=(data)=>{
    return axiosInstance("JwtToken").patch('/update-profile',{...data})
}

//update user image
export const updateUserAvatar=(image)=>{
    return axiosInstance("JwtToken").patch('/update-avatar', { ...image }, { headers: { "Content-Type": "multipart/form-data" } })
}

