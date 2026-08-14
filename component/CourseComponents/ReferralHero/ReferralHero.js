import React from 'react';

const ReferralHero = ({ 
  badgeText = "⚡ Instant Payouts & Rewards", 
  mainTitle = "Refer Friends, Earn ₹3,000 Cash!", 
  subtitle = "Help your friends build an exceptional career in Full Stack Developer, Digital Marketing, and Graphic Design with Digifine Academy, and unlock massive bonuses for every successful admission.",
  buttonText = "Fill Referral Form",
  onCtaClick 
}) => {
  return (
    <section className="relative w-full bg-[#046AED] pt-16 pb-32 px-4 overflow-visible isolate">
      
      {/* Background Decorative Glow (z-index -1 rakha hai taaki kisi bhi menu ya dropdown ke upar na aaye) */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-0">
        
        {/* Badge */}
        <div className="px-4 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-sm font-medium shadow-sm backdrop-blur-md">
          {badgeText}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {mainTitle.split('₹3,000').map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i === 0 && <span className="text-yellow-400 drop-shadow-sm"> ₹3,000 </span>}
            </React.Fragment>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-base md:text-lg max-w-2xl leading-relaxed font-light">
          {subtitle}
        </p>

        {/* Enhanced Button with Dual-Layer Fluid Wave Animation */}
        <button 
          onClick={onCtaClick}
          className="relative group overflow-hidden bg-yellow-400 text-[#046AED] font-bold py-4 px-9 rounded-2xl shadow-xl shadow-yellow-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          
          {/* Primary Fluid Wave Layer */}
          <span className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-[40%] transform translate-y-full translate-x-[-10%] group-hover:translate-y-[-30%] group-hover:translate-x-[50%] transition-all duration-700 ease-out z-0"></span>

          {/* Secondary Liquid Gloss Layer */}
          <span className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/60 rounded-[45%] transform translate-y-full translate-x-[-20%] group-hover:translate-y-[-10%] group-hover:translate-x-[40%] transition-all duration-1000 ease-out z-0"></span>
          
          {/* Button Text */}
          <span className="relative z-10 transition-colors duration-500 group-hover:text-[#046AED] tracking-wide">
            {buttonText}
          </span>
        </button>

      </div>

      {/* Bottom Curved Wave / Half-Circle Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
        <svg className="relative block w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>

    </section>
  );
};

export default ReferralHero;