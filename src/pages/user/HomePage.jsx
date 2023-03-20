import React from 'react'
import BannerWithSearch from '../../components/BannerWithSearch/BannerWithSearch'
import Home from '../../components/Home/Home'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import UserHeader from '../../components/UserHeader/UserHeader'
import TopCourses from '../../components/TopCourses/TopCourses'
import UserFooter from '../../components/UserFooter/UserFooter'
import ChallengesBanner from '../../components/ChallengesBanner/ChallengesBanner'
import NewCourses from '../../components/NewCourses/NewCourses'

function HomePage() {
  return (
    <React.Fragment>
      <UserHeader />
      <BannerWithSearch/>
      <TopCourses/>
      <BottomNavigation />
      <ChallengesBanner/>
      <NewCourses/>
      <UserFooter/>
    </React.Fragment>
  )
}

export default HomePage