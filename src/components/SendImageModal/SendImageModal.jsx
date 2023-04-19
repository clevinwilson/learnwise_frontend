import React from 'react'

function SendImageModal() {
    return (
        <div>
            <div style={{ backgroundColor: "rgb(136 139 147 / 45%)" }} className="fixed flex    justify-center items-center top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">  
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Send an Image</h3>
                            <form className="space-y-6" action="#">
                                <div className='flex items-center justify-center w-full cursor-pointer ' >
                                    <img class="h-auto max-w-lg rounded-lg w-full course-image" src={"https://wallpaperaccess.com/full/9070071.png"} alt="image description" ></img>
                                </div>
                                <div>
                                    <label htmlFor="caption" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Caption</label>
                                    <input type="text" name="caption" id="caption"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  />
                                </div>
                               <div className='flex justify-end'>
                                    <button type="submit" className=" text-blue-600 font-semibold bg-white hover:bg-gray-100  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
                                    <button type="submit" className="text-blue-600 font-semibold bg-white hover:bg-gray-100  focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center">Send</button>
                               </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendImageModal