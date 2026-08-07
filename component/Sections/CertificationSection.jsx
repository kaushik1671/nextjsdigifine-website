import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const certificates = [
  "https://via.placeholder.com/200x100?text=Certificate+1",
  "https://via.placeholder.com/200x100?text=Certificate+2",
  "https://via.placeholder.com/200x100?text=Certificate+3",
  "https://via.placeholder.com/200x100?text=Certificate+4",
  "https://via.placeholder.com/200x100?text=Certificate+5",
  "https://via.placeholder.com/200x100?text=Certificate+6"
];

const CertificationSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Digifine Digital Marketing Graduate Program Certifications
        </h2>

        {/* Content */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <p className="text-lg text-gray-700 text-center mb-6">
            Digifine Academy’s Digital Marketing Course certifications are globally recognized. Our curriculum has been designed and created by industry experts not just from India but from all over the world. This allows us to impart internationally accepted industry knowledge on a global level to our students.
          </p>

          {/* Swiper Carousel for Certificates */}
          <div className="mb-6">
            <Swiper
              spaceBetween={10}
              slidesPerView={5}
              loop={true}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {certificates.map((certificate, index) => (
                <SwiperSlide key={index}>
                  <div className="w-48 h-24 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={certificate} 
                      alt={`Certificate ${index + 1}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Schedule a Demo Button */}
          <div className="flex justify-center">
            <a 
              href="#schedule-demo"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition duration-300"
            >
              Schedule a Demo Session
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;
