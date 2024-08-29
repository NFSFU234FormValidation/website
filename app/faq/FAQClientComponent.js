"use client"; // This tells Next.js that this is a client-side component

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function FAQClientComponent({ faqs }) {
  // State to track which FAQ is open
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleToggle = (index) => {
    // If the clicked FAQ is already open, close it; otherwise, open it
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline dotted',
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div className="faq-section my-10" key={index}>
          <div className="title mb-4 text-lg font-semibold">{faq.category}</div>
          <div className="faq mb-4 border rounded-md px-3 pt-3 py-2 border-gray-400">
            <div className="header flex justify-between items-center">
              <div className="question font-semibold text-md mb-2">{faq.question}</div>
              <div className="icon cursor-pointer" onClick={() => handleToggle(index)}>
                <FontAwesomeIcon icon={openFaqIndex === index ? faChevronUp : faChevronDown} className="w-5 h-5" />
              </div>
            </div>
            <div
              className={`answer leading-7 text-[13px] mt-4 pb-2 ${openFaqIndex === index ? '' : 'hidden'}`}
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}
