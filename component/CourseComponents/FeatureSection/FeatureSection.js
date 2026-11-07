"use client";

import React from 'react';

export default function FeaturesSection({ featuresData = [], columns = 3 }) {
  
  const columnClasses = {
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4"
  };

  const selectedGridClass = columnClasses[columns] || columnClasses[3];

  return (
    <section className="w-full max-w-6xl mx-auto mt-24 md:mt-38 mb-23 md:mb-28 bg-[#fcfcfd]">
      
      {/* Container Layout with Snap Scroll */}
      <div className={`flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-5 w-full pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden ${selectedGridClass}`}>
        
        {featuresData && featuresData.map((card, index) => (
          <div 
            key={index} 
            className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-auto bg-white border border-slate-100 rounded-[24px] overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
          >
            {/* Image Graphic Area */}
            <div className="w-full h-[210px] overflow-hidden bg-slate-50 relative">
              <img 
                src={card.imageSrc} 
                alt={card.altText || card.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-7 flex flex-col justify-between flex-1 min-h-[200px] bg-gradient-to-b from-white to-slate-50/40">
              <div>
                {/* Heading */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
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