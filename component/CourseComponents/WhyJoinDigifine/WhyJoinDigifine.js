import React from 'react';

export default function WhyJoinDigifine({ title, subtitle, reasons }) {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons?.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800/80 p-8 rounded-2xl space-y-4 hover:border-slate-700 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-2xl text-indigo-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.heading}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}