"use client";

import React, { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  Globe,
  BookOpen,
  Award,
  Users,
  CheckSquare,
  Laptop,
  BadgeCheck,
  CircleX,
  FileText,
  Hourglass,
  Lightbulb,
  Layers,
  TrendingDown,
  AlertCircle,
  FileX,
  UserX,
  BookOpenCheck,
  Ban,
  // 🌟 NAYE ICONS IMPORT KIYE HAI DIVERSITY KE LIYE
  Building,
  GitBranch,
  Sliders,
  Palette,
  Clock,
  Milestone,
  Scissors,
  XCircle,
  Radio,
  FileCheck,
  HelpCircle,
  Activity
} from "lucide-react";

// 🌟 Fully Updated Icons Map: Sabhi dynamic icons ab strictly mapped hain
const iconMap = {
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  FileText: FileText,
  Globe: Globe,
  BookOpen: BookOpen,
  Award: Award,
  Users: Users,
  Laptop: Laptop,
  Hourglass: Hourglass,
  Lightbulb: Lightbulb,
  CheckSquare: CheckSquare,
  Layers: Layers,
  TrendingDown: TrendingDown,
  AlertCircle: AlertCircle,
  FileX: FileX,
  UserX: UserX,
  BookOpenCheck: BookOpenCheck,
  Ban: Ban,
  // New Graphic Design & Unique mapping entries
  Building: Building,
  GitBranch: GitBranch,
  Sliders: Sliders,
  Palette: Palette,
  Clock: Clock,
  Milestone: Milestone,
  Scissors: Scissors,
  XCircle: XCircle,
  Radio: Radio,
  FileCheck: FileCheck,
  HelpCircle: HelpCircle,
  Activity: Activity
};

export default function Toogle({ content }) {
  const [isDigifine, setIsDigifine] = useState(true);

  if (!content) return null;

  const currentView = isDigifine ? content.digifine : content.without;

  const statusIcon = isDigifine 
    ? <BadgeCheck className="w-5 h-5 text-blue-600 animate-pulse" /> 
    : <CircleX className="w-5 h-5 text-red-500 animate-pulse" />;

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16 bg-[#F8FAFC] font-sans rounded-3xl my-6 md:my-10 overflow-hidden">
      
      {/* Title Header */}
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#046AED] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 border-solid flex items-center justify-center gap-2 w-max mx-auto">
          {statusIcon} Why Choose Digifine?
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight mt-4 px-2 leading-tight">
          Two Paths. Two Outcomes. <br className="hidden sm:inline" />Your <span className="text-[#046AED]">Choice.</span>
        </h2>
      </div>

      {/* Switch Toggle */}
      <div className="flex justify-center mb-10 md:mb-14">
        <div className="bg-slate-200/70 p-1.5 rounded-full flex items-center relative w-[310px] sm:w-[400px] shadow-inner border border-slate-300/40 border-solid">
          
          <div 
            className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-out ${
              isDigifine 
                ? "left-1.5 w-[48%] bg-blue-600 shadow-lg shadow-blue-500/30" 
                : "left-[51%] w-[48%] bg-slate-800 shadow-lg shadow-slate-900/30"
            }`}
          />

          <button
            type="button"
            onClick={() => setIsDigifine(true)}
            className={`relative z-10 flex-1 text-center py-2.5 text-[11px] sm:text-sm font-black rounded-full transition-colors duration-200 cursor-pointer ${
              isDigifine ? "text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            With Digifine
          </button>

          <button
            type="button"
            onClick={() => setIsDigifine(false)}
            className={`relative z-10 flex-1 text-center py-2.5 text-[11px] sm:text-sm font-black rounded-full transition-colors duration-200 cursor-pointer ${
              !isDigifine ? "text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Without Digifine
          </button>
        </div>
      </div>

      {/* Sub-heading Context */}
      <div className="max-w-3xl mx-auto text-center mb-10 px-2">
        <h3 className={`text-xl md:text-3xl font-extrabold mb-3 transition-colors duration-300 ${isDigifine ? "text-blue-600" : "text-slate-800"}`}>
          {currentView.subheading}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
          {currentView.description}
        </p>
      </div>

      {/* Dynamic Cards Output */}
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto pb-6 pt-2 px-2 md:pb-0 scrollbar-hide snap-x snap-mandatory touch-pan-x">
        {currentView.cards.map((card, index) => {
          // 🛠️ FIX: Agar dynamic icon map me available hai toh wahi dikhega, repeat nahi hoga
          const RenderIcon = iconMap[card.icon] || Briefcase;
          
          return (
            <div
              key={index}
              className={`group relative border border-solid rounded-2xl p-5 min-h-[140px] md:min-h-[160px] overflow-hidden flex flex-col justify-between items-start transition-all duration-300 transform md:hover:-translate-y-1 shrink-0 w-[260px] sm:w-[280px] md:w-auto snap-center ${
                isDigifine 
                  ? "bg-white border-slate-100 hover:border-blue-300 shadow-[0_4px_15px_rgba(0,0,0,0.02)] md:hover:shadow-xl md:hover:shadow-blue-500/5" 
                  : "bg-white border-slate-200/60 hover:border-red-300 shadow-sm md:hover:shadow-xl md:hover:shadow-red-500/5"
              }`}
            >
              {/* Background Watermark Icon */}
              <div className="absolute -bottom-4 -right-4 z-0 pointer-events-none opacity-40">
                <RenderIcon
                  className={`w-24 h-24 md:w-28 md:h-28 ${
                    isDigifine ? "text-blue-50" : "text-red-50"
                  }`}
                />
              </div>

              {/* Top Colored Icon Badge */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center z-10 ${
                  isDigifine ? "bg-blue-100 text-blue-600" : "bg-red-100 text-red-500"
                }`}
              >
                <RenderIcon className="w-6 h-6" />
              </div>

              <p className="text-slate-800 text-sm font-semibold leading-relaxed mt-4 z-10">
                {card.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile Indicator */}
      <div className="flex justify-center items-center gap-1.5 md:hidden mt-4">
        <span className={`w-6 h-1 rounded-full ${isDigifine ? 'bg-blue-600/60' : 'bg-slate-800/60'}`} />
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Swipe to view more</span>
        <span className={`w-2 h-1 rounded-full ${isDigifine ? 'bg-blue-200' : 'bg-slate-200'}`} />
      </div>

    </section>
  );
}