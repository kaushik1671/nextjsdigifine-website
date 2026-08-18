'use client';

import { Star, Building2, CheckCircle2 } from 'lucide-react';

export default function HireTestimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Engineering Director",
      company: "TechNova Labs",
      quote: "We hired two Full-Stack interns through the platform. Their grasp of React, Next.js, and clean code practices saved our team weeks of onboarding and training time.",
      hiredCount: "2 Engineers Hired",
      badgeColor: "bg-blue-50 text-[#046AED] border-blue-200"
    },
    {
      name: "Priya Menon",
      role: "Head of Product",
      company: "PixelCraft Studio",
      quote: "The pre-vetted talent pool is incredible. We didn't have to sort through hundreds of unqualified resumes; the candidates sent to us were ready to ship code from day one.",
      hiredCount: "1 UI/UX Designer Hired",
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      name: "Rohan Verma",
      role: "Founder & CEO",
      company: "GrowthPulse",
      quote: "Absolute zero-hassle hiring process. The technical assessments and background checks already being done beforehand gave us 100% confidence to extend full-time offers.",
      hiredCount: "3 Full-Stack Hired",
      badgeColor: "bg-amber-50 text-amber-600 border-amber-200"
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFC] text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3 mb-16">
  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
    Trusted by Hiring Managers & <span className="bg-gradient-to-r from-[#046AED] via-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Tech Founders</span>
  </h2>
  <p className="text-slate-600 text-sm sm:text-base font-medium">
    See why fast-growing startups and tech teams choose our talent pipeline for their scaling needs.
  </p>
</div>

        {/* 3-Column Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.hiredCount}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <span>{item.role}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-700 font-semibold">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}