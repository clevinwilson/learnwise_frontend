import React from 'react';
import './Signup.css';
import { useFormik, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '../TextField/TextField';

function Signup() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is Required'),
    password:Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is Required'),
    confirmpassword:Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is Required ')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema:validate,
    onSubmit: (values) => {
      console.log(values);
    }

  })

  const handleChange=(event)=>{
    console.log(event.target.value);
    formik.setValues((prev) =>{
      const formFields = {...prev};
      formFields[event.target.name]=event.target.value;
      return formFields
    })
  }

  return (
    <Formik>
      <section className='section-box'>
        <form >
          <div className='grid-cols-1  form-box p-10'>
            <h2 className='text-center text-2xl font-medium pb-8'>Sign Up</h2>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                style={{ color:"black"}}
                id="firstName"
                name='firstName'
                onChange={() => { handleChange(event)}}
                placeholder="First Name" />
              {/* <label
                for="firstName"
                class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >First Name
              </label> */}
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className='text-red-500'>{formik.errors.firstName}</div>
              ) : null}
            </div>

            {/* <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
                id="exampleFormControlInput2"
                name=''
                onChange={() => { handleChange(event) }}

                placeholder="Last Name" />
              <label
                for="exampleFormControlInput2"
                class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Last Name
              </label>
            </div> */}

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                id="exampleFormControlInput2"
                style={{ color: "black" }}
                name='email'
                onChange={() => { handleChange(event) }}

                placeholder="Email address" />
              {/* <label
                for="exampleFormControlInput2"
                class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Email address
              </label> */}
              {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500' >{formik.errors.email}</div>
              ) : null}
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                id="exampleFormControlInput2"
                style={{ color: "black" }}
                name='password'
                onChange={() => { handleChange(event) }}

                placeholder="Password" />
              {/* <label
                for="exampleFormControlInput2"
                class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Password
              </label> */}
              {formik.touched.password && formik.errors.password ? (
                <div className='text-red-500'>{formik.errors.password}</div>
              ) : null}
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                id="exampleFormControlInput2"
                style={{ color: "black" }}
                name='confirmpassword'
                onChange={() => { handleChange(event) }}

                placeholder="Confirm password" />
              {/* <label
                for="exampleFormControlInput2"
                class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >Confirm password
              </label> */}
              {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                <div className='text-red-500'>{formik.errors.confirmpassword}</div>
              ) : null}
            </div>

            <div class="text-center ">
              <button className='form-btn mt-2 font-medium rounded'
              onClick={formik.handleSubmit}
                type="button">
                Sign up
              </button>

              <div className='flex justify-center success-box-border rounded p-2 mt-8'>
                <img src="../public/images/Screenshot 2023-03-01 111718.png" alt="" />
                <p className='ml-4'>Google</p>
              </div>
              <p class="mt-4 mb-0 pt-1 text-sm ">
                Already On learnwise ? Log in
                <a
                  href="#!"
                  class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                > Log in</a>
              </p>
            </div>
          </div>
        </form>
      </section>
    </Formik>
  )
}

export default Signup