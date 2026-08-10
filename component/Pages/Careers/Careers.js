'use client';

import React, { useState } from 'react';
import HeroSection from '../../CourseComponents/HeroSection/HeroSection';
import ExploreCareers from '../../CourseComponents/ExploreCareers/ExploreCareers';
import WhyJoinDigifine from '../../CourseComponents/WhyJoinDigifine/WhyJoinDigifine';
import BenefitsSection from '../../CourseComponents/BenefitsSection/BenefitsSection';
import HiringProcess from '../../CourseComponents/HiringProcess/HiringProcess';
import ApplicationForm from '../../CourseComponents/ApplicationForm/ApplicationForm';
import LifeAtDigifine from '../../CourseComponents/LifeAtDigifine/LifeAtDigifine';
import FinalCta from '../../CourseComponents/FinalCta/FinalCta';

const heroStatsData = [
  { value: '12+', label: 'Open Positions' },
  { value: '3', label: 'Prime Locations' },
  { value: '4.9★', label: 'Culture Score' }
];

// 1. ADDED: Dummy data for Job Openings to fix the error
const jobOpenings = [
  { id: 1, title: 'Frontend Developer', department: 'Engineering', location: 'Mumbai', type: 'Full-Time' },
  { id: 2, title: 'Digital Marketing Expert', department: 'Marketing', location: 'Hyderabad', type: 'Full-Time' },
  { id: 3, title: 'UI/UX Designer', department: 'Design', location: 'Remote', type: 'Contract' }
];

export default function Page() {
  
  // Button Handlers
  const handleExploreClick = () => {
    alert('Navigating to Open Positions section...');
  };

  const handleTalentNetworkClick = () => {
    alert('Opening Talent Network Registration Form...');
  };

  // 2. ADDED: Handler for Applying to a Job
  const handleApplyClick = (jobTitle) => {
    alert(`Applying for role: ${jobTitle}`);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <HeroSection
        badgeText="WE'RE HIRING ACROSS 3 LOCATIONS"
        titleLine1="Build Your Career."
        titleLine2="Build the Future."
        description="Join Digifine's team of tech innovators, digital experts, and educators shaping next-generation careers in Mumbai and Hyderabad."
        primaryBtnText="Explore Open Positions"
        onPrimaryClick={handleExploreClick}
        secondaryBtnText="Join Talent Network"
        onSecondaryClick={handleTalentNetworkClick}
        stats={heroStatsData}
        heroImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
        workCultureTag="Work Culture"
        workCultureTitle="Collaborative & Growth-Driven"
        floatingCardTitle="Fast-Track Growth"
        floatingCardSubtitle="Performance-based reviews"
      />

      <ExploreCareers 
        title="Explore Career Opportunities"
        subtitle="Find the role that matches your technical skills and ambitions."
        jobListings={jobOpenings}    
        onApplyJob={handleApplyClick}  
      />

      <WhyJoinDigifine 
        title="Why Join Digifine?"
        subtitle="We prioritize growth, culture, and high-impact work."
      />

      <BenefitsSection />
      <HiringProcess />
      <ApplicationForm />
      <LifeAtDigifine />
    </main>
  );
}