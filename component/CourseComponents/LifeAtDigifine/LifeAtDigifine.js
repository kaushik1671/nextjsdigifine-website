import React from 'react';

export default function LifeAtDigifine({ title, subtitle, galleryItems }) {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{title}</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems?.map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 h-64 p-6 flex flex-col justify-end group hover:border-indigo-500/40 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
              <div className="relative z-20 space-y-1">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{item.category}</span>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{item.caption}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}