import React, { useState } from 'react';
import LoadingButton from '../LoadingButton/LoadingButton';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../axios/axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function AddCourse() {
    const [lesson, setLesson] = useState([]);
    const [chapter,setChapter]=useState("");
    const [course,setCourse]=useState([]);

    const validateLesson = Yup.object({
        chapterName: Yup.string()
            .required('Lesson Name Required'),
        lessonName: Yup.string()
            .required('Lesson Name Required'),
        videoUrl: Yup.string()
            .required('Video Link  Required'),
    })


    const validate = Yup.object({
        name: Yup.string()
            .required('Course Name Required'),
        category: Yup.string()
            .required('First category Required'),
        duration: Yup.string()
            .required('Phone duration is Required'),
        language: Yup.string()
            .required('First language Required'),
        description:Yup.string()
            .required('First description Required'),
    });

    const generateError = (err) => {
        toast.error(err, {
            position: "top-center",
        });
    };

    const successMessaage = (message) => {
        toast.success(message, {
            position: 'top-center'
        })
    }

    const addChapter=()=>{
        setCourse([{...course,lessons:lesson} ]);
        console.log(course,"courserrre");
    }

    const lessonFormik = useFormik({
        initialValues: {
            chapterName: "",
            lessonName: "",
            videoUrl: ""
        },
        validationSchema: validateLesson,
        onSubmit: (values) => {
            setLesson([...lesson,values])
        }
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            category: "",
            duration: "",
            language:"",
            description: ""
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            console.log(values);

            // const { data } = await axiosInstance.post("/admin/add-teacher",
            //     { ...values },
            //     { headers }
            // );

            // if (data.created) {
            //     console.log(data);
            //     successMessaage(data.message)
            // } else {
            //     console.log(data);

            //     generateError(data.message)

            //     // setLoading(false);
            //     // setErrorMessage(data.message)
            // }
        }

    })

    const handleChange = (e) => {
        formik.setValues((prev) => {
            const formFields = { ...prev };
            formFields[e.target.name] = e.target.value;
            return formFields;
        })
    }

    const handleLessonChange = (e) => {
        lessonFormik.setValues((prev) => {
            const formFields = { ...prev };
            formFields[e.target.name] = e.target.value;
            return formFields;
        })
    }
    return (
        <div className='form-wrap w-3/3'>
            <div className='mb-4 pb-4 form-title-box ' >
                <span className='text-base font-semibold text-violet-700'>Add Course</span>
            </div>
            <form class="w-full  mt-10 p-1">
                <div class="flex flex-wrap -mx-3  mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="border-gray-300  appearance-none block w-full bg-white text-gray-700 border  rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text"
                            onChange={(e) => { handleChange(e) }}
                            name='name' placeholder="Course Name" />

                        {formik.touched.name && formik.errors.name ? (
                            <p class="text-red-500 text-xs italic">{formik.errors.name}</p>
                        ) : null}
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
                            Category
                        </label>
                        <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" name='category' type="text"
                            onChange={(e) => { handleChange(e) }}
                            placeholder="Category" />
                        {formik.touched.category && formik.errors.category ? (
                            <p class="text-red-500 text-xs italic">{formik.errors.category}</p>
                        ) : null}
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3  mb-3">

                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Duration">
                            Duration
                        </label>
                        <input class="border-gray-300  appearance-none block w-full bg-white text-gray-700 border  rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="duration" type="text"
                            onChange={(e) => { handleChange(e) }}
                            name='duration' placeholder="Course duration" />

                        {formik.touched.duration && formik.errors.duration ? (
                            <p class="text-red-500 text-xs italic">{formik.errors.duration}</p>
                        ) : null}
                    </div>

                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="language">
                            Language
                        </label>
                        <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="language" name='language' type="text"
                            onChange={(e) => { handleChange(e) }}
                            placeholder="language" />
                        {formik.touched.language && formik.errors.language ? (
                            <p class="text-red-500 text-xs italic">{formik.errors.language}</p>
                        ) : null}
                    </div>

                </div>

                <div className='mb-4'>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
                        Description
                    </label>
                    <textarea id="description" rows="3" name='description' class="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                        onChange={(e) => { handleChange(e) }}
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <p class="text-red-500 text-xs italic">{formik.errors.description}</p>
                    ) : null}
                </div>

                <div className='mt-7'>
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="addchapter">
                        Add Chapter
                    </label>

                    <div className="chapter mt-7">
                        <button type="button" class="text-gray-900 bg-green-400   focus:ring-4 focus:outline-none text-white focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                            data-te-toggle="modal"
                            data-te-target="#exampleModalXl"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className='ml-3'>Add Chapter</span>
                        </button>
                    </div>
                </div>



                <div class="flex flex-wrap -mx-3 mb-2">

                    <div className='mt-8 w-full  flex justify-end mr-3'>
                        <LoadingButton onClick={formik.handleSubmit}>
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </form>
            <ToastContainer />



            {/* modal */}
            <div
                data-te-modal-init
                class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
                id="exampleModalXl"
                tabindex="-1"
                aria-labelledby="exampleModalXlLabel"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
                    <div
                        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalXlLabel">
                                Add Chapter
                            </h5>

                            <button
                                type="button"
                                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='p-7'>
                            <div className='flex  mt-5 '>
                                <div class="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="chapterName"
                                        name='chapterName'
                                        onChange={(e) => { handleLessonChange(e); setChapter(e.target.value) }}
                                        placeholder="Form control lg" />

                                    {lessonFormik.touched.chapterName && lessonFormik.errors.chapterName ? (
                                        <p class="text-red-500 text-xs ">{lessonFormik.errors.chapterName}</p>
                                    ) : null}

                                    <label
                                        for="chapterName"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Chapter Name
                                    </label>
                                </div>

                            </div>

                            <div className='flex  mt-5 '>
                                <div class="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="name"
                                        onChange={(e) => { handleLessonChange(e);  }}
                                        name='lessonName'
                                        placeholder="Name" />
                                    {lessonFormik.touched.lessonName && lessonFormik.errors.lessonName ? (
                                        <p class="text-red-500 text-xs ">{lessonFormik.errors.lessonName}</p>
                                    ) : null}
                                    <label
                                        for="name"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Lesson Name
                                    </label>
                                </div>
                                <div class="relative mb-3 w-full md:w-1/2 sm:w-1/1 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name='videoUrl'
                                        onChange={(e) => { handleLessonChange(e) }}

                                        class="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="videoUrl"
                                        placeholder="Video Url" />
                                    {lessonFormik.touched.videoUrl && lessonFormik.errors.videoUrl ? (
                                        <p class="text-red-500 text-xs ">{lessonFormik.errors.videoUrl}</p>
                                    ) : null}
                                    <label
                                        for="videoUrl"
                                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Video Link
                                    </label>
                                </div>
                                <div class="relative mb-3 w-full md:w-1/3 m-3" data-te-input-wrapper-init>
                                    <button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-400 
                                    dark:hover:bg-green-500 dark:focus:ring-green-500"
                                        onClick={lessonFormik.handleSubmit}
                                    >Add</button>
                                </div>

                            </div>

                            <div>
                                <h1 className='ml-4 mt-3'>Lessons</h1>
                            </div>

                            <div className='flex flex-wrap'>
                                {
                                    lesson.map((obj,index)=>{
                                        return(
                                            <div className='p-3 w-full md:w-1/2'>
                                                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                                        <h5 class=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white"><span className='mr-3'>{index+1}.</span>{obj.lessonName}</h5>

                                                    </div>
                                                </a>

                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div class="flex flex-wrap -mx-3 mb-2">

                                <div className='mt-8 w-full  flex justify-end mr-7'>
                                    <button type="button" onClick={addChapter}
                                        className='loading-btn form-btn mt-2 font-medium rounded' >
                                        <span className="txt">
                                            Submit
                                        </span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddCourse