"use client";

import React from 'react';
import { FiMapPin, FiExternalLink, FiClock, FiPhone, FiMail } from "react-icons/fi";

// Default Data array for all locations
const DEFAULT_LOCATIONS_DATA = [
  {
    city: "Mumbai",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7205418753974!2d72.8490324!3d19.1199119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d8dd9a8411%3A0xf4014bbce03395d7!2sDigifine%20Academy!5e0!3m2!1sen!2sin",
    googleMapsLink: "https://www.google.com/maps?q=Digifine+Academy+Andheri+Mumbai",
    address: "303, 3rd Floor, Vertex Vikas Building, A Wing, Court Ln, above A2Z Xerox, opposite Railway Station, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 81690-04863 /+91 88790-25425",
    email: "info@adbizit.com",
    timing: "Mon - Sat: 10:00 AM - 7:00 PM",
  },
  {
    city: "Hyderabad",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379087549703!2d78.39266049999999!3d17.4894082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91922683190b%3A0x1aa3a76ef5e0199e!2sDigifine%20Academy!5e0!3m2!1sen!2sin",
    googleMapsLink: "https://www.google.com/maps/place/Digifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Hyderabad/@17.4895142,78.3923309,3323m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bcb91922683190b:0x1aa3a76ef5e0199e!2sDigifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Hyderabad!8m2!3d17.4894082!4d78.3926605!10e5!16s%2Fg%2F11ym_kqlv_!3m5!1s0x3bcb91922683190b:0x1aa3a76ef5e0199e!8m2!3d17.4894082!4d78.3926605!16s%2Fg%2F11ym_kqlv_?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
    address: "3rd & 4th Floor, SITA CITY ONE Venkatarambagh, SITA CITY ONE, Begumpet, Hyderabad, Telangana 500016",
    phone: "+91 81690-04863 /+91 88790-25425",
    email: "info@adbizit.com",
    timing: "Mon - Sat: 10:30 AM - 7:30 PM",
  },
  {
    city: "Vashi",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9696402193986!2d72.9952648!3d19.0650724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a1f13fa3f%3A0x55e10730cac72380!2sDigifine%20Academy!5e0!3m2!1sen!2sin",
    googleMapsLink: "https://www.google.com/maps/place/Digifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Vashi,+Navi+Mumbai/@19.065072,72.995265,15z/data=!4m6!3m5!1s0x3be7c16a1f13fa3f:0x55e10730cac72380!8m2!3d19.0650724!4d72.9952648!16s%2Fg%2F11mclhkbs5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
    address: "6th Floor, Vashi Infotech Park, 610, 611, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703, India",
    phone: "+91 81690-04863 /+91 88790-25425",
    email: "info@adbizit.com",
    timing: "Mon - Sat: 10:00 AM - 7:00 PM",
  },
];

const Locations = ({ city, locationsData }) => {
  // Agar locationsData prop na diya gaya ho to internal DEFAULT_LOCATIONS_DATA use karein
  const activeLocationsData = locationsData || DEFAULT_LOCATIONS_DATA;

  // Specific city filter (Case-insensitive)
  const filteredLocations = city
    ? activeLocationsData.filter(
        (loc) => loc.city.toLowerCase() === city.toLowerCase()
      )
    : activeLocationsData;

  if (!filteredLocations.length) return null;

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

        {/* Multi-Location Vertical Stack Grid */}
        <div className="w-full flex flex-col gap-8 items-center">
          {filteredLocations.map((loc, index) => (
            <div 
              key={loc.city || index} 
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