import React, { useEffect, useState } from 'react'
import Table from '../../components/Table/Table'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { getAllCourse } from '../../services/adminApi';
import { toast } from 'react-toastify';

function ListCourse() {
    const [course, setCourse] = useState();

    //table header
    const tableHeader = [
        { title: 'Title' },
        { title: "Teacher" },
        { title: "Duration" },
        { title: "Status" },
        { title: "Action" }
    ];

    //get course Details
    useEffect(() => {
        getAllCourse()
            .then((response) => {
                setCourse(response.data.course)
            })
            .catch((response) => {
                toast(response.data.message, {
                    position: 'top-center'
                })
            })
    }, [])

    return (
        <div className='relative '>
            <Sidebar admin={true} />
            <Header />
            <div className='admin-page p-3 ' >
                <Table tableHeader={tableHeader} data={course} />
            </div>
        </div>
    )
}

export default ListCourse