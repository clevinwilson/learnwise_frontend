import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import OtpPage from './pages/OtpPage';
import SignupPage from './pages/SignupPage';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route element={<SignupPage />} path='/signup' />

        </Route>
        <Route element={<OtpPage/>} path='/otp' />
        <Route element={<LoginPage />} path='/login' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
