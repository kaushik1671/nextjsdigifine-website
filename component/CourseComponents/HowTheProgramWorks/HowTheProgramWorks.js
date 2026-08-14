'use client';

import React from 'react';

export default function HowTheProgramWorks() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Share Your Link',
      description: 'Copy your unique referral link and share it with your friends, batchmates, or network.',
      icon: '🔗',
    },
    {
      stepNumber: '02',
      title: 'Friends Join',
      description: 'Your friends sign up or complete their successful admission using your referral link.',
      icon: '🎓',
    },
    {
      stepNumber: '03',
      title: 'Earn Rewards',
      description: 'Get instant cash rewards credited for every successful referral and admission.',
      icon: '🏆',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full mx-auto text-center space-y-12">
        
        {/* Section Header with smooth fade-in */}
        <div className="space-y-3 animate-fade-in">
          <span className="bg-blue-50 text-[#046AED] border border-blue-200 text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
            Simple & Fast
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-4">
            How The Program Works
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            Start earning rewards in three simple steps. Here is everything you need to know to get started.
          </p>
        </div>

        {/* Steps Grid with smooth staggered hover/lift effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-blue-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#046AED]/40 transition-all duration-300 transform hover:-translate-y-2 relative flex flex-col justify-between group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Subtle top background highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#046AED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Top Badge & Icon with bounce on hover */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-50 text-[#046AED] font-black flex items-center justify-center text-lg group-hover:bg-[#046AED] group-hover:text-white transition-colors duration-300 shadow-inner">
                    {item.stepNumber}
                  </span>
                  <span className="text-3xl bg-yellow-50 p-3 rounded-2xl border border-yellow-100 transform group-hover:scale-110 transition-transform duration-300 shadow-sm" role="img" aria-label="icon">
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#046AED] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#046AED]">
                <span>Step {item.stepNumber} of 03</span>
                <span className="transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}