import React, { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { updatePhoto } from '../../services/teacherApi';
import { toast } from "react-toastify";


function Profile({ updateSection }) {
    const [image, setImage] = useState();

    function uploadPhoto() {
        //uploading the photo to the server
        updatePhoto(image)
        .then((response)=>{
            //updating the modal section to be displayed
            updateSection("about");
        })
        .catch((error)=>{
            toast.error(error.message, {
                position: "top-center",
            });
        })
    }


    return (
        <div >
            <h2 className="mb-6 text-2xl font-medium text-gray-900 mt-3 dark:text-white text-center">Upload your profile Photo</h2>
            <div className='flex justify-center'>
                <div className="image overflow-hidden relative w-56">
                    <img className="h-48 w-48 object-cover mx-auto rounded-full" src={image ? URL.createObjectURL(image) : "https://compass-ssl.microsoft.com/assets/88/44/88447f89-abe1-4954-9080-81767d1c5643.svg?n=cancelSuccess.svg"} />
                    <div className="ab bg-green-500 text-xs absolute bottom-1 right-4 font-bold  rounded-full w-10 h-10  text-white flex justify-center items-center   float-left hover:bg-gray-300 hover:text-gray-600  overflow-hidden cursor-pointer">
                        <input type="file" name="photo" className="absolute inset-0  opacity-0 cursor-pointer" onChange={(event) => { setImage(event.target.files[0]); }} /> <FiEdit2 size={14} />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-10' >
                <button type="submit" className="text-white bg-blue-600 font-semibold   focus:outline-none  rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => {
                    uploadPhoto()
                }}
                >Next</button>
            </div>
        </div>
    )
}

export default Profile