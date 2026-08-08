'use client';

import React from 'react';
import { BookOpen, Globe, Users, Zap } from 'lucide-react';

const defaultFeatures = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#046AED]" />,
    title: "Learn & Grow",
    description: "Continuous skill upgrades, certification allowances, and expert mentorship.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#046AED]" />,
    title: "Real-World Exposure",
    description: "Work directly on real industry projects and build scalable digital solutions.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#046AED]" />,
    title: "Collaborative Vibe",
    description: "An open-door culture where ideas override hierarchy at every step.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#046AED]" />,
    title: "Fast-Track Career",
    description: "Clear performance-based promotion paths to accelerate your career trajectory.",
  },
];

export default function WhyJoinDigifine({ 
  title = "Why Join Digifine?", 
  subtitle = "We prioritize growth, culture, and high-impact work.", 
  features = defaultFeatures 
}) {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Background Soft Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#046AED]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Main container with exact same padding as CareerSection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#046AED] tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Side-by-Side Horizontal Scroll for Mobile, Grid for Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible pb-6 pt-2 px-1 snap-x snap-mandatory scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#046AED]/50 hover:shadow-xl hover:shadow-[#046AED]/10 w-[260px] sm:w-[300px] lg:w-full flex-shrink-0 snap-center flex flex-col justify-between"
            >
              {/* Top active blue glow border on hover */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#046AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div>
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#046AED]/10">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#046AED] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}