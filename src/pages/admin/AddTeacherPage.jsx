import React from 'react';
import AddTeacher from '../../components/AddTeacher/AddTeacher';
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from '../../components/Header/Header';

function AddTeacherPage() {
  return (
     <div className='relative '>
      <Sidebar admin={true} />
      <Header role={'admin'} />
      <div className='admin-page p-3 ' >
        <AddTeacher />
      </div>
      
    </div>
  )
}

export default AddTeacherPage