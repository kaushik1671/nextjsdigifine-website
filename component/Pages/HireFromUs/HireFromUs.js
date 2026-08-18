import React from "react";

import PartnerInquiry from "../../CourseComponents/HireFromUscmp/PartnerInquiry";
import HowItWorks from "../../CourseComponents/HireFromUscmp/HowItWorks";
import TalentCategories from "../../CourseComponents/HireFromUscmp/TalentCategories";
import WhyPartnerWith from "../../CourseComponents/HireFromUscmp/WhyPartnerWith";
import HireTestimonials from "../../CourseComponents/HireFromUscmp/HireTestimonials";
import Faq from "../../CourseComponents/HireFromUscmp/Faq";

export default function HireFromUs() {
  return (
    <div >
      <PartnerInquiry />
      <HowItWorks />
      <TalentCategories />
      <WhyPartnerWith />
      <HireTestimonials />
      <Faq />
    </div>
  );
}