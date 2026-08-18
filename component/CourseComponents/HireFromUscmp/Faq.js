"use client"

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How fast can we hire candidates through your pipeline?",
      answer: "Most companies make their first hire within 7 to 10 days of joining, thanks to our pre-vetted pool of top-tier tech talent."
    },
    {
      question: "Are the candidates pre-vetted for technical skills?",
      answer: "Yes! Every candidate goes through rigorous coding assessments, system design interviews, and communication rounds before entering our pipeline."
    },
    {
      question: "What kind of tech roles do you specialize in?",
      answer: "We specialize in Full-Stack Engineers, Frontend/Backend Developers, DevOps, AI/ML Engineers, and Tech Leads."
    },
    {
      question: "What is the pricing model for hiring?",
      answer: "We offer flexible hiring models including direct placement fees and contract-to-hire options tailored to your scaling needs."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header (Left Aligned) */}
      <div className="space-y-3 mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Frequently Asked <span className="bg-gradient-to-r from-[#046AED] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-medium">
          Everything you need to know about our talent pipeline and hiring process.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-200 text-[#046AED] font-bold text-xl ml-4`}>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              {isOpen && (
                <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}