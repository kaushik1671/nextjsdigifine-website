import React from 'react';
// import { Link } from 'react-router-dom'; // If using React Router for navigation
import Link from "next/link";

const CourseSection = () => {
  const courseBlocks = [
    {
      title: "Digital Marketing Overview",
      description: "Learn about the world of digital marketing, its importance, and how it impacts businesses.",
      link: "/digital-marketing-overview"
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Master SEO techniques to improve website rankings and drive organic traffic.",
      link: "/seo-course"
    },
    {
      title: "Content Marketing",
      description: "Learn how to create and promote content that attracts and engages target audiences.",
      link: "/content-marketing"
    },
    {
      title: "Social Media Marketing",
      description: "Understand how to leverage platforms like Facebook, Instagram, and LinkedIn to grow businesses.",
      link: "/social-media-marketing"
    },
    {
      title: "Pay-Per-Click (PPC)",
      description: "Dive into PPC advertising strategies to maximize ROI with paid search campaigns.",
      link: "/ppc-advertising"
    },
    {
      title: "Email Marketing",
      description: "Learn how to craft compelling email campaigns that drive conversions and customer loyalty.",
      link: "/email-marketing"
    },
    {
      title: "Web Analytics & Reporting",
      description: "Understand how to use analytics to track and improve digital marketing performance.",
      link: "/web-analytics"
    },
    {
      title: "Affiliate Marketing",
      description: "Learn the strategies to generate revenue by promoting third-party products or services.",
      link: "/affiliate-marketing"
    }
  ];

  return (
    <div className="w-full py-16 bg-blue-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Explore Our Digital Marketing Courses
        </h2>

        {/* Course Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{block.title}</h3>
              <p className="text-gray-600 mb-4">{block.description}</p>
              <Link
                href={block.link}
                className="text-blue-500 hover:text-blue-700 transition duration-200"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Download Brochure Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
