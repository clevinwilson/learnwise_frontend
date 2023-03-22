import React from 'react'

function horizontalCourseCard() {
    return (
        <div className='mx-5 lg:mx-20 mb-10'>
            <div className='mb-10'>
                <h3 className="text-3xl sm:text-4xl  mt-8  mb-4 ml-2 sm:ml-5 ">My Enrollments</h3>
            </div>
            <div className="flex justify-center mt-4 sm:mx-10 m-3">
                <a href="#" className="flex p-4 w-full max-w-screen-lg hover:bg-violet-50 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="rounded mt-4 sm:mt-0" src="https://img-c.udemycdn.com/course/240x135/2887266_c696_5.jpg" alt />
                    <div className="flex flex-col ml-0 sm:ml-3 justify-between mt-2 sm:0 p-4 leading-normal">
                        <h5 className="mb-2 text-xl  font-bold tracking-tight text-gray-900 dark:text-white">The Complete 2023 Web Development
                            Bootcamp</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">10 lessons</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default horizontalCourseCard