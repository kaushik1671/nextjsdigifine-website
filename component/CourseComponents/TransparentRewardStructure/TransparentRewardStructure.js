'use client';

import React, { useState } from 'react';

export default function TransparentRewardStructure({ 
  title = "Transparent Reward Structure", 
  subtitle = "No hidden clauses or complex terms. Rewards are designed to benefit both you and your friend!",
  badgeText = "Crystal Clear Payouts",
  customTiers = null,
  referrerReward = "₹3,000 Cash Reward credited directly upon successful enrollment.",
  refereeReward = "Special Discount on course admission fees."
}) {
  const [activeTab, setActiveTab] = useState('referrer'); // 'referrer' or 'referee'

  const defaultTiers = [
    {
      level: 'Tier 1',
      referrals: '1 - 5 Referrals',
      rewardPerAdmission: '₹3,000',
      bonus: 'Standard Payout',
      highlight: false,
    },
    {
      level: 'Tier 2',
      referrals: '6 - 15 Referrals',
      rewardPerAdmission: '₹3,500',
      bonus: '+ ₹500 Bonus / Referral',
      highlight: true,
    },
    {
      level: 'Tier 3',
      referrals: '16+ Referrals',
      rewardPerAdmission: '₹4,000',
      bonus: '+ ₹1,000 Elite Bonus',
      highlight: false,
    },
  ];

  const tiers = customTiers || defaultTiers;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto space-y-12">
        
        {/* Section Header with Props */}
        <div className="text-center space-y-3">
          <span className="bg-blue-50 text-[#046AED] border border-blue-200 text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-2">
            {title}
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            {subtitle}
          </p>
        </div>

        {/* Dual Toggle for Referrer & Referee Benefits */}
        <div className="flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-2xl flex space-x-2 border border-slate-300/60 max-w-md w-full shadow-inner">
            <button
              onClick={() => setActiveTab('referrer')}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === 'referrer'
                  ? 'bg-[#046AED] text-white shadow-md transform scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For You (Referrer)
            </button>
            <button
              onClick={() => setActiveTab('referee')}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                activeTab === 'referee'
                  ? 'bg-[#046AED] text-white shadow-md transform scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Your Friend (Referee)
            </button>
          </div>
        </div>

        {/* Dynamic Content Display based on Tab */}
        {activeTab === 'referrer' ? (
          <div className="space-y-8 animate-fade-in">
            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {tiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`rounded-3xl p-8 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden ${
                    tier.highlight 
                      ? 'bg-gradient-to-b from-blue-500/[0.03] to-white border-2 border-[#046AED] shadow-xl transform md:-translate-y-2' 
                      : 'bg-white border border-blue-100 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute top-0 right-0 bg-[#046AED] text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest shadow-sm">
                      Most Popular
                    </span>
                  )}

                  <div>
                    <div className="mb-6">
                      <span className={`inline-block px-3.5 py-1.5 rounded-xl font-bold text-xs ${
                        tier.highlight ? 'bg-[#046AED] text-white' : 'bg-blue-50 text-[#046AED]'
                      }`}>
                        {tier.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {tier.referrals}
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Successful admissions per season
                    </p>

                    <div className="bg-slate-50/80 border border-blue-100/60 rounded-2xl p-5 mb-6">
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Reward Per Admission</span>
                      <span className="text-3xl sm:text-4xl font-black text-[#046AED] mt-1 block">
                        {tier.rewardPerAdmission}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 text-xs font-bold text-yellow-600 bg-yellow-50 border border-yellow-200/60 rounded-xl px-3 py-2">
                      <span role="img" aria-label="sparkle">✨</span>
                      <span>{tier.bonus}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Instant Crediting</span>
                    <span className="font-semibold text-[#046AED]">100% Transparent</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Referrer Banner Detail */}
            <div className="bg-blue-50/60 border border-blue-200 rounded-2xl p-6 shadow-sm flex items-center space-x-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Referrer Benefit Overview</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{referrerReward}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white border border-blue-100 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-blue-50 text-[#046AED] rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-inner">
              🎁
            </div>
            <div className="space-y-2">
              <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Friend Perk
              </span>
              <h3 className="text-2xl font-black text-slate-900">What Your Friend Gets</h3>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6">
              <p className="text-base sm:text-lg font-bold text-[#046AED]">
                {refereeReward}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                Every friend you refer automatically unlocks special fee waivers upon enrolling in any professional track at Digifine Academy.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center space-x-6 text-xs font-semibold text-slate-500">
              <span>✅ Zero Hidden Fees</span>
              <span>✅ Instant Discount Application</span>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Have questions about payouts or custom institutional tie-ups?</h4>
            <p className="text-xs text-slate-500">Our support team is available 24/7 to help you track your earnings.</p>
          </div>
          <button className="bg-[#046AED] hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-md whitespace-nowrap">
            Contact Support
          </button>
        </div>

      </div>
    </section>
  );
}