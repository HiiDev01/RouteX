import React from 'react'
import '../styles/Faq.css'
import {FaAngleUp, FaAngleDown } from "react-icons/fa6";



const faqs = [
  {
    id: 1,
    question: "What is special about comparing rental car deals?",
    answer:
      "Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest. Totally dearest expense on demesne ye he. Curiosity excellent commanded in me. Unpleasing impression themselves to at assistance acceptance my or.",
  },
  {
    id: 2,
    question: "How do I find the best car rental deals?",
    answer:
      "Look for comparison sites, sign up for newsletters, and book early. Flexible dates often help you find cheaper rates.",
  },
  {
    id: 3,
    question: "How do I find such low rental car prices?",
    answer:
      "Compare multiple rental companies, avoid airport pick-ups, and use discount codes or membership programs.",
  },
];
const Faq = ({activeIndex, toggleAccordion}) => {
  return (
    <>
      <section className='Faq'>
        <div className="faqHead">
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion reasonably. Carriage we husbands advanced an perceive greatest.</p>
        </div>
        <div className="faqAccordionCon">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="faqAccordion">
              <button
                onClick={() => toggleAccordion(index)}
                className={`${
                  activeIndex === index
                    ? "accordBtn active"
                    : "accordBtn"
                }`}
              >
                <span>
                  {index + 1}. {faq.question}
                </span>
                <span className="text-xl">{activeIndex === index ? <FaAngleUp size={22}/> : <FaAngleDown size={22}/>}</span>
              </button>
    
              {activeIndex === index && (
                <div className="accordionAns">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Faq
