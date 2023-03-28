import React from 'react'
import EditCourse from '../../components/EditCourse/EditCourse';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

function EditCoursePage() {
  return (
    <div className='relative '>
      <Sidebar teacher={true} />
      <Header />
      <div className='admin-page p-3 ' >
        <EditCourse />

      </div>
    </div>
  )
}

export default EditCoursePage