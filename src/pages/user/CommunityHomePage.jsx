import React, { useEffect, useState } from 'react';
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import { useLocation } from 'react-router-dom';
import { getCommunityDetails } from '../../services/userApi';
import CommunityTab from '../../utils/CommunityTab';
import Feeds from '../../components/CommunityTabs/Feeds';
import Members from '../../components/CommunityTabs/Members';
import Groups from '../../components/CommunityTabs/Groups';
import { BiPencil } from "react-icons/bi";
import AddCommunityModal from '../../components/AddCommunityModal/AddCommunityModal';


function CommunityHomePage() {
    const groupsIcon = ["🕺", "🎨", "🍳", "🎸"];
    const { state } = useLocation();
    const [community, setCommunitys] = useState();
    const [activeTab, setActiveTab] = useState(CommunityTab[0].label);
    const [isAdmin,setIsAdmin]=useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const loadCommuintData=()=>{
        getCommunityDetails(state._id).then((response) => {
            setCommunitys(response.data.communityDetails);
            setIsAdmin(response.data.admin);
        })
    }

    

    //is community details is not there in state details will load from api 
    useEffect(() => {
        loadCommuintData();
            // setCommunitys(state)
    }, [])

    

    //tab items
    const loadTab = () => {
        switch (activeTab) {
            case "Feed":
                return <Feeds community={state} admin={isAdmin} />;
            case "Groups":
                return <Groups community={state} />;
            case "Description":
                return <p>{community?.description}</p>;
            case "Members":
                return <Members community={state} />;
            default:
                return null;
        }
    };


    return (
        <>
            <UserHeader />
            <div className="flex">
                <div className="sticky top-0 self-start">
                    <CommunitySidebar />
                </div>
                <div className="w-full border-x border-base-300">
                    <div className="bg-base-100">
                        <div className='relative group transition-all duration-500 transition-delay-500'> 
                            <img
                                src={community ? import.meta.env.VITE_SERVER_URL + community.image.path :" "}
                                className="aspect-[2/1] md:aspect-[3/1] w-full object-cover "
                                alt=""
                            />
                            <div className="flex gap-3">
                                <div className="avatar-group mt-[-40px] ml-5 -space-x-12">
                                    {groupsIcon.map((icon) => (
                                        <div key={icon} className="avatar">
                                            <div className="bg-base-200 p-3 text-2xl leading-tight">
                                                {icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-1 text-sm">Created in May, 2021</div>
                            </div>
                            <div className="mt-2 flex flex-col gap-3 px-5 sm:px-8">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <div className="text-2xl font-bold">
                                            {community && community.name}
                                        </div>
                                        <div className="text-sm">
                                            {community && community.members.length} members &nbsp; ● &nbsp; {community && community.groups.length} Groups
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Join</button>
                                </div>
                                <p>{community && community.about}</p>
                            </div>
                            <div className="home-tabs tabs mt-7  justify-between border-b border-base-300 px-5">
                                {CommunityTab
                                    .map((tab) => (
                                        <div
                                            key={tab.label}
                                            className={`${activeTab === tab.label ? "tab-active cursor-pointer" : "cursor-pointer"}`}
                                            onClick={() => setActiveTab(tab.label)}
                                        >
                                            {tab.label}
                                        </div>
                                    ))}
                            </div>

                            {isAdmin ? <div onClick={() => { setShowEditModal(true) }} className='hidden group-hover:flex cursor-pointer absolute  justify-center items-center bg-white px-4 shadow py-3 top-4 right-5 rounded'>
                                <BiPencil />  <span className='ml-2'>Edit</span>
                            </div> : ""}
                        </div>

                        <div className="p-2 md:p-8 bg-gray-50  dark:bg-gray-900  ">
                            {loadTab()}

                        </div>

                    </div>
                </div>
            </div>
            {showEditModal ? <AddCommunityModal close={() => { setShowEditModal(false) }} edit={true} community={community} loadCommuintData={loadCommuintData} /> : ""}
            <CommunityNavigation />
        </>

    )
}

export default CommunityHomePage