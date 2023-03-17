import React from 'react';
import AddCourse from '../components/AddCourse/AddCourse';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminHeader from '../components/AdminHeader/AdminHeader';

function AddCoursePage() {
  return (
      <div className='relative '>
          <Sidebar teacher={true} />
          <AdminHeader />
          <div className='admin-page p-3 ' >
          <AddCourse/>
          </div>
      </div>
  )
}

export default AddCoursePage