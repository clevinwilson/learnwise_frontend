import React, { useEffect, useState } from 'react';
import { getTopCourse } from '../../services/userApi';
import CourseCard from '../CourseCard/CourseCard';
import Loader from '../Loader/Loader';

function TopCourses() {
  const [topCourse, setTopCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTopCourse().then((response) => {
      if (response.data.status) {
        setTopCourse(response.data.courses);
        setLoading(false);
      }
    })
  }, [])
  return (
    <div className='m-7 mt-10 mb-14'>
      <h1 className='text-3xl font-semibold mb-7'>Top Courses</h1>
      {loading ?
        <Loader />
        :
        <div className="carousel carousel-end rounded-box">
          {topCourse.map((course) => {
            return (
              <div className="carousel-item mr-3 lg:mr-6">
                <CourseCard key={course._id} course={course} />
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default TopCourses