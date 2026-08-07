import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CareerForm from '../../Container/CareerForm';

const CurriculumSection = ({
  title = "Master's in ALL & DA Curriculum",
  subtitlePart1 = "Learn with a",
  subtitleHighlight = "World-Class Curriculum",
  paragraph = "",
  curriculumItems,
  redirectlink = "/course-brochures",
  curriculumContent = [
    {
      content: [
        "The preparatory curriculum covers foundational topics...",
        {
          heading: "Topics Covered",
          items: [
            "Sets, Relations, and Functions",
            "Counting, Probability, and Combinatorics",
            "Vectors and Calculus",
            "Statistics and Problem Solving",
            "Introduction to Generative AI Landscape"
          ]
        }
      ]
    }
  ],
  tabTitlePattern = (index) => index === 0 ? "Prep Content" : `Trimester - ${index}`,
  buttonText = "Download Syllabus"
}) => {
  const generatedCurriculumItems = curriculumItems || curriculumContent.map((_, index) => ({
    id: index,
    title: tabTitlePattern(index),
    active: index === 0
  }));

  const [activeTab, setActiveTab] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(true);
  const prevTabRef = useRef(0);
  const tabRefs = useRef([]);
  const tabContainerRef = useRef(null); // ✅ Reference to the scroll container
  
  const [showFormModal, setShowFormModal] = useState(false);
  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);

  useEffect(() => {
    setTransitionDirection(activeTab > prevTabRef.current ? 'left' : 'right');
    prevTabRef.current = activeTab;
    setIsAnimating(true);

    // ✅ Scroll the tab horizontally without affecting page scroll
    const tab = tabRefs.current[activeTab];
    const container = tabContainerRef.current;
    if (tab && container) {
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left: tabLeft - (containerWidth - tabWidth) / 2,
        behavior: 'smooth'
      });
    }

    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleNextTab = () => {
    setActiveTab((prev) => (prev + 1) % generatedCurriculumItems.length);
  };

  const handlePrevTab = () => {
    setActiveTab((prev) => (prev - 1 + generatedCurriculumItems.length) % generatedCurriculumItems.length);
  };

  return (
    <section id="Curriculum" className="relative">
      <div className="flex flex-col xs:px-5 xs:my-10 max-w-6xl w-full mx-auto md:my-10 md:!gap-8 xs:!gap-9 px-6 md:px-0">

        {/* Header */}
        <div className="flex flex-col justify-start items-start md:gap-0 xs:gap-2">
          <p className="font-semibold text-center text-sm text-greyscale-1 capitalize">
            {title}
          </p>
          <div className="relative items-start justify-start">
            <h2 className="font-semibold text-4xl tracking-tight whitespace-break-spaces">
              {subtitlePart1}<br />
              <span className="text-primary-main">{subtitleHighlight}</span>
            </h2>
          </div>
          <p className="text-base text-left mt-3">{paragraph}</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevTab}
              className="px-3 py-1 border rounded text-sm text-white bg-blue-500 hover:bg-blue-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </button>


<div className="relative flex-1 overflow-hidden">
  {/* Scrollable tabs wrapper */}
  <div
    // className="w-full flex justify-center items-center"
    className="w-full flex gap-7 pb-2 overflow-x-auto px-4 xs:px-12 scrollbar-hide"
    ref={tabContainerRef}
  >
    {generatedCurriculumItems.map((item, index) => (
      <div
        key={item.id}
        ref={(el) => (tabRefs.current[index] = el)} //
        className={` flex-shrink-0 min-w-[12rem] px-4 py-5 rounded-xl bg-white border cursor-pointer transition-all duration-200 relative ${
          index === activeTab   
            ? 'border-primary-main shadow-md'
            : 'border-greyscale-5 hover:border-greyscale-3'
        }`}
        role="tab"
        aria-selected={index === activeTab}
        tabIndex={0}
        onClick={() => handleTabClick(index)}
        onKeyDown={(e) => e.key === 'Enter' && handleTabClick(index)}
      >
        {/* <p className={`text-base text-center line-clamp-2 ${ */}
          <p className={`text-sm text-center whitespace-normal break-keep leading-snug ${
          index === activeTab
            ? 'text-primary-main font-medium'
            : 'text-greyscale-1 font-normal'
        }`}>
          {item.title}
        </p>
        {index === activeTab && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-main rounded-b-xl"></div>
        )}
      </div>
    ))}
  </div>
