import React, { Fragment } from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AdminHeader from '../components/AdminHeader/AdminHeader';
import Form from '../components/Form/Form';


function DashboardPage() {
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

export default DashboardPage