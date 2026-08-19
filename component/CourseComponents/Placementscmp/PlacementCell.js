'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function PlacementCompactGridAnimated() {
  const items = [
    {
      title: 'Resume Building',
      desc: 'Create an ATS-friendly resume that highlights your core skills and projects.',
      icon: '📄',
    },
    {
      title: 'Mock Interviews',
      desc: 'Practice real interview scenarios to boost your confidence with experts.',
      icon: '💬',
    },
    {
      title: 'Technical Preparation',
      desc: 'Prepare for coding rounds, assessments, and technical interviews.',
      icon: '💻',
    },
    {
      title: 'Career Guidance',
      desc: 'Get personalized advice on job roles, career paths, and industries.',
      icon: '👤',
    },
    {
      title: 'Interview Opportunities',
      desc: 'Direct access to job openings and placement drives from our partners.',
      icon: '🤝',
    },
    {
      title: 'Industry Ready Skills',
      desc: 'Work on practical projects aligned with modern technology demands.',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden border-b border-slate-100">
      
      {/* Background Subtle Glow Design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#046AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Than Just <span className="text-[#046AED]">Placement Assistance</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Our ecosystem helps students transform technical knowledge into real-world career success.
          </p>
        </motion.div>

        {/* Grid Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-[#046AED]/10 hover:border-[#046AED]/40 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glowing gradient aura on hover */}
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-gradient-to-br from-[#046AED]/15 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Icon Container with Spring Hover Effect */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-xl bg-[#046AED]/10 text-[#046AED] flex items-center justify-center text-lg mb-4 shadow-sm border border-[#046AED]/20"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#046AED] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}