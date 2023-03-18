import React, { Fragment } from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';


function DashboardPage() {
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

export default DashboardPage