'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Megaphone, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TalentCategories() {
  return (
    <section className="py-16 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Multi-Disciplinary Expertise
          </div> */}
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Explore All <span className="bg-gradient-to-r from-[#046AED] via-blue-600 to-[#F59E0B] bg-clip-text text-transparent">Talent Streams</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Pre-vetted professionals ready to integrate directly into your workflows.
          </p>
        </div>

        {/* 3 Columns Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Stream 1: Tech & Development */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#046AED]/50 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#046AED]/10 border border-[#046AED]/20 flex items-center justify-center text-[#046AED] group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-[#046AED] border border-slate-200 shadow-2xs">
                  Engineering
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Tech & Development
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Skilled developers ready to build scalable web applications and robust backends.
              </p>

              <div className="space-y-1.5">
                {['Frontend & Full Stack', 'React / Next.js Specialists', 'Node.js & Backend Systems', 'Tailwind CSS & Modern UI'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#046AED] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stream 2: Graphic Design */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#F59E0B]/50 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B] group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-amber-700 border border-slate-200 shadow-2xs">
                  Creative & UI/UX
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Graphic Design
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Creative minds to bring your brand identity and UI/UX experiences to life.
              </p>

              <div className="space-y-1.5">
                {['UI/UX Design & Wireframing', 'Brand Identity & Guidelines', 'Social Media Creatives', 'Figma & Adobe Suite'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stream 3: Digital Marketing & SEO */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#046AED]/50 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#046AED]/10 border border-[#046AED]/20 flex items-center justify-center text-[#046AED] group-hover:scale-110 transition-transform">
                  <Megaphone className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-[#046AED] border border-slate-200 shadow-2xs">
                  Growth & Scale
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Digital Marketing & SEO
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                Growth experts to scale your online presence and run targeted ad campaigns.
              </p>

              <div className="space-y-1.5">
                {['SEO Optimization & Audits', 'Performance Marketing', 'Social Media Strategy', 'Content Funnels & Ads'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#046AED] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}