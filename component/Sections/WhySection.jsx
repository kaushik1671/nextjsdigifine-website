import React, { useState } from 'react';

const WhySection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: 'Unique courses',
      content:
        'Our flagship Digital Marketing Graduate Course in Mumbai is the first of its kind in India. It not only teaches you digital marketing but you also learn to implement it through strategic management & data science. This unique digital marketing course with placement is the perfect combination of theoretical knowledge with practical exposure.',
    },
    {
      title: 'International certifications',
      content:
        'Digifine offers an international certificate for the Strategic Management module from the reputed IBMI Institute in Berlin, Germany. All our courses are designed and taught according to international standards.',
    },
    {
      title: 'Industry advisory panel',
      content:
        'When you want to set global industry standards, you tune into the best of the industry. That’s what we did by creating the Industry Advisory Panel, full of experts who have worked with some of the world’s most influential tech brands. Their insight and expertise ensure that our digital marketing courses with placement are at par with the global industry standards.',
    },
    {
      title: 'Global training offering',
      content:
        'Students of Digifine Academy receive around-the-globe training which makes them industry-ready on the completion of their courses.',
    },
    {
      title: 'Post course support',
      content:
        'We offer our students all-time post-course support. We are there to guide our students when they’re learning with us and also to support them when they progress ahead into their careers.',
    },
    {
      title: '100% placement support',
      content:
        'Digifine Academy, unlike other institutions, provides its students with a 100% Placement guarantee, making it the best digital marketing training institute in Mumbai.',
    },
  ];

  return (
    <div className="w-full py-16 bg-blue-500">
      {/* Main content wrapper */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-white mb-8">
          Why Digifine Digital Marketing Course With Placements in Mumbai?
        </h1>

        {/* Content Section with Image and collapsible sections */}
        <div className="flex justify-center items-start space-x-8">
          <div className="flex-none">
            <img 
              src="https://via.placeholder.com/150"  // Replace with actual image URL
              alt="Course Image"
              className="w-40 h-40 object-cover rounded-md"
              loading="lazy"
            />
          </div>

          <div className="flex-1 space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                <div 
                  className="cursor-pointer p-4 border border-gray-200 bg-gray-50 hover:bg-gray-100 rounded-md"
                  onClick={() => toggleSection(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
                </div>
                {openSection === index && (
                  <div className="mt-4 pl-12 pr-4 text-gray-100 text-base">
                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
