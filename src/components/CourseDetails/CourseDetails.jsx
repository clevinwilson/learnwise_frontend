import React, { useState } from 'react';
import SyllabusDropdown from '../SyllabusDropdown/SyllabusDropdown';
import BuyNowCard from '../BuyNowCard/BuyNowCard';
import './CourseDetails.scss'

function CourseDetails() {
    const [faqs, setFaqs] = useState([
        {
            question: "Javascript - From scratch to advance",
            answer:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
            open: true
        },
        {
            question: "Who is the most awesome person?",
            answer: "You! The viewer!",
            open: false
        },
        {
            question:
                "How many questions does it take to makes a succesful FAQ Page?",
            answer: "This many!",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };
    return (
        <section>
            <div className="p-2 lg:p-20 mx-auto">
                <div className="flex flex-col-reverse sm:flex-row xl:px-20">
                    <div className="w-full lg:w-7/12 ">
                        <div className='hidden sm:block xl:ml-1 mb-8'>
                            <h1 className="text-3xl font-semibold mb-4">The Complete 2023 Web Development
                                Bootcamp</h1>
                            <p className='mb-3 mr-6'>Non-Indian Users can purchase courses via our apps. Once purchased in-app, course is
                                available on the web, iOS, and Android in your account. Search in store for -
                                LearnCodeOnline</p>
                            <h3 className="text-theme-color text-2xl font-semibold mb-3">Syllabus</h3>
                        </div>

                        <h3 className="text-xl text-theme-color mt-8 font-semibold mb-4 block sm:hidden ">Syllabus</h3>
                        <div className="App">
                            <div className="syllabus syllabus-wrap    rounded-lg">
                                {faqs.map((faq, index) => (
                                    <SyllabusDropdown faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                                ))}
                            </div>
                        </div>

                        {/* //author section */}
                        <div>
                            <h3 className="text-2xl  mt-8 font-semibold mb-4 ">Author</h3>
                            <blockquote class="rounded-lg bg-gray-100 p-8">
                                <div class="flex items-center gap-4">
                                    <img
                                        alt="Man"
                                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                                        class="h-16 w-16 rounded-full object-cover"
                                    />

                                    <div>
                                        <p class="mt-1 text-lg font-medium text-gray-700">Paul Starr</p>
                                    </div>
                                </div>

                                <p class="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
                                    voluptatem alias ut provident sapiente repellendus.
                                </p>
                            </blockquote>
                        </div>

                        <div>
                            <h3 className="text-2xl  mt-8 font-semibold mb-4 ">About</h3>
                            <div className='border rounded-md p-3 '>
                                <p className='text-slate-600 mt-4'>Welcome to the Complete front end development Bootcamp. This is one of the most
                                    comprehensive bootcamp available online. So, if you are new to web development,
                                    thats great news because starting from scratch is always easy. And if you have tried
                                    some other courses before, you already know that web development is not easy. This is
                                    because of 2 reasons. Either the web development course might be missing projects, or
                                    might be focusing on too many things at a time. When you focus on everything, in a
                                    short duration of time, it is very tough be a great developer.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 flex-column  flex  flex-col  items-center  sm:h-screen top-0 sm:sticky ">
                        <div className='block sm:hidden p-2 mt-3 mb-3'>
                            <h1 className="text-3xl font-semibold mb-4">The Complete 2023 Web Development
                                Bootcamp</h1>
                            <p className='mb-3'>Master NodeJS and build a presentable portfolio with this course</p>

                        </div>
                        <BuyNowCard />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default CourseDetails