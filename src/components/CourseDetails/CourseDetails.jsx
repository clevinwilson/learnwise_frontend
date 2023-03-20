import React,{useState} from 'react';
import SyllabusDropdown from '../SyllabusDropdown/SyllabusDropdown';

function CourseDetails() {
    const [faqs, setFaqs] = useState([
        {
            question: "How many programmers does it take to screw a lightbulb?",
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
        <div className="p-2 sm:p-8 mx-auto">
                <div className="flex flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-7/12 bg-gray-300">
                         <div>
                            <h1 className="text-3xl font-semibold mb-4">The Complete 2023 Web Development
                                Bootcamp</h1>
                            <p className='mb-3'>Master NodeJS and build a presentable portfolio with this course</p>
                            <h3 className="text-2xl font-semibold mb-4">Syllabus</h3>
                         </div>

                        <div className="App">
                            <div className="syllabus">
                                {faqs.map((faq, index) => (
                                    <SyllabusDropdown faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                                ))}
                            </div>
                        </div>

                         
                    </div>
                    <div className="w-full sm:w-5/12 bg-gray-600">
                       Content for div d 
                    </div>
                </div>
        </div>
       </section>


    )
}

export default CourseDetails