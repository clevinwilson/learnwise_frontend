import React from 'react';
import AllCourses from '../../components/AllCourses/AllCourses';
import UserFooter from '../../components/UserFooter/UserFooter';
import UserHeader from '../../components/UserHeader/UserHeader';


function AllCoursePage() {
    return (
        <React.Fragment>
            <UserHeader />
            <AllCourses />
            <UserFooter />
        </React.Fragment>
    )
}

export default AllCoursePage