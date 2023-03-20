import React from 'react'

function CommunityBanner () {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 community-banner-bg banner-wrap'>
          <div className='py-10 px-2 ml-5 md:ml-10 md:px-0 flex justify-evenly flex-col'>
              <h2 className='text-3xl sm:text-4xl  lg:text-5xl font-black mb-3 tracking-wide banner-title'>
                  Platform for Connect, Collab <br />
                  and Build more <span style={{ color: "#659f7b" }}>stuff</span> 
                  </h2>

              <p className='mb-3 p-1 mr-4' style={{ color: "#595668" }}>We want our users to be able to communicate with coders through
                  our platform. Embrace collaboration, connect with others, and
                  code. A simple glance at your showcased projects will connect you
                  directly with startups and top-notch companies.

              </p>

              <a style={{ color: "#659f7b" }} className='text-xl font-black' href=""> View Challenges</a>
          </div>
          <div className=' justify-center items-center hidden sm:flex'>
              <img src="images/community.png" alt="" />
          </div>
          
      </div>
  )
}

export default CommunityBanner 