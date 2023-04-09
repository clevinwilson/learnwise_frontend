import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from '../utils/PrivateRoutes';
import TeacherLoginPage from '../pages/teacher/TeacherLoginPage';
import TeacherDashboardPage from '../pages/teacher/TeacherDashboardPage';
import AddCoursePage from '../pages/teacher/AddCoursePage';
import ViewCoursePage from '../pages/teacher/ViewCoursePage';
import EditCoursePage from '../pages/teacher/EditCoursePage';
import ChangePasswordPage from '../pages/teacher/ChangePasswordPage';


function TeacherRouter() {
    return (
        <Routes>
            <Route element={<PrivateRoutes teacher={true} />} >
                <Route element={<TeacherDashboardPage />} path='/dashboard' />
                <Route element={<AddCoursePage />} path='/add-course' />
                <Route element={<ViewCoursePage />} path='/course' />
                <Route element={<EditCoursePage/>} path='/edit-course/:courseId'/>
                <Route element={<ChangePasswordPage />} path='/change-password' />

            </Route>
            <Route element={<TeacherLoginPage />} path='/' />
        </Routes>
    )
}

export default TeacherRouter