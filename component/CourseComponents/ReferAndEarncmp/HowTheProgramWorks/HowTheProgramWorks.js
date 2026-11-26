'use client';

import React from 'react';

export default function HowTheProgramWorks() {
  const steps = [
    {
      stepNumber: '01',
      title: 'Refer Your Friends',
      description: 'Enter the contact information of your friends via our referral form and introduce them to the courses available at Digifine Academy.',
      icon: '🔗',
    },
    {
      stepNumber: '02',
      title: 'Your Friends Enrol',
      description: 'Your friends meet with our admission officers, go through the course that they like, and get admitted.',
      icon: '🎓',
    },
    {
      stepNumber: '03',
      title: 'Earn Your Rewards',
      description: 'After your referral goes through the necessary admission and payment procedure successfully, you become qualified for the referral reward.',
      icon: '🏆',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full mx-auto text-center space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="bg-blue-50 text-[#046AED] border border-blue-200 text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
            Simple & Fast
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-4">
            How Our Refer & Earn Program Works
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            Refer your friends to Digifine Academy and enjoy benefits using just three simple steps.
          </p>
        </div>

        {/* Steps Grid (Static / No Hover Effects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-blue-100 rounded-3xl p-8 shadow-sm relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-blue-50 text-[#046AED] font-black flex items-center justify-center text-lg shadow-inner">
                    {item.stepNumber}
                  </span>
                  <span className="text-3xl bg-yellow-50 p-3 rounded-2xl border border-yellow-100 shadow-sm" role="img" aria-label="icon">
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#046AED]">
                <span>Step {item.stepNumber} of 03</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}