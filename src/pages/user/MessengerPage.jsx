import React from 'react'
import Messenger from '../../components/Messenger/Messenger'
import UserHeader from '../../components/UserHeader/UserHeader'
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'

function MessengerPage() {
  return (
    <React.Fragment>
      <UserHeader />
      <div className="flex h-screen">
        <div className="sticky top-0 self-start">
          <CommunitySidebar />
        </div>
        <Messenger/>
      </div>
      <CommunityNavigation />
    </React.Fragment>
  )
}

export default MessengerPage