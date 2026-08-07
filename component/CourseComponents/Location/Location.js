"use client";

import React from 'react';
import { FiMapPin, FiExternalLink, FiClock, FiPhone, FiMail } from "react-icons/fi"; 

const Locations = ({ city, locationsData }) => {
  // Fallback check agar array data na mile
  if (!locationsData || !locationsData.length) return null;

  // Filter functionality agar component ko koi specific city pass ki jaye
  const filteredLocations = city
    ? locationsData.filter(
        (loc) => loc.city.toLowerCase() === city.toLowerCase()
      )
    : locationsData;

  const title = filteredLocations.length > 1 ? "Locations" : "Location";

  return (
    <section className="w-full py-16 px-4 bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            Find Us Locally
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Our {title}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Split Grid Layout */}
        <div className="w-full flex justify-center">
          {filteredLocations.map((loc, index) => (
            <div 
              key={index} 
              className="w-full grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-500 overflow-hidden max-w-6xl lg:h-[340px] group" 
            >
              
              {/* 🏢 LEFT COLUMN: Information System */}
              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/60 border-b lg:border-b-0 lg:border-r border-slate-100/80 h-full relative z-10">
                <div>
                  {/* Glowing Status Area */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="text-lg font-extrabold text-[#046AED] tracking-tight transition-colors duration-300">
                      Digifine Academy ({loc.city})
                    </h3>
                  </div>

                  {/* Compact Info Rows */}
                  <div className="space-y-3.5 mt-4">
                    {/* Address Detail */}
                    <div className="flex items-start gap-3">
                      <FiMapPin className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {loc.address}
                      </p>
                    </div>

                    {/* Operational Timing */}
                    <div className="flex items-center gap-3">
                      <FiClock className="w-4 h-4 text-amber-500 shrink-0" />
                      <p className="text-xs text-slate-600 font-medium">
                        {loc.timing}
                      </p>
                    </div>

                    {/* Phone Click */}
                    <div className="flex items-center gap-3">
                      <FiPhone className="w-4 h-4 text-emerald-500 shrink-0" />
                      <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="text-xs text-slate-700 font-bold hover:text-blue-600 hover:underline transition-all">
                        {loc.phone}
                      </a>
                    </div>

                    {/* Email Click */}
                    <div className="flex items-center gap-3">
                      <FiMail className="w-4 h-4 text-purple-500 shrink-0" />
                      <a href={`mailto:${loc.email}`} className="text-xs text-slate-700 font-semibold hover:text-blue-600 hover:underline transition-all">
                        {loc.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Get Directions Premium Button */}
                <div className="mt-4">
                  <a 
                    href={loc.googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs bg-slate-900 hover:bg-blue-600 text-white font-bold px-4 py-3 w-full rounded-xl tracking-wider transition-all duration-300 shadow-md active:scale-[0.98] group/btn"
                  >
                    Get Directions
                    <FiExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

              </div>

              {/* 🗺️ RIGHT COLUMN: Map Container */}
              <div className="lg:col-span-7 w-full bg-slate-100 h-[260px] lg:h-full overflow-hidden relative">
                <iframe
                  src={loc.mapSrc}
                  className="w-full h-full border-0 block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Locations;