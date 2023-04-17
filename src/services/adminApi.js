import axiosInstance from '../axios/axios';


const adminLogin = (loginData)=>{
    return axiosInstance("adminJwtToken").post("/admin/login", { ...loginData })
}

const authAdmin = () => {
    return axiosInstance("adminJwtToken").get('/admin/auth');
}


const addTeacher = (values) => {
    return axiosInstance("adminJwtToken").post("/admin/add-teacher", { ...values })
}

const getTeachers=(page)=>{
    return axiosInstance("adminJwtToken").get(`/admin/teacher?model=${"teacher"}&page=${page}&limit=${10}`)
}

const blockTeacher =(teacherId)=>{
    return axiosInstance("adminJwtToken").get(`/admin/block-teacher/${teacherId}`)
}

const getUsers=()=>{
    return axiosInstance("adminJwtToken").get('/admin/user');
}


const blockUser = (userId) => {
    return axiosInstance("adminJwtToken").get(`/admin/block-user/${userId}`);
}

const unBlockUser=(userId)=>{
    return axiosInstance("adminJwtToken").get(`/admin/unblock-user/${userId}`);

}

const unBlockTeacher=(teacherId)=>{
    return axiosInstance("adminJwtToken").get(`/admin/unblock-teacher/${teacherId}`);
}

//get course details
const getAllCourse=(page)=>{
    return axiosInstance("adminJwtToken").get(`/admin/course?model=${"course"}&page=${page}&limit=${10}`);
}

const changeCourseStatus = (courseId, status)=>{
    return axiosInstance("adminJwtToken").get(`/admin/course/change-status/${courseId}/${status}`);
}



//get community details
const getAllCommunity=(page)=>{
    return axiosInstance("adminJwtToken").get(`/admin/community?model=${"community"}&page=${page}&limit=${10}`);
}
const changeCommunityStatus = (id, status)=>{
    return axiosInstance("adminJwtToken").get(`/admin/community/change-status/${id}/${status}`);
}


//get all groups
const getAllGroups=(page)=>{
    return axiosInstance("adminJwtToken").get(`/admin/group?model=${"group"}&page=${page}&limit=${10}`);
}

const changeGroupStatus=(id,status)=>{
    return axiosInstance("adminJwtToken").get(`/admin/group/change-status/${id}/${status}`);
}

//dashboard details 
const getDashboardDetails=()=>{
    return axiosInstance("adminJwtToken").get('/admin/dashboard');
}
export { adminLogin, authAdmin, addTeacher, getTeachers, blockTeacher, getUsers, blockUser, unBlockUser, unBlockTeacher, getAllCourse, getAllCommunity, getAllGroups, changeCommunityStatus, changeCourseStatus, changeGroupStatus, getDashboardDetails }