import React, { useState, useEffect } from 'react'
import { changeGroupStatus, getAllGroups } from '../../services/adminApi';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import { toast } from 'react-toastify';


function ListGroup() {

    const [group, setGroup] = useState();

    //table header
    const tableHeader = [
        { title: 'Name' },
        { title: "No Members" },
        { title: "Created At" },
        { title: "Status" },
        { title: "Action" }
    ];

    //get community Details
    useEffect(() => {
        getAllGroups()
            .then((response) => {
                setGroup(response.data.group)
            })
            .catch((response) => {
                toast(response.data.message, {
                    position: 'top-center'
                })
            })
    }, []);

    //cahange group status
    const handleStatus = (id, status) => {
        changeGroupStatus(id, status)
            .then((response) => {
                setGroup(group.map((obj) => {
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
          <Header />
          <div className='admin-page p-3 ' >
              <Table tableHeader={tableHeader} data={group} type={'Group'} handleStatus={handleStatus} />
          </div>
      </div>
  )
}

export default ListGroup