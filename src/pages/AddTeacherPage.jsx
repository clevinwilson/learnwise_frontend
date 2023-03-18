import React from 'react';
import AddTeacher from '../components/AddTeacher/AddTeacher';
import Sidebar from "../components/Sidebar/Sidebar";
import Header from '../components/Header/Header';

function AddTeacherPage() {
  return (
     <div className='relative '>
      <Sidebar />
      <Header />
      <div className='admin-page p-3 ' >
        <AddTeacher />
      </div>
      
    </div>
  )
}

export default AddTeacherPage