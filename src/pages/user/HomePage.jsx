import React from 'react'
import BannerWithSearch from '../../components/BannerWithSearch/BannerWithSearch'
import Home from '../../components/Home/Home'
import UserFooter from '../../components/UserFooter/UserFooter'
import UserHeader from '../../components/UserHeader/UserHeader'

function HomePage() {
  return (
    <React.Fragment>
      <UserHeader />
      <BannerWithSearch/>
      <UserFooter/>
    </React.Fragment>
  )
}

export default HomePage