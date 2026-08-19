"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, suffix = "" }) {
  const [value, setValue] = useState(0);

  // Yeh function exact 3.5 seconds (3-4 sec range) tak aaram se count karega
  const handleViewportEnter = () => {
    let current = 0;
    const duration = 2000; // 3.5 seconds ka smooth duration
    const stepTime = Math.max(15, Math.floor(duration / target));

    const timer = setInterval(() => {
      current += 1;
      setValue(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);
  };

  return (
    <motion.strong 
      onViewportEnter={handleViewportEnter}
      viewport={{ once: true, amount: 0.5 }}
      className="block mb-1 text-[31px] max-[760px]:text-2xl font-black text-white"
    >
      {value}
      {suffix}
    </motion.strong>
  );
}

const statLabel = "text-[#8998ad] text-[11px] uppercase tracking-wider font-semibold";

export default function StatsBar() {
  return (
    <div className="relative z-50 mt-8 mb-12">
      <div className="w-[92%] max-w-[1180px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-[22px] bg-[#046AED] shadow-[0_30px_65px_rgba(5,22,43,0.25)] border border-slate-800">
          
          <div className="relative text-center px-5 py-7 max-[760px]:px-2.5 max-[760px]:py-6 after:content-[''] after:absolute after:top-1/4 after:right-0 after:w-px after:h-1/2 after:bg-white/10 max-lg:after:hidden">
            <Counter target={92} suffix="%" />
            <p className={statLabel}>Placement Success</p>
          </div>

          <div className="relative text-center px-5 py-7 max-[760px]:px-2.5 max-[760px]:py-6 after:content-[''] after:absolute after:top-1/4 after:right-0 after:w-px after:h-1/2 after:bg-white/10 max-lg:after:hidden">
            <Counter target={12} suffix=" LPA" />
            <p className={statLabel}>Highest Package</p>
          </div>

          <div className="relative text-center px-5 py-7 max-[760px]:px-2.5 max-[760px]:py-6 after:content-[''] after:absolute after:top-1/4 after:right-0 after:w-px after:h-1/2 after:bg-white/10 max-lg:after:hidden">
            <Counter target={5} suffix=" LPA" />
            <p className={statLabel}>Average Package</p>
          </div>

          <div className="relative text-center px-5 py-7 max-[760px]:px-2.5 max-[760px]:py-6">
            <Counter target={100} suffix="+" />
            <p className={statLabel}>Hiring Partners</p>
          </div>

        </div>
      </div>
    </div>
  );
}