import React, { useRef } from 'react';
import { BiCloudUpload } from "react-icons/bi";
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { createCommunity } from '../../services/user';
import { ToastContainer, toast } from "react-toastify";


function AddCommunityModal(props) {
    const fileInputRef = useRef();

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const validate = Yup.object({
        name: Yup.string()
            .required('Community Name Required'),
        image: Yup.string()
            .required('Image Required'),
        type: Yup.string()
            .required('Community type Required'),
        about: Yup.string()
            .required('About Required'),
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            type: "",
            about: "",
        },
        validationSchema: validate,
        onSubmit: async (values) => {
            createCommunity(values).then((response)=>{
                console.log(response.data);
                if(response.data.status){
                    props.close()
                    toast.success(response.data.message, {
                        position: "top-center",
                    });
                }else{
                    toast.error(response.data.message, {
                        position: "top-center",
                    });
                }
               
            })

        }

    })

    const handleChange = (e) => {
        formik.setValues((prev) => {
            const formFields = { ...prev };
            if(e.target.name=="image"){
                formFields[e.target.name] = e.target.files[0];
            }else{
                formFields[e.target.name] = e.target.value;
            }
            return formFields;
        })
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-scrool fixed inset-0 z-50 outline-none focus:outline-none" >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 mt-48 sm:mt-32  lg:mt-20 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-2xl font-semibold">
                                Create New Community
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className='mt-10'>
                                {formik.values.image ?
                                    <div className='flex items-center justify-center w-full cursor-pointer ' >
                                        <img class="h-auto max-w-lg rounded-lg w-full course-image" src={formik.values.image ? URL.createObjectURL(formik.values.image) : ""} alt="image description" onClick={handleClick}></img>
                                    </div>
                                    : ""}
                                <div>
                                    <div class={formik.values.image ? " items-center justify-center w-full hidden" : "flex items-center justify-center w-full" }>
                                        <div className='w-full lg:w-2/3  md:w-1/2 sm:w-1/1'>
                                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <BiCloudUpload size={22} />
                                                    <p>Community Image</p>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" name='image' className="hidden" required
                                                    ref={fileInputRef}
                                                    onChange={(e) => { handleChange(e) }}

                                                    // onChange={(e) => {
                                                    //     setImage(e.target.files[0]);
                                                    // }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    {formik.touched.image && formik.errors.image ? (
                                        <p className="text-red-500 text-xs mt-2 text-center">{formik.errors.image}</p>
                                    ) : null}
                                </div>
                            </div>

                            {/* //community name and type */}
                            <div className='flex  mt-5 '>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <div>
                                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Community Name</label>
                                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='name' placeholder="Name" required 
                                            onChange={(e) => { handleChange(e) }}
                                        />
                                    </div>
                                    {formik.touched.name && formik.errors.name ? (
                                        <p className="text-red-500 text-xs mt-2">{formik.errors.name}</p>
                                    ) : null}
                                </div>
                                <div className="relative mb-3 w-full md:w-1/2 m-3" data-te-input-wrapper-init>
                                    <div>
                                        <label for="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Community Type</label>
                                        <input type="text" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='type' placeholder="Type" required
                                            onChange={(e) => { handleChange(e) }}
                                         />
                                    </div>
                                    {formik.touched.type && formik.errors.type ? (
                                        <p className="text-red-500 text-xs mt-2">{formik.errors.type}</p>
                                    ) : null}
                                </div>
                            </div>

                            {/* about community */}
                            <div className='flex  mt-1 '>
                                <div className="relative mb-3  md:w-full m-3">
                                    <div>
                                        <label for="about" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About </label>
                                        <textarea id="about" rows="2" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name='about' placeholder="Short description about community"
                                            onChange={(e) => { handleChange(e) }}
                                        ></textarea>
                                    </div>
                                    {formik.touched.about && formik.errors.about ? (
                                        <p className="text-red-500 text-xs mt-2">{formik.errors.about}</p>
                                    ) : null}
                                </div>
                            </div>

                           


                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={props.close}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={formik.handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddCommunityModal