import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <h4 className="text-lg font-medium text-gray-900">
          {question}
        </h4>

        <span className="text-lg">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>

      {/* Answer - Dynamic Height Expansion Fix */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-2 mb-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600">
            {answer}
          </p>
        </div>
      </div>

    </div>
  );
};

export default FAQItem;