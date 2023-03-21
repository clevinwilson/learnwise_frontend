import React,{useState} from 'react';
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

                    </div>
                    <div className="w-full lg:w-5/12 flex-column  flex  flex-col  items-center  sm:h-screen top-0 sm:sticky ">
                        <div className='block sm:hidden p-2 mt-3 mb-3'>
                            <h1 className="text-3xl font-semibold mb-4">The Complete 2023 Web Development
                                Bootcamp</h1>
                            <p className='mb-3'>Master NodeJS and build a presentable portfolio with this course</p>
                            
                        </div>
                       <BuyNowCard/>
                    </div>
                </div>
        </div>
       </section>


    )
}

export default CourseDetails