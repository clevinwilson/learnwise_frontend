import React, { useEffect, useState } from 'react';
import './AdminHeader.scss';
import { setSidebar } from '../../Redux/Features/adminSidebarToogle';
import { useDispatch, useSelector } from 'react-redux';

function AdminHeader() {
    const sidebarToogle = useSelector((state) => state.adminSidebarToogle)
    const dispatch = useDispatch();
    return (
        <div className='p-3'>
            <nav style={{ border: "1px solid #e5e7eb", position: 'fixed', width: '100%', top: '0' ,left:'0',right:'0' }} className="relative  z-50 px-4 py-4 flex justify-between items-center bg-white">
                <a className="text-3xl font-bold leading-none" href="#">
                    <h1 className='text-violet-800 text-2xl'>LearnWise</h1>
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-violet-700 p-3"
                        onClick={() => { dispatch(setSidebar(!sidebarToogle.sidebar)) }}
                    >
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>

                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
                <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
            </nav>

        </div>
    )
}

export default AdminHeader