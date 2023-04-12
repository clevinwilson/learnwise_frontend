import React, { Fragment } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';
import ApexCharts from 'apexcharts';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';



function DashboardPage() {
  return (
    <div className='relative '>
      <Sidebar admin={true} />
      <Header role={'admin'} />
      <div className='admin-page p-3 ' >
        <AdminDashboard/>
      </div>

    </div>
  )
}

export default DashboardPage