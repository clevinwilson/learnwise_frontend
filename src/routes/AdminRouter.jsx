import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from '../pages/admin/AdminLogin';
import DashboardPage from '../pages/admin/DashboardPage'
import AddTeacherPage from '../pages/admin/AddTeacherPage';
import PrivateRoutes from '../utils/PrivateRoutes';
import ViewTeachersPage from '../pages/admin/ViewTeachersPage';
import ViewUserPage from '../pages/admin/ViewUserPage';
import ListCourse from '../pages/admin/ListCourse';
import ListCommunity from '../pages/admin/ListCommunity';
import ListGroup from '../pages/admin/ListGroup';

function AdminRouter() {
  return (
    <Routes>
      <Route element={<PrivateRoutes role={"admin"} route={'/admin'} />} >
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/add-teacher' element={<AddTeacherPage />} />
        <Route path='/teacher' element={<ViewTeachersPage />} />
        <Route path='/user' element={<ViewUserPage/>} />
        <Route path='/course' element={<ListCourse />} />
        <Route path='/community' element={<ListCommunity />} />
        <Route path='/group' element={<ListGroup />} />
      </Route>
      
      <Route path='/' element={<AdminLogin />} />
    </Routes>
  )
}

export default AdminRouter