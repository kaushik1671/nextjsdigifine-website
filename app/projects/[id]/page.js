"use client";

import React from 'react';
import Link from "next/link";
import { useParams, useRouter } from 'next/navigation';

// Helper function: Slug matching / generation ke liye
const generateSlug = (studentName, title) => {
  const combined = `${studentName || ''} ${title || ''}`.trim();
  if (!combined) return '';
  return combined
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

// 6 Digital Marketing Simulation Projects Database
const PROJECTS_DATABASE = [
  {
    id: "1",
    slug: "aarav-sharma-meta-ads-ecommerce",
    title: "Meta Ads E-Commerce Campaign Simulation",
    studentName: "Aarav Sharma",
    role: "Performance Marketing Specialist",
    description: "Managed a simulated budget of $5,000 over 4 weeks to launch and optimize Meta (Facebook & Instagram) ads for an apparel brand.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Meta Ads Manager", "Google Analytics 4", "Canva Pro"],
    metrics: { budget: "$5,000", roas: "4.2x", ctr: "3.1%", conversions: "412" },
    strategy: "Shifted budget from broad targeting to high-intent Lookalike Audiences.",
    outcome: "Generated $21,000 in simulated revenue with an average ROAS of 4.2x."
  },
  {
    id: "2",
    slug: "ananya-patel-google-search-ads-b2b-lead-gen",
    title: "Google Search Ads & B2B Lead Gen Campaign",
    studentName: "Ananya Patel",
    role: "SEM Specialist",
    description: "Designed a high-intent Google Search campaign targeting B2B SaaS solutions.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Google Keyword Planner", "SEMrush"],
    metrics: { budget: "$3,500", roas: "3.8x", ctr: "5.4%", conversions: "185" },
    strategy: "Implemented strict negative keyword filtering.",
    outcome: "Achieved an average Quality Score of 9/10."
  },
  {
    id: "3",
    slug: "rohan-das-organic-seo-growth-content-strategy",
    title: "Organic SEO Growth & Content Strategy Simulation",
    studentName: "Rohan Das",
    role: "SEO & Content Marketer",
    description: "Conducted complete on-page and technical SEO optimization.",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=1000",
    techStack: ["SEMrush", "Ahrefs"],
    metrics: { budget: "Organic ($0)", roas: "N/A", ctr: "4.2%", conversions: "1,200" },
    strategy: "Optimized internal linking structures.",
    outcome: "Grew simulated monthly organic traffic by 140%."
  },
  {
    id: "4",
    slug: "kabir-mehta-linkedin-b2b-account-based-marketing",
    title: "LinkedIn B2B Account-Based Marketing Campaign",
    studentName: "Kabir Mehta",
    role: "B2B Growth Marketer",
    description: "Ran a simulated ABM strategy on LinkedIn Ads.",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1000",
    techStack: ["LinkedIn Campaign Manager", "HubSpot"],
    metrics: { budget: "$8,000", roas: "2.5x", ctr: "1.2%", conversions: "48" },
    strategy: "Utilized direct target lists.",
    outcome: "Sourced 48 qualified sales pipelines."
  },
  {
    id: "5",
    slug: "sneha-reddy-e-commerce-email-retention-marketing",
    title: "E-Commerce Email & Retention Marketing Setup",
    studentName: "Sneha Reddy",
    role: "Retention & Email Specialist",
    description: "Implemented automated email retention flows.",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Klaviyo", "Shopify Analytics"],
    metrics: { budget: "$1,200", roas: "12.4x", ctr: "22%", conversions: "350" },
    strategy: "Introduced advanced segmentation.",
    outcome: "Recovered 18% of abandoned carts."
  },
  {
    id: "6",
    slug: "vikram-malhotra-youtube-video-ad-funnel",
    title: "YouTube Video Ad Funnel Simulation",
    studentName: "Vikram Malhotra",
    role: "Video Ads Specialist",
    description: "Curated a YouTube video-first funnel.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
    techStack: ["Google Ads (Video)", "YouTube Analytics"],
    metrics: { budget: "$6,000", roas: "3.2x", ctr: "1.8%", conversions: "290" },
    strategy: "Hooked users in the first 5 seconds.",
    outcome: "Achieved a 45% video view rate."
  }
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const routeParam = params?.id;

  // Smart Lookup
  const project = PROJECTS_DATABASE.find((p) => {
    const autoSlug = generateSlug(p.studentName, p.title);
    return (
      p.id === routeParam ||
      p.slug === routeParam ||
      autoSlug === routeParam
    );
  });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-md w-full">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            !
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Project Not Found</h2>
          <p className="text-gray-500 text-sm mt-2">
            The simulation project you are looking for does not exist.
          </p>
          <p className="text-xs font-mono text-gray-400 mt-1 bg-gray-50 py-1.5 px-3 rounded-lg inline-block break-all">
            URL Query: {routeParam || "None"}
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {/* Direct Browser History Back (Pichle Page Par Lautne Ke Liye) */}
            <button
              onClick={() => router.back()}
              className="text-xs font-semibold bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
            >
              ← Go Back
            </button>
            
            {/* Home Page Link */}
            <Link 
              href="/" 
              className="text-xs font-semibold bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        
        {/* Back Navigation Bar */}
        <div className="p-4 sm:px-10 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
          <button 
            onClick={() => router.back()} 
            className="text-xs font-bold text-[#046AED] hover:underline flex items-center gap-1 cursor-pointer"
          >
            ← Back to Projects Page
          </button>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full bg-gray-100">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold bg-[#046AED]/10 text-[#046AED] px-3 py-1 rounded-full">
              {project.role}
            </span>
            <span className="text-gray-300">|</span>
            <p className="text-sm font-semibold text-gray-600">Student: {project.studentName}</p>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{project.title}</h1>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Budget</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{project.metrics.budget}</p>
            </div>
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
              <p className="text-xs text-[#046AED] font-bold">ROAS</p>
              <p className="text-lg sm:text-xl font-black text-[#046AED]">{project.metrics.roas}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">CTR</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{project.metrics.ctr}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Conversions</p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">{project.metrics.conversions}</p>
            </div>
          </div>

          {/* Strategy & Outcomes */}
          <div className="space-y-6 pt-4 border-t border-gray-100">
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Strategy</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{project.strategy}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Outcome</h3>
              <p className="text-emerald-700 font-semibold leading-relaxed text-sm sm:text-base bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                {project.outcome}
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}