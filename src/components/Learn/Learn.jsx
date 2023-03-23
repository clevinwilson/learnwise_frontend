import React, { useState,useEffect } from 'react';
import SyllabusDropdown from '../SyllabusDropdown/SyllabusDropdown';
import YouTube from 'react-youtube';
import UserFooter from '../UserFooter/UserFooter';


function Learn() {
    const [playerHeight, setPlayerHeight] = useState('');
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

    const opts = {
        height: playerHeight,
        width: '100%',
    };

    useEffect(() => {
        function handleResize() {
            console.log();
            const windowWidth = window.innerWidth
            if (windowWidth >= 1080) {
                setPlayerHeight("589");
            } else if (windowWidth >= 720) {
                setPlayerHeight("380");
            } else {
                setPlayerHeight("240");
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const videoId = 'DKlZRKmMdRQ';

    return (
        <section>
            <div className="mx-auto  h-screen">
                <div className="flex flex-col sm:flex-row  ">
                    <div className="w-full lg:w-8/12 overflow-auto">
                        <div className='flex text-slate-700 items-center py-4 pl-2 border-b border-slate-300'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                            </svg>

                            <h1 className="ml-3 text-md ">The Complete 2023 Web Development
                                Bootcamp</h1>
                        </div>

                        <div>
                            <div>
                                <YouTube videoId={videoId} opts={opts} />
                            </div>


                            <div className="course-info-wrap p-5">
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

                                {/* //about section */}

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

                            <div className="hidden lg:block">
                                <UserFooter />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 border-l border-slate-300  items-center  sm:h-screen top-0 sm:sticky overflow-auto ">
                        <div>
                            <div className='border-b border-slate-300 p-3 w-full relative lg:fixed top-0  z-50 bg-white'>
                                <h3 className="text-2xl  font-semibold tracking-wider">Syllabus</h3>
                            </div>
                            <div>
                                <div className="p-1 mt-14">
                                    <div className="syllabus syllabus-wrap    rounded-lg">
                                        {faqs.map((faq, index) => (
                                            <SyllabusDropdown faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <UserFooter />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn