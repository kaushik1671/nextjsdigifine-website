"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PlacementFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the general eligibility criteria for campus placement drives?",
      answer: "Most companies require a minimum aggregate of 60% or 6.5 CGPA throughout academics (10th, 12th, and Graduation) with no active backlogs at the time of the interview process."
    },
    {
      question: "Does the institute allow students to hold multiple offers (Dream Job Policy)?",
      answer: "Yes! We follow a progressive policy. If a student is placed in a mass recruiter, they are permitted to sit for 'Dream' or 'Super Dream' companies offering higher packages (typically above 10 LPA) to upgrade their career."
    },
    {
      question: "What kind of pre-placement training is provided to students?",
      answer: "Students undergo rigorous training modules including advanced Data Structures & Algorithms (DSA), aptitude workshops, mock technical and HR interviews, resume-building sessions, and industry expert masterclasses."
    },
    {
      question: "How can recruiting companies register for the campus placement drive?",
      answer: "Recruiters can easily register by clicking on the 'Contact Placement Office' or downloading our Placement Brochure from the Recruiter's Desk. You can also directly email our placement cell at placements@institute.edu."
    },
    {
      question: "Are internships converted into Full-Time Employment (FTE)?",
      answer: "Yes, many of our top-tier partners offer 6-month pre-placement internships (PPIs) during the final year, which successfully convert into high-paying full-time roles based on student performance."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#046AED] mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about our placement guidelines, eligibility, and training processes.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-slate-200/70 flex items-center justify-center font-bold text-slate-700 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-blue-600 text-white' : ''}`}>
                    ↓
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}