import React from 'react';

export default function FinalCta({ title, subtitle, buttonText, onButtonClick }) {
  return (
    <section className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-950 border border-indigo-500/30 rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{title}</h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>
        <div className="pt-2">
          <button 
            onClick={onButtonClick}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base px-10 py-4 rounded-xl shadow-xl shadow-indigo-600/30 transition-all duration-200"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}