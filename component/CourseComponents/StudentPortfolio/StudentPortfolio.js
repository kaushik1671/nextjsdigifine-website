"use client";

import React from "react";
import Link from "next/link";

export default function StudentPortfolio({
  title = "See What Our Students Create",
  subtitle = "Student Portfolio Showcase",
  caption = "Every student graduates with a live portfolio — not just a certificate.",
  buttonText = "View the all portfolio", // 🔄 Text updated
  buttonLink = "#",
  projects = [], // Ek project object me { image, title, category, link } hona chahiye
}) {
  // Collage layout ke liye kam se kam 7 projects zaroori hain
  if (!projects || projects.length < 7) return null;

  return (
    <section className="w-full pt-6 pb-2 mt-15 md:mt-22 mb-8 md:mb-10 bg-white font-sans overflow-hidden relative">
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col h-full justify-between relative">
        
        {/* Header Text - Highly Compact */}
        <div className="text-center mb-6 z-10">
          <span className="text-[12px] font-black uppercase tracking-widest text-[#046AED] bg-blue-50 px-2 py-0.5 rounded">
            {subtitle}
          </span>
          <h2 className="text-[35px] md:text-[45px] font-black text-slate-900 tracking-tight mt-1">
            {title}
          </h2>
        </div>

        {/* Asymmetric Collage Grid */}
        <div className="w-full grid grid-cols-12 gap-3 items-center z-10">
          
          {/* COLUMN 1: LEFT SIDE (Iske andar Arrow aur Text add kiya hai taaki yeh pehle portfolio ko point kare) */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-3 lg:-translate-y-2 relative pt-16 sm:pt-0">
            
            {/* 🌟 BIGGER LOOP ARROW & TEXT (Points directly to the first portfolio item) */}
            {buttonText && (
              <div className="absolute -top-24 left-2 sm:-top-28 sm:-left-12 lg:-left-20 flex flex-col items-start z-30 select-none group">
                {/* Clean text without any pink sticker/emoji box */}
                <Link
                  href={buttonLink}
                  target="_blank"
                  className="text-slate-800 hover:text-blue-600 transition-colors duration-300 whitespace-nowrap mb-1 block cursor-pointer"
                >
                  <span 
                    className="text-lg md:text-xl font-bold tracking-wide"
                    style={{ fontFamily: "Georgia, ui-serif, serif", fontStyle: "italic" }}
                  >
                    {buttonText}
                  </span>
                </Link>

                {/* Much Bigger & Darker Loop Arrow pointing at the image */}
                <svg
                  className="w-20 h-20 md:w-28 md:h-28 text-slate-800 transform -rotate-12 transition-transform group-hover:translate-y-1 duration-300 ease-out"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Hand-drawn loop pointing down-right towards the portfolio card */}
                  <path 
                    d="M15,10 
                       C30,5 65,12 60,35 
                       C55,55 25,45 30,30 
                       C35,15 60,25 50,55 
                       C40,80 65,75 68,78" 
                  />
                  <path d="M58,78 L70,79 L66,66" />
                </svg>
              </div>
            )}

            {/* First Portfolio Image Card */}
            <Link
              href={projects[0]?.link || "#"}
              target="_blank"
              className="block relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer mt-6 sm:mt-0"
            >
              <img src={projects[0]?.image} alt={projects[0]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 flex flex-col justify-end">
                <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400">{projects[0]?.category}</span>
                <h4 className="font-bold text-white text-xs mt-0.5">{projects[0]?.title}</h4>
              </div>
            </Link>
          </div>

          {/* COLUMN 2: CENTER BLOCK CLUSTER */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-6 grid grid-cols-12 gap-3">
            
            {/* Small Left Floating Image */}
            <div className="col-span-4 lg:translate-y-2">
              <Link href={projects[1]?.link || "#"} target="_blank" className="block relative aspect-[3/3.8] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[1]?.image} alt={projects[1]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            </div>

            {/* Main Center Top Image */}
            <div className="col-span-8 relative">
              <Link href={projects[2]?.link || "#"} target="_blank" className="block relative aspect-[4/2.8] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[2]?.image} alt={projects[2]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-2 right-2 bg-slate-900/90 text-white font-bold tracking-wider text-[8px] uppercase px-1.5 py-0.5 rounded backdrop-blur-xs z-10">
                  Live Showcase
                </div>
              </Link>
            </div>

            {/* Large Horizontal Bottom Image */}
            <div className="col-span-8">
              <Link href={projects[3]?.link || "#"} target="_blank" className="block relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[3]?.image} alt={projects[3]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            </div>

            {/* Small Right Bottom Image */}
            <div className="col-span-4 lg:-translate-y-2">
              <Link href={projects[4]?.link || "#"} target="_blank" className="block relative aspect-square w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[4]?.image} alt={projects[4]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SIDE STRUCTURE */}
          <div className="col-span-12 lg:col-span-3 grid grid-cols-12 lg:flex lg:flex-col gap-3">
            
            {/* Right Top Box */}
            <div className="col-span-6 lg:col-span-12 lg:-translate-y-3">
              <Link href={projects[5]?.link || "#"} target="_blank" className="block relative aspect-square lg:aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[5]?.image} alt={projects[5]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            </div>

            {/* Right Bottom Vertical Box */}
            <div className="col-span-6 lg:col-span-12 lg:-translate-y-1">
              <Link href={projects[6]?.link || "#"} target="_blank" className="block relative aspect-[3/3.8] lg:aspect-[4/4.2] w-full rounded-xl overflow-hidden border border-slate-100 shadow-sm group cursor-pointer">
                <img src={projects[6]?.image} alt={projects[6]?.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Caption */}
        <div className="mt-6 text-center w-full z-10">
          <p className="text-slate-600 text-[13px] sm:text-xs font-medium">
            {caption}
          </p>
        </div>

      </div>
    </section>
  );
}