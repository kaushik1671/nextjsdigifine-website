"use client";

import React, { lazy, Suspense, useCallback, useEffect, useState, useRef } from "react";
import SectionTitle from "../component/CourseComponents/SectionTitle/SectionTitle";
import Locations from "../component/CourseComponents/Location/Location";
import cardData from "../component/Pages/Home/data/cardData"; // adjust path if needed

const MyComponent = lazy(() => import("../component/Container/MyComponent"));
const LogoSliding = lazy(() => import("../component/Sections/LogoSliding"));
const BoxCardSection = lazy(() => import("../component/Sections/BoxCardSection"));
const Courses = lazy(() => import("../component/Sections/Cources"));
const WhyChoose = lazy(() => import("../component/CourseComponents/WhyChoose/WhyChoose"));
const OurVision = lazy(() => import("../component/Sections/OurVision"));
const FAQsSection = lazy(() => import("../component/FAQsSection/FAQsSection"));
const WhatDoes = lazy(() => import("../component/CourseComponents/WhatDoes/WhatDoes"));

const goals = [
  { text: "100% guaranteed placement" },
  { text: "Industry expert trainers" },
  { text: "Internationally recognized certifications" },
  { text: "One-of-its-kind curriculum" },
  { text: "Unique and industry-relevant modules" },
  { text: "Hands-on training" },
  { text: "Global exposure" },
  { text: "Flexible payment options" },
];

const images = [
  "/images/banner-image/home/HI.webp",
  "/images/banner-image/home/HI2.webp",
  "/images/banner-image/home/HI3.webp",
];

const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

export default function HomePage() {

  const [faqs, setFaqs] = useState([]);
  const [WhoDigifine, setWhoDigifien] = useState([]);
  const coursesRef = useRef(null);

  const scrollToCourses = () => {
    coursesRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    import("../component/Pages/Home/data/faqs").then((m) => setFaqs(m.default));
    import("../component/Pages/Home/data/WhoDigifine").then((n) => setWhoDigifien(n.default));
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = useCallback((query) => {
    console.log("Searching for:", query);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col px-4 sm:px-6 lg:px-10 my-6 md:my-12 max-w-6xl w-full mx-auto">
      {/* <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">  
        <div className="flex flex-col md:flex-row items-center justify-between gap-16"> */}

          {/* <section className="w-full flex justify-center py-16">
  <div className="w-[1140px] flex items-center justify-between"> */}



        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* <div className="w-[520px]"> */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
              Learn today, Grow tomorrow, with Digifine.
            </h2>

            <h2 className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Redefining Digital Space, One Course at a Time.
            </h2>
            

            <div className="flex flex-col gap-3 mt-4">

              <div className="flex items-center gap-3 flex-wrap">
                <p className="text-sm font-medium whitespace-nowrap">
                  In Association With:
                </p>

                <div className="flex items-center gap-3">
                  <img src="/images/gvr-logo/nsdc.webp" className="h-24 object-contain" />
                  <img src="/images/gvr-logo/Skill-India.webp" className="h-24 object-contain" />
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {goals.map((goal, index) => (
                  <span key={index} className="px-3 py-2 border rounded">
                    {goal.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE SLIDER */}
          <div className="justify-center">
            <div className="relative overflow-hidden w-[420px] flex justify-center rounded-lg">
              <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${index * 100}%)`, width: `${images.length * 100}%` }}
              >
                {images.map((img, i) => (
                  <div key={i} className="w-full flex-shrink-0">
                    <img src={img} alt="slider" className="rounded-lg w-[420px] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Suspense fallback={<div>Loading...</div>}>
        <SectionTitle sectionTitle="Why Digifine" />
        <MyComponent 
        // title="What Makes Digifine's MBA-Level Digital Marketing Program Different "
        // highlightTitle="in Mumbai"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <SectionTitle sectionTitle="Get Placed with Top Brands" />
        <LogoSliding />
        <div ref={coursesRef}>
          <BoxCardSection />
        </div>
        <Courses />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <OurVision />
        <SectionTitle sectionTitle="Why Choose Digifine" />
        <WhyChoose cardData={cardData} />
        <SectionTitle sectionTitle="What does Digifine offer?" />
        <WhatDoes onViewCourses={scrollToCourses} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FAQsSection sectionTitle="Frequently Asked Questions" faqData={faqs} />
        <Locations />
      </Suspense>
    </>
  );
}