import React, { useEffect, useState } from 'react';
import CommunityNavigation from '../../components/CommunityNavigation/CommunityNavigation'
import CommunitySidebar from '../../components/CommunitySidebar/CommunitySidebar'
import UserHeader from '../../components/UserHeader/UserHeader'
import { useLocation } from 'react-router-dom';
import { getCommunityDetails } from '../../services/userApi';
import CommunityTab from '../../utils/CommunityTab';


function CommunityHomePage() {
    const groupsIcon = ["🕺", "🎨", "🍳", "🎸"];
    const { state } = useLocation();
    const [community, setCommunitys] = useState({});
    useEffect(() => {
        getCommunityDetails(state.communityId).then((response) => {
            setCommunitys(response.data.communityDetails)
        })
    }, [])


    return (
        <>
            <UserHeader />
            <div className="flex h-screen">
                <div className="sticky top-0 self-start">
                    <CommunitySidebar />
                </div>
                <div className="w-full border-x border-base-300">
                    <div className="bg-base-100">
                        <img
                            src={community.image && import.meta.env.VITE_SERVER_URL + community.image.path}
                            className="aspect-[2/1] md:aspect-[3/1] w-full object-cover "
                            alt=""
                        />
                        <div className="flex gap-3">
                            <div className="avatar-group mt-[-40px] ml-5 -space-x-12">
                                {groupsIcon.map((icon) => (
                                    <div key={icon} className="avatar">
                                        <div className="bg-base-200 p-3 text-2xl leading-tight">
                                            {icon}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-1 text-sm">Created in May, 2021</div>
                        </div>
                        <div className="mt-2 flex flex-col gap-3 px-5 sm:px-8">
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                    <div className="text-2xl font-bold">
                                        {community.name && community.name}
                                    </div>
                                    <div className="text-sm">
                                        {community.members && community.members.length} members &nbsp; ● &nbsp; {community.groups && community.groups.length} Groups
                                    </div>
                                </div>
                                <button className="btn btn-primary">Join</button>
                            </div>
                            <p>{community.about && community.about}</p>
                        </div>
                        <div className="home-tabs tabs mt-7 justify-between border-b border-base-300 px-5">
                            {CommunityTab
                                .map((tab) => (
                                    <div
                                        key={tab.label}
                                    // className={`tab ${activeTab === tab.label ? "tab-active" : ""
                                    //     }`}
                                    // onClick={() => setActiveTab(tab.label)}
                                    >
                                        {tab.label}
                                    </div>
                                ))}
                        </div>

                        {/* <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                              <ul class="flex flex-wrap -mb-px">
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                                  </li>
                                  <li class="mr-2">
                                      <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                                  </li>
                                  <li>
                                      <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                                  </li>
                              </ul>
                          </div> */}

                        <div className="p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen">
                            <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
                                <div className="flex mb-4">
                                    <img className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                                    <div className="ml-2 mt-0.5">
                                        <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">Loyce Kuvalis</span>
                                        <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">16 December at 08:25</span>
                                    </div>
                                </div>
                                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <div className="flex justify-between items-center mt-5">
                                    <div className="flex ">
                                        <svg className="p-0.5 h-6 w-6 rounded-full z-20 bg-white dark:bg-gray-800 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#18AFFF" /><stop offset="100%" stopColor="#0062DF" /></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation={1} /><feOffset dy={-1} in="shadowBlurInner1" result="shadowOffsetInner1" /><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2={-1} k3={1} operator="arithmetic" result="shadowInnerInner1" /><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0" /></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z" /></defs><g fill="none"><use fill="url(#a1)" xlinkHref="#b1" /><use fill="black" filter="url(#c1)" xlinkHref="#b1" /><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z" /></g></svg>
                                        <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">8</span>
                                    </div>
                                    <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">33 comments</div>
                                </div>
                            </div>
                        </div>

                        


                        {/* <div className="mt-3 px-5 py-5 sm:px-8">{loadTab()}</div> */}
                    </div>
                </div>
            </div>
            <CommunityNavigation />
        </>

    )
}

export default CommunityHomePage