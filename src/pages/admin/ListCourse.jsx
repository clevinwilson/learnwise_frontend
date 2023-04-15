import React, { useEffect, useState } from 'react'
import Table from '../../components/Table/Table'
import Sidebar from '../../components/Sidebar/Sidebar'
import Header from '../../components/Header/Header'
import { changeCourseStatus, getAllCourse } from '../../services/adminApi';
import { toast } from 'react-toastify';

function ListCourse() {
    const [course, setCourse] = useState();
    const [pagination, setPagination] = useState();

    

    //table header
    const tableHeader = [
        { title: 'Title' },
        { title: "Teacher" },
        { title: "Duration" },
        { title: "Status" },
        { title: "Action" }
    ];

    //get course Details
   const getCourseDetails=(page)=>{
       getAllCourse(page)
           .then((response) => {
               setCourse(response.data.course);
               setPagination(response.data.pagination);
           })
           .catch((response) => {
               toast(response.data.message, {
                   position: 'top-center'
               })
           })
    }
    useEffect(() => {
        getCourseDetails(1);
    }, []);

    //cahange course status
    const handleStatus = (id, status) => {
        changeCourseStatus(id, status)
            .then((response) => {
                setCourse(course.map((obj) => {
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
                <Table tableHeader={tableHeader} data={course} type={'Course'} handleStatus={handleStatus} getDetails={getCourseDetails} pagination={pagination} />
            </div>
        </div>
    )
}

export default ListCourse