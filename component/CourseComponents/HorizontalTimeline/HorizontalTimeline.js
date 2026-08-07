"use client";

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const HorizontalTimeline = ({ 
  stepsData = [], 
  title = "The Corporate Simulation Timeline",
  subtitle = "Six stages that mirror a real agency career path — compressed into your training."
}) => {
  
  useEffect(() => {
    // Staggered visibility control via Intersection Observer API
    const targets = document.querySelectorAll('.timeline-node-track');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('node-animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach((el) => observer.observe(el));
    return () => targets.forEach((el) => observer.unobserve(el));
  }, [stepsData]);

  if (!stepsData || !stepsData.length) return null;

  return (
    <>
      <style>{`
        /* CSS Micro-Animations Engine */
        .timeline-node-track {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .node-animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* SVG Dasharray Gradient Flow */
        @keyframes lineFlow {
          to {
            stroke-dashoffset: -40;
          }
        }
        
        .animated-svg-line {
          stroke-dasharray: 8, 4;
          animation: lineFlow 2s linear infinite;
        }

        /* Premium Node Interaction System */
        .premium-node-circle {
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-node-circle::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 9999px;
          border: 2px dashed #046AED;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .group:hover .premium-node-circle {
          transform: scale(1.1);
          border-color: #046AED;
          background-color: #046AED;
          color: #ffffff;
          box-shadow: 0 10px 25px -5px rgba(4, 106, 237, 0.4);
        }

        .group:hover .premium-node-circle::after {
          opacity: 0.35;
          transform: scale(1.15);
          animation: rotateClockwise 8s linear infinite;
        }

        @keyframes rotateClockwise {
          to { transform: scale(1.15) rotate(360deg); }
        }
      `}</style>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased overflow-hidden selection:bg-blue-50">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Group */}
          <div className="mb-16 text-left">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#046AED]/15 text-[#046AED] px-3 py-1 rounded-full border border-[#046AED]/20">
                HOW IT WORKS
              </span>
            </div>
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[gray-950] tracking-tight leading-none mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Timeline Structure Wrapper */}
          <div className="relative mt-20">
            
            {/* Desktop SVG Flowing Connection Line */}
            <div className="hidden md:block absolute top-[22px] left-8 right-8 h-[4px] z-0 pointer-events-none">
              <svg width="100%" height="4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line 
                  x1="0" y1="2" x2="100%" y2="2" 
                  stroke="#046AED" 
                  strokeWidth="2" 
                  className="animated-svg-line" 
                  strokeOpacity="0.4"
                />
              </svg>
            </div>

            {/* Responsive Dynamic Row Map */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-4 relative z-10">
              {stepsData.map((step, index) => {
                const isLast = index === stepsData.length - 1;
                return (
                  <div 
                    key={index} 
                    className="timeline-node-track flex md:flex-col items-center md:items-center text-left md:text-center group"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    
                    {/* Node Core Indicator Component */}
                    <div className="flex flex-col items-center mr-6 md:mr-0 md:mb-6 relative">
                      <div className="premium-node-circle w-12 h-12 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center font-bold text-sm text-gray-600 z-10">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      {/* Mobile Only Flow Dotted Line string */}
                      {!isLast && (
                        <div className="md:hidden w-[2px] h-20 bg-gradient-to-b from-[#046AED]/30 to-gray-100 absolute top-12 left-1/2 transform -translate-x-1/2 z-0" />
                      )}
                    </div>

                    {/* Meta Info Blocks */}
                    <div className="flex-1 md:flex-none transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <h3 className="text-sm sm:text-base font-bold text-gray-950 mb-1.5 group-hover:text-[#046AED] transition-colors duration-300 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed font-normal max-w-[150px] md:mx-auto transition-colors duration-300 group-hover:text-gray-700">
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
    </>
  );
};

HorizontalTimeline.propTypes = {
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HorizontalTimeline;