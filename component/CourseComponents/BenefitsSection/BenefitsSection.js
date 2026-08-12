'use client';

import React from 'react';
import { HeartPulse, PartyPopper, Coffee, Scale, Train, Award, Sparkles } from 'lucide-react';

const benefitsData = [
  {
    title: "Celebration & Activities",
    icon: <PartyPopper className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
  {
    title: "Health Insurance",
    icon: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
  {
    title: "Snacks & Beverages",
    icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
  {
    title: "Work-Life Balance",
    icon: <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
  {
    title: "Ease of Travel",
    icon: <Train className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
  {
    title: "Increments & Incentives",
    icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#046AED]" />,
  },
];

export default function BenefitsSection({ 
  title = "Benefits at Digifine makes a difference", 
  subtitle = "We take care of our team with exclusive perks that support health, lifestyle, and financial growth." 
}) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden font-sans">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#046AED]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#046AED] text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Culture & Perks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            {subtitle}
          </p>
        </div>

        {/* Honeycomb Grid Container:
            - Mobile: Exact 2-column interlocking layout untouched (w-36 h-44, -mt-8).
            - Desktop: Standard 3-column clean row layout (sm:grid-cols-3) with zero vertical overlapping/touching issues.
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center max-w-5xl mx-auto py-8 gap-x-4 gap-y-6 sm:gap-8">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className={`group relative w-36 h-44 sm:w-72 sm:h-80 flex flex-col items-center justify-center p-3 sm:p-6 text-center transition-transform duration-300 hover:-translate-y-2 justify-self-center ${
                index % 2 !== 0 
                  ? '-mt-8 sm:mt-0' 
                  : 'mt-0'
              }`}
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            >
              <div 
                className="absolute inset-0 bg-[#EAF2FE] border-2 border-[#D0E2FC] transition-all duration-300 group-hover:bg-[#046AED] group-hover:border-[#046AED] flex flex-col items-center justify-center p-3 sm:p-8 text-center shadow-md"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              >
                <div className="w-10 h-10 sm:w-20 sm:h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-[10px] sm:text-base font-bold text-slate-900 group-hover:text-white transition-colors px-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}