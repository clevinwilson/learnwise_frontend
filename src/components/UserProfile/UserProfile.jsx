import React from 'react';
import './UserProfile.scss'

function UserProfile() {
    return (
        <div className="bg-gray-100 lg:px-24">

            <div className='my-5 p-5  mx-auto'>
                <div class="sm:hidden">
                    <label for="tabs" class="sr-only">Select your country</label>
                    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Profile</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div>
                <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li class="w-full">
                        <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
                    </li>
                    <li class="w-full">
                        <a href="#" class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
                    </li>
                </ul>
            </div>
        
            <div className=" mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-green-400">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto rounded-full" src="https://lh3.googleusercontent.com/a/AGNmyxZ9o7XICIPcBPekCJwTNEKOHr11N9-Z7F-X2dFf=s96-c" alt />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Jane Doe</h1>
                            <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
                            {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p> */}
                            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                <li className="flex items-center py-3">
                                    <span>Status</span>
                                    <span className="ml-auto"><span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                                </li>
                                <li className="flex items-center py-3">
                                    <span>Member since</span>
                                    <span className="ml-auto">Nov 07, 2016</span>
                                </li>
                            </ul>
                        </div>
                        {/* End of profile card */}
                        <div className="my-4" />
                       
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 ">
                        {/* Profile tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-2 text-sm">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">First Name</div>
                                        <div className="px-4 py-2">Jane</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Last Name</div>
                                        <div className="px-4 py-2">Doe</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Gender</div>
                                        <div className="px-4 py-2">Female</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Contact No.</div>
                                        <div className="px-4 py-2">+11 998001001</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Current Address</div>
                                        <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Permanant Address</div>
                                        <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email.</div>
                                        <div className="px-4 py-2">
                                            <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Birthday</div>
                                        <div className="px-4 py-2">Feb 06, 1998</div>
                                    </div>
                                </div>
                            </div>
                            <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                                Full Information</button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile