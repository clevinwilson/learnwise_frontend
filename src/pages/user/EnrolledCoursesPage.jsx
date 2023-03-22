import React from 'react';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import HorizontalCourseCard from '../../components/HorizontalCourseCard/HorizontalCourseCard';
import UserFooter from '../../components/UserFooter/UserFooter';
import UserHeader from '../../components/UserHeader/UserHeader';

function EnrolledCoursesPage() {
  return (
    <React.Fragment>
        <UserHeader/>
        <HorizontalCourseCard />
        <BottomNavigation/>
        <UserFooter/>
    </React.Fragment>
  )
}

export default EnrolledCoursesPage