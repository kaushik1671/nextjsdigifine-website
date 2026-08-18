"use client";

import React from 'react';
import ReferralHero from "../../CourseComponents/ReferAndEarncmp/ReferralHero/ReferralHero";
import EarningsCalculator from "../../CourseComponents/ReferAndEarncmp/EarningsCalculator/EarningsCalculator";
import HowTheProgramWorks from "../../CourseComponents/ReferAndEarncmp/HowTheProgramWorks/HowTheProgramWorks";
import TopReferrersLeaderboard from "../../CourseComponents/ReferAndEarncmp/TopReferrersLeaderboard/TopReferrersLeaderboard";
import TransparentRewardStructure from "../../CourseComponents/ReferAndEarncmp/TransparentRewardStructure/TransparentRewardStructure";
import ReferTestimonialSection from "../../CourseComponents/ReferAndEarncmp/ReferTestimonialSection/ReferTestimonialSection";
import ReferFAQSection from "../../CourseComponents/ReferAndEarncmp/ReferFAQSection/ReferFAQSection";
import ReferralForm from "../../CourseComponents/ReferAndEarncmp/ReferralForm/ReferralForm";
import ReferBox from "../../CourseComponents/ReferAndEarncmp/ReferBox/ReferBox";

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
      <div id="referral-form-section">
        <ReferralForm />
      </div>
      <ReferBox />
      <TopReferrersLeaderboard />
      <TransparentRewardStructure />
      <ReferTestimonialSection />
      
      {/* Yahan onTriggerForm prop pass kar diya */}
      <ReferFAQSection onTriggerForm={handleFormRedirect} />
    </main>
  );
}