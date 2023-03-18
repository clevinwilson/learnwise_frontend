import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../Redux/Features/userSlice';
import { setSidebar } from '../../Redux/Features/adminSidebarToogle';
import { useNavigate } from 'react-router-dom';
import adminLinks from '../../links/adminLinks';
import teacherLinks from '../../links/teacherLinks'

function Sidebar(props) {
  const [sidebarLinks,setSidebarLinks]=useState([]);
  const sidebarToogle = useSelector((state) => state.adminSidebarToogle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        dispatch(setSidebar(true))
      }
      if (window.innerWidth < 400) {
        dispatch(setSidebar(false))
      }
    }

    if(props.admin){
      setSidebarLinks(adminLinks);
    }else{
      setSidebarLinks(teacherLinks);
    }

    
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={`${sidebarToogle.sidebar ? "sidebar " : "close-sidebar admin-page-inclose "} z-40  fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r`}>
      <div className="flex items-center justify-center h-14 border-b">
        <div>Learnwise</div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          {
            sidebarLinks.map((obj,index) => {
              return (
                <>
                  <li className="px-3" key={index}>
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm font-light tracking-wide text-gray-500">{obj.title}</div>
                    </div>
                  </li>
                  {
                    obj.links.map((link,index)=>{
                      return(
                        <li key={index}>
                          <a onClick={()=>{navigate(link.link)}} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                            <span className="inline-flex justify-center items-center ml-4">
                             {link.icon?
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
                                  <path strokeLinecap="round" strokeLinejoin="round"
                                   d= {link.icon}
                                   />
                                </svg>
                                :""
                             }
                            </span>
                            <span className="ml-2 sidebar-label text-sm tracking-wide truncate">{link.subTitle}</span>
                          </a>
                        </li>
                      )
                    })
                  }
                  
                  
                </>
              )
            })
          }
          
         

          {/* <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                  </span>
                  <span className="ml-2 sidebar-label text-sm tracking-wide truncate">Messages</span>
                </a>
              </li>
              <li>
                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                  </span>
                  <span className="ml-2 sidebar-label text-sm tracking-wide truncate">Notifications</span>
                  <span className="px-2 sidebar-label py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                </a>
              </li> */}
          {/* <li className="px-3">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm  font-light tracking-wide text-gray-500">Tasks</div>
            </div>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </span>
              <span className="sidebar-label ml-2 text-sm tracking-wide truncate">Available Tasks</span>
            </a>
          </li>
          <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </span>
              <span className="ml-2 sidebar-label text-sm tracking-wide truncate">Clients</span>
              <span className="px-2 sidebar-label py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full">15</span>
            </a>
          </li>
          <li className="px-2">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm  font-light tracking-wide text-gray-500">Settings</div>
            </div>
          </li> */}
          {/* <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </span>
              <span className="ml-2 sidebar-label text-sm tracking-wide truncate">Profile</span>
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
              <span className="inline-flex justify-center items-center ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </span>
              <span className="ml-2  text-sm tracking-wide truncate">Settings</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
