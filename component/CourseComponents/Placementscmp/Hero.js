'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/40 to-white pt-16 pb-24 overflow-hidden">
      
      {/* Background Soft Blue Glow Effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#046AED]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Container: Left Text & Right Graphic Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Description & Buttons (Coming from Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 text-left"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              From Learning <br />
              To <span className="text-[#046AED]">Placement.</span>
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              At our institute, we don't just teach skills. We prepare students to build successful careers with industry-ready training, career guidance, and strong placement support.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="#recruiters"
                className="px-7 py-3.5 rounded-xl bg-[#046AED] text-white font-semibold shadow-lg shadow-[#046AED]/25 hover:bg-[#0355bd] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <span>Explore Placements</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link 
                href="#success"
                className="px-7 py-3.5 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-sm text-sm sm:text-base flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#046AED]"></span>
                <span>Student Success</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Floating Placement Overview Card (Coming from Top to Down) */}
          <motion.div 
            initial={{ opacity: 0, y: -70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            
            {/* Main Floating Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/70 border border-slate-100 relative z-10 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Card Top Title & Active Status */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Placement Overview</h3>
                  <p className="text-xs text-slate-500">Batch 2025-26 Performance</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Drive
                </span>
              </div>

              {/* Simulated Wave Graph / Line Chart */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100 relative h-36 flex items-end">
                <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <path 
                    d="M 0 90 Q 100 80, 200 60 T 400 30" 
                    fill="none" 
                    stroke="#046AED" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 0 90 Q 100 80, 200 60 T 400 30 L 400 120 L 0 120 Z" 
                    fill="url(#blueGradient)" 
                    opacity="0.12"
                  />
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#046AED" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Floating point indicator on graph */}
                <div className="absolute top-10 right-28 w-3 h-3 bg-[#046AED] rounded-full ring-4 ring-white shadow-md"></div>
              </div>

              {/* Inner Mini Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase">Placed Rate</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">92%</p>
                </div>

                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase">Highest Pack</p>
                  <p className="text-lg font-black text-[#046AED] mt-0.5">45 LPA</p>
                </div>

                <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase">Recruiters</p>
                  <p className="text-lg font-black text-slate-900 mt-0.5">250+</p>
                </div>
              </div>

            </div>

            {/* Decorative background blur elements behind the card */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#046AED]/20 rounded-full blur-2xl pointer-events-none"></div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}