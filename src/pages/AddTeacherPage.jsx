import React from 'react';
import AddTeacher from '../components/AddTeacher/AddTeacher';
import Sidebar from "../components/Sidebar/Sidebar";
import AdminHeader from '../components/AdminHeader/AdminHeader';

function AddTeacherPage() {
  return (
     <div className='relative '>
      <Sidebar />
      <AdminHeader />
      <div className='admin-page p-3 ' >
        <AddTeacher />
      </div>
      
    </div>
  )
}

export default AddTeacherPage