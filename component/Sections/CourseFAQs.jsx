import React from 'react';
import { motion } from 'framer-motion';

const CourseFAQs = () => {
  const faqs = [
    {
      question: "Is the course recognized?",
      answer: "Yes, our program is accredited by leading educational bodies and recognized globally by top employers.",

    },
    {
      question: "Can freshers join this course?",
      answer: "Absolutely! The course is designed for both fresh graduates and working professionals.",

    },
    {
      question: "What's the course duration?",
      answer: "The program duration is 6 months with flexible learning options available.",

    },
    {
      question: "Placement assistance?",
      answer: "We provide 100% placement support with our industry partner network.",

    },
    {
      question: "Online or offline?",
      answer: "Choose between fully online or hybrid learning models.",

    },
    {
      question: "Payment options?",
      answer: "EMI options available with 0% interest. Scholarships for meritorious students.",
    }
  ];

  return (
    <section className="pb-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-6 flex flex-col justify-between border border-gray-200 transition-all"
            >
              <div className="mb-4">
                <div className="text-4xl mb-3">{faq.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFAQs;