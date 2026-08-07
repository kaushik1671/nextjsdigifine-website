"use client";

import React from "react";

export default function StatsSection({ stats = [] }) {
  if (!stats || stats.length === 0) return null;

  return (
    <section className="w-full mt-9 md:mt-12 mb-8 md:mb-10 bg-white flex justify-center px-4">
      
      <div className="w-full max-w-6xl h-auto min-h-[110px] md:h-28 bg-white rounded-xl shadow-sm border border-gray-200/60 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 overflow-hidden items-center">
        {stats.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <div
              key={index}
              className="flex items-center justify-start px-6 md:px-8 py-4 h-full transition-all duration-200 hover:bg-gray-50/70 group"
            >
              
              {IconComponent && (
                <div className="flex-shrink-0 text-blue-400 transition-colors duration-200 group-hover:text-blue-600 mr-4">
                  <IconComponent className="text-2xl md:text-3xl" />
                </div>
              )}

             
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1.5 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}