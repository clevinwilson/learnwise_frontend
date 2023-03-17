import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import AdminHeader from '../components/AdminHeader/AdminHeader';
import ViewCourses from '../components/ViewCourses/ViewCourses'

function ViewCoursePage() {
  return (
    <div className='relative '>
      <Sidebar teacher={true} />
      <AdminHeader />
      <div className='admin-page p-3 ' >
        <ViewCourses/>
      </div>
    </div>
  )
}

export default ViewCoursePage