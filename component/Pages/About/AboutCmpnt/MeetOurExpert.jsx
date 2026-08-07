

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

import {  Pagination, Autoplay } from "swiper/modules";

function MeetOurExpert() {
  const experts = [
    {
      name: "Siddharth Mehta",
      role: "Founder of Digifine & Adbizit",
      description:
        "13+ years of digital marketing expertise Worked with brands like TATAcliq.com, Audi, Hyundai, MG Motors, Mahindra, Nykaa, Lodha, Kalpatru & more.",
      img: "/images/experts/expert1.webp",
    },
    {
      name: "Nitin Mudras",
      role: "Creative director at Adbizit",
      description: "10+ years of design experience Worked as a web & graphic designer and motion graphics specialist.",
      img: "/images/experts/expert3.webp",
    },
    {
      name: "Sujata Vishal Pawar",
      role: "Senior Graphic Design Trainer",
      description: "14+ years of experience in graphic design Worked with several firms all across Mumbai, including Mac, Arenas, Kirti, & more.",
      img: "/images/experts/expert3.webp",
    },
    {
      name: "Sumeet Mirchandani",
      role: "5+ years of experience in digital marketing",
      description: "Worked with Audi, MG Motors, Dream Realtors, AT Academy, Eume, etc.",
      img: "/images/experts/expert2.webp",
    },
    {
      name: "Siddhi Sawant",
      role: "3+ years of digital marketing experience",
      description: "Worked at Disney+ Hotstar, Omnicom & Adbizit on digital marketing strategy for brands like Mercedes, Sony, TransUnion Cybil, & more.",
      img: "/images/experts/expert3.webp",
    },{
      name: "Manav Shah",
      role: "3+ years of digital marketing experience",
      description: "Performance Marketing Expert & Growth Marketing Manager",
      img: "/images/experts/expert3.webp",
    },{
      name: "Saurabh Tare",
      role: "3+ years into digital marketing",
      description: "Media Planner and Expert in Strategic Management",
      img: "/images/experts/expert3.webp",
    },{
      name: "Siddhi Jain",
      role: "3+ years of digital marketing expertise",
      description: "Expert in Market Research, Planning, SEO and Social Media Marketing",
      img: "/images/experts/expert3.webp",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-14">
          Meet Our <span className="text-blue-600">Experts</span>
        </h2>

        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experts.map((expert, i) => (
            <SwiperSlide key={i}>
              <div className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-500">

                {/* Image */}
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay (stronger for readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white z-10">
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-1">
                    {expert.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-blue-300 text-sm font-medium mb-2">
                    {expert.role}
                  </p>

                  {/* Paragraph */}
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {expert.description}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MeetOurExpert;