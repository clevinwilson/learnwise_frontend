import React from 'react';

function CourseCard(props) {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="../../../public/images/course1.jpg" alt />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-theme-color dark:text-white">Pro Front End Developer - Python</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Varun</p>
                <div>
                    <h5 className='text-base font-semibold mt-5'>₹ 499</h5>
                </div>
            </div>
        </div>
    )
}

export default CourseCard