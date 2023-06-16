import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useFormik, Formik } from 'formik';
import * as Yup from 'yup';
import { updateAbout } from '../../services/teacherApi';

function About({ updateSection }) {

    //course formik validation
    const validate = Yup.object({
        about: Yup.string()
            .required('About Required'),
    });

    //chapter formik initial values
    const formik = useFormik({
        initialValues: {
            about: "",
        },
        validationSchema: validate,
        onSubmit: (values) => {
            updateAbout(values.about)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    toast.error(error, {
                        position: "top-center",
                    });
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
    return (
        <div >
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <h2 className="mb-8 text-2xl font-medium text-gray-900 mt-3 dark:text-white text-center ">About</h2>
                    <div className="flex justify-center flex-col">
                        <textarea id="about" rows="3" name='about' className="block mb-3 p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                            onChange={(e) => { handleChange(e) }}
                        >{formik.values.about}</textarea>

                        {formik.touched.about && formik.errors.about ? (
                            <p className="text-red-500 text-xs mt-1 ">{formik.errors.about}</p>
                        ) : null}
                    </div>
                </div>

                <div className='flex justify-end mt-10' onClick={() => {
                    updateSection('about')
                }}>
                    <button type="submit" className="text-white bg-blue-600 font-semibold   focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center">Finish</button>
                </div>
            </form>
        </div>
    )
}

export default About