import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from '../utils/PrivateRoutes';
import TeacherLoginPage from '../pages/TeacherLoginPage';


function TeacherRouter() {
    return (
        <Routes>
            <Route element={<PrivateRoutes />} >

            </Route>
            <Route element={<TeacherLoginPage />} path='/teacher/login' />
        </Routes>
    )
}

export default TeacherRouter