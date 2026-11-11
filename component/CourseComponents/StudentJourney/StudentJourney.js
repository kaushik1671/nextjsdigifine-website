"use client";

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const StudentJourney = ({ 
  stepsData = [], 
  title = "Student journey" 
}) => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [stepOffsets, setStepOffsets] = useState([]);

  // Calculate exact pixel top coordinates for each step badge center relative to the timeline container
  useEffect(() => {
    const updateOffsets = () => {
      if (!containerRef.current) return;
      const containerTop = containerRef.current.getBoundingClientRect().top;

      const offsets = stepRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        // Calculate center position relative to timeline wrapper
        return rect.top - containerTop + rect.height / 2;
      });

      setStepOffsets(offsets);
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => window.removeEventListener('resize', updateOffsets);
  }, [stepsData]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"] 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  // Dynamic interpolation: Map scroll progress [0 -> 1] directly to keyframe pixel values of badges
  const fallbackTop = stepOffsets.length > 0 ? stepOffsets[stepOffsets.length - 1] : 0;
  const characterTop = useTransform(
    smoothProgress,
    stepOffsets.length > 1
      ? stepOffsets.map((_, i) => i / (stepOffsets.length - 1))
      : [0, 1],
    stepOffsets.length > 0 ? stepOffsets : [0, fallbackTop]
  );

  if (!stepsData || !stepsData.length) return null;

  return (
    <section 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-50"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-14 text-left">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-[#046AED]/10 text-[#046AED] px-2.5 py-0.5 rounded-full border border-[#046AED]/20">
              STUDENT JOURNEY
            </span>
          </div>

          {title && (
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug">
              {title}
            </h2>
          )}
        </div>

        {/* Timeline Area */}
        <div ref={containerRef} className="relative pl-2 sm:pl-4">
          
          {/* Timeline Base Background Line */}
          <div className="absolute left-7 sm:left-9 top-6 bottom-6 w-[2px] bg-blue-100 z-0" />

          {/* Animated Student Character Avatar - Centered directly over badges */}
          <motion.div
            style={{ top: characterTop }}
            className="absolute left-7 sm:left-9 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#046AED] text-white flex items-center justify-center shadow-lg shadow-[#046AED]/40 ring-4 ring-white">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </div>
              
              <span className="absolute -inset-1 rounded-xl bg-[#046AED]/30 animate-ping -z-10" />
            </div>
          </motion.div>

          {/* Steps List */}
          <div className="space-y-10 relative z-10">
            {stepsData.map((step, index) => {
              const displayNum = String(index + 1).padStart(2, '0');
              
              return (
                <div key={index} className="flex items-start">
                  
                  {/* Step Number Badge */}
                  <div 
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex-shrink-0 mr-5 sm:mr-8 relative z-10"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-[#046AED]/20 text-[#046AED] font-mono text-sm sm:text-base font-bold flex items-center justify-center shadow-sm shadow-[#046AED]/5">
                      {displayNum}
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="pt-1.5 sm:pt-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
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