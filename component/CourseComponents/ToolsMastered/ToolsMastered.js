"use client";

import React from "react";

export default function ToolsMastered({ toolsData }) {
  if (!toolsData) return null;

  const { title, highlightTitle, caption, tools } = toolsData;
  const toolCount = tools?.length || 0;

  // 🛠️ SMART GRID LOGIC (Original layout)
  let gridColsClass = "grid-cols-2 sm:grid-cols-3"; 
  let cardSizeClass = "p-4 md:p-5";

  if (toolCount === 1) {
    gridColsClass = "grid-cols-1 md:w-2/3"; 
    cardSizeClass = "p-6";
  } else if (toolCount === 2) {
    gridColsClass = "grid-cols-1 sm:grid-cols-2"; 
    cardSizeClass = "p-5 md:p-6"; 
  } else if (toolCount === 4) {
    gridColsClass = "grid-cols-2"; 
    cardSizeClass = "p-5 md:p-6";
  }

  // Indicator dots
  const dotColors = [
    "bg-blue-400",
    "bg-orange-400",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-600",
    "bg-green-400",
    "bg-teal-400",
    "bg-amber-500",
    "bg-cyan-400"
  ];

  return (
    /* Outer top-bottom margin added (`my-12 md:my-16`) content ke bahar space ke liye */
    <section className="relative w-full my-14 md:my-18 py-26 bg-gradient-to-tr from-white via-white to-blue-50/40 flex justify-center px-4 overflow-hidden font-sans">
      
      {/* Abstract glowing shapes */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/25 to-cyan-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
        
        {/* LEFT SIDE: Heading & Description */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
            {title}{" "}
            <span className="text-[#046AED] block sm:inline lg:block">
              {highlightTitle}
            </span>
          </h2>
          {caption && (
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              {caption}
            </p>
          )}
        </div>

        {/* RIGHT SIDE: Dynamic Smart Grid Layout */}
        <div className={`lg:col-span-7 grid gap-4 md:gap-5 ${gridColsClass}`}>
          {tools?.map((tool, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-xl bg-white/90 rounded-2xl flex flex-col items-start justify-between border border-white/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_48px_-10px_rgba(4,106,237,0.15)] transition-all duration-300 hover:-translate-y-1 group ${cardSizeClass}`}
            >
              {/* Top-right UI corner status indicator dot */}
              <span className={`absolute top-4 right-4 w-2 h-2 rounded-full ${dotColors[index % dotColors.length]}`} />

              {/* Tool Logo */}
              <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-100/80 group-hover:scale-105 transition-transform duration-300">
                {tool.image ? (
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-7 h-7 object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-[#046AED]">
                    {tool.name?.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>

              {/* Tool Label Metadata */}
              <div className="mt-5 flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                  Software
                </span>
                <span className="text-sm md:text-base font-bold text-gray-800 tracking-tight">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}