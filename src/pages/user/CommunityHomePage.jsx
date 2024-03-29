import React, { useEffect, useState } from 'react';
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteCommunity, getCommunityDetails, leaveCommunity } from '../../services/userApi';
import CommunityTab from '../../utils/CommunityTab';
import Feeds from '../../components/CommunityTabs/Feeds';
import Members from '../../components/CommunityTabs/Members';
import Groups from '../../components/CommunityTabs/Groups';
import { BiPencil, BiCollapseAlt, BiDotsVerticalRounded } from "react-icons/bi";
import AddCommunityModal from '../../components/AddCommunityModal/AddCommunityModal';
import CreateGroupModal from '../../components/Modal/CreateGroupModal';
import swal from 'sweetalert';
import { IoLogInOutline } from "react-icons/io5";
import { toast } from 'react-toastify';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { getCommunityGroups } from '../../services/userApi';
import { fetchAllJoinedGroups } from '../../Redux/Actions/groupActions';
import { useDispatch } from 'react-redux';




function CommunityHomePage() {
    const { state } = useLocation();
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [community, setCommunitys] = useState();
    const [activeTab, setActiveTab] = useState(CommunityTab[0].label);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [createGroupModal, setCreateGroupModal] = useState(false);
    const [leaveBtn, setLeaveBtn] = useState(false);
    const [groups, setGroups] = useState();
    const [groupLoading, setGroupLoading] = useState(true);


    const loadCommuintData = () => {
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

    //handle leave community
    const handleLeaveCommunity = () => {
        swal({
            title: "Are you sure?",
            text: "You will be logout from all groups in this community!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    //leave community api
                    leaveCommunity(community._id)
                        .then((response) => {
                            if (response.data.status) {
                                navigate('/community')
                            } else {
                                toast(response.data.message, {
                                    position: 'top-center'
                                })
                            }
                        })
                        .catch((response) => {
                            toast(response.data.message, {
                                position: 'top-center'
                            })
                        })
                }
            });
    }

    //delete community 
    const handleDeleteCommunity = () => {
        swal({
            title: "Are you sure?",
            text: "All groups under this community will be deleted!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    //delete community api
                    deleteCommunity(community._id)
                        .then((response) => {
                            if (response.data.status) {
                                toast(response.data.message, {
                                    position: 'top-center'
                                });
                                navigate('/community')
                            } else {
                                toast(response.data.message, {
                                    position: 'top-center'
                                })
                            }
                        })
                        .catch((response) => {
                            toast(response.data.message, {
                                position: 'top-center'
                            })
                        })
                }
            });
    };
    
     //loading groups 
    const loadCommunityGroups = () => {
        getCommunityGroups(community._id)
            .then((response) => {
                if (response.data.status) {
                    setGroups(response.data.community.groups);
                    setGroupLoading(false);
                    dispatch(fetchAllJoinedGroups())
                } else {
                    toast.error(response.data.message, {
                        position: "bottom-center",
                    })
                }
            })
            .catch((err) => {
                toast.error(response.data.message, {
                    position: "bottom-center"
                })
            })
    }


    //tab items
    const loadTab = () => {
        switch (activeTab) {
            case "Feed":
                return <Feeds community={state} admin={isAdmin} />;
            case "Groups":
                return <Groups community={state} loadCommunityGroups={loadCommunityGroups} groups={groups} groupLoading={groupLoading} />;
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
                                src={community ? import.meta.env.VITE_SERVER_URL + community.image.path : " "}
                                className="aspect-[2/1] md:aspect-[3/1] w-full object-cover "
                                alt=""
                            />
                            <div className="flex gap-3">
                                <div className="avatar-group mt-[-40px] ml-5 -space-x-12">
                                    {community && community.groups.map((group, index) => (
                                        <div key={index} className="avatar w-16">
                                            <div className="bg-base-200 ">
                                                <img className='rounded-full w-16 h-16' src={import.meta.env.VITE_SERVER_URL + group.image.path} alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-2 text-sm">{new Date(community?.createdAt).toString().slice(0,16)}</div>
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

                                    <div className='flex'>
                                        <button onClick={() => {
                                            setCreateGroupModal(true)
                                        }} className="btn btn-primary text-white bg-violet-500 hover:bg-violet-600 rounded-3xl">
                                            <BiCollapseAlt />
                                            <span className='hidden md:block ml-3'>Create Group</span>
                                        </button>

                                        <div className='relative'>
                                            <div onClick={() => { setLeaveBtn(!leaveBtn) }} className='flex ml-4 justify-center items-center h-12 w-12 rounded-full text-slate-500 border cursor-pointer hover:bg-slate-100 shadow-lg'>
                                                <BiDotsVerticalRounded size={28} />
                                            </div>

                                            {leaveBtn ?
                                                <div className="z-50 absolute right-1 top-10  my-3 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                                    <ul className="py-2 px-2 cursor-pointer" aria-labelledby="user-menu-button">
                                                        {isAdmin ? <li>
                                                            <p className=" px-4 py-1 text-sm text-black flex justify-center items-center"
                                                                onClick={handleDeleteCommunity}
                                                            >
                                                                <span className='mr-2'>Delete</span> <MdOutlineDeleteOutline size={16} />
                                                            </p>
                                                        </li>
                                                            : ""}
                                                        <li>
                                                            <p onClick={handleLeaveCommunity} className=" px-4 py-1 text-sm text-red-500 flex justify-center items-center"><span className='mr-2'>Leave</span> <IoLogInOutline size={16} />
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                : ""}
                                        </div>
                                    </div>
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

                        <div className="p-2 md:p-8 bg-gray-50 pb-16  dark:bg-gray-900  ">
                            {loadTab()}

                        </div>

                    </div>
                </div>
            </div>
            {/* create group modal */}
            {createGroupModal ? <CreateGroupModal close={() => { setCreateGroupModal(false) }} loadCommunityGroups={loadCommunityGroups} community={community} /> : ""}


            {/* add community modal */}
            {showEditModal ? <AddCommunityModal close={() => { setShowEditModal(false) }} edit={true} community={community} loadCommuintData={loadCommuintData} /> : ""}
            <CommunityNavigation />
        </>

    )
}

export default CommunityHomePage