import React, { useState, useEffect } from 'react';

const CareerPath = ({ mainDescription, steps = [] }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = steps.length;

  // Har card ke liye 115px slot diya hai taaki 3-4 line ke description par bhi cards chipke nahi
  const slotHeight = 115;
  const containerHeight = Math.max(360, totalSteps * slotHeight);

  // Curve geometry settings
  const arcRadius = 115;
  const verticalPadding = 46; // Top aur Bottom card ke center ki position

  const getCurveOffset = (index) => {
    if (!isDesktop || totalSteps === 0) return 0;
    if (totalSteps === 1) return arcRadius;

    const usableHeight = containerHeight - verticalPadding * 2;
    const stepGap = usableHeight / (totalSteps - 1);
    const currentY = verticalPadding + index * stepGap;
    const centerY = containerHeight / 2;

    const normalizedY = (currentY - centerY) / (containerHeight / 2);
    const xOffset = arcRadius * Math.sqrt(Math.max(0, 1 - normalizedY * normalizedY));
    return Math.round(xOffset);
  };

  return (
    <div className="w-full my-12 md:my-16 bg-[rgb(250,254,254)] flex flex-col justify-center items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* --- HEADING --- */}
      <div className="w-full max-w-6xl text-center mb-12 flex flex-col items-center">
        <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#046AED] uppercase mb-1">
          EXPLORE YOUR FUTURE
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-widest uppercase max-w-4xl leading-tight">
          Roles You Can Apply For After Completing The Course
        </h2>
        <div className="w-16 h-[3px] bg-[#046AED] mt-3 rounded-full"></div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        
        {/* --- LEFT SECTION: Description & Half-Circle --- */}
        <div className="w-full md:w-[33%] flex flex-col items-center md:items-end text-center md:text-right md:pr-14 relative z-10 mb-8 md:mb-0 justify-center">
          
          <p className="text-xs sm:text-sm text-gray-600 max-w-[260px] leading-relaxed font-medium">
            {mainDescription}
          </p>

          {/* Thick 2-Color Half-Circle Graphic */}
          <div className="hidden md:block absolute right-[-23px] top-1/2 -translate-y-1/2 w-[55px] h-[140px]">
            <svg viewBox="0 0 50 160" className="w-full h-full drop-shadow-md">
              <path
                d="M 0 0 A 50 80 0 0 1 50 80 A 50 80 0 0 1 0 160 L 0 120 A 25 40 0 0 0 25 80 A 25 40 0 0 0 0 40 Z"
                fill="url(#thickGrad)"
              />
              <defs>
                <linearGradient id="thickGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="50%" stopColor="#046AED" />
                  <stop offset="50%" stopColor="#4A90E2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* --- RIGHT SECTION: Dynamic Dashed Arc & Cards --- */}
        <div
          style={{ height: isDesktop ? `${containerHeight}px` : 'auto' }}
          className="relative w-full md:w-[67%] flex flex-col justify-between py-2 md:py-3 pl-4 md:pl-20 z-10 gap-5 md:gap-0"
        >
          {/* SVG Dashed Semi-Circle Arc */}
          <svg
            className="hidden md:block absolute left-[-115px] top-0 w-[230px] h-full pointer-events-none z-0 overflow-visible"
            viewBox={`0 0 230 ${containerHeight}`}
            preserveAspectRatio="none"
          >
            <path
              d={`M 115 6 A ${arcRadius} ${containerHeight / 2 - 6} 0 0 1 115 ${containerHeight - 6}`}
              fill="none"
              stroke="#444444"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle cx="115" cy="8" r="5" fill="#1A1A1A" />
            <circle cx="115" cy={containerHeight - 8} r="5" fill="#1A1A1A" />
          </svg>

          {/* Mapping Career Steps Dynamically */}
          {steps.map((step, index) => {
            const isBlue = index % 2 === 0;
            const bgClass = isBlue ? 'bg-[#046AED]' : 'bg-[#E5E8EC]';
            const textClass = isBlue ? 'text-white' : 'text-[#1A1A1A]';
            const dotColor = isBlue ? 'bg-[#E5E8EC]' : 'bg-[#046AED]';
            const dynamicMarginLeft = getCurveOffset(index);

            return (
              <div
                key={index}
                style={{
                  marginLeft: isDesktop ? `${dynamicMarginLeft}px` : '0px',
                }}
                className="relative flex items-center w-full md:max-w-[500px] transition-all duration-300 hover:scale-[1.02] z-10"
              >
                {/* Connector Dot & Line */}
                <div className="hidden md:flex absolute right-full items-center mr-1">
                  <div
                    className={`w-[12px] h-[12px] ${dotColor} border-[2px] border-[#1A1A1A] rounded-full relative z-20 -mr-[6px]`}
                  ></div>
                  <div className="w-[75px] h-[2px] bg-[#1A1A1A] relative z-10"></div>
                </div>

                {/* Main Card Pill */}
                <div
                  className={`flex items-center w-full py-2.5 px-3 pr-6 rounded-full border border-[#d1d5db] shadow-md ${bgClass}`}
                >
                  {/* Icon Circle */}
                  <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] bg-[#F1C40F] border-[2px] border-white text-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0 z-20 -ml-8 sm:-ml-10 shadow-xl">
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className={`ml-3.5 sm:ml-4 flex-grow ${textClass}`}>
                    <h3 className="text-[12px] sm:text-[13.5px] font-bold uppercase tracking-wider mb-0.5 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-[11px] opacity-90 leading-snug">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CareerPath;