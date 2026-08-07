"use client";

function LogoRow({ logos = [], reverse = false }) {
  // Seamless infinite loop banaye rakhne ke liye safe backup loop
  const items = logos.length > 0 ? [...logos, ...logos] : [];

  if (items.length === 0) return null;

  return (
    <div className="overflow-hidden py-2 md:py-3">
      <div
        className={`flex w-max gap-4 md:gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((logo, index) => (
          <div
            key={index}
            className="flex h-16 w-36 md:h-20 md:w-44 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white p-1.5 md:p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(59,130,246,0.08)] hover:border-blue-200/60 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <img
              src={logo}
              alt="Corporate Partner Logo"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompanyMarquee({
  tagline,
  title,
  highlightTitle,
  topLogos = [],
  bottomLogos = []
}) {
  return (
    <section className="w-full py-8 md:py-12 mt-12 md:mt-16 mb-8 md:mb-10 bg-gradient-to-b from-white via-slate-50/30 to-white flex justify-center border-t border-b border-gray-100/80">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-0 flex flex-col gap-8 md:gap-10">
        
        {/* DYNAMIC HEADLINE */}
        <div className="w-full border-b border-gray-200/60 pb-5 md:pb-6 relative">
          {tagline && (
            <span className="text-[10px] font-bold tracking-widest text-[#046AED] uppercase bg-blue-50 px-3 py-1 rounded-md inline-block mb-2">
              {tagline}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            {title}{" "}
            {highlightTitle && (
              <span className="text-[#046AED] bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {highlightTitle}
              </span>
            )}
          </h2>
          <div className="absolute -bottom-[1px] left-0 h-0.5 w-16 bg-blue-600 z-10"></div>
        </div>

        {/* LOGO SECTIONS */}
        <div className="flex flex-col gap-1 md:gap-2">
          <LogoRow logos={topLogos} />
          {bottomLogos.length > 0 && (
            <>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200/40 to-transparent my-1"></div>
              <LogoRow logos={bottomLogos} reverse />
            </>
          )}
        </div>

      </div>
    </section>
  );
}