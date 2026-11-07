"use client";

import React from "react";

export default function SupportSection({ supportData = [] }) {
  return (
    <section className="w-full py-12 md:py-6 bg-slate-50/50 flex justify-center px-4 font-sans">
      
      <div className="w-full max-w-6xl mx-auto relative m-4 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {supportData.map((item, index) => {
            // Theme setup based on data (blue or emerald)
            const isBlue = item.theme === "blue";
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 gap-6"
              >
                <div className="flex-[1.4] text-center sm:text-left">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                    isBlue 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-emerald-600 bg-emerald-50"
                  }`}>
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-black mt-2.5 mb-2 text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium sm:pr-2">
                    {item.description}
                  </p>
                </div>

                {/* Portrait Frame */}
                <div className={`w-36 h-36 sm:w-40 sm:h-40 shrink-0 overflow-hidden rounded-2xl relative p-1 bg-gradient-to-tr shadow-md ${
                  isBlue 
                    ? "from-blue-100 to-slate-100" 
                    : "from-emerald-100 to-slate-100"
                }`}>
                  <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50">
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}