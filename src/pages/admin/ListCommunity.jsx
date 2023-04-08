import React, { useState, useEffect } from 'react'
import { changeCommunityStatus, getAllCommunity } from '../../services/adminApi';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { toast } from 'react-toastify';

function ListCommunity() {
    const [community, setCommunity] = useState();

    //table header
    const tableHeader = [
        { title: 'Name' },
        { title: "No Members" },
        { title: "No Groups" },
        { title: "Status" },
        { title: "Action" }
    ];

    //get community Details
    useEffect(() => {
        getAllCommunity()
            .then((response) => {
                setCommunity(response.data.community)
            })
            .catch((response) => {
                toast(response.data.message, {
                    position: 'top-center'
                })
            })
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
                toast.error(response.data.message, { position: 'top-center' })
            })
    }

    return (
        <div className='relative '>
            <Sidebar admin={true} />
            <Header />
            <div className='admin-page p-3 ' >
                <Table tableHeader={tableHeader} data={community} type={'Community'} handleStatus={handleStatus} />
            </div>
        </div>
    )
}

export default ListCommunity