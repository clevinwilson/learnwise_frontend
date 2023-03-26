import React from 'react';
import CourseDetails from '../../components/CourseDetails/CourseDetails';
import UserHeader from '../../components/UserHeader/UserHeader';
import Footer from '../../components/UserFooter/UserFooter';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'

function CourseDetailsPage() {
  return (
    <React.Fragment>
      <UserHeader />
      <CourseDetails />
      {/* <BottomNavigation /> */}
      <Footer />
    </React.Fragment>
  )
}

export default CourseDetailsPage