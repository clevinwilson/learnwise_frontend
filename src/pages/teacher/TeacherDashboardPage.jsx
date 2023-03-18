import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';

function TeacherDashboardPage() {
  return (
      <div className='relative '>
          <Sidebar />
          <Header />
          <div className='admin-page p-3 ' >
              Dashboard
          </div>
      </div>
  )
}

export default TeacherDashboardPage