import React from 'react'

function CategoryCard() {
  return (

      <div style={{ backgroundColor:"#54479a"}} class=" p-5  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 class="mb-2 text-lg mt-3 md:mt-7  font-bold tracking-tight text-white ">Noteworthy technology acquisitions 2021</h5>
          </a>
          <button
              type="button"
              class="inline-block mt-4 md:mt-9 rounded border-2 border-text-white px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out   focus:ring-0  "
              data-te-ripple-init>
              Primary
          </button>
      </div>

  )
}

export default CategoryCard