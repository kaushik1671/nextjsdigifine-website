'use client';

export default function HeroSection({
  badgeText = "WE'RE HIRING ACROSS 3 LOCATIONS",
  titleLine1 = "Build Your Career.",
  titleLine2 = "Build the Future.",
  description = "Join Digifine's team of tech innovators, digital experts, and educators shaping next-generation careers in Mumbai and Hyderabad.",
  primaryBtnText = "Explore Open Positions",
  onPrimaryClick,
  secondaryBtnText = "Join Talent Network",
  onSecondaryClick,
  stats = [],
  heroImageSrc = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  workCultureTag = "Work Culture",
  workCultureTitle = "Collaborative & Growth-Driven Environment",
  floatingCardTitle = "Fast-Track Growth",
  floatingCardSubtitle = "Performance-based reviews"
}) {
  
  // FIXED: Yahan 'ExploreCareers' ki jagah 'career-section' kar diya hai taaki ID match ho jaye
  const handleExploreClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('career-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTalentNetworkClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('talent-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{badgeText}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {titleLine1} <br className="hidden sm:inline" />
              <span className="text-blue-600">{titleLine2}</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {primaryBtnText && (
                <button
                  onClick={handleExploreClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 cursor-pointer"
                >
                  <span>{primaryBtnText}</span>
                  <span className="text-base">↓</span>
                </button>
              )}

              {secondaryBtnText && (
                <button
                  onClick={handleTalentNetworkClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold px-7 py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>{secondaryBtnText}</span>
                </button>
              )}
            </div>

            {/* Stats Counter */}
            {stats && stats.length > 0 && (
              <div className="pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Visual Element */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white">
                <img
                  src={heroImageSrc}
                  alt="Team Collaboration"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  {workCultureTag && (
                    <span className="bg-amber-400 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-md mb-2 inline-block">
                      {workCultureTag}
                    </span>
                  )}
                  {workCultureTitle && (
                    <h3 className="text-xl font-bold leading-snug">
                      {workCultureTitle}
                    </h3>
                  )}
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">
                    {floatingCardTitle}
                  </div>
                  <div className="text-xs text-slate-500">
                    {floatingCardSubtitle}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}