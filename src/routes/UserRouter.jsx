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
import LearnPage from '../pages/user/LearnPage';
import OrderSuccessPage from '../pages/user/OrderSuccessPage';
import AllCoursePage from '../pages/user/AllCoursePage';
import SearchPage from '../pages/user/SearchPage';
import GroupPage from '../pages/user/GroupPage';
import CommunityPage from '../pages/user/CommunityPage';
import CommunityHomePage from '../pages/user/CommunityHomePage';
import OrderFailedPage from '../pages/user/OrderFailedPage';
import MessengerPage from '../pages/user/MessengerPage';
import AccountPage from '../pages/user/AccountPage';

function UserRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes user={true} />} >
        <Route element={< OrderSummaryPage />} path='/course-payment/:courseId' />
        <Route element={<EnrolledCoursesPage />} path='/my-enrollments' />
        <Route element={<LearnPage />} path='/course/learn/:courseId' />
        <Route element={<OrderSuccessPage />} path='/order-success' />
        <Route element={<CommunityHomePage />} path='/community-home' />
        <Route element={<OrderFailedPage />} path='/order-failed' />
        <Route element={<AccountPage />} path='/profile' />
        <Route element={<GroupPage />} path='/groups' />

      </Route>


      <Route element={<HomePage />} path='/' />
      <Route element={<OtpPage />} path='/otp' />
      <Route element={<LoginPage />} path='/login' />
      <Route element={<SignupPage />} path='/signup' />
      <Route element={<AllCoursePage />} path='/courses' />
      <Route element={<CourseDetailsPage />} path='/course-details/:courseId' />
      <Route element={<SearchPage />} path='/search' />
      <Route element={<GroupPage />} path='/groups' />
      <Route element={<CommunityPage />} path='/community' />

      <Route element={<MessengerPage />} path='/messages' />





    </Routes>
  )
}

export default UserRouter