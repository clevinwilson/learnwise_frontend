import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/course-details/${course._id}`}>
                <img className="rounded-t-lg w-full  object-cover " style={{ height: "150px" }} src={`http://localhost:3000/${course.image.path}`} alt />
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tigsht text-theme-color dark:text-white">{course.name}</h5>
                    <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{course.teacher.firstName}</p>
                    <div>
                        <h5 className='text-base font-semibold mt-5'>₹ {course.price}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CourseCard