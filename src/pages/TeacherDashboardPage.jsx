import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AdminHeader from '../components/AdminHeader/AdminHeader';

function TeacherDashboardPage() {
  return (
      <div className='relative '>
          <Sidebar />
          <AdminHeader />
          <div className='admin-page p-3 ' >
              Dashboard
          </div>
      </div>
  )
}

export default TeacherDashboardPage