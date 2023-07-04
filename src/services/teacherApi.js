import axiosInstance from '../axios/axios'

const authTeacher = () => {
    return axiosInstance("teacherJwtToken").get('/teacher/auth');
}

//login
const teacherLogin = (loginData) => {
    return axiosInstance("teacherJwtToken").post("/teacher/login", { ...loginData })
}

const addCourse = (values, course, image, selectedTags) => {
    return axiosInstance("teacherJwtToken").post('/teacher/add-course', { ...values, course, image, selectedTags }, { headers: { "Content-Type": "multipart/form-data" } })
}

const getCourses = () => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
    return axiosInstance("teacherJwtToken").get('/teacher/course',)
}


const deleteCourse = (courseId) => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('teacherJwtToken')}` };
    return axiosInstance("teacherJwtToken").delete(`/teacher/delete-course/${courseId}`,)
}

const getCourseDetails = (courseId) => {
    return axiosInstance("teacherJwtToken").get(`/teacher/course-details/${courseId}`)
}

const updateCourse = (values, course, image, courseId, selectedTags) => {
    console.log(selectedTags);
    return axiosInstance("teacherJwtToken").put('/teacher/update-course', { ...values, course, image, courseId, selectedTags }, { headers: { "Content-Type": "multipart/form-data" } })
}

const changePassword = (data) => {
    return axiosInstance("teacherJwtToken").put('/teacher/change-password', { ...data },)
}

//dashboard details 
const getDashboardDetails = () => {
    return axiosInstance("teacherJwtToken").get('/teacher/dashboard',)
}

//update teacher photo
const updatePhoto = (image) => {
    return axiosInstance('teacherJwtToken').put('/teacher/update-photo', { image }, { headers: { "Content-Type": "multipart/form-data" } })
}

//update teacher abut
const updateAbout = (about) => {
    return axiosInstance('teacherJwtToken').put('/teacher/update-about', { about })
}

//getTeacherDetails


export { teacherLogin, authTeacher, addCourse, getCourses, deleteCourse, getCourseDetails, updateCourse, changePassword, getDashboardDetails, updatePhoto, updateAbout }