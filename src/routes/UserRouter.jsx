import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/user/HomePage';
import OtpPage from '../pages/user/OtpPage';
import LoginPage from '../pages/user/LoginPage';
import SignupPage from '../pages/user/SignupPage';
import PrivateRoutes from '../utils/PrivateRoutes';
import CourseDetailsPage from '../pages/user/CourseDetailsPage';
import OrderSummaryPage from '../pages/user/OrderSummaryPage';
import EnrolledCoursesPage from '../pages/user/EnrolledCoursesPage';

function UserRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes user={true} />} >
      </Route>
        <Route element={< OrderSummaryPage />} path='/course-payment' />
      <Route element={<EnrolledCoursesPage />} path='/my-enrollments' />


      <Route element={<HomePage />} path='/' />
      <Route element={<OtpPage />} path='/otp' />
      <Route element={<LoginPage />} path='/login' />
      <Route element={<SignupPage />} path='/signup' />
      <Route element={<CourseDetailsPage/>} path='/course-details' />
    </Routes>
  )
}

export default UserRouter