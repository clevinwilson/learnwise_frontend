import React, { useEffect, useState } from 'react';
import { getTopCourse } from '../../services/user';
import CourseCard from '../CourseCard/CourseCard';
import Loader from '../Loader/Loader';

function TopCourses() {
  const [topCourse,setTopCourse]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    getTopCourse().then((response)=>{
      if(response.data.status){
        console.log(response.data);
        setTopCourse(response.data.courses);
        setLoading(false);
      }
    })
  },[])
  return (
    <div className='m-7 mt-10 mb-14'>
          <h1 className='text-3xl font-semibold'>Top Courses</h1>

          {loading?
          <Loader/>
          :
        <div className='mt-10 grid-cols-1 gap-12  sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 '>
          {topCourse.map((course) => {
            console.log(course);
            return (
              <CourseCard key={course._id} course={course} />
            )
          })}

        </div>
          }
    </div>
  )
}

export default TopCourses