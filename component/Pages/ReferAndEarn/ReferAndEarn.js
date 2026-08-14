"use client";

import React from 'react';
import ReferralHero from "../../CourseComponents/ReferralHero/ReferralHero";
import EarningsCalculator from "../../CourseComponents/EarningsCalculator/EarningsCalculator";
import HowTheProgramWorks from "../../CourseComponents/HowTheProgramWorks/HowTheProgramWorks";
import TopReferrersLeaderboard from "../../CourseComponents/TopReferrersLeaderboard/TopReferrersLeaderboard";
import TransparentRewardStructure from "../../CourseComponents/TransparentRewardStructure/TransparentRewardStructure";
import ReferTestimonialSection from "../../CourseComponents/ReferTestimonialSection/ReferTestimonialSection";
import ReferFAQSection from "../../CourseComponents/ReferFAQSection/ReferFAQSection";
import ReferralForm from "../../CourseComponents/ReferralForm/ReferralForm";
import ReferBox from "../../CourseComponents/ReferBox/ReferBox";

export default function Page() {
  const handleFormRedirect = () => {
    const element = document.getElementById("referral-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <ReferralHero 
        onCtaClick={handleFormRedirect} 
      />
      <EarningsCalculator />
      <HowTheProgramWorks />
      <ReferBox />
      <TopReferrersLeaderboard />
      <TransparentRewardStructure />
      <ReferTestimonialSection />
      
      {/* Yahan onTriggerForm prop pass kar diya */}
      <ReferFAQSection onTriggerForm={handleFormRedirect} />
      
      {/* Id ke zariye smooth scroll target banaya */}
      <div id="referral-form-section">
        <ReferralForm />
      </div>
    </main>
  );
}