</div>

            <button
              onClick={handleNextTab}
              className="px-3 py-1 border rounded text-sm bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
  </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col relative overflow-hidden">
          <div className="mt-3 flex flex-col items-start w-full gap-12 p-12 rounded-3xl bg-white shadow-custom">
            <div
              className={`content-transition transition-all duration-300 ease-in-out transform ${
                transitionDirection === 'right' ? 'translate-x-2' : '-translate-x-2'
              } ${isAnimating ? 'opacity-0' : 'opacity-100 translate-x-0'}`}
            >
              {curriculumContent[activeTab]?.content?.map((section, index) =>
                typeof section === 'string' ? (
                  <p
                    key={index}
                    className="CertTheme__paragraph animate-fadeIn"
                    style={{  }}
                  >
                    {section}
                  </p>
                ) : (
                  <div
                    key={index}
                    className="space-y-4 animate-fadeIn"
                    style={{ }}
                  >
                    <h4 className="CertTheme__h4">{section.heading}</h4>
                    {/* <ul className="CertTheme__ul">
                      {section.items?.map((item, idx) => (
                        <li
                          key={idx}
                          className="CertTheme__listItem animate-fadeIn"
                          style={{ }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul> */}

                   
<ul className="CertTheme__ul">
  {section.items?.map((item, idx) => {
    if (Array.isArray(item)) return null; // skip standalone arrays

    const nextItem = section.items[idx + 1];
    const hasSubItems = Array.isArray(nextItem);

    return (
      <li key={idx} className="CertTheme__listItem animate-fadeIn">
        {item}

        {hasSubItems && (
          <ul className="CertTheme__subUl break-words w-full" style={{ paddingLeft: "20px" }}>
            {nextItem.map((subItem, subIdx) => (
              <li key={subIdx} className="break-words w-full">
                {subItem}
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  })}
</ul>




                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Download Button */}
        {/* <div className="flex flex-col w-full items-center mt-6">
          <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-cta-gradient-start to-cta-gradient-end rounded-lg shadow-cta text-black font-medium px-6 py-3.5 md:py-2.5 hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
            {buttonText}
          </button>
        </div> */}
        <div className="flex flex-col w-full items-center rounded-xl p-4 md:p-6">
  <button className="md:h-11 xs:h-11 xs:text-sm md:text-base justify-center items-center gap-2 inline-flex whitespace-nowrap 
                     bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-lg text-white font-medium 
                     px-6 py-3.5 md:py-2.5 
                     hover:to-blue-700 hover:from-blue-500 hover:scale-105 transform transition duration-200"
                     onClick={openFormModal}>
    {buttonText}
  </button>
</div>
      </div>

        {/* Modal Section for CareerForm */}
{showFormModal && (
   <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
   {/* Modal Card */}
   <div
     className={`
       relative bg-white rounded-[20px] shadow-xl
       w-full max-w-3xl
       p-6
       overflow-auto
       max-h-[90vh]
     `}
   >
     {/* Close button */}
     <button
       onClick={closeFormModal}
       className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
       aria-label="Close"
     >
       <svg
         xmlns="http://www.w3.org/2000/svg"
         className="h-6 w-6"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
       </svg>
     </button>
 
     {/* CareerForm with fixed width inside modal */}
     <div className="w-full md:w-[600px] mx-auto">
       <CareerForm redirectlink={redirectlink} btntext='Download Syllabus'/>
     </div>
   </div>
 </div>
)}

      {/* Animation Styles */}
      {/* <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </section>
  );
};

CurriculumSection.propTypes = {
  title: PropTypes.string,
  subtitlePart1: PropTypes.string,
  subtitleHighlight: PropTypes.string,
  paragraph: PropTypes.string,
  curriculumItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      active: PropTypes.bool
    })
  ),
  curriculumContent: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            heading: PropTypes.string,
            // items: PropTypes.arrayOf(PropTypes.string)
            items: PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      heading: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string)
    })
  ])
)
          })
        ])
      )
    })
  ),
  tabTitlePattern: PropTypes.func,
  buttonText: PropTypes.string
};

export default CurriculumSection;
