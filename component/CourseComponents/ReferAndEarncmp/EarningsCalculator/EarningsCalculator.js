'use client';

import React, { useState } from 'react';

export default function PotentialEarningsCalculator() {
  const [friendsReferred, setFriendsReferred] = useState(17);
  const maxFriends = 50;
  const rewardPerAdmission = 3000; // ₹3,000 flat reward

  const totalEarnings = friendsReferred * rewardPerAdmission;
  
  // Calculate percentage for the custom filled track width
  const progressPercentage = (friendsReferred / maxFriends) * 100;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Outer Card - Increased max width and padding */}
      <div className="max-w-4xl w-full bg-white border border-blue-100 rounded-3xl shadow-xl p-8 sm:p-14 text-center">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Calculate Your Potential Earnings
        </h2>

        {/* Inner Interactive Box - Increased padding and max width */}
        <div className="bg-slate-50/80 border border-blue-100/80 rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
          
          <p className="text-sm sm:text-base font-medium text-slate-600 mb-8">
            Slide to select how many friends you can refer:
          </p>

          {/* Custom Slider Container with Filled Track behind the thumb */}
          <div className="relative mb-8 max-w-2xl mx-auto flex items-center h-8">
            {/* Background Track */}
            <div className="absolute w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              {/* Active filled blue line tracking from left */}
              <div 
                className="h-full bg-[#046AED] transition-all duration-75"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Range Input overlaid on top with transparent track */}
            <input
              type="range"
              min="1"
              max={maxFriends}
              value={friendsReferred}
              onChange={(e) => setFriendsReferred(Number(e.target.value))}
              className="absolute w-full h-3 opacity-0 cursor-pointer z-10"
            />

            {/* Custom Thumb Visual Indicator matching image */}
            <div 
              className="absolute w-6 h-6 bg-white border-4 border-[#046AED] rounded-full shadow-md pointer-events-none transition-all duration-75 flex items-center justify-center"
              style={{ 
                left: `calc(${progressPercentage}% - 12px)` 
              }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>

          {/* Dynamic Outputs */}
          <div className="space-y-3 mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {friendsReferred} {friendsReferred === 1 ? 'Friend Referred' : 'Friends Referred'}
            </h3>

            {/* Earnings with Yellow Touch-up / Trophy Icon */}
            <div className="flex items-center justify-center gap-2 text-3xl sm:text-5xl font-black text-[#046AED]">
              <span className="text-yellow-400 text-3xl sm:text-4xl" role="img" aria-label="trophy">🏆</span>
              <span>₹{totalEarnings.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-xs sm:text-sm text-slate-400 mt-6">
            *Calculated at ₹3,000 flat reward per successful admission.
          </p>

        </div>

      </div>
    </div>
  );
}