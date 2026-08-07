"use client";

import React from 'react';
import { FiLayers } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';

export default function SyllabusTimeLine({ syllabusData, columns = 3 }) {
  // Fallback safety filter agar data pass na hua ho
  if (!syllabusData || !syllabusData.length) return null;

  // Dynamic Grid aur Padding Class definitions
  const isFiveCols = columns === 5;
  const gridClass = isFiveCols
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3";

  const chipPadding = isFiveCols ? "p-2" : "p-3.5";

  return (
    <section className="w-full py-24 bg-slate-50 font-sans relative overflow-hidden">
      
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Modernist Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            <FiLayers className="w-3.5 h-3.5" /> Curriculum Blueprint
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Explore the <span className="text-[#046AED]">Digifine Syllabus</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base font-medium">
            An enterprise-level curriculum architected to transform beginners into strategic, high-income marketing leaders.
          </p>
        </div>

        {/* Timeline Dynamic Wrapper */}
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-32 space-y-12 pb-4">
          
          {syllabusData.map((data, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-12 group animate-fadeIn"
            >
              
              {/* Timeline Track Node Anchor Indicator */}
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.15)] group-hover:bg-blue-600 transition-colors duration-300 z-10" />

              {/* Absolute Fixed Left Floating Term Badge (Only Visible on Desktop Layouts) */}
              <div className="absolute hidden md:block -left-36 top-6 w-24 text-right select-none">
                <span className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                  {data.term}
                </span>
              </div>

              {/* Main Hybrid Content Container Block */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)] group-hover:shadow-[0_10px_40px_rgba(37,99,235,0.04)] group-hover:border-blue-200/80 flex flex-col lg:flex-row gap-0 items-stretch overflow-hidden transition-all duration-300">
                
                {/* Asymmetric Left Pillar Panel */}
                <div className="w-full lg:w-[32%] bg-[#1E293B] p-6 flex flex-col justify-between shrink-0 relative overflow-hidden">
                  
                  {/* Subtle Background Pattern Mesh inside Left Card Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-transparent opacity-40" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-center md:items-start lg:flex-col">
                      <span className="bg-blue-600 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-md uppercase inline-block md:hidden lg:inline-block">
                        {data.term}
                      </span>
                    </div>
                    
                    <h3 className="mt-4 text-xl font-black text-white tracking-tight leading-snug">
                      {data.title}
                    </h3>
                    <p className="mt-3 text-slate-400 text-xs leading-relaxed font-medium">
                      {data.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-700/60 relative z-10 hidden lg:block">
                  </div>
                </div>

                {/* Right Area Layout for Core Modules */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-b from-white to-slate-50/30">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                    Core Modules & Competencies
                  </span>
                  
                  {/* CONDITION 1: Normal 'modules' array */}
                  {data.modules && data.modules.length > 0 && (
                    <div className={gridClass}>
                      {data.modules.map((module, i) => (
                        /* Card flat rahega, group/chip hover effects ke liye lagaya hai */
                        <div 
                          key={i} 
                          className={`bg-white border border-slate-100 ${chipPadding} rounded-xl flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] group/chip`}
                        >
                          <div className="flex-shrink-0">
                            {/* FIXED: Icon pehle gray rahega, hover par wapis pure blue ho jayega */}
                            <HiCheckCircle className="w-4 h-4 text-slate-300 group-hover/chip:text-blue-500 transition-colors duration-200" />
                          </div>
                          <span className="text-xs font-semibold text-slate-700 tracking-tight group-hover/chip:text-slate-900 transition-colors duration-200">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CONDITION 2: 'part1Modules' ya 'part2Modules' array */}
                  {((data.part1Modules && data.part1Modules.length > 0) || (data.part2Modules && data.part2Modules.length > 0)) && (
                    <div className="space-y-6">
                      
                      {/* Part 1 Setup */}
                      {data.part1Modules && data.part1Modules.length > 0 && (
                        <div>
                          {data.part1Title && (
                            <h4 className="text-xs font-bold text-[#046AED] uppercase tracking-wider mb-2.5">
                              {data.part1Title}
                            </h4>
                          )}
                          <div className={gridClass}>
                            {data.part1Modules.map((module, i) => (
                              <div key={i} className={`bg-white border border-slate-100 ${chipPadding} rounded-xl flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] group/chip`}>
                                <div className="flex-shrink-0">
                                  <HiCheckCircle className="w-4 h-4 text-slate-300 group-hover/chip:text-blue-500 transition-colors duration-200" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700 tracking-tight group-hover/chip:text-slate-900 transition-colors duration-200">{module}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Part 2 Setup */}
                      {data.part2Modules && data.part2Modules.length > 0 && (
                        <div>
                          {data.part2Title && (
                            <h4 className="text-xs font-bold text-[#046AED] uppercase tracking-wider mb-2.5 mt-2">
                              {data.part2Title}
                            </h4>
                          )}
                          <div className={gridClass}>
                            {data.part2Modules.map((module, i) => (
                              <div key={i} className={`bg-white border border-slate-100 ${chipPadding} rounded-xl flex items-center gap-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] group/chip`}>
                                <div className="flex-shrink-0">
                                  <HiCheckCircle className="w-4 h-4 text-slate-300 group-hover/chip:text-blue-500 transition-colors duration-200" />
                                </div>
                                <span className="text-xs font-semibold text-slate-700 tracking-tight group-hover/chip:text-slate-900 transition-colors duration-200">{module}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}