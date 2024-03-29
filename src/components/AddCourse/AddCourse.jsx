import React, { useState, useRef } from 'react';
import LoadingButton from '../LoadingButton/LoadingButton';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import { addCourse } from '../../services/teacherApi';
import './AddCourse.scss';
import CreatableSelect from 'react-select/creatable';
import { BsInfoCircle } from "react-icons/bs";

function AddCourse() {
    const fileInputRef = useRef();
    const [lesson, setLesson] = useState([]);
    const [chapter, setChapter] = useState("");
    const [course, setCourse] = useState([]);
    const [image, setImage] = useState('');
    const [chapterDetails, setChapterDetails] = useState(null);
    const [selectedTags, setSelectedTags] = useState();

    const handleClick = () => {
        fileInputRef.current.click();
    };

    //chapter formik validation
    const validateLesson = Yup.object({
        chapterName: Yup.string()
            .required('Lesson Name Required'),
        lessonName: Yup.string()
            .required('Lesson Name Required'),
        videoUrl: Yup.string()
            .required('Video Link  Required')
            .matches(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/, 'Invalid YouTube link'),
    })

    //course formik validation
    const validate = Yup.object({
        name: Yup.string()
            .required('Course Name Required'),
        category: Yup.string()
            .required('Category Required'),
        duration: Yup.string()
            .required('Phone duration is Required'),
        language: Yup.string()
            .required('Language Required'),
        price: Yup.string()
            .required('Price Required'),
        about: Yup.string()
            .required('About Required'),
        description: Yup.string()
            .required('Description Required'),
    });

    //tosat message
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

    //add chapter
    const addChapter = () => {
        setCourse([...course, { chapter, lessons: lesson }]);
        setLesson([]);
        successMessaage("Chapter Add successfull");
        setChapter("");
    }

    //chapter formik initial values
    const lessonFormik = useFormik({
        initialValues: {
            chapterName: "",
            lessonName: "",
            videoUrl: ""
        },
        validationSchema: validateLesson,
        onSubmit: (values) => {
            setLesson([...lesson, values]);
            lessonFormik.setFieldValue('lessonName', '');
            lessonFormik.setFieldValue('videoUrl', '');
        }
    })

    const EditLessonFormik = useFormik({
        initialValues: {
            chapterName: "",
            lessonName: "",
            videoUrl: ""
        },
        // validationSchema: validateLesson,
        onSubmit: (values) => {
            setChapterDetails({ chapter: chapterDetails.chapter, lessons: [...chapterDetails.lessons, values] })


        }
    })


    //course formik initial values
    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            category: "",
            duration: "",
            language: "",
            about: "",
            price: "",
            description: ""
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            addCourse(values, course, image, selectedTags)
                .then((response) => {

                    if (response.data.status) {
                        successMessaage(response.data.message);
                    } else {
                        generateError(response.data.message);
                    }
                })
                .catch((err) => {
                    generateError("Network error");
                })
        }

    })

    //course formik onchange
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

    const handEditleLessonChange = (e) => {
        EditLessonFormik.setValues((prev) => {
            const formFields = { ...prev };
            formFields[e.target.name] = e.target.value;
            return formFields;
        })
    }

    return (
        <div className='form-wrap w-3/3 mr-md-4 mt-7'>
            <div className='mb-4 pb-4 form-title-box ' >
                <span className='text-base font-semibold text-violet-700'>Add Course</span>
            </div>

            <div className='mt-10'>
                {image ?
                    <div className='flex items-center justify-center w-full ' >
                        <img class="h-auto max-w-lg rounded-lg w-full cursor-pointer course-pointer" src={image ? URL.createObjectURL(image) : ""} alt="image description" onClick={handleClick}></img>
                    </div>
                    : ""}

                <div>
                    <div class={!image ? "flex items-center justify-center w-full" : "items-center justify-center w-full hidden"}>
                        <div className='w-full lg:w-1/3  md:w-1/2 sm:w-1/1'>
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p>Course thumbnail</p>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" name='course-image' ref={fileInputRef} type="file" className="hidden" required

                                    onChange={(e) => {
                                        setImage(e.target.files[0]);
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </div>

            </div>
            <form className="w-full  mt-10 p-1">
                <div className="flex flex-wrap -mx-3  mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide  text-violet-700 text-xs font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="border-gray-300  appearance-none block w-full bg-white text-gray-700 border  rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text"
                            onChange={(e) => { handleChange(e) }}
                            value={formik.values.name}
                            name='name' placeholder="Course Name" />

                        {formik.touched.name && formik.errors.name ? (
                            <p className="text-red-500 text-xs ">{formik.errors.name}</p>
                        ) : null}
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlFor="category">
                            Category
                        </label>
                        <input className="appearance-none block w-full mb-3 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" name='category' type="text"
                            onChange={(e) => { handleChange(e) }}
                            value={formik.values.category}
                            placeholder="Category" />
                        {formik.touched.category && formik.errors.category ? (
                            <p className="text-red-500 text-xs ">{formik.errors.category}</p>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3  mb-3">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlFor="Duration">
                            Duration
                        </label>
                        <input className="border-gray-300  appearance-none block w-full bg-white text-gray-700 border  rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="duration" type="text"
                            onChange={(e) => { handleChange(e) }}
                            name='duration' placeholder="Course duration" />

                        {formik.touched.duration && formik.errors.duration ? (
                            <p className="text-red-500 text-xs ">{formik.errors.duration}</p>
                        ) : null}
                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlFor="language">
                            Language
                        </label>
                        <input className="appearance-none mb-3 block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="language" name='language' type="text"
                            onChange={(e) => { handleChange(e) }}
                            placeholder="language" />
                        {formik.touched.language && formik.errors.language ? (
                            <p className="text-red-500 text-xs ">{formik.errors.language}</p>
                        ) : null}
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3  mb-3">

                    <div className='flex flex-wrap  md:w-1/2'>
                        <div className="w-full md:w-1/3 px-3">
                            <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input className="appearance-none mb-3 block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" name='price' type="text"
                                onChange={(e) => { handleChange(e) }}
                                value={formik.values.price}
                                placeholder="Price" />
                            {formik.touched.price && formik.errors.price ? (
                                <p className="text-red-500 text-xs ">{formik.errors.price}</p>
                            ) : null}
                        </div>

                        {/* tags */}
                        <div className="w-full md:w-2/3 px-3">
                           <div className='flex'>
                                <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2 mr-3" htmlFor="price">
                                    Tags
                                </label>
                                <div class="tooltip"><BsInfoCircle />
                                    <span class="tooltiptext">Help to enhance the search</span>
                                </div>
                           </div>

                           

                            <CreatableSelect
                                value={selectedTags?.map(tag => {
                                    return { label: tag.label };
                                })}

                                onChange={(value) => {
                                    setSelectedTags(value)
                                }}

                                isMulti />
                            {formik.touched.price && formik.errors.price ? (
                                <p className="text-red-500 text-xs ">{formik.errors.price}</p>
                            ) : null}
                        </div>

                    </div>

                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlfor="about">
                            About
                        </label>

                        <textarea id="about" rows="3" name='about' className="block mb-3 p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                            onChange={(e) => { handleChange(e) }}
                        >{formik.values.price}</textarea>
                        {formik.touched.about && formik.errors.about ? (
                            <p className="text-red-500 text-xs ">{formik.errors.about}</p>
                        ) : null}
                    </div>
                </div>

                <div className='mb-4'>
                    <label className="block uppercase tracking-wide text-violet-700 text-xs font-bold mb-2" htmlfor="description">
                        Description
                    </label>
                    <textarea id="description" rows="3" name='description' className="block mb-3 p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                        onChange={(e) => { handleChange(e) }}
                    >{formik.values.price}</textarea>
                    {formik.touched.description && formik.errors.description ? (
                        <p className="text-red-500 text-xs ">{formik.errors.description}</p>
                    ) : null}
                </div>

                <div className='mt-7'>
                    <label className="block uppercase tracking-wide text-violet-600 text-xs font-bold mb-2" htmlFor="addchapter">
                        Add Chapter
                    </label>
                    <div className="chapter mt-7">
                        <button type="button" className=" bg-green-400   focus:ring-4 focus:outline-none text-white focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                            data-te-toggle="modal"
                            data-te-target="#exampleModalXl"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='ml-3 '>Add Chapter</span>
                        </button>
                    </div>
                </div>

                <div className='flex flex-wrap'>
                    {
                        course.map((obj, index) => {
                            return (
                                <div className='p-3 w-full md:w-1/2'>
                                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        data-te-toggle="modal"
                                        data-te-target="#editCourse"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        onClick={() => {
                                            setChapterDetails(course.find(courses => courses.chapter === obj.chapter));
                                            console.log(chapterDetails);
                                        }}
                                    >
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white"><span className='mr-3'>{index + 1}.</span>{obj.chapter}</h5>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className='mt-8 w-full  flex justify-end mr-3'>
                        <LoadingButton onClick={formik.handleSubmit}>
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </form>
            <ToastContainer />



            {/*add course modal */}
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
                id="exampleModalXl"
                tabIndex="-1"
                aria-labelledby="exampleModalXlLabel"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalXlLabel">
                                Add Chapter
                            </h5>

                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='p-7'>
                            <div className='flex  mt-5 '>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="chapterName"
                                        name='chapterName'
                                        value={chapter}
                                        onChange={(e) => { handleLessonChange(e); setChapter(e.target.value) }}
                                        placeholder="Form control lg" />

                                    {lessonFormik.touched.chapterName && lessonFormik.errors.chapterName ? (
                                        <p className="text-red-500 text-xs ">{lessonFormik.errors.chapterName}</p>
                                    ) : null}

                                    <label
                                        htmlFor="chapterName"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Chapter Name
                                    </label>
                                </div>
                            </div>

                            <div className='flex  mt-5 '>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="name"
                                        value={lessonFormik.values.lessonName}
                                        onChange={(e) => { handleLessonChange(e); }}
                                        name='lessonName'
                                        placeholder="Name" />
                                    {lessonFormik.touched.lessonName && lessonFormik.errors.lessonName ? (
                                        <p className="text-red-500 text-xs ">{lessonFormik.errors.lessonName}</p>
                                    ) : null}
                                    <label
                                        htmlFor="name"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Lesson Name
                                    </label>
                                </div>
                                <div className="relative mb-3 w-full md:w-1/2 sm:w-1/1 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name='videoUrl'
                                        onChange={(e) => { handleLessonChange(e) }}
                                        value={lessonFormik.values.videoUrl}
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="videoUrl"
                                        placeholder="Video Url" />
                                    {lessonFormik.touched.videoUrl && lessonFormik.errors.videoUrl ? (
                                        <p className="text-red-500 text-xs ">{lessonFormik.errors.videoUrl}</p>
                                    ) : null}
                                    <label
                                        htmlFor="videoUrl"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Video Link
                                    </label>
                                </div>
                                <div className="relative mb-3 w-full md:w-1/3 m-3" data-te-input-wrapper-init>
                                    <button type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-400 
                                    dark:hover:bg-green-500 dark:focus:ring-green-500"
                                        onClick={lessonFormik.handleSubmit}
                                    >Add</button>
                                </div>

                            </div>

                            {lesson[0] ?
                                <div>
                                    <div>
                                        <h1 className='ml-4 mt-3'>Lessons</h1>
                                    </div>

                                    <div className='flex flex-wrap'>
                                        {
                                            lesson.map((obj, index) => {
                                                return (
                                                    <div className='p-3 w-full md:w-1/2'>
                                                        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                            <div className="flex flex-col justify-between p-4 leading-normal">
                                                                <h5 className=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white"><span className='mr-3'>{index + 1}.</span>{obj.lessonName}</h5>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-2">
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
                                :
                                ""
                            }

                        </div>
                    </div>
                </div>
            </div>

            {/* edit courser modal */}
            <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
                id="editCourse"
                tabIndex="-1"
                aria-labelledby="editCourse"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
                    <div
                        className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                            <h5
                                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="editCourse">
                                Edit Chapter
                            </h5>
                            <button
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                data-te-modal-dismiss
                                aria-label="Close">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className='p-7'>
                            <div className='flex  mt-5 '>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="chapterName"
                                        name='chapterName'
                                        value={chapterDetails ? chapterDetails.chapter : ""}
                                        onChange={(e) => { handEditleLessonChange(e); setChapter(e.target.value) }}
                                        readOnly
                                        placeholder="Form control lg" />

                                    {lessonFormik.touched.chapterName && lessonFormik.errors.chapterName ? (
                                        <p className="text-red-500 text-xs ">{lessonFormik.errors.chapterName}</p>
                                    ) : null}
                                </div>
                            </div>

                            <div className='flex  mt-5 '>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="name"
                                        value={EditLessonFormik.values.lessonName}
                                        onChange={(e) => { handEditleLessonChange(e); }}
                                        name='lessonName'
                                        placeholder="Name" />
                                    {EditLessonFormik.touched.lessonName && EditLessonFormik.errors.lessonName ? (
                                        <p className="text-red-500 text-xs ">{EditLessonFormik.errors.lessonName}</p>
                                    ) : null}
                                    <label
                                        htmlFor="name"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Lesson Name
                                    </label>
                                </div>
                                <div className="relative mb-3 w-full md:w-1/2 sm:w-1/1 m-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        name='videoUrl'
                                        onChange={(e) => { handEditleLessonChange(e) }}
                                        value={EditLessonFormik.values.videoUrl}
                                        className="peer block min-h-[auto] w-full rounded border-gray-300  bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="videoUrl"
                                        placeholder="Video Url" />
                                    {EditLessonFormik.touched.videoUrl && EditLessonFormik.errors.videoUrl ? (
                                        <p className="text-red-500 text-xs ">{EditLessonFormik.errors.videoUrl}</p>
                                    ) : null}
                                    <label
                                        htmlFor="videoUrl"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.7rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                    >Video Link
                                    </label>
                                </div>
                                <div className="relative mb-3 w-full md:w-1/3 m-3" data-te-input-wrapper-init>
                                    <button type="button" className="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-400 
                                    dark:hover:bg-green-500 dark:focus:ring-green-500"
                                        onClick={EditLessonFormik.handleSubmit}
                                    >Add</button>
                                </div>

                            </div>

                            <div>
                                <div>
                                    <h1 className='ml-4 mt-3'>Lessons</h1>
                                </div>

                                <div className='flex flex-wrap'>
                                    {chapterDetails ?
                                        chapterDetails.lessons.map((obj, index) => {
                                            return (
                                                <div className='p-3 w-full md:w-1/2'>
                                                    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                                            <h5 className=" text-lg font-semibold tracking-tight text-gray-900 dark:text-white"><span className='mr-3'>{index + 1}.</span>{obj.lessonName}</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                        : ""
                                    }
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className='mt-8 w-full  flex justify-end mr-7'>
                                        <button type="button" onClick={() => {
                                            setCourse(course.map((obj) => {
                                                if (obj.chapter == chapterDetails.chapter) {
                                                    return { ...chapterDetails }
                                                }
                                                return obj;
                                            }))

                                            EditLessonFormik.resetForm();
                                            successMessaage('Chapter Updated successfully')
                                        }}
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
        </div>
    )
}

export default AddCourse