import React from 'react'

function Members() {
    return (
        <div className="p-5 bg-white shadow">

            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-32 h-32 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                <div className="flex flex-col">
                    <h1 className="text-4xl font-medium text-gray-700">Jessica Jones, <span className="font-light text-gray-500">27</span></h1>

                    <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                </div>
            </div>

            <div classname="flex flex-col ">
                <div className="p-4  bg-white rounded-lg   sm:p-8 ">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Community members</h3>
                        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </a>
                    </div>
                    <div className="grid grid-cols-3 gap-5 mt-6">
                        <div className="flex items-center space-x-4 p-3 bg-slate-50">
                            <div className="flex-shrink-0">
                                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    Michael Gough
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    email@windster.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Members