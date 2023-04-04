import React, { useEffect, useState } from 'react'
import { getCommunityGroups } from '../../services/userApi';
import { toast } from 'react-toastify';
import CardLoading from '../CardLoading/CardLoading'
function Groups({ community }) {
    const [groups, setGroups] = useState();

    //loading groups 
    const loadCommunityGroups = () => {
        getCommunityGroups(community._id)
            .then((response) => {
                if (response.data.status) {
                    setGroups(response.data.community.groups);
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
    useEffect(() => {
        loadCommunityGroups()
    }, [])
    return (
        <div className='grid grid-cols-3 gap-4'>
            {/* <CardLoading /> */}
            <>
                {groups && groups.map((group) => {
                    return (
                        <div className="flex justify-center">
                            <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                    <img className="rounded-t-lg" src={import.meta.env.VITE_SERVER_URL + group.image.path} alt />
                                </a>
                                <div className="p-6 flex justify-between">
                                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {group.name}
                                    </h5>
                                    <div className="mr-3 cursor-pointer">
                                        <h2 className="font-bold"
                                            onClick={() => { handleJoin(community._id) }}
                                        >Join</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </>
        </div>

    )
}

export default Groups