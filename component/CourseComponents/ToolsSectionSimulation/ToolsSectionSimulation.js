'use client';

import React from 'react';

export default function ToolsSection({
  badge = 'TOOLS',
  subBadge = 'TOOLS COVERED',
  title = 'Work with the tools employers recognise',
  tools = [
    'Python', 'Excel', 'Google Sheets', 'MySQL', 'NumPy', 'Pandas',
    'Matplotlib', 'Seaborn', 'Plotly', 'Power BI', 'Tableau', 'Scikit-learn',
    'TensorFlow', 'GitHub', 'ChatGPT', 'Julius AI'
  ]
}) {
  return (
    /* Side margin/padding exactly same as other sections */
    <section className="w-full py-12 md:py-16 px-4 md:px-0 max-w-6xl mx-auto my-6 md:my-10">
      
      {/* Header Section */}
      <div className="mb-8 md:mb-10 text-left">
        {/* Top Badge & Subtext */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-400 text-white font-bold text-xs tracking-wider px-3 py-1 rounded-md shadow-sm uppercase">
            {badge}
          </span>
          <div className="h-[2px] w-6 bg-slate-300"></div>
          <span className="text-indigo-600 font-semibold text-xs tracking-widest uppercase">
            {subBadge}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
      </div>

      {/* Tools Grid Container (Matching outer side spacing) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center py-4 px-3 sm:py-5 sm:px-4 rounded-xl border border-slate-200/80 bg-slate-50/60 text-slate-700 font-medium text-sm sm:text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1"
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

            <span className="group-hover:text-indigo-600 group-hover:font-semibold transition-colors duration-300 text-center">
              {typeof tool === 'string' ? tool : tool.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}