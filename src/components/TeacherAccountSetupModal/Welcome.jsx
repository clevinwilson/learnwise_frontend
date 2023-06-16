import React from 'react'

function Welcome({ updateSection }) {
    return (
        <>
            <h2 className="mb-4 text-3xl font-medium text-gray-900 mt-3 dark:text-white text-center">Welcome to <span className='text-violet-600 font-bold'>Learn</span><span className='text-green-400 font-bold'>Wise</span></h2>
            <div className='flex justify-center items-center m-10'>
                <img src="/images/accountSetup.svg" alt="" />
            </div>
            <div className='mt-8'>
                <p className='text-center'>Finish setting up your account.</p>
            </div>
            <div className='flex justify-end mt-10' onClick={() => {
                updateSection('profile')
            }}>
                <button type="submit" className="text-white bg-blue-600 font-semibold   focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center"
                >Next</button>
            </div>
        </>
    )
}

export default Welcome