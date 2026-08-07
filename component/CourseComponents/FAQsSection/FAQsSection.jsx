import React, { useState } from "react";
import PropTypes from "prop-types";
import FAQTab from "./FAQTab";
import FAQItem from "./FAQItem";

const FAQsSection = ({ faqData = [], sectionTitle = "Frequently Asked Questions" }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    setOpenIndex(null); // Reset open FAQ when switching tabs
  };

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQs">
      <div className="flex flex-col xs:px-spacing20 max-w-6xl w-full mx-auto md:px-spacing205 py-28 px-6 md:px-0">
        {/* Section Header */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
            <h2 className="font-semibold text-4xl -tracking-0.44 gap-spacing8 whitespace-break-spaces">
              {sectionTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary-main">{sectionTitle.split(" ").slice(-1)}</span>
            </h2>
          </div>
        </div>

        <br></br>
        {/* Tabs and FAQ Items */}
        <div className="relative pt-spacing16">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Tabs */}
            <div className="md:w-[45%] w-full flex flex-col space-y-4" role="tablist" aria-orientation="vertical">
              {faqData.map((tab, index) => (
                <FAQTab
                  key={index}
                  label={tab.tabLabel}
                  isSelected={selectedTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </div>

            {/* FAQs */}
            <div className="md:w-[55%] w-full">
              <div className="outline-none" role="tabpanel" tabIndex="0">
                <div>
                  {faqData[selectedTab]?.faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openIndex === index}
                      onClick={() => handleFAQClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ PropTypes
FAQsSection.propTypes = {
  sectionTitle: PropTypes.string,
  faqData: PropTypes.arrayOf(
    PropTypes.shape({
      tabLabel: PropTypes.string.isRequired,
      faqs: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default FAQsSection;
