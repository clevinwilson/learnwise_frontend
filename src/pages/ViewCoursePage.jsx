import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import ViewCourses from '../components/ViewCourses/ViewCourses'

function ViewCoursePage() {
  return (
    <div className='relative '>
      <Sidebar teacher={true} />
      <Header />
      <div className='admin-page p-3 ' >
        <ViewCourses/>
      </div>
    </div>
  )
}

export default ViewCoursePage