"use client";

import { useState } from "react";
import Link from "next/link"; 
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function SuccessStories({ storiesData }) {
  const [page, setPage] = useState(0);

  // Fallback safety filter agar data pass na hua ho
  if (!storiesData || !storiesData.length) return null;

  return (
    // 🛠️ YAHAN CHANGE KIYA HAI: py-20 ko hatakar py-12 md:py-20 kar diya taaki spacing perfect rahe
    <section className="py-12 md:py-20 bg-slate-50 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        
        {/* Main Grid Wrapper */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 items-start">
          
          {/* Left Feature Block (Pure Blue Premium Card) */}
          <div className="bg-[#111827] text-white rounded-[32px] p-8 flex flex-col justify-between h-[540px] shadow-xl shadow-slate-900/10 border border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1.5 rounded-full border border-blue-900/40">
                Alumni Impact
              </span>
              <h2 className="text-4xl font-black tracking-tight leading-tight mt-6 text-white">
                Success <br />Stories
              </h2>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed font-medium">
                Discover inspiring ventures built by students and transformed into highly profitable, recognized digital brands.
              </p>
            </div>

            {/* Link Router attached to redirect user to dedicated path */}
            <Link href="/success-stories" className="block w-full">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm tracking-wide px-6 py-3.5 rounded-full w-full shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-center">
                Know More
              </button>
            </Link>
          </div>

          {/* Right Layout Interactive Cards Block */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storiesData[page]?.map((item, index) => (
                <div
                  key={index}
                  className="group grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[24px] border border-slate-200/60 bg-white h-auto sm:h-[260px] shadow-sm hover:shadow-xl hover:border-blue-200/80 transition-all duration-300"
                >
                  
                  {/* Text Content Info Area */}
                  <div className="p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-blue-50 blur-xl" />
                    </div>

                    <div className="relative z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {item.title}
                      </span>
                      <h4 className="text-2xl font-black mt-3 text-slate-900 tracking-tight">
                        {item.revenue}
                      </h4>
                      <div className="w-10 border-t-2 border-blue-500 my-3 transition-all duration-300 group-hover:w-16" />
                      <p className="text-slate-600 text-xs font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Graphic Frame Area */}
                  <div className="h-48 sm:h-full relative overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/5 opacity-60 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                </div>
              ))}
            </div>

            {/* Bottom Slider Dynamic Control Actions */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setPage((prev) => (prev === 0 ? storiesData.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <FiArrowLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setPage((prev) => (prev + 1) % storiesData.length)}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}