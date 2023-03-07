import React from 'react';
import './Signup.css'

function Signup() {
  return (
    <section className='section-box'>
     <form action="">
        <div className='grid-cols-1  form-box p-10'>
          <h2 className='text-center text-2xl font-medium pb-8'>Sign Up</h2>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
              id="exampleFormControlInput2"
              placeholder="Name" />
            <label
              for="exampleFormControlInput2"
              class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >Name
            </label>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
              id="exampleFormControlInput2"
              placeholder="Email address" />
            <label
              for="exampleFormControlInput2"
              class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >Email address
            </label>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
              id="exampleFormControlInput2"
              placeholder="Password" />
            <label
              for="exampleFormControlInput2"
              class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >Password
            </label>
          </div>
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              class="peer  block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 input-box-border"
              id="exampleFormControlInput2"
              placeholder="Confirm password" />
            <label
              for="exampleFormControlInput2"
              class="input-box-lable pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.7rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
            >Confirm password
            </label>
          </div>

          <div class="text-center ">
            <button className='form-btn mt-2 font-medium rounded'
              type="button">
              Sign up
            </button>

            <div className='flex justify-center success-box-border rounded p-2 mt-8'>
              <img src="../public/images/Screenshot 2023-03-01 111718.png" alt="" />
              <p className='ml-4'>Google</p>
            </div>
            <p class="mt-4 mb-0 pt-1 text-sm ">
              Don't have an account?
              <a
                href="#!"
                class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
              >Register</a>
            </p>
          </div>
        </div>
     </form>
    </section>
  )
}

export default Signup