import React, { useState } from "react";
import PropTypes from "prop-types";
import FAQTab from "./FAQTab";
import FAQItem from "./FAQItem";

const FAQsSection = ({ faqData = [], sectionTitle = "Frequently Asked Questions" }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleTabClick = (index) => {
    // Mobile par agar same tab click kiya toh collapse kar dega, nahi toh switch karega
    if (selectedTab === index) {
      setSelectedTab(selectedTab === index ? null : index);
    } else {
      setSelectedTab(index);
    }
    setOpenIndex(null); // Reset open FAQ when switching tabs
  };

  const handleFAQClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQs">
      <div className="flex flex-col xs:px-spacing20 max-w-6xl w-full mx-auto md:px-spacing205 py-12 md:py-28 px-6 md:px-0">
        
        {/* Section Header */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8 mb-6">
          <h2 className="font-semibold text-3xl md:text-4xl -tracking-0.44 gap-spacing8 whitespace-break-spaces">
            {sectionTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-primary-main">{sectionTitle.split(" ").slice(-1)}</span>
          </h2>
        </div>

        {/* 💻 DESKTOP VIEW (Side-by-Side Layout) */}
        <div className="hidden md:flex gap-12 items-start pt-spacing16">
          {/* Desktop Tabs */}
          <div className="w-[45%] flex flex-col space-y-4" role="tablist" aria-orientation="vertical">
            {faqData.map((tab, index) => (
              <FAQTab
                key={index}
                label={tab.tabLabel}
                isSelected={selectedTab === index}
                onClick={() => handleTabClick(index)}
              />
            ))}
          </div>

          {/* Desktop FAQ List */}
          <div className="w-[55%]">
            <div className="outline-none" role="tabpanel" tabIndex="0">
              {selectedTab !== null &&
                faqData[selectedTab]?.faqs.map((faq, index) => (
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

        {/* 📱 MOBILE VIEW (Accordion Inside Accordion Layout) */}
        <div className="flex flex-col space-y-4 md:hidden">
          {faqData.map((tab, tabIdx) => {
            const isTabActive = selectedTab === tabIdx;

            return (
              <div key={tabIdx} className="flex flex-col border border-gray-200 rounded-xl overflow-hidden">
                {/* Tab Header Button */}
                <FAQTab
                  label={tab.tabLabel}
                  isSelected={isTabActive}
                  onClick={() => handleTabClick(tabIdx)}
                />

                {/* Tab FAQs - Jab active ho tabhi niche open honge */}
                {isTabActive && (
                  <div className="px-4 py-2 bg-gray-50/50 border-t border-gray-100">
                    {tab.faqs.map((faq, faqIdx) => (
                      <FAQItem
                        key={faqIdx}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === faqIdx}
                        onClick={() => handleFAQClick(faqIdx)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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