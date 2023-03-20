import React from 'react';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import UserHeader from '../../components/UserHeader/UserHeader';
import Footer from '../../components/UserFooter/UserFooter';

function CourseDetailsPage() {
  return (
    <React.Fragment>
        <UserHeader/>
        <CourseDetails/>
        {/* <Footer/> */}
    </React.Fragment>
  )
}

export default CourseDetailsPage