'use client';

import React, { useState } from 'react';

export default function TopReferrersLeaderboard() {
  const [timeframe, setTimeframe] = useState('monthly');

  // Separate data arrays for each tab to make the UI feel dynamic and realistic
  const leaderboardData = {
    weekly: [
      { rank: 1, name: 'Rohan Gupta', referrals: 6, reward: '₹18,000', streak: '🔥 3 in a row' },
      { rank: 2, name: 'Aakash Sharma', referrals: 5, reward: '₹15,000', streak: '⚡ Active' },
      { rank: 3, name: 'Priya Patil', referrals: 4, reward: '₹12,000', streak: '⭐ Rising' },
      { rank: 4, name: 'Amit Verma', referrals: 3, reward: '₹9,000', streak: '👍 Good' },
      { rank: 5, name: 'Sneha Deshmukh', referrals: 2, reward: '₹6,000', streak: '🚀 Started' },
    ],
    monthly: [
      { rank: 1, name: 'Aakash Sharma', referrals: 24, reward: '₹72,000', streak: '🔥 Top Earner' },
      { rank: 2, name: 'Priya Patil', referrals: 19, reward: '₹57,000', streak: '⚡ Very Active' },
      { rank: 3, name: 'Rohan Gupta', referrals: 15, reward: '₹45,000', streak: '⭐ Consistent' },
      { rank: 4, name: 'Sneha Deshmukh', referrals: 11, reward: '₹33,000', streak: '💪 Strong' },
      { rank: 5, name: 'Amit Verma', referrals: 8, reward: '₹24,000', streak: '🎯 Growing' },
    ],
    alltime: [
      { rank: 1, name: 'Priya Patil', referrals: 84, reward: '₹2,52,000', streak: '👑 Legend' },
      { rank: 2, name: 'Aakash Sharma', referrals: 72, reward: '₹2,16,000', streak: '💎 Elite' },
      { rank: 3, name: 'Rohan Gupta', referrals: 56, reward: '₹1,68,000', streak: '⭐ Master' },
      { rank: 4, name: 'Sneha Deshmukh', referrals: 45, reward: '₹1,35,000', streak: '🔥 Pro' },
      { rank: 5, name: 'Amit Verma', referrals: 38, reward: '₹1,14,000', streak: '🚀 Expert' },
    ],
  };

  const currentLeaders = leaderboardData[timeframe];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Matched width and spacing with upper section */}
      <div className="max-w-5xl w-full mx-auto relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="bg-yellow-50 text-yellow-600 border border-yellow-200 text-xs font-bold px-3.5 py-2 rounded-full uppercase tracking-wider inline-block shadow-sm">
            🏆 Hall of Fame
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight pt-2">
            Top Referrers Leaderboard
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Compete with peers, climb the ranks, and unlock massive cash rewards!
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8">
          
          {/* Enhanced Tab Switcher with Unique Sliding Effect */}
          <div className="flex justify-center">
            <div className="bg-slate-100 p-1.5 rounded-xl flex space-x-2 border border-slate-200 w-full max-w-md">
              <button
                onClick={() => setTimeframe('weekly')}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                  timeframe === 'weekly'
                    ? 'bg-[#046AED] text-white shadow-md transform scale-105'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ⚡ Weekly
              </button>
              <button
                onClick={() => setTimeframe('monthly')}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                  timeframe === 'monthly'
                    ? 'bg-[#046AED] text-white shadow-md transform scale-105'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                📅 Monthly
              </button>
              <button
                onClick={() => setTimeframe('alltime')}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 ${
                  timeframe === 'alltime'
                    ? 'bg-[#046AED] text-white shadow-md transform scale-105'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                👑 All Time
              </button>
            </div>
          </div>

          {/* Podiums for Top 3 (Special Highlight Layout) */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
            {currentLeaders.slice(0, 3).map((user, index) => {
              const podiumOrder = [1, 0, 2];
              const actualUser = currentLeaders[podiumOrder[index]];
              const isFirst = actualUser.rank === 1;

              return (
                <div 
                  key={actualUser.rank}
                  className={`relative rounded-2xl p-4 sm:p-6 text-center flex flex-col items-center justify-between transition-all duration-300 ${
                    isFirst 
                      ? 'bg-gradient-to-b from-blue-50 to-amber-50/40 border-2 border-yellow-400 shadow-lg transform -translate-y-2' 
                      : 'bg-slate-50 border border-slate-200 shadow-sm'
                  }`}
                >
                  {isFirst && (
                    <span className="absolute -top-3 bg-yellow-400 text-slate-950 font-black text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                      👑 Champion
                    </span>
                  )}

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl font-black flex items-center justify-center text-base sm:text-lg mb-3 shadow-inner ${
                    actualUser.rank === 1 ? 'bg-yellow-400 text-slate-950' :
                    actualUser.rank === 2 ? 'bg-slate-200 text-slate-800' :
                    'bg-amber-600 text-white'
                  }`}>
                    #{actualUser.rank}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate max-w-[100px] sm:max-w-none">
                      {actualUser.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {actualUser.referrals} Referrals
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 w-full">
                    <span className="text-[10px] sm:text-xs font-bold text-[#046AED] block">
                      {actualUser.reward}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* List for remaining ranks (4th, 5th onwards) */}
          <div className="space-y-3 pt-2">
            {currentLeaders.slice(3).map((user) => (
              <div 
                key={user.rank}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-xs">
                    #{user.rank}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{user.name}</h4>
                    <span className="text-xs text-slate-500">{user.streak}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Reward</span>
                  <span className="text-sm sm:text-base font-black text-[#046AED]">
                    {user.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="pt-4 border-t border-slate-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-500">
              🚀 Rankings update in real-time based on verified admissions.
            </p>
            <span className="text-xs font-bold text-[#046AED] bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
              Season 2026 Active
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}