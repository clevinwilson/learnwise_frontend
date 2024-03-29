import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import Fade from 'react-reveal/Fade';

function NewCourses() {
  return (
    <div className='m-7 mt-10 mb-14'>
      {/* <h1 className='text-3xl font-semibold'>Top Courses</h1> */}

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 '>
        <Fade bottom>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            <CategoryCard title={"Full Stack web Developer with Django"} />
            <CategoryCard title={"Pro Front End Developer - React"} />
            <CategoryCard title={"Android P and JAVA Bundle"} />
            <CategoryCard title={"AWS Serverless"} />
          </div>
        </Fade>
        
        <div className='p-5 flex justify-center ml-0  md:ml-10  flex-col'>
          <h2 className='text-3xl sm:text-4xl  lg:text-5xl font-black mb-3 tracking-wide banner-title'>Learn Without Limits</h2>

          <p className='mb-3 p-1 lg:w-96' style={{ color: "#595668" }}>It's ok to be confused as a beginner. Tech is
            vast but don’t worry. Our curated bundles will
            act as a guided learning path. Check out all Of
            our bundles and start your programming
            journey with us.

          </p>
        </div>
      </div>
    </div>
  )
}

export default NewCourses