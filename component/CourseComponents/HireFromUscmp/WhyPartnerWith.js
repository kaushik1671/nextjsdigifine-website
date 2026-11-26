'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export default function KeyBenefits() {
  const benefits = [
    {
      title: 'Skill-Tested Candidates',
      desc: 'Every candidate is assessed on practical skills and live projects before we share their profile with you.',
      icon: <ShieldCheck className="w-6 h-6 text-[#046AED]" />,
      badge: 'Zero Risk',
    },
    {
      title: 'Trained on Real Tools',
      desc: 'With a course structure of 80% practical and 20% theory, our students already know the tools your team uses.',
      icon: <Zap className="w-6 h-6 text-[#F59E0B]" />,
      badge: 'Instant Deploy',
    },
    {
      title: 'One Point of Contact',
      desc: 'A coordinator handles shortlisting, interview scheduling and onboarding follow-up, so you don’t chase anyone.',
      icon: <Users className="w-6 h-6 text-[#046AED]" />,
      badge: '24/7 Assistance',
    },
  ];

  return (
    <section className="py-16 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Why Partner With Us
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Why Companies Hire <span className="bg-gradient-to-r from-[#046AED] via-blue-600 to-[#F59E0B] bg-clip-text text-transparent">From Digifine</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Skip the screening and training gap. Hire talent that is tested, trained on real tools and ready to contribute.
          </p>
        </div>

        {/* 3 Columns Compact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}