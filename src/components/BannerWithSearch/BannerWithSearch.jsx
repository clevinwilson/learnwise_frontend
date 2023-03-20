import React from 'react';
import './BannerWithSearch.scss';
import Button from '../Button/Button';

function BannerWithSearch() {
    return (
        <div className='homepage-banner grid sm:grind-cols-1 md:grid-cols-3 ' style={{ backgroundImage: "url(../../../public/images/homeBanner.PNG)" }}>
            <div className='col-span-2 h-full flex flex-col justify-center m-5 md:ml-14'>
                <div>
                    <h2 className="serach-banner-title font-black text-3xl md:text-5xl mb-10  tracking-wide">
                        The Only Platform To <br />
                        Show Off Your Skills

                    </h2>
                </div>
                <div className='mb-10 tracking-wide'>
                    <p className='text-xs sm:text-base md:leading-5 md:leading-6'>Learn the skills you need to take the next step and every step <br />
                        after. Log in now to save on courses through March 1.</p>
                </div>
                <div className='mb-10'>
                    <Button >
                        Explore courses
                    </Button>
                </div>
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <div className="max-w-md mx-auto hidden lg:inline-block">
                    <div className=" banner-serach-bar relative flex items-center  h-14 border-white rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input style={{ '--tw-ring-color': '#fff' }} className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 focus:border-white border-white" type="text" id="search" placeholder="Search Course.." />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BannerWithSearch