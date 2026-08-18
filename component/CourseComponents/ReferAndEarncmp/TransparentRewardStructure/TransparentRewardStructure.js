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
  const [activeTab, setActiveTab] = useState('referrer');

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Matched width and spacing with upper and lower sections */}
      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="bg-blue-50 text-[#046AED] border border-blue-200 text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
            {badgeText}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight pt-2">
            {title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {subtitle}
          </p>
        </div>

        {/* Dual Toggle */}
        <div className="flex justify-center">
          <div className="bg-slate-200/80 p-1.5 rounded-xl flex space-x-1 border border-slate-300/60 max-w-xs w-full shadow-inner">
            <button
              onClick={() => setActiveTab('referrer')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === 'referrer'
                  ? 'bg-[#046AED] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For You
            </button>
            <button
              onClick={() => setActiveTab('referee')}
              className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                activeTab === 'referee'
                  ? 'bg-[#046AED] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              For Friend
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        {activeTab === 'referrer' ? (
          <div className="space-y-6">
            {/* Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {tiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-6 transition-all duration-200 relative flex flex-col justify-between group overflow-hidden ${
                    tier.highlight 
                      ? 'bg-gradient-to-b from-blue-500/[0.03] to-white border-2 border-[#046AED] shadow-md' 
                      : 'bg-white border border-gray-200/80 shadow-sm hover:shadow-md'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute top-0 right-0 bg-[#046AED] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-bl-lg uppercase tracking-wider">
                      Popular
                    </span>
                  )}

                  <div>
                    <div className="mb-4">
                      <span className={`inline-block px-2.5 py-1 rounded-lg font-bold text-[11px] ${
                        tier.highlight ? 'bg-[#046AED] text-white' : 'bg-blue-50 text-[#046AED]'
                      }`}>
                        {tier.level}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-0.5">
                      {tier.referrals}
                    </h3>
                    <p className="text-[11px] text-slate-500 mb-4">
                      Successful admissions
                    </p>

                    <div className="bg-slate-50 border border-blue-100/60 rounded-xl p-3.5 mb-4">
                      <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Reward / Admission</span>
                      <span className="text-2xl font-black text-[#046AED] mt-0.5 block">
                        {tier.rewardPerAdmission}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[11px] font-bold text-yellow-700 bg-yellow-50 border border-yellow-200/60 rounded-lg px-2.5 py-1.5">
                      <span>✨</span>
                      <span>{tier.bonus}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Instant Credit</span>
                    <span className="font-semibold text-[#046AED]">Transparent</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Referrer Banner */}
            <div className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-4 shadow-sm flex items-center space-x-3">
              <span className="text-xl">🏆</span>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Referrer Benefit Overview</h4>
                <p className="text-xs text-slate-600">{referrerReward}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 bg-blue-50 text-[#046AED] rounded-xl flex items-center justify-center text-xl mx-auto shadow-inner">
              🎁
            </div>
            <div className="space-y-1">
              <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                Friend Perk
              </span>
              <h3 className="text-lg font-black text-slate-900">What Your Friend Gets</h3>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4">
              <p className="text-sm font-bold text-[#046AED]">
                {refereeReward}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Fee waivers automatically unlocked upon enrolling in any professional track at Digifine Academy.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-center space-x-4 text-[11px] font-semibold text-slate-500">
              <span>✅ Zero Hidden Fees</span>
              <span>✅ Instant Discount</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}