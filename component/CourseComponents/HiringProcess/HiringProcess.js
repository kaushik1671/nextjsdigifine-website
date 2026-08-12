'use client';

import React from 'react';

const hiringSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "A 15-minute informal chat with our Talent team to align on mutual goals.",
  },
  {
    step: "02",
    title: "Skill Review",
    description: "Practical coding or portfolio walk-through relevant to your target role.",
  },
  {
    step: "03",
    title: "Cultural Fit",
    description: "Meet team leads and functional heads to understand team dynamics.",
  },
  {
    step: "04",
    title: "Offer & Onboard",
    description: "Transparent offer walkthrough and a smooth, guided onboarding process.",
  },
];

export default function HiringProcessSection({ 
  title = "Our Simple Hiring Process", 
  subtitle = "Transparent, fast, and respectful of your time." 
}) {
  return (
    <section className="py-16 bg-white relative overflow-hidden font-sans">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#046AED]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container - Matched with ExploreCareers max-w-7xl and px classes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 mt-3 text-base font-normal">
            {subtitle}
          </p>
        </div>

        {/* Desktop View: Compact Cards with Connecting Line */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {hiringSteps.map((item, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#046AED]/50 hover:shadow-lg hover:shadow-[#046AED]/5 flex flex-col justify-between"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#046AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#046AED]/40 group-hover:text-[#046AED] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-100 group-hover:bg-[#046AED] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#046AED] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Mobile View Only: Smooth Horizontal Compact Ticker Line */}
      <div className="flex sm:hidden w-full overflow-x-auto pb-4 pt-2 px-4 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-4 w-max">
          {hiringSteps.map((item, index) => (
            <div 
              key={index}
              className="group relative w-64 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex-shrink-0 flex flex-col justify-between active:border-[#046AED]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-[#046AED]/40">
                    {item.step}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-blue-100" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}