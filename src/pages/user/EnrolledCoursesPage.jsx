import React, { useEffect, useState } from 'react';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import HorizontalCourseCard from '../../components/HorizontalCourseCard/HorizontalCourseCard';
import UserFooter from '../../components/UserFooter/UserFooter';
import UserHeader from '../../components/UserHeader/UserHeader';
import { getEnrolledCourse } from '../../services/user';

function EnrolledCoursesPage() {
  const [enrolledCourse, setEnrolledCourse] = useState();
  useEffect(() => {
    try {
      getEnrolledCourse().then((response) => {
        console.log(response.data.enrolledCourse);
        setEnrolledCourse(response.data.enrolledCourse)
      }).catch((err) => {
        console.log(err);
      })
    } catch (err) {
      console.log(err);
    }
  }, [])
  return (
    <React.Fragment>
      <UserHeader />
      <div className='pl-9 mb-10'>
        <h3 className="text-3xl sm:text-4xl  mt-8  mb-4 ml-2 sm:ml-5 ">My Enrollments</h3>
      </div>
      {enrolledCourse && enrolledCourse.map((courseDetails) => {
        return (
          <HorizontalCourseCard key={courseDetails._id} courseDetails={courseDetails} />
        )
      })
      }
      {/* <BottomNavigation /> */}
      <UserFooter />
    </React.Fragment>
  )
}

export default EnrolledCoursesPage