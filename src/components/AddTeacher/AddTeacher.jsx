import React from 'react';
import LoadingButton from '../LoadingButton/LoadingButton'

function AddTeacher() {
    return (
        <div className='form-wrap w-2/3'>
            <div className='mb-4 pb-2 form-title-box ' >
                <span className='text-base font-semibold text-violet-700'>Add Teacher</span>
            </div>
            <form class="w-full max-w-lg mt-10">
                <div class="flex flex-wrap -mx-3  mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            First Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='firstName' placeholder="First Name" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Last Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='lastName' type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='email' type="email" placeholder="example@gmail.com" />
                        
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Place
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='place' id="grid-password" type="text" placeholder="Place" />
                        
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">

                    <div className='mt-8 w-full  flex justify-end mr-3'>
                        <LoadingButton>
                            Submit
                        </LoadingButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTeacher