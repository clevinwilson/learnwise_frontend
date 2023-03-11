import React, { Fragment } from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import AdminHeader from '../components/AdminHeader/AdminHeader';


function DashboardPage() {
  return (
    <div className='relative'>
      <Sidebar />
      <AdminHeader />
    </div>
  )
}

export default DashboardPage