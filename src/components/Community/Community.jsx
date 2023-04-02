import React, { useEffect, useState } from 'react';
import GroupCard from '../GroupCard/GroupCard';
import Button from '../Button/Button';
import { BiPlus } from 'react-icons/bi';
import AddCommunityModal from '../AddCommunityModal/AddCommunityModal';
import { getCommunity, getJoinedCommunity, joinCommunity } from '../../services/userApi';
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';




function Community({ isTab }) {
    const user = useSelector((state) => state.user);
    const [showModal, setShowModal] = useState(false);
    const [communitys, setCommunitys] = useState([]);
    const [joinedCommunity, setJoinedCommunity] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleJoin = (communityId) => {
        joinCommunity(user.id, communityId).then((response) => {
            if(response.data.status){
                toast.success(response.data.message, {
                    position: "top-center",
                });
            }else{
                toast.error(response.data.message, {
                    position: "top-center",
                });
            }
        })
    }

    useEffect(() => {
        //get user joined community
        getJoinedCommunity().then((response) => {
            if(response.data.status){
                setJoinedCommunity(response.data.joinedCommunity)
            }
        })

        //get all community
        getCommunity().then((response) => {
            setCommunitys(response.data.community);
            setLoading(false)
        }).catch((error) => {
            toast.error(error, {
                position: "top-center",
            });
        })
    }, [])

   


    return (

        <div className={`w-full ${isTab ? "px-2 py-0" : "border-x px-5 py-3 sm:px-8"} border-base-300 `} >
            {/* community user have joinde */}
            {user.id && joinedCommunity.length >0? 
            <>
                    <div className='flex justify-between items-center mb-5'>
                        <h1 className='text-xl font-bold sm:text-2xl'>Your Community</h1>
                        {user.email ?
                            <Button onClick={() => { setShowModal(true) }} >
                                <div className="flex justify-center items-center"
                                    data-te-toggle="modal"
                                    data-te-target="#editCourse"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <BiPlus size={22} /> <span className='ml-4 hidden md:flex'>Create New</span>
                                </div>
                            </Button>
                            : null}
                    </div>
                    {loading ?
                        <Loader />
                        :
                        <div className="mt-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                joinedCommunity.map((community) => (
                                    <GroupCard key={community._id} community={community} joined={true} />
                                ))
                            }
                        </div>
                    }
            </>
            :""}


            {/* list of all community */}
            <div className='pb-16'>
                <div className="mt-10 text-xl font-bold sm:text-2xl">Explore Community</div>
                <div className="my-3 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {communitys.map((community) => (
                            <GroupCard key={community._id} community={community} handleJoin={handleJoin} />
                    ))}
                </div>
            </div>
            {showModal ? <AddCommunityModal close={() => { setShowModal(false) }} /> : null}
        </div>
    )
}

export default Community