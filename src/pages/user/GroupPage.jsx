import React from 'react'
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import Group from '../../components/Group/Group'

function GroupPage() {
    return (
        <>
            <UserHeader />
            <div className="flex h-screen">
                <div className="sticky top-0 self-start">
                    <CommunitySidebar />
                </div>
                <Group />
            </div>
            <CommunityNavigation />
        </>
    )
}

export default GroupPage