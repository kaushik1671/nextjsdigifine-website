"use client";

import React from "react";
import {
  Gem,
  Users,
  Tv,
  PlayCircle,
  Landmark,
  RectangleHorizontal,
  TrendingUp, Banknote, ArrowUpRight ,
  ShoppingCart, Award, Gauge,
  Laptop, BarChart3, Compass
} from "lucide-react";

const iconMap = {
  Gem: <Gem className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12" />,
  Users: <Users className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />,
  RectangleHorizontal: <RectangleHorizontal className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-0.5" />,
  Tv: <Tv className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-rotate-6" />,
  PlayCircle: <PlayCircle className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />,
  Landmark: <Landmark className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-0.5" />,
  TrendingUp: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />, 
  Banknote: <Banknote className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />,
  ArrowUpRight: <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />, 
  ShoppingCart: <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" />,
  Award: <Award className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-6" />,
  Gauge: <Gauge className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-rotate-12" />,
  Laptop: <Laptop className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105" />,
  BarChart3: <BarChart3 className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110 origin-bottom" />,
  Compass: <Compass className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-45" />
};

export default function UniqueModules({ uniqueModulesData }) {
  if (!uniqueModulesData) return null;

  const { tagline, title, highlightTitle, description, modules } = uniqueModulesData;

  return (
  
    <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 font-sans">
      <div className="max-w-6xl mx-auto text-center m-4 mt-6">
        
        {/* Top Tagline */}
        {tagline && (
          <span className="text-xs md:text-sm font-bold tracking-widest text-[#046AED] uppercase bg-blue-50 px-5 py-2 rounded-full inline-block mb-5 border border-blue-100 shadow-sm">
            {tagline}
          </span>
        )}

        {/* Main Title */}
<h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
  {title} <br className="hidden md:inline" />
  <span className="text-[#046AED] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
    {highlightTitle}
  </span>
</h3>
        {/* Paragraph Description */}
        <p className="mt-6 text-slate-600 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed font-medium opacity-90">
          {description}
        </p>

        {/* --- Dynamic Premium Container --- */}
        <div className="mt-16 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 rounded-3xl p-6 md:p-14 shadow-2xl shadow-blue-950/20 relative overflow-hidden border border-slate-800">
          
          {/* Advanced backdrop glow elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Grid Layout (Unchanged) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-row lg:justify-between lg:items-start gap-y-8 gap-x-4 md:gap-6 relative z-10 w-full">
            {modules && modules.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 lg:flex-1"
              >
                {/* Circle Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 text-blue-400 group-hover:text-white group-hover:border-blue-400 group-hover:bg-[#046AED] shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(4,106,237,0.4)]">
                  {iconMap[item.iconName] || <Gem />}
                </div>

                {/* Subtitle / Title Text */}
                <h4 className="mt-4 text-xs md:text-sm font-bold text-slate-200 tracking-wide leading-snug group-hover:text-blue-300 transition-colors duration-200 whitespace-normal px-1">
                  {item.title}
                  {item.subtitle && (
                    <span className="block text-[10px] md:text-xs font-medium text-slate-400 group-hover:text-blue-200/80 mt-0.5">
                      {item.subtitle}
                    </span>
                  )}
                </h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}