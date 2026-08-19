"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TopRecruiters() {
  const [activeTab, setActiveTab] = useState("all");

  // Recruiter Data categorized
  const recruiters = [
    { name: "Amazon", category: "dream", package: "45 LPA", role: "SDE / Cloud" },
    { name: "Microsoft", category: "dream", package: "42 LPA", role: "Software Engineer" },
    { name: "Deloitte", category: "dream", package: "12 LPA", role: "Analyst" },
    { name: "Google", category: "dream", package: "52 LPA", role: "Tech Consultant" },
    { name: "Goldman Sachs", category: "dream", package: "38 LPA", role: "Engineering" },
    { name: "Adobe", category: "dream", package: "40 LPA", role: "UI/UX & Dev" },
    
    { name: "TCS", category: "mass", package: "7 LPA", role: "Digital / Ninja" },
    { name: "Infosys", category: "mass", package: "6.5 LPA", role: "Power Programmer" },
    { name: "Wipro", category: "mass", package: "6 LPA", role: "Project Engineer" },
    { name: "Cognizant", category: "mass", package: "6.8 LPA", role: "GenC Next" },
    { name: "Capgemini", category: "mass", package: "7.5 LPA", role: "Senior Analyst" },
    { name: "HCLTech", category: "mass", package: "6 LPA", role: "Software Engineer" },
  ];

  const filteredRecruiters = activeTab === "all" 
    ? recruiters 
    : recruiters.filter(r => r.category === activeTab);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
            Trusted by Top Industry Leaders
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From global product giants offering dream packages to trusted enterprise partners hiring at scale.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "all" 
                ? "bg-slate-900 text-white shadow-md" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            All Recruiters (100+)
          </button>
          <button 
            onClick={() => setActiveTab("dream")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "dream" 
                ? "bg-amber-500 text-slate-950 shadow-md font-bold" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            ⭐ Dream & Tech Offers
          </button>
          <button 
            onClick={() => setActiveTab("mass")}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "mass" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            🏢 Elite Mass Recruiters
          </button>
        </div>

        {/* Recruiters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {filteredRecruiters.map((company, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group flex flex-col justify-between text-center relative overflow-hidden"
            >
              {/* Category Indicator Badge */}
              {company.category === 'dream' && (
                <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-bl-lg">
                  DREAM
                </div>
              )}

              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors mt-2">
                  {company.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">{company.role}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md inline-block">
                  {company.package}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-14 text-center text-xs text-slate-500 font-medium">
          And <span className="font-bold text-slate-800">90+ more companies</span> visiting our campus every season for recruitment drives.
        </div>

      </div>
    </section>
  );
}