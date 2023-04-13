import React, { useEffect, useState } from 'react'
import { joinGroup } from '../../services/userApi';
import { toast } from 'react-toastify';
import CardLoading from '../CardLoading/CardLoading'
import { fetchAllJoinedGroups } from '../../Redux/Actions/groupActions';
import { useDispatch } from 'react-redux';


function Groups({ community, loadCommunityGroups, groups, groupLoading }) {

    const dispatch = useDispatch();

    //join groups
    const handleJoinGroup = (communityId, groupId) => {
        joinGroup(communityId, groupId).then((response) => {
            if (response.data.status) {
                toast.success(response.data.message, {
                    position: "top-center",
                });
                dispatch(fetchAllJoinedGroups())
            }
        })
            .catch((err) => {
                toast.error(response.data.message, {
                    position: "top-center"
                })
            })
    };

    //loading initial data
    useEffect(() => {
        loadCommunityGroups()
    }, [])
    return (
        <>
            {groupLoading ?
                <CardLoading />
                :
                <>
                    {groups.length > 0 ? <div className='grid grid-cols sm:grid-cols-2 lg:grid-cols-3  gap-4'>
                        {groups && groups.map((group) => {
                            return (
                                <div className="flex justify-center">
                                    <div className="block w-full rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                        <a className='w-full' data-te-ripple-init data-te-ripple-color="light">
                                            <img className="h-[180px] w-full rounded-t-lg" src={import.meta.env.VITE_SERVER_URL + group.image.path} alt />
                                        </a>
                                        <div className="p-6 flex justify-between">
                                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                                {group.name}
                                            </h5>
                                            <div className="mr-3 cursor-pointer">
                                                <h2 className="font-bold"
                                                    onClick={() => { handleJoinGroup(community._id, group._id) }}
                                                >Join</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                        :
                        <div className='flex flex-col p-8 justify-center items-center'>
                            <img className='w-96 object-cover' src="/images/groupbg.png" alt="" />
                            <p>No Group Found</p>
                        </div>
                    }

                </>

            }
        </>


    )
}

export default Groups