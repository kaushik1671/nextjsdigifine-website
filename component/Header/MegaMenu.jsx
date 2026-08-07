"use client";

import React, { useState } from "react";

const MegaMenu = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(data?.[0]?.name || null);

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full max-w-[1360px] mx-auto bg-white py-6 px-8 md:px-12 font-sans">
      <div className="flex flex-col md:flex-row w-full">
        
        {/* LEFT SIDE CATEGORIES (No Scrollbar, Full height) */}
        <div className="w-full md:w-80 flex flex-col border-b md:border-b-0 md:border-r border-gray-200 pr-8 pt-1 pb-4">
          
          {/* Section Heading */}
          <div className="pb-4 mb-1">
            <p className="font-semibold text-gray-800 text-[18px]">Courses</p>
          </div>

          {/* Category List */}
          <div className="flex flex-col">
            {data.map((category) => (
              <div
                key={category.name}
                className={`py-3.5 border-b border-gray-100 cursor-pointer transition-colors duration-150 text-[15px]
                ${
                  activeCategory === category.name
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600 font-normal"
                }`}
                onMouseEnter={() => setActiveCategory(category.name)}
              >
                <p>{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="flex-1 pl-0 md:pl-14 pt-1 pb-4 bg-white">
          {data.map((category) =>
            category.name === activeCategory ? (
              <div key={category.name} className="flex flex-col gap-8">

                {/* SECTIONS */}
                {category.sections?.map((section) => (
                  <div key={section.title} className="flex flex-col gap-6">
                    
                    {/* Category Title */}
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-3">
                      {section.title}
                    </p>

                    {/* Course Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 pt-2">
                      {section.items?.map((item) => (
                        <a
                          key={item.title}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-4 transition-opacity hover:opacity-90 cursor-pointer"
                        >
                          {/* Logo Box */}
                          <div className="w-[74px] h-[40px] bg-gray-50 border border-gray-200/80 flex items-center justify-center flex-shrink-0 rounded-xs overflow-hidden p-1">
                            <img
                              alt={item.provider}
                              loading="lazy"
                              className="w-full h-full object-contain" 
                              src={item.image}
                            />
                          </div>

                          {/* Course Details */}
                          <div className="flex flex-col min-w-0 leading-snug pt-0.5">
                            <span className="text-[14px] text-gray-500 font-normal truncate">
                              {item.provider}
                            </span>
                            <span className="text-[16px] font-normal text-gray-800 line-clamp-2 mt-1.5 group-hover:text-blue-600 group-hover:underline">
                              {item.title}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;