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
      <TopReferrersLeaderboard />
      <TransparentRewardStructure />
      <ReferTestimonialSection />
      <ReferFAQSection />
      
      {/* Id ke zariye smooth scroll target banaya */}
      <div id="referral-form-section">
        <ReferralForm />
      </div>
    </main>
  );
}