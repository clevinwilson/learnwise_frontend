import React from 'react'
import Button from '../Button/Button'

function OrderSummary() {
  return (
    <div className="lg:px-20 mt-5 mx-auto mb-14">
      <h3 className="text-4xl  mt-8  mb-4 ml-5 ">Order Summary</h3>

      <div className='flex flex-col lg:flex-row mt-8 '>
        <div className='w-full lg:w-8/12'>
          <div className="flex justify-center sm:mx-10 m-3">
            <a href="#" className="flex w-full flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="object-cover m-8 lg:m-4  ml-4 rounded h-40 md:96 md:h-auto w-100 md:w-48" src="https://img-c.udemycdn.com/course/240x135/2887266_c696_5.jpg" alt />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Complete 2023 Web Development
                  Bootcamp</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">10 lessons</p>
              </div>
            </a>
          </div>

          <div className='mt-14 mx-6'>
            <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add Addresses</h5>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Please enter addresses to proceed to payment</p>

            <div className='mt-8'>
              <form>
                <div className="mb-6">
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Line 1</label>
                  <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pin Code</label>
                  <input type="text" id="pincode" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </form>
            </div>
          </div>

          <div className="payment-box mx-6 hidden lg:block">
            <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Payment</h5>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Make payment for the product here</p>
            <div className='mt-8'>
              <Button className>
                Pay Securely
              </Button>
            </div>
          </div>

        </div>
        <div className='w-full lg:w-4/12 '>
          <div className='flex lg:block justify-center mt-10 lg:mt-0 m-3 ' >
            <div className=" p-6 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order details</h5>
              </a>
              <div className='flex justify-between mt-5'>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">₹ 499</p>
              </div>

              <div className='flex justify-between mt-3'>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Discount</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">₹ 0</p>
              </div>

              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

              <div className='flex justify-between mt-7'>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">TOTAL (INR)</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">₹ 499</p>
              </div>

              <div className='flex justify-between mt-2'>
                <p className="mb-3 text-xs text-gray-700 dark:text-gray-400">NEED HELP?</p>
              </div>

              <div className='mt-5 '>
                <p className='text-sm text-center my-5'>30-Day Money-Back Guarantee</p>
              </div>
            </div>
          </div>

          <div className="payment-box mx-6 block lg:hidden mt-8">
            <h5 className="mb-3 mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Payment</h5>
            <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">Make payment for the product here</p>
            <div className='mt-8'>
              <Button className>
                Pay Securely
              </Button>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default OrderSummary