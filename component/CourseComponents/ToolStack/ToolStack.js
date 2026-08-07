"use client";

import React from 'react';
import PropTypes from 'prop-types';

const ToolStack = ({ 
  aiTools = [], 
  platforms = [], 
  title = "Tools you'll master",
  subtitle = "AI tools and industry platforms in one stack — everything you'll run campaigns, analyze data, and create with."
}) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-blue-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Group */}
        <div className="mb-12 max-w-2xl text-left">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-[#046AED]/10 text-[#046AED] px-2.5 py-0.5 rounded-full border border-[#046AED]/20">
              TOOL STACK
            </span>
          </div>

          {title && (
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-3">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* AI Tools Sub-section */}
        {aiTools && aiTools.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
              AI Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {aiTools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center py-3.5 px-4 rounded-xl border border-gray-100 bg-[#046AED]/5 hover:bg-white hover:border-[#046AED] hover:shadow-lg hover:shadow-[#046AED]/10 transition-all duration-300 text-center group cursor-default"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#046AED] transition-colors duration-200">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Platforms Sub-section */}
        {platforms && platforms.length > 0 && (
          <div>
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-5">
              Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center py-3.5 px-4 rounded-xl border border-gray-100 bg-[#046AED]/5 hover:bg-white hover:border-[#046AED] hover:shadow-lg hover:shadow-[#046AED]/10 transition-all duration-300 text-center group cursor-default"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 group-hover:text-[#046AED] transition-colors duration-200">
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

ToolStack.propTypes = {
  aiTools: PropTypes.arrayOf(PropTypes.string),
  platforms: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ToolStack;