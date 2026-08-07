import React, { useState } from 'react';

// Reusable Section Component with Toggle Functionality
const InfoSection = ({ title, content, listItems, isOpen, toggle }) => (
  <div className="mb-12">
    <h3
      className="text-2xl font-semibold text-gray-800 cursor-pointer mb-4"
      onClick={toggle}
    >
      {title}
    </h3>
    {isOpen && (
      <div>
        {content && <p className="text-lg text-gray-700 mb-4">{content}</p>}
        {listItems && (
          <ul className="list-disc pl-8 text-lg text-gray-700">
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    )}
    {/* Line below the section */}
    <hr className="my-6 border-gray-300" />
  </div>
);

const DigitalMarketingInfoSection = () => {
  const [openSection, setOpenSection] = useState(null); // To keep track of the opened section

  const courseDurations = [
    "Digital Marketing Graduate Program - 8 months",
    "Professional Digital Marketing Program - 6 months",
    "Masters Certification in Global Digital Marketing Program - 6 months (3 months in Mumbai/3 months in Dubai)",
    "Executive Digital Marketing Program - 50+ hours of live classes",
    "Advanced Graphic Design Course - 217+ hours of training",
    "Data Science and Machine Learning Program - 6 months (210+ hours of live classes)"
  ];

  const sections = [
    {
      title: "Our Digital Marketing Courses",
      content: "Digifine Academy’s digital marketing courses with placements cover the whole gamut of digital marketing sectors. These include graphic design, video editing & animation, Website Development, data science, and machine learning along with digital marketing. Graduate-level courses and master’s certifications are designed to get the students ready for a career in digital marketing. Our professional and executive programs cater specifically to marketing professionals looking to skill up and move ahead in their careers."
    },
    {
      title: "Digital Marketing Placements and Salary in Mumbai",
      content: "With Digifine Academy, you get the best internships and placements with reputed industry leaders in digital marketing organizations all over India. These include placement in organizations situated in major cities and economic growth hubs of India that include Mumbai, Pune, Bangalore, Delhi, and Jaipur among many others. Our students get stipends and salaries at par and above the current industry standards in the industry."
    },
    {
      title: "Why Digifine Academy is best for a Digital Marketing Course",
      content: "Digifine Academy offers the best digital marketing courses with placement in Mumbai, India. Our courses are globally recognized and cover all facets of digital marketing. Our Industry Advisory Panel consists of renowned experts who have worked with some of the world’s most influential brands. We offer guaranteed internships and placements with industry-leading digital marketing firms and organizations all over India. We also provide all-time post-course support to our students even after completion of the course. We train our students to become the best in their field and surge in their careers ahead."
    },
    {
      title: "What is the Duration of Digifine Course?",
      listItems: courseDurations
    }
  ];

  // Toggle function to handle which section is open
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index); // Toggle between open and close
  };

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">FAQs</h2>
        
        {sections.map((section, index) => (
          <InfoSection
            key={index}
            title={section.title}
            content={section.content}
            listItems={section.listItems}
            isOpen={openSection === index} // Check if this section is open
            toggle={() => toggleSection(index)} // Toggle the section on click
          />
        ))}
        
        {/* Know More Button at the end */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition duration-300">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingInfoSection;
