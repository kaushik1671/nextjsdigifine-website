"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function ReferFAQSection({ faqs = defaultFaqs, onTriggerForm }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (onTriggerForm) {
      onTriggerForm();
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#046AED]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#046AED]/10 text-[#046AED] font-semibold text-xs mb-1 border border-[#046AED]/20 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Got Questions? We've Got Answers</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked <span className="text-[#046AED]">Questions</span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about the referral policy, payouts, and rewards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 w-full">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? "bg-white border-[#046AED]/30 shadow-sm shadow-[#046AED]/5" 
                    : "bg-slate-50/70 border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className={`font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? "text-[#046AED]" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? "bg-[#046AED] text-white rotate-180" : "bg-slate-200/80 text-gray-600"
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-0.5">
                      {index === 7 ? (
                        <span>
                          If you are a Digifine Academy employee, please{" "}
                          <a 
  href="#referral-form-section"
  onClick={(e) => {
    e.preventDefault();
    if (onTriggerForm) onTriggerForm();
  }}
  className="text-[#046AED] font-semibold underline hover:text-blue-700 transition-colors cursor-pointer"
>
  click here
</a>{" "}
                          to fill out the referral form.
                        </span>
                      ) : (
                        faq.answer
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const defaultFaqs = [
  {
    question: "Do I get rewards every time a friend signs up?",
    answer: "You get a referral reward for every friend you refer through the website. Please note the referral reward is only valid for the first transaction of friends/connections (referrals) who are new to Digifine Academy and enrol themselves in one of our courses. You will be eligible to receive the reward once the referral pays their full fee."
  },
  {
    question: "When and How will I get paid for referrals?",
    answer: "You will be eligible to receive the reward once your friend pays their full fee. You will be contacted by the Digifine Academy team to collect your bank details. You will receive the referral reward 15 days after your friend has made the full payment of fees."
  },
  {
    question: "How can I track the status of my referrals?",
    answer: "You will be informed by email once Digifine Academy receives your referral details."
  },
  {
    question: "How will my friends be informed that I referred them?",
    answer: "Your friends will receive an email confirmation from Digifine Academy informing them that they have been referred by you. They will be asked to confirm."
  },
  {
    question: "Will I get a referral reward if a friend/connection already exists in the Digifine Academy database?",
    answer: "No. You will not be eligible if a friend/connection exists in the Digifine Academy database."
  },
  {
    question: "Do I need to be a Digifine Academy customer to refer my friends?",
    answer: "No, you don't need to be a customer or student! Anyone can participate in the Digifine Academy referral program and start earning rewards by referring their friends and connections."
  },
  {
    question: "How can I refer my friends/connections?",
    answer: "Refer your friends from the website or contact the Digifine Academy team. You will have to provide your email id, and mobile no. for us to contact you. You can refer your friends by entering their email addresses one at a time or share your friend's details with the Digifine Academy team members you are connected with."
  },
  {
    question: "How can Digifine Academy employees fill out the referral form?",
    answer: "If you are a Digifine Academy employee, please click here to fill out the referral form."
  }
];