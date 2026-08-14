'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, CheckCircle, Award, Users, ShieldCheck } from "lucide-react";

export default function TestimonialSection({ testimonials = defaultTestimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get 3 visible testimonials in a loop
  const visibleTestimonials = [0, 1, 2].map((offset) => {
    return testimonials[(currentIndex + offset) % testimonials.length];
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[#046AED]/5 blur-3xl pointer-events-none rounded-full" />

      {/* Matched width and spacing with upper and lower sections */}
      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#046AED]/10 text-[#046AED] font-semibold text-xs mb-1 border border-[#046AED]/20 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Success Stories</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            Loved By Thousands Of <span className="text-[#046AED]">Earners</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm"
          >
            Real feedback from community members multiplying their income.
          </motion.p>
        </div>

        {/* Compact Trust & Live Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"
        >
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#046AED]/10 flex items-center justify-center text-[#046AED]">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm">50,000+</h4>
              <p className="text-[11px] text-gray-500 font-medium">Active Referrers</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5 sm:border-x sm:border-gray-100">
            <div className="w-8 h-8 rounded-xl bg-[#FACC15]/20 flex items-center justify-center text-amber-600">
              <Award className="w-4 h-4 text-[#FACC15]" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm">₹1.2 Cr+</h4>
              <p className="text-[11px] text-gray-500 font-medium">Total Rewards Paid</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-gray-900 text-sm">4.9 / 5.0</h4>
              <p className="text-[11px] text-gray-500 font-medium">Verified Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid - Smooth horizontal sliding effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[260px] overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleTestimonials.map((item, index) => (
              <motion.div
                key={`${item.id}-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/80 flex flex-col justify-between relative group"
              >
                {/* Yellow Accent Corner Glow on Hover */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#FACC15]/10 rounded-bl-full pointer-events-none transition-all group-hover:bg-[#FACC15]/20" />

                <div>
                  {/* Rating & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FACC15] text-[#FACC15]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </span>
                  </div>

                  {/* Feedback Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{item.feedback}&rdquo;
                  </p>
                </div>

                {/* User Profile & Earnings Info */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#046AED]/20 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-[11px] text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  {/* Earnings Highlight Badge */}
                  <div className="text-right">
                    <span className="block text-[10px] text-gray-400 font-medium">Earned</span>
                    <span className="text-xs font-extrabold text-[#046AED]">{item.earnings}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// Default Data with 6 Testimonials
const defaultTestimonials = [
  {
    id: 1,
    name: "Aakash Sharma",
    role: "Graphic Designer",
    rating: 5,
    feedback: "Maine apne pure college group ko refer kiya tha. Within 2 weeks mere account mein direct payout aa gaya. Interface ekdam smooth hai!",
    earnings: "₹12,450",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
  },
  {
    id: 2,
    name: "Priya Deshmukh",
    role: "Full stack Developer",
    rating: 5,
    feedback: "Link share karna aur apne network ki tracking karna yahan behad asan hai. Real-time notifications se turant pata chal jata hai!",
    earnings: "25+ Referrals",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    role: "Digital Marketer",
    rating: 5,
    feedback: "Pehle mujhe laga fake hoga, par jab pehla reward redeem kiya toh maza aa gaya. Sabse best refer & earn program hai!",
    earnings: "₹45,000",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    id: 4,
    name: "Sneha Patil",
    role: "Digital Marketing Student",
    rating: 5,
    feedback: "College simulations ke sath earning karna sach mein ek game changer hai. Maine apne saare batchmates ko invite kiya hai.",
    earnings: "₹18,200",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    id: 5,
    name: "Amit Verma",
    role: "Tech Enthusiast",
    rating: 5,
    feedback: "Instant payouts aur transparent tracking system ne mujhe bohot impress kiya. Highly recommended platform for students!",
    earnings: "₹32,000",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
  },
  {
    id: 6,
    name: "Pooja Joshi",
    role: "UI/UX Designer",
    rating: 5,
    feedback: "UI bohot clean hai aur referral bonus direct bank mein aa jata hai bina kisi hassle ke. Amazing experience!",
    earnings: "₹21,500",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];