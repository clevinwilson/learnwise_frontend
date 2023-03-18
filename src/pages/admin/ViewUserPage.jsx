import React, { useState } from 'react';
import ViewUser from '../../components/ViewUser/ViewUser';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';


function ViewUserPage() {


  return (
   
     <div className='relative '>
      <Sidebar admin={true} />
      <Header />
      <div className='admin-page p-3 ' >
        <ViewUser />
      </div>
      
    </div>
  )
}

export default ViewUserPage