"use client";

import React, { lazy, Suspense, useState } from 'react';

const CareerForm = lazy(() => import('./CareerForm'));

const StatIcon = ({ src, hoverSrc, label, index, renderLabel }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={imgSrc}
        alt={label}
        className="w-16 h-16 object-contain transition-all duration-200"
        onMouseEnter={() => setImgSrc(hoverSrc)}
        onMouseLeave={() => setImgSrc(src)}
      />
      <p className="text-sm text-center mt-2">
        {renderLabel(label, index)}
      </p>
    </div>
  );
};

const MyComponent = ({
  type = "dm",
  title = "",             
  highlightTitle = "",     
  statsSubheading = "100% Placement Assurance Upon Course Completion", 
  statsData,               
  redirectlink = 'course-brochures'
}) => {
  
  const imageData = statsData || [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '10,000+ Students Trained' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '12 LPA Highest Package' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '4.9 LPA Average Package' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '96% Placement Rate' },
  ];

  const renderLabel = (label, index) => {
    const words = label.split(' ');
    if (index === 0 || index === 3) {
      return words.map((word, idx) => (
        <span key={idx} className={idx === 0 ? 'font-bold text-xl text-[#046AED]' : ''}>
          {word}{' '}
        </span>
      ));
    }
    return words.map((word, idx) => (
      <span key={idx} className={idx < 2 ? 'font-bold text-xl text-[#046AED]' : ''}>
        {word}{' '}
      </span>
    ));
  };

  return (
    /* Yahan changes kiye gaye hain: 'my-16 md:my-24' add kiya gaya hai standard section spacing ke liye */
    <div className="relative mx-auto mt-16 md:mt-24 mb-8 md:mb-12 px-4 max-w-6xl w-full">

      {title && (
        <div className="flex flex-col pb-6 pt-2">
          <h2 className="text-2xl sm:text-2xl md:text-[25px] lg:text-[30px] font-bold text-slate-900 leading-tight">
            {title} <span className="text-[#046AED]">{highlightTitle}</span>
          </h2>
        </div>
      )}

      {/* Main Grid Section */}
      <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-stretch">

        {/* LEFT SIDE STATS */}
        <div className='flex flex-col w-full md:w-[45%] lg:w-[50%]'>
          <div className="grid grid-cols-2 gap-4 p-6 sm:p-8 bg-white border rounded-[24px] border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full justify-center items-center">
            <p className="col-span-2 text-lg sm:text-xl font-bold text-center text-slate-800 mb-2">
              {statsSubheading}
            </p>

            {imageData.map((image, index) => (
              <StatIcon
                key={index}
                src={image.src}
                hoverSrc={image.hover}
                label={image.label}
                index={index}
                renderLabel={renderLabel}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className='w-full md:w-[55%] lg:w-[50%] flex'>
          <div className="w-full bg-white border border-gray-200 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading form...</div>}>
              <CareerForm redirectlink={redirectlink} />
            </Suspense>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyComponent;