import React from 'react';
import ViewTeachers from '../../components/ViewTeachers/ViewTeachers';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';


function ViewTeachersPage() {
  return (
    <div className='relative '>
      <Sidebar admin={true} />
      <Header role={'admin'} />
      <div className='admin-page p-3 ' >
        <ViewTeachers />
      </div>
      
    </div>
  )
}

export default ViewTeachersPage