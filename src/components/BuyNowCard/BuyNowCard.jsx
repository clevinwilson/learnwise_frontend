import React from 'react';
import Button from '../Button/Button'

function BuyNowCard(props) {
    return (

        <div className="max-w-sm mt-8 bg-white border border-gray-200 rounded-lg w-80 shadow dark:bg-gray-800 dark:border-gray-700">
            
                <div className='p-5'>
                <img className="rounded w-full object-cover" src="https://img-c.udemycdn.com/course/240x135/2887266_c696_5.jpg" alt />
                </div>
            
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">₹ 899</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">life long validity</p>
                <Button>
                    Buy Now
                </Button>
            </div>

            <div className='border-t pl-5 mt-4 mb-4'>
                <h4 className='font-semibold mt-3'>Whats included</h4>
                <p className='mt-3'>10 Lessons</p>
                <p className='mt-3'>Online accessibility</p>
            </div>
        </div>


    )
}

export default BuyNowCard