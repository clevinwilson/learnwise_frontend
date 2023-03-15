import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from '../utils/PrivateRoutes';
import TeacherLoginPage from '../pages/TeacherLoginPage';
import TeacherDashboardPage from '../pages/TeacherDashboardPage';
import AddCoursePage from '../pages/AddCoursePage';


function TeacherRouter() {
    return (
        <Routes>
            <Route element={<PrivateRoutes teacher={true} />} >
                <Route element={<TeacherDashboardPage />} path='/teacher/dashboard' />
                <Route element={<AddCoursePage />} path='/teacher/add-course' />
            </Route>
            <Route element={<TeacherLoginPage />} path='/teacher/login' />
        </Routes>
    )
}

export default TeacherRouter