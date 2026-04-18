import React, { useState } from 'react';
import '../fq/Fq.css';
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMinus } from "react-icons/hi";


const Fq = () => {
const faqs = [
  {
    question: "Is this platform completely free?",
    answer: "Yes, the core features are free. Premium unlocks advanced tools.",
  },
  {
    question: "What do I get with Premium?",
    answer: "Access to mentorship, advanced reviews, and priority support.",
  },
  {
    question: "Do I need experience to start?",
    answer: "No. Beginners are welcome — the platform is designed to help you grow.",
  },
  {
    question: "Can I use any framework or library?",
    answer: "Yes, you can use any tools or frameworks you prefer.",
  },
  {
    question: "How are submissions reviewed?",
    answer: "Submissions are reviewed by experienced developers and mentors.",
  },
  {
    question: "Can I add these projects to my portfolio?",
    answer: "Absolutely. All projects are yours to showcase.",
  },
];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
     <section className="faq_container">

      <div className="faq_content_wrapper">
        <p className="faq_content_tag">QUESTIONS</p>

        <h2 className="faq_content_title">Frequently Asked Questions</h2>

        <div className="faq_content_list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq_content_item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq_content_question"
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="faq_content_icon">
                  {activeIndex === index ? <HiOutlineMinus /> : <IoIosArrowDown />}
                </span>
              </button>

              <div className="faq_content_answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fq