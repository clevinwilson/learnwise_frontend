import React from 'react';
import AddCourse from '../../components/AddCourse/AddCourse';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

function AddCoursePage() {
  return (
      <div className='relative '>
          <Sidebar teacher={true} />
          <Header />
          <div className='admin-page p-3 ' >
          <AddCourse/>
          </div>
      </div>
  )
}

export default AddCoursePage