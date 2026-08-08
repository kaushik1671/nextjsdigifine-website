'use client';

import React from 'react';
import { HeartPulse, PartyPopper, Coffee, Scale, Train, Award, Sparkles } from 'lucide-react';

const benefitsData = [
  {
    title: "Celebration & Activities",
    icon: <PartyPopper className="w-6 h-6 text-[#046AED]" />,
  },
  {
    title: "Health Insurance",
    icon: <HeartPulse className="w-6 h-6 text-[#046AED]" />,
  },
  {
    title: "Snacks & Beverages",
    icon: <Coffee className="w-6 h-6 text-[#046AED]" />,
  },
  {
    title: "Work-Life Balance",
    icon: <Scale className="w-6 h-6 text-[#046AED]" />,
  },
  {
    title: "Ease of Travel",
    icon: <Train className="w-6 h-6 text-[#046AED]" />,
  },
  {
    title: "Increments & Incentives",
    icon: <Award className="w-6 h-6 text-[#046AED]" />,
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

        {/* 
          Desktop view: Original Honeycomb Grid Container 
          Mobile view: Hidden, replaced by trading-style horizontal ticker below
        */}
        <div className="hidden sm:flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto py-8">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className="group relative w-72 h-80 flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-2"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            >
              <div 
                className="absolute inset-0 bg-[#EAF2FE] border-2 border-[#D0E2FC] transition-all duration-300 group-hover:bg-[#046AED] group-hover:border-[#046AED] flex flex-col items-center justify-center p-8 text-center shadow-md"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 
        Mobile view ONLY: Trading-style horizontal scrolling ticker line 
        (Sirf mobile ke liye side-by-side line / ticker format)
      */}
      <div className="flex sm:hidden w-full overflow-x-auto pb-6 pt-2 scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-4 px-4 w-max">
          {benefitsData.map((item, index) => (
            <div 
              key={index}
              className="group relative w-60 h-68 flex-shrink-0 flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 active:scale-95"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            >
              <div 
                className="absolute inset-0 bg-[#EAF2FE] border-2 border-[#D0E2FC] transition-all duration-300 active:bg-[#046AED] active:border-[#046AED] flex flex-col items-center justify-center p-6 text-center shadow-md"
                style={{
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900 active:text-white transition-colors">
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