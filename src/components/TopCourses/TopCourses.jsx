import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

function TopCourses() {
  return (
    <div className='m-7 mt-10 mb-10'>
          <h1 className='text-3xl font-semibold'>Top Courses</h1>

          <div className='mt-10 grid-cols-1 gap-12 grid md:grid-cols-4 '>
            <CourseCard/>
              <CourseCard />

              <CourseCard />

          </div>
    </div>
  )
}

export default TopCourses