import React, { useState, useEffect } from 'react'
import { changeCommunityStatus, getAllCommunity } from '../../services/adminApi';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { toast } from 'react-toastify';

function ListCommunity() {
    const [community, setCommunity] = useState();
    const [pagination, setPagination] = useState();


    //table header
    const tableHeader = [
        { title: 'Name' },
        { title: "No Members" },
        { title: "No Groups" },
        { title: "Status" },
        { title: "Action" }
    ];

    //get community details
    const getCommunityDetails=(page)=>{
        getAllCommunity(page)
            .then((response) => {
                setCommunity(response.data.community);
                setPagination(response.data.pagination);

            })
            .catch((response) => {
                toast(response.data.message, {
                    position: 'top-center'
                })
            })
    }
    //get community Details
    useEffect(() => {
       getCommunityDetails(1);
    }, []);

    //cahange status
    const handleStatus = (id, status) => {
        changeCommunityStatus(id, status)
            .then((response) => {
                setCommunity(community.map((obj) => {
                    if (obj._id == id) {
                        obj.status = status == 'block' ? false : true
                    }
                    return obj
                }))
                toast.success(response.data.message, { position: 'top-center' })
            }).catch((response) => {
                toast.error(response.message, { position: 'top-center' })
            })
    }

    return (
        <div className='relative '>
            <Sidebar admin={true} />
            <Header role={'admin'} />
            <div className='admin-page p-3 ' >
                <Table tableHeader={tableHeader} data={community} type={'Community'} handleStatus={handleStatus} getDetails={getCommunityDetails} pagination={pagination} />
            </div>
        </div>
    )
}

export default ListCommunity