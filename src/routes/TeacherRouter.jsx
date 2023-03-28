import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from '../utils/PrivateRoutes';
import TeacherLoginPage from '../pages/teacher/TeacherLoginPage';
import TeacherDashboardPage from '../pages/teacher/TeacherDashboardPage';
import AddCoursePage from '../pages/teacher/AddCoursePage';
import ViewCoursePage from '../pages/teacher/ViewCoursePage';
import EditCoursePage from '../pages/teacher/EditCoursePage';


function TeacherRouter() {
    return (
        <Routes>
            <Route element={<PrivateRoutes teacher={true} />} >
                <Route element={<TeacherDashboardPage />} path='/teacher/dashboard' />
                <Route element={<AddCoursePage />} path='/teacher/add-course' />
                <Route element={<ViewCoursePage />} path='/teacher/course' />
                <Route element={<EditCoursePage/>} path='/teacher/edit-course/:courseId'/>
            </Route>
            <Route element={<TeacherLoginPage />} path='/teacher/login' />
        </Routes>
    )
}

export default TeacherRouter