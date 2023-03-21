import React from 'react';
import './SyllabusDropdown.scss'

function SyllabusDropdown({ faq, index, toggleFAQ }) {
    return (
        <div
            className={"syllabus  " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className={"syllabus-title p-4 " + (faq.open ?"lesson-open-bg" :"")} >
                <div className='flex justify-between font-semibold '>
                    {faq.question}
                    {faq.open ?

                        // up arrow
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                        </svg>

                        :

                        //down arrow
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>

                    }
                </div>
                <div className='lessons-count text-xs mt-1 text-slate-500'>10 Lessons</div>

            </div>
            <div className={"lessons-title " + (faq.open ? "p-4" : "")}>
                <p className='lesson-title'>Information regarding course and certificate</p>
                <div className='flex items-center text-slate-500 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                    <p className='ml-2 lesson-content-type text-slate-500'>Video</p>

                </div>
            </div>
        </div>
    )
}

export default SyllabusDropdown