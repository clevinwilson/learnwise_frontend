import React from 'react';
import './ChallengesBanner.scss'

function ChallengesBanner() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 challenges-banner-wrap banner-wrap'>
        <div className=' justify-center items-center hidden sm:flex'>
              <img src="../../../public/images/ChallengesBanner.png"  />
        </div>
        <div className='py-10 px-2 md:px-0 flex justify-evenly flex-col'>
              <h2 className='text-3xl sm:text-4xl  lg:text-5xl font-black mb-3 tracking-wide banner-title'>Learn Better By <br />
                  Participate In <span style={{ color:"#4e4a66"}}>Challenges</span></h2>

              <p className='mb-3 p-1' style={{ color:"#595668"}}>We organize challenges to help you develop your coding skills.
                  See what challenge participants have been up to and learn more
                  about them by browsing their featured projects
                 </p>

              <a style={{ color: "#4e4a66" }} className='text-xl font-black' href=""> View Challenges</a>
        </div>
    </div>
  )
}

export default ChallengesBanner