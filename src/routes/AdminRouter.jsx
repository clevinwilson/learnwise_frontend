import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/AdminLogin';
import DashboardPage from '../pages/DashboardPage'
import AddTeacherPage from '../pages/AddTeacherPage';
import PrivateRoutes from '../utils/PrivateRoutes';

function AdminRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes admin={true} />} >
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='/admin/add-teacher' element={<AddTeacherPage />} />
      </Route>
      
      <Route path='/admin/login' element={<AdminLogin />} />
    </Routes>
  )
}

export default AdminRouter