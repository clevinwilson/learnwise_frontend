import React,{useState} from 'react';
import LoadingButton from '../LoadingButton/LoadingButton';
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import axiosInstance from '../../axios/axios';
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { addTeacher } from '../../services/adminApi';

function AddTeacher() {
    const {admin}=useSelector((state)=>state);
    const [loading, setLoading] = useState(false);
    const headers = { Authorization: `Bearer ${admin.token}` };

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name Required'),
        lastName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Last Name Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is Required'),
        phone: Yup.string()
            .max(10, 'Please enter a valid phone number')
            .min(10, "Please enter a valid phone number")
            .required('Phone Number is Required'),
        place: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Place is Required'),
    });

    const generateError = (err) => {
        toast.error(err, {
            position: "top-center",
        });
    };

    const successMessaage=(message)=>{
        toast.success(message,{
            position:'top-center'
        })
    }

    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            place:""
        },
        validationSchema: validate,
        onSubmit:async(values)=>{
            setLoading(!loading);
            const { data } = await addTeacher(values);
            
            setLoading(false)


            if (data.created) {
                console.log(data);
                successMessaage(data.message)
            } else {
                console.log(data);

                generateError(data.message)
                
                // setLoading(false);
                // setErrorMessage(data.message)
            }
        }

    })

    const handleChange=(e)=>{
        formik.setValues((prev)=>{
            const formFields={...prev};
            formFields[e.target.name]=e.target.value;
            return formFields;
        })
    }
    return (
        <div className='form-wrap w-1/1'>
            <div className='mb-4 pb-2 form-title-box ' >
                <span className='text-base font-semibold text-violet-700'>Add Teacher</span>
            </div>
            <form className="w-full  mt-10">
                <div className="flex flex-wrap -mx-3  mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-100 border-gray-200 text-gray-700 border  rounded py-3 
                        px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
                        onChange={(e)=>{handleChange(e)}}
                        name='firstName' placeholder="First Name" />
                       
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.firstName}</p>
                        ) : null}
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none mb-3 block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='lastName' type="text"
                            onChange={(e) => { handleChange(e) }}
                         placeholder="Last Name" />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.lastName}</p>
                        ) : null}
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='email' 
                            onChange={(e) => { handleChange(e) }}
                        type="email" placeholder="example@gmail.com" />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                        ) : null}
                        
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Phone Number
                        </label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='phone'
                            onChange={(e) => { handleChange(e) }}
                            type="text" placeholder="0000 000 000" />
                        {formik.touched.phone && formik.errors.phone ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
                        ) : null}

                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Place
                        </label>
                        <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            onChange={(e) => { handleChange(e) }}

                        name='place' id="grid-password" type="text" placeholder="Place" />
                        {formik.touched.place && formik.errors.place ? (
                            <p className="text-red-500 text-xs italic">{formik.errors.place}</p>
                        ) : null}
                        
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">

                    <div className='mt-8 w-full  flex justify-end mr-3'>
                        <LoadingButton onClick={formik.handleSubmit} loading={loading}>
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </form>
            <ToastContainer />

        </div>
    )
}

export default AddTeacher