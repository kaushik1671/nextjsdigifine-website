import React from 'react';

export default function HiringProcess({ title, subtitle, steps }) {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps?.map((step, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative space-y-3">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl font-black text-lg flex items-center justify-center">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}