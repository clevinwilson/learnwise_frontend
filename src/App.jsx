import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import SignupPage from './pages/SignupPage';
import PrivateRoutes from './utils/PrivateRoutes';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from './pages/AdminLogin';
import DashboardPage from './pages/DashboardPage'
import AddTeacherPage from './pages/AddTeacherPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route element={<SignupPage />} path='/signup' />
        </Route>
        <Route element={<HomePage/>} path='/' />
        <Route element={<OtpPage/>} path='/otp' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<AdminLogin />} path='/admin/login' />
        <Route element={<DashboardPage />} path='/admin/dashboard' />
        <Route element={<AddTeacherPage/>} path='/admin/addTeacher' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
