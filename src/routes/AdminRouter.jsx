import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import DashboardPage from '../pages/admin/DashboardPage'
import AddTeacherPage from '../pages/admin/AddTeacherPage';
import PrivateRoutes from '../utils/PrivateRoutes';
import ViewTeachersPage from '../pages/admin/ViewTeachersPage';

function AdminRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes admin={true} />} >
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='/admin/add-teacher' element={<AddTeacherPage />} />
        <Route path='/admin/teacher' element={<ViewTeachersPage />} />
      </Route>
      
      <Route path='/admin/login' element={<AdminLogin />} />
    </Routes>
  )
}

export default AdminRouter