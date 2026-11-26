'use client';

import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, Rocket, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      desc: 'Share the role, skills and hiring type (intern, contract or full-time) across Tech, Design or Marketing.',
      icon: <ClipboardList className="w-6 h-6 text-[#046AED]" />,
    },
    {
      step: '02',
      title: 'Review Matched Profiles',
      desc: 'We shortlist skill-tested candidates that fit your brief and share their profiles within 24 hours. ',
      icon: <UserCheck className="w-6 h-6 text-[#046AED]" />,
    },
    {
      step: '03',
      title: 'Interview & Hire',
      desc: 'Meet your shortlisted candidates, pick the best fit and onboard them on your terms.',
      icon: <Rocket className="w-6 h-6 text-[#F59E0B]" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#046AED]/10 border border-[#046AED]/20 text-[#046AED] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            Simple & Fast Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Hire in 3 Simple <span className="text-[#046AED]">Steps</span>
          </h2>
          <p className="text-slate-600 text-base">
            No job portals, no endless resumes. Tell us what you need and meet trained, skill-tested candidates within 24 hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-6 right-6 text-3xl font-black text-slate-100 group-hover:text-[#046AED]/10 transition-colors">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#046AED]/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}