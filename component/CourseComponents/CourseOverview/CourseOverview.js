"use client";

import { useState } from "react";

export default function CourseOverviewPG({ overviewData }) {
  const [expanded, setExpanded] = useState(false);

  if (!overviewData) return null;

  const { title, highlightTitle, paragraphs, keyFeatures } = overviewData;

  const getIconByTitle = (titleText) => {
    const cleanTitle = titleText?.toLowerCase().trim() || "";

    if (cleanTitle.includes("placement")) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 0 0-2.25-2.25H5.625a2.25 2.25 0 0 0-2.25 2.25m16.5 0v-1.35A2.25 2.25 0 0 0 17.25 8.5H14.5m-3 0H6.75a2.25 2.25 0 0 0-2.25 2.25v1.35m7.5-3V5.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V8.5M10.5 8.5h3" />
        </svg>
      );
    }
    if (cleanTitle.includes("curriculum") || cleanTitle.includes("software") || cleanTitle.includes("tool")) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25M19.5 5.25a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25m15 0V15M3 5.25V15" />
        </svg>
      );
    }
    if (cleanTitle.includes("certification")) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.425-4.755l-.175-.337a1 1 0 0 1 .414-1.358L8.003 1.51a1 1 0 0 1 .103l4.004 3.003a1 1 0 0 1 .374.793v2.302m-9.18 2.43a50.636 50.636 0 0 1 9.18-2.43m0 0a50.636 50.636 0 0 1 9.18 2.43m-9.18-2.43v7.35m0 0v11.131m0-11.131h.008v.008H12v-.008Z" />
        </svg>
      );
    }
    if (cleanTitle.includes("mentor")) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0-2.625.372 9.337 9.337 0 0 0-4.121-1.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84a50.58 50.58 0 0 0-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M12 21V13.5" />
      </svg>
    );
  };

  const visibleFeatures = keyFeatures?.filter(f => f.alwaysVisible) || [];
  const hiddenFeatures = keyFeatures?.filter(f => !f.alwaysVisible) || [];

  return (
    <section className="bg-[#fcfcfd] py-12 md:py-20 px-3 md:px-4 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300 p-6 md:p-10">

        {/* Heading & Description */}
        <div>
          <h2 className="text-xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {title}{" "}
            <span className="text-[#046AED]">{highlightTitle}</span>
          </h2>

          <div className="mt-2 md:mt-4 space-y-1.5 md:space-y-2 text-slate-600 text-xs md:text-[1.05rem] leading-relaxed">
            {paragraphs?.map((p, index) => {
              if (!p.alwaysVisible && !expanded) return null;
              return <p key={index}>{p.text}</p>;
            })}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-5 md:mt-6">
          <h3 className="text-xs md:text-lg font-bold text-slate-400 md:text-slate-800 uppercase md:normal-case mb-2 md:mb-4">
            Key Features
          </h3>

          <ul className="flex flex-col gap-1 md:gap-2">
            
            {/* Always Visible Features */}
            {visibleFeatures.map((feature, index) => (
              <li key={`visible-${index}`} className="flex items-start gap-2.5 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-full bg-blue-50 flex items-center justify-center text-[#046AED]">
                  {getIconByTitle(feature.title)}
                </div>
                <div className="text-xs md:text-[0.95rem] text-slate-600 leading-snug pt-0.5 md:pt-1">
                  <strong className="text-slate-900 font-bold mr-1">{feature.title}:</strong>
                  <span>{feature.text}</span>
                </div>
              </li>
            ))}

            {/* Hidden Features */}
            {expanded && hiddenFeatures.map((feature, index) => (
              <li key={`hidden-${index}`} className="flex items-start gap-2.5 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 animate-in fade-in duration-300">
                <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-full bg-blue-50 flex items-center justify-center text-[#046AED]">
                  {getIconByTitle(feature.title)}
                </div>
                <div className="text-xs md:text-[0.95rem] text-slate-600 leading-snug pt-0.5 md:pt-1">
                  <strong className="text-slate-900 font-bold mr-1">{feature.title}:</strong>
                  <span>{feature.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Read More / Less Toggle Button */}
        <div className="mt-4 md:mt-8 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-[#046AED] text-[#046AED] hover:text-white text-xs md:text-sm font-semibold transition-all duration-300"
          >
            <span>{expanded ? "Read Less" : "Read More"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}