"use client";

import React, { useState } from "react";
import { Sparkles, Award } from "lucide-react";

export default function TransparentRewardStructure() {
  const [activeTab, setActiveTab] = useState("marketing");

  // School-wise categories and course reward structure
  const categories = [
    {
      id: "marketing",
      label: "School of Marketing Courses",
      courses: [
        { name: "MBA in Digital Marketing", reward: "₹6,000" },
        { name: "Post Graduate Program in Digital Marketing", reward: "₹4,000" },
        { name: "Graduate Program in Digital Marketing", reward: "₹3,000" },
        { name: "Master Program in Digital Marketing", reward: "₹4,000" },
        { name: "Advance Executive Program in Digital Marketing", reward: "₹5,000" },
        { name: "Simulation Program in Digital Marketing", reward: "₹6,000" },
      ],
    },
    {
      id: "technology",
      label: "School of Tech Courses",
      courses: [
        { name: "Master Certification in Full Stack Developer Program", reward: "₹3,000" },
        { name: "Master Certification in Full Stack Developer Program with Python", reward: "₹4,000" },
        { name: "Master Program in Data Science, Machine Learning and AI", reward: "₹5,000" },
        { name: "Master Program in Data Science and Machine Learning", reward: "₹3,000" },
        { name: "Master Program in Data Analytics with Gen AI", reward: "₹3,000" },
        { name: "Simulation Program in Full Stack Development with Python", reward: "₹6,000" },
        { name: "Simulation Program in DA/DSML", reward: "₹6,000" },
      ],
    },
    {
      id: "design",
      label: "School of Graphics Courses",
      courses: [
        { name: "Graduate Program in Graphic Design", reward: "₹3,000" },
        { name: "Master in Graphic Design", reward: "₹3,000" },
        { name: "Multimedia & Animation in Graphic Design", reward: "₹4,000" },
        { name: "Video Editing and Animation Program", reward: "₹4,000" },
        { name: "Simulation Program in Graphic Design", reward: "₹6,000" },
      ],
    },
  ];

  const currentCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#046AED]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Matched width and spacing with upper section */}
      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Referral Rewards Across<span className="text-[#046AED]"> Our Course</span>
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-600">
            Refer your friends to us for courses in Digital Marketing, Technology & Graphic Design and earn incentives for successful referrals.
          </p>
        </div>

        {/* School Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#046AED] text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200/70"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Course Rewards Table Card */}
        <div className="bg-gray-50/70 border border-gray-200/80 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="bg-[#046AED]/5 px-6 py-4 border-b border-gray-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#046AED] font-bold text-sm sm:text-base">
              <Award className="w-4 h-4 text-[#FACC15]" />
              <span>{currentCategory.label}</span>
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Referral Reward
            </span>
          </div>

          {/* Course Items List */}
          <div className="divide-y divide-gray-200/80">
            {currentCategory.courses.map((course, index) => (
              <div 
                key={index} 
                className="px-6 py-4 flex items-center justify-between gap-4 bg-white hover:bg-blue-50/30 transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  {course.name}
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-[#046AED] bg-[#046AED]/10 px-3 py-1 rounded-lg shrink-0">
                  {course.reward}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}