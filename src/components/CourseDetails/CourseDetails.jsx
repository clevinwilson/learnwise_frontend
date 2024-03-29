import React, { useEffect, useState } from 'react';
import SyllabusDropdown from '../SyllabusDropdown/SyllabusDropdown';
import BuyNowCard from '../BuyNowCard/BuyNowCard';
import './CourseDetails.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { getCourseDetails } from '../../services/userApi';
import Loader from '../Loader/Loader';



function CourseDetails() {
    const { courseId } = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    let [loading, setLoading] = useState(true);
    const navigate=useNavigate(); 

    //geting course details
    useEffect(() => {
        window.scrollTo(0, 0);
        getCourseDetails(courseId)
        .then((response) => {
            if (response.data.status) {
                response.data.courseDetails.course = response.data.courseDetails.course.map(obj => {
                    return { ...obj, open: false };
                });
                setCourseDetails(response.data.courseDetails);
                setLoading(false);
            }
        })
        .catch((response)=>{
            navigate('/*')
        })

    }, [])


    //toggle dropdown
    const toggleDropdown = index => {

        let course = courseDetails.course.map((course, i) => {
            if (i === index) {
                course.open = !course.open;
            } else {
                course.open = false;
            }

            return course;
        })
        setCourseDetails({ ...courseDetails, course });
    };


    return (
        <section>

            {loading ?
                <div className='h-screen flex justify-center items-center'>
                    <Loader loading={loading} />
                </div>
                :
                <div className="p-2 lg:p-20 mx-auto">
                    <div className="flex flex-col-reverse sm:flex-row xl:px-20">
                        <div className="w-full lg:w-7/12 ">
                            <div className='hidden sm:block xl:ml-1 mb-8'>
                                <h1 className="text-3xl font-semibold mb-4">{courseDetails.name}</h1>
                                <p className='mb-3 mr-6'>{courseDetails.about}</p>
                                <h3 className="text-theme-color text-2xl font-semibold mb-3">Syllabus</h3>
                            </div>

                            <h3 className="text-xl text-theme-color mt-8 font-semibold mb-4 block sm:hidden ">Syllabus</h3>
                            <div className="App">
                                <div className="syllabus syllabus-wrap rounded-lg">
                                    {courseDetails.course && courseDetails.course.map((course, index) => (
                                        <SyllabusDropdown course={course} index={index} key={index} toggleDropdown={toggleDropdown} />
                                    ))}
                                </div>
                            </div>

                            {/* //author section */}
                            <div>
                                <h3 className="text-2xl  mt-8 font-semibold mb-4 ">Author</h3>
                                <blockquote className="rounded-lg bg-gray-100 p-8">
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Man"
                                            src={courseDetails.teacher && import.meta.env.VITE_SERVER_URL + courseDetails.teacher.picture}
                                            className="h-16 w-16 rounded-full object-cover"
                                        />

                                        <div>
                                            <p className="mt-1 text-lg font-medium text-gray-700">{courseDetails.teacher && courseDetails.teacher.firstName}</p>
                                        </div>
                                    </div>

                                    <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                                        {courseDetails.teacher && courseDetails.teacher.about}
                                    </p>
                                </blockquote>
                            </div>

                            <div>
                                <h3 className="text-2xl  mt-8 font-semibold mb-4 ">Description</h3>
                                <div className='border rounded-md p-3 '>
                                    {courseDetails.description}
                                    <p className='text-slate-600 mt-4'></p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-5/12 flex-column  flex  flex-col  items-center sm:items-start ml-0 sm:ml-10 sm:h-screen top-0 sm:sticky ">
                            <div className='block sm:hidden p-2 mt-3 mb-3'>
                                <h1 className="text-3xl font-semibold mb-4">{courseDetails.name}</h1>
                                <p className='mb-3'>{courseDetails.description}</p>

                            </div>
                            {courseDetails.course && <BuyNowCard courseDetails={courseDetails} />}

                        </div>
                    </div>
                </div>
            }

        </section>


    )
}

export default CourseDetails