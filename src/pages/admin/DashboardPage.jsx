import React, { Fragment } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';


function DashboardPage() {
  return (
    <div className='relative '>
      <Sidebar admin={true}  />
      <Header role={'admin'} />
      <div className='admin-page p-3 ' >
        Dashboard
      </div>
      
    </div>
  )
}

export default DashboardPage