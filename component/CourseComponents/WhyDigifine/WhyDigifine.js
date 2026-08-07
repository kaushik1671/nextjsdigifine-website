"use client";

import React from 'react';
import PropTypes from 'prop-types';

const Features = ({ 
  featuresData = [], 
  title = "Six reasons this program trains differently" 
}) => {
  if (!featuresData || !featuresData.length) return null;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Clean, Streamlined Header Group */}
        <div className="mb-10 max-w-2xl">
          {/* Why Digifine Top Label Badge using Brand Blue (#046AED) */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-[#046AED]/10 text-[#046AED] px-2.5 py-0.5 rounded-full border border-[#046AED]/20">
              Why Digifine
            </span>
          </div>

          {title && (
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-snug">
              {title}
            </h2>
          )}
        </div>

        {/* Optimized Micro-Grid Layer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="group border border-gray-100 bg-gray-50/60 hover:bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/70 hover:border-[#046AED]/30 flex flex-col justify-between"
            >
              <div>
                {/* Professional Diamond Metric Icon using Brand Blue */}
                <div className="w-8 h-8 bg-[#046AED]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#046AED] transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#046AED] group-hover:bg-white transform rotate-45 transition-colors duration-300"></div>
                </div>

                {/* Typography Scale Matching */}
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#046AED] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

Features.propTypes = {
  featuresData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};

export default Features;