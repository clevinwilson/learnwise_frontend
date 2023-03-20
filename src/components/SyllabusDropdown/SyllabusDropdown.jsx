import React from 'react';
import './SyllabusDropdown.scss'

function SyllabusDropdown({ faq, index, toggleFAQ }) {
  return (
      <div
          className={"syllabus " + (faq.open ? "open" : "")}
          key={index}
          onClick={() => toggleFAQ(index)}
      >
          <div className="syllabus-title">{faq.question}</div>
          <div className="lessons-title">{faq.answer}</div>
      </div>
  )
}

export default SyllabusDropdown