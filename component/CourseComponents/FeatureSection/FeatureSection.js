"use client";

import React from 'react';

export default function FeaturesSection({ featuresData = [], columns = 3 }) {
  
  const columnClasses = {
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  const selectedGridClass = columnClasses[columns] || columnClasses[3];

  return (
    // 🛠️ FIXED CLINGING & PERFECT ALIGNMENT: 
    // m-4 hata kar max-w-6xl, mx-auto aur px-4 md:px-0 lagaya hai taaki mobile par screen se na chipke aur website ke baaki sections se perfect straight-line alignment mile.
    <section className="w-full max-w-6xl mx-auto mt-24 md:mt-38 mb-23 md:mb-28 bg-[#fcfcfd]">
      
      {/* Container Layout with Snap Scroll */}
      <div className={`flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-5 w-full pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden ${selectedGridClass}`}>
        
        {featuresData && featuresData.map((card, index) => (
          <div 
            key={index} 
            // 🛠️ PREMIUM CARD STYLING: Upgraded border, clean background, and luxurious shadow mechanics
            className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-auto group bg-white border border-slate-100 rounded-[24px] overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* Image Graphic Area */}
            <div className="w-full h-[210px] overflow-hidden bg-slate-50 relative">
              <img 
                src={card.imageSrc} 
                alt={card.altText || card.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Subtle overlay effect on image hover */}
              <div className="absolute inset-0 bg-slate-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Premium Content Area */}
            <div className="p-6 md:p-7 flex flex-col justify-between flex-1 min-h-[200px] bg-gradient-to-b from-white to-slate-50/40">
              <div>
                {/* Heading interaction */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>
                {/* Balanced paragraph typography */}
                <p className="text-[0.92rem] text-slate-600 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}