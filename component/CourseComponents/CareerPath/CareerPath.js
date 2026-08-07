import React from 'react';

const CareerPath = ({ mainDescription, steps }) => {
  return (
    /* Outer top-bottom margin added (`my-12 md:my-16`) content ke bahar spacing ke liye */
    <div className="w-full my-12 md:my-16 bg-[rgb(250,254,254)] flex flex-col justify-center items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* --- REFINED CAPITALIZED HEADING (Compact margins) --- */}
      <div className="w-full max-w-6xl text-center mb-8 flex flex-col items-center">
        <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#007bff] uppercase mb-1">
          EXPLORE YOUR FUTURE
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-widest uppercase max-w-4xl leading-tight">
          Roles You Can Apply For After Completing The Course
        </h2>
        <div className="w-16 h-[3px] bg-[#007bff] mt-3 rounded-full"></div>
      </div>

      {/* Main Container tailored for compact scale */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between min-h-[420px]">
        
        {/* --- LEFT SECTION: Only Description & Half-Circle --- */}
        <div className="w-full md:w-[35%] flex flex-col items-end text-right pr-8 md:pr-16 relative z-10 mb-8 md:mb-0 justify-center">
          
          {/* Main Description */}
          <p className="text-xs sm:text-sm text-gray-600 max-w-[240px] leading-relaxed font-medium">
            {mainDescription}
          </p>

          {/* Thick 2-Color Half-Circle Graphic */}
          <div className="hidden md:block absolute right-[-23px] top-1/2 -translate-y-1/2 w-[55px] h-[140px]">
            <svg viewBox="0 0 50 160" className="w-full h-full drop-shadow-md">
              <path d="M 0 0 A 50 80 0 0 1 50 80 A 50 80 0 0 1 0 160 L 0 120 A 25 40 0 0 0 25 80 A 25 40 0 0 0 0 40 Z" fill="url(#thickGrad)" />
              <defs>
                <linearGradient id="thickGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="50%" stopColor="#007bff" />
                  <stop offset="50%" stopColor="#4A90E2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* --- RIGHT SECTION: Dashed Arc & Cards --- */}
        <div className="relative w-full md:w-[65%] h-auto md:h-[480px] flex flex-col justify-between py-2 pl-4 md:pl-20 z-10 gap-4 md:gap-0">
          
          {/* Dashed Arc Line Background (Desktop Only) */}
          <div className="hidden md:block absolute left-[-120px] top-[25px] bottom-[25px] w-[200px] border-r-[2px] border-y-[2px] border-dashed border-[#444] rounded-r-full z-0">
            <div className="absolute top-[-6px] left-0 w-3 h-3 bg-[#1A1A1A] rounded-full z-10 shadow-sm"></div>
            <div className="absolute bottom-[-6px] left-0 w-3 h-3 bg-[#1A1A1A] rounded-full z-10 shadow-sm"></div>
          </div>

          {/* Mapping the Career Steps */}
          {steps.map((step, index) => {
            const isBlue = index % 2 === 0;
            const bgClass = isBlue ? 'bg-[#007bff]' : 'bg-[#E5E8EC]';
            const textClass = isBlue ? 'text-white' : 'text-[#1A1A1A]';
            const dotColor = isBlue ? 'bg-[#E5E8EC]' : 'bg-[#007bff]';

            const desktopMargins = ['md:-ml-9', 'md:ml-17', 'md:ml-22', 'md:ml-18', 'md:-ml-9'];
            
            return (
              <div key={index} className={`relative flex items-center w-full md:max-w-[420px] ${desktopMargins[index]} transition-transform hover:scale-[1.02] duration-300 z-10`}>
                
                {/* Connector Dot & Line */}
                <div className="hidden md:flex absolute right-full items-center mr-1">
                  <div className={`w-[12px] h-[12px] ${dotColor} border-[2px] border-[#1A1A1A] rounded-full relative z-20`}></div>
                  <div className="w-[80px] h-[2px] bg-[#1A1A1A] relative z-10"></div>
                </div>

                {/* Main Card Pill */}
                <div className={`flex items-center w-full p-[3px] pr-5 rounded-full border border-[#d1d5db] shadow-md ${bgClass}`}>
                  
                  {/* Icon Circle - Yellow background, Dark icon */}
                  <div className="w-[48px] h-[48px] sm:w-[54px] sm:h-[54px] bg-[#F1C40F] border-[2px] border-white text-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0 z-20 -ml-8 sm:-ml-10 shadow-xl">
                    {step.icon}
                  </div>

                  {/* Text Content */}
                  <div className={`ml-3 sm:ml-4 flex-grow ${textClass}`}>
                    <h3 className="text-[12px] sm:text-[14px] font-bold uppercase tracking-widest mb-[1px]">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] opacity-90 leading-snug">
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