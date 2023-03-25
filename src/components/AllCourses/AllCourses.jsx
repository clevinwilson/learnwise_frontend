import React, { useEffect, useState } from 'react';
import { getTopCourse, getCourses } from '../../services/user';
import CourseCard from '../CourseCard/CourseCard';
import Loader from '../Loader/Loader';


function AllCourses() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getCourses().then((response) => {
      console.log(response.data);
      if (response.data.status) {
        setCourse(response.data.course);
        setLoading(false);
      }
    })
  }, [])
  return (
    <div className='m-7 mt-10 mb-14'>
      {loading ?
        <Loader />
        :
        <div className='mt-10 grid-cols-1 gap-12  sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 '>
          {course.map((course) => {
            return (
              <CourseCard key={course._id} course={course} />
            )
          })}

        </div>
      }
    </div>
  )
}

export default AllCourses