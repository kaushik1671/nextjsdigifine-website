"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import CareerForm from "../../Container/CareerForm"; 

// Core Swiper styles aur necessary module styles import karein
import "swiper/css";

export default function StudentsPlacedAt({
  redirectlink = "/course-brochures",
  btntext = "Know More",
  headlinepara = "With Digifine Academy’s career-focused programs and assured placement support, our students have gone on to build successful careers at leading companies across the industry.",
}) {
  const [showFormModal, setShowFormModal] = useState(false);

  const companies = [
    { id: 1, logo: "/images/placement/student1.webp", alt: "Santhana Pandian" },
    { id: 2, logo: "/images/placement/student2.webp", alt: "Piyush Gurav" },
    { id: 3, logo: "/images/placement/student3.webp", alt: "Ayushi Mehta" },
    { id: 4, logo: "/images/placement/student4.webp", alt: "Dhruv Narwani" },
    { id: 5, logo: "/images/placement/student5.webp", alt: "Student 5" },
    { id: 6, logo: "/images/placement/student6.webp", alt: "Student 6" },
    { id: 7, logo: "/images/placement/student7.webp", alt: "Student 7" },
    { id: 8, logo: "/images/placement/student8.webp", alt: "Student 8" },
    { id: 9, logo: "/images/placement/student9.webp", alt: "Student 9" },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 bg-white overflow-hidden">
      {/* Yahan max-w-7xl ko max-w-6xl kiya gaya hai taaki VerticalTimeline se align ho jaye */}
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Our Students Placed At
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {headlinepara}
          </p>
        </div>

        {/* SWIPER CONTAINER */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1, 
                spaceBetween: 8, // Pehle 16 tha, ab 8px kar diya
              },
              480: {
                slidesPerView: 1.4,
                spaceBetween: 10, // Pehle 16 tha, ab 10px kar diya
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 12, // Pehle 20 tha, ab 12px kar diya
              },
              768: {
                slidesPerView: 2.8, 
                spaceBetween: 14, // Pehle 20 tha, ab 14px kar diya
              },
              1024: {
                slidesPerView: 4, 
                spaceBetween: 16, // Desktop par pehle 24 tha, ab 16px kar diya
              },
            }}
            className="pb-8"
          >
            {companies.map((company) => (
              <SwiperSlide key={company.id} className="h-full">
                {/* Visual Frame Design */}
                <div className="relative w-full aspect-[2/3] overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gray-50">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                    priority={company.id <= 4}
                    className="object-cover object-top select-none"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8 md:mt-12">
          <button
            onClick={() => setShowFormModal(true)}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-300 text-white font-medium px-8 py-3 md:px-10 md:py-3.5 rounded-lg shadow-md w-full sm:w-auto text-center"
          >
            {btntext}
          </button>
        </div>
      </div>

      {/* Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-4 md:p-6 shadow-2xl">
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-black transition-colors z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="mx-auto w-full max-w-[600px] pt-6">
              <CareerForm
                redirectlink={redirectlink}
                btntext={btntext}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}