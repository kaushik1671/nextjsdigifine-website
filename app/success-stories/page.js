"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

// 14 Brands ka raw data list jise aap asani se badha ya change kar sakte hain
const largeAlumniData = [
  { title: "Brand One", revenue: "₹5L+ Revenue", description: "Premium student-built brand with strong market demand.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" },
  { title: "Brand Two", revenue: "₹3L+ Revenue", description: "Creative products built with innovation and quality.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200" },
  { title: "Brand Three", revenue: "₹4L+ Revenue", description: "Fast growing startup solving real customer problems.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" },
  { title: "Brand Four", revenue: "₹2L+ Revenue", description: "Student founders building successful businesses.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200" },
  { title: "Brand Five", revenue: "₹6L+ Revenue", description: "Rapidly expanding with strong customer loyalty.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200" },
  { title: "Brand Six", revenue: "₹7L+ Revenue", description: "Premium products loved by thousands of customers.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200" },
  { title: "Brand Seven", revenue: "₹9L+ Revenue", description: "E-commerce platform scaling heights globally with smart logistics.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200" },
  { title: "Brand Eight", revenue: "₹12L+ Revenue", description: "EdTech startup empowering local communities via targeted content.", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200" },
  { title: "Brand Nine", revenue: "₹4.5L+ Revenue", description: "Modern sustainable clothing line prioritizing recycled organic fabrics.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200" },
  { title: "Brand Ten", revenue: "₹8L+ Revenue", description: "SaaS automated platform reducing logistics operational overheads.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200" },
  { title: "Brand Eleven", revenue: "₹6.5L+ Revenue", description: "Organic beverage brand securing massive nationwide retail chains.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=1200" },
  { title: "Brand Twelve", revenue: "₹15L+ Revenue", description: "Fintech consultation interface tracking user investments flawlessly.", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200" },
  { title: "Brand Thirteen", revenue: "₹5.8L+ Revenue", description: "Smart AI integration module simplifying customer retention workflows.", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200" },
  { title: "Brand Fourteen", revenue: "₹10L+ Revenue", description: "Direct-to-consumer skincare solutions focusing on transparency.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200" }
];

export default function AllSuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans py-16 px-6">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Top Header Section with Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-8 mb-12 gap-4">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors mb-3 group"
            >
              <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              All Alumni <span className="text-blue-600">Success Stories</span>
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">
              Explore the comprehensive showcase of ventures launched and scaled by our graduates.
            </p>
          </div>

          {/* Badge Indicator */}
          <div className="bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm h-fit">
            <span className="text-xs text-slate-400 block font-bold uppercase tracking-wider">Active Portfolio</span>
            <span className="text-xl font-black text-slate-900">{largeAlumniData.length} Student Brands</span>
          </div>
        </div>

        {/* 2-Column Responsive Split Cards Grid (Exactly matching your original layout style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {largeAlumniData.map((item, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-[24px] border border-slate-200/60 bg-white h-auto sm:h-[260px] shadow-sm hover:shadow-xl hover:border-blue-200/80 transition-all duration-300"
            >
              {/* Left Side: Text Info */}
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

              {/* Right Side: Image Area */}
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

      </div>
    </main>
  );
}