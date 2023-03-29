import React from 'react';
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import Community from '../../components/Community/Community';

function CommunityPage() {
  return (
    <>
      <UserHeader />
      <div className="flex h-screen">
        <div className="sticky top-0 self-start">
          <CommunitySidebar />
        </div>
        <Community />
      </div>
      <CommunityNavigation />
    </>
  )
}

export default CommunityPage