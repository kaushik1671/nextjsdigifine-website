"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const CertificateSection = ({
  title = "Master's degree in AI & DS, JGU",
  subtitlePart1 = "Earn Your Valuable",
  subtitleHighlight = "Master's Certification and Recognition",
  paragraph = "Earn over 10 globally recognized & international certifications after course completion",
  certificates = [
    {
      id: 1,
      image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
      title: "Master's in Artificial Intelligence and Data Science",
      description: "Widely recognised and valued Master's in Artificial Intelligence and Data Science from JGU with alumni status",
    },
    {
      id: 2,
      image: "https://digifine.in/wp-content/uploads/2021/12/4-2-212x300-1-1.jpeg",
      title: "Microsoft Certificate",
      description: "Earn a Professional Certificate in Master's in Artificial Intelligence and Data Science",
    },
  ],
}) => {
  return (
    <section id="Certificate" className="overflow-hidden">
      <div className="flex flex-col xs:px-4 md:px-0 px-6 my-14 md:my-28 max-w-6xl w-full mx-auto md:gap-12 gap-6">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start w-full md:gap-0 gap-2">
          <p className="font-semibold text-left md:text-center text-sm text-greyscale-1 tracking-tight md:mb-2">
            {title}
          </p>
          <div className="w-full">
            <h2 className="font-semibold text-2xl md:text-4xl tracking-tight">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </h2>
          </div>
          <p className="text-sm text-greyscale-2 mt-2 md:mt-3">{paragraph}</p>
        </div>

        {/* Certificate Carousel */}
        <div className="slider-container relative w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40
              },
            }}
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide key={`${certificate.id}-${index}`} className="pb-10">
    <div className="flex flex-col md:flex-row h-auto md:h-48 gap-4 md:gap-5">
                  {/* Certificate Image - Improved for mobile */}
                  <div className="w-full md:w-36 md:min-w-36 md:max-w-72 h-auto md:h-full aspect-[3/4]">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain rounded-lg cursor-pointer"
                      loading="lazy"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="flex flex-col flex-1 md:gap-3 gap-2 md:max-w-[280px]">
                    <p className="text-lg md:text-xl tracking-tight font-medium text-greyscale-main">
                      {certificate.title}
                    </p>
                    <p className="tracking-tight font-normal text-sm text-greyscale-2 md:h-28">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Certificate Number */}
                  <p className="opacity-80 tracking-tight text-4xl font-medium text-primary-main md:block hidden">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;