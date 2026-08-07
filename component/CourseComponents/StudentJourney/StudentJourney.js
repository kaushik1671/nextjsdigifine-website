"use client";

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const StudentJourney = ({ 
  stepsData = [], 
  title = "Student journey" 
}) => {
  const containerRef = useRef(null);

  // Offset: Scroll thoda niche hone par hi icon sliding start karega
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 60%"] 
  });

  // Smooth physics movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    restDelta: 0.001
  });

  // Position calculation along vertical line
  const characterTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  if (!stepsData || !stepsData.length) return null;

  return (
    <section 
      ref={containerRef}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-[#046AED]/10 text-[#046AED] px-2.5 py-0.5 rounded-full border border-[#046AED]/20">
              STUDENT JOURNEY
            </span>
            <span className="text-gray-300">—</span>
            <span className="text-gray-500 text-[11px] font-bold tracking-wider uppercase">
              JOURNEY
            </span>
          </div>

          {title && (
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
              {title}
            </h2>
          )}
        </div>

        {/* Timeline Area */}
        <div className="relative pl-2 sm:pl-4">
          
          {/* Timeline Base Background Line */}
          <div className="absolute left-7 sm:left-9 top-6 bottom-6 w-[2px] bg-blue-100 z-0" />

          {/* Animated Student Character Avatar */}
          <motion.div
            style={{ top: characterTop }}
            className="absolute left-7 sm:left-9 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#046AED] text-white flex items-center justify-center shadow-lg shadow-[#046AED]/40 ring-4 ring-white">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </div>
              
              <span className="absolute -inset-1 rounded-full bg-[#046AED]/30 animate-ping -z-10" />
            </div>
          </motion.div>

          {/* Steps List */}
          <div className="space-y-10 relative z-10">
            {stepsData.map((step, index) => {
              const displayNum = String(index + 1).padStart(2, '0');
              
              return (
                <div key={index} className="flex items-start group cursor-pointer">
                  
                  {/* Step Number Badge with restored Hover styling */}
                  <div className="flex-shrink-0 mr-5 sm:mr-8 relative z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#046AED]/20 text-[#046AED] font-mono text-sm sm:text-base font-bold flex items-center justify-center transition-all duration-300 shadow-sm shadow-[#046AED]/5 group-hover:bg-[#046AED] group-hover:text-white group-hover:border-[#046AED] group-hover:shadow-lg group-hover:shadow-[#046AED]/25">
                      {displayNum}
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="pt-1.5 sm:pt-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 transition-colors duration-300 group-hover:text-[#046AED]">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

StudentJourney.propTypes = {
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default StudentJourney;