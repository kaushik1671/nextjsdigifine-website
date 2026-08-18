// components/Pages/HireFromUs/HireFromUs.js
import React from "react";
import PartnerInquiry from "../../CourseComponents/HireFromUscmp/PartnerInquiry";
import HowItWorks from "../../CourseComponents/HireFromUscmp/HowItWorks";
import TalentCategories from "../../CourseComponents/HireFromUscmp/TalentCategories";
import WhyPartnerWith from "../../CourseComponents/HireFromUscmp/WhyPartnerWith";

export default function HireFromUs() {
  return (
    <div >
      <PartnerInquiry />
      <HowItWorks />
      <TalentCategories />
      <WhyPartnerWith />
    </div>
  );
}