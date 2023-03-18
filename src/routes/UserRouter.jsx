import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/user/HomePage';
import OtpPage from '../pages/user/OtpPage';
import LoginPage from '../pages/user/LoginPage';
import SignupPage from '../pages/user/SignupPage';
import PrivateRoutes from '../utils/PrivateRoutes';

function UserRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes user={true} />} >

      </Route>
      <Route element={<HomePage />} path='/' />
      <Route element={<OtpPage />} path='/otp' />
      <Route element={<LoginPage />} path='/login' />
      <Route element={<SignupPage />} path='/signup' />
    </Routes>
  )
}

export default UserRouter