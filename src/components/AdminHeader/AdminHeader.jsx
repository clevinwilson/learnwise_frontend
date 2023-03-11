import React,{useEffect, useState} from 'react';
import './AdminHeader.scss';
import { setSidebar } from '../../Redux/Features/adminSidebarToogle';
import { useDispatch, useSelector } from 'react-redux';

function AdminHeader() {
    const sidebarToogle = useSelector((state) => state.adminSidebarToogle)
    const dispatch = useDispatch();
  return (
    <div>
          <nav style={{ border:"1px solid #e5e7eb"}} className="relative px-4 py-4 flex justify-between items-center bg-white">
              <a className="text-3xl font-bold leading-none" href="#">
                  <h1 className='text-violet-800 text-2xl'>LearnWise</h1>
              </a>
              <div className="lg:hidden">
                  <button className="navbar-burger flex items-center text-violet-700 p-3"
                      onClick={() => { dispatch(setSidebar(!sidebarToogle.sidebar))}}
                  >
                      <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <title>Mobile menu</title>
                          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                      </svg>
                  </button>
              </div>
            
              <svg className="hidden lg:inline-block lg:ml-auto lg:mr-3  h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
          </nav>
         
    </div>
  )
}

export default AdminHeader