import React,{useState,useEffect} from 'react'
import { getAllCommunity } from '../../services/adminApi';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

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

  return (
      <div className='relative '>
          <Sidebar admin={true} />
          <Header />
          <div className='admin-page p-3 ' >
              <Table tableHeader={tableHeader} data={community} type={'community'} />
          </div>
      </div>
  )
}

export default ListCommunity