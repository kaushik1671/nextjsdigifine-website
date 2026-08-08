import React from 'react';

export default function BenefitsSection({ title, subtitle, benefitsList }) {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList?.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-indigo-500/30 transition-all"
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}