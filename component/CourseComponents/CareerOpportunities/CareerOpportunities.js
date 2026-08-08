"use client";

import React from "react";

export default function CareerOverviewSection({
  heading = "Career Opportunities at Digifine",
  paragraphs = [
    <>
      <span className="text-[#046AED] font-semibold hover:underline cursor-pointer">
        Digifine Academy
      </span>{" "}
      is one of India’s leading practical skill training institutes trusted by students and industry leaders. We offer industry-aligned Master Programs in Full Stack Development, Digital Marketing, and UI/UX Design to transform learners into job-ready professionals.
    </>,
    <>
      The reason behind becoming a preferred{" "}
      <span className="text-[#046AED] font-semibold hover:underline cursor-pointer">
        Digital Training Institute
      </span>{" "}
      is our 100% practical exposure, dedicated career guidance, and placement support from active industry experts.
    </>,
    <>
      We stand out by providing direct placement assistance and{" "}
      <span className="text-[#046AED] font-semibold hover:underline cursor-pointer">
        career opportunities
      </span>. Our workplace focuses on maintaining a healthy, growth-oriented, and collaborative environment.
    </>,
    <>
      Explore open roles with us and build a long-term career in the tech and education industry.
    </>
  ],
  illustrationSrc = "/images/Career/career.avif"
}) {
  return (
    <section className="bg-white text-gray-800 py-16 sm:py-20 px-4 sm:px-8 md:px-12 w-full font-sans border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Title in Digifine Blue (#046AED) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#046AED] mb-10 sm:mb-12 tracking-tight">
          {heading}
        </h2>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            {paragraphs.map((para, index) => (
              <p key={index} className="text-left">
                {para}
              </p>
            ))}
          </div>

          {/* Right Column: Illustration Box */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md p-2 sm:p-3 bg-blue-50/40 border border-blue-100 rounded-2xl text-center shadow-sm">
              
              <img
                src={illustrationSrc}
                alt="Digifine Careers"
                className="w-full h-auto max-h-[280px] sm:max-h-[320px] object-contain mx-auto drop-shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />

              {/* Light SVG Fallback */}
              <div className="hidden py-6">
                <svg className="w-56 h-56 mx-auto" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="110" fill="#046AED" fillOpacity="0.08"/>
                  <circle cx="150" cy="150" r="80" fill="#046AED" fillOpacity="0.15"/>
                  <path d="M100 240 C 100 190, 200 190, 200 240 Z" fill="#046AED"/>
                  <circle cx="150" cy="130" r="30" fill="#fbcfe8"/>
                  <path d="M125 120 C 125 95, 175 95, 175 120 Z" fill="#1e293b"/>
                  <rect x="125" y="190" width="50" height="30" rx="4" fill="#046AED"/>
                </svg>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}