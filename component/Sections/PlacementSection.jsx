import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Correct import for Swiper CSS

const PlacementSection = () => {
  const students = [
    { name: 'John Doe', package: '₹8,00,000', company: 'ABC Corp' },
    { name: 'Jane Smith', package: '₹6,50,000', company: 'XYZ Ltd.' },
    { name: 'Raj Patel', package: '₹9,00,000', company: 'Tech Solutions' },
    { name: 'Sita Agarwal', package: '₹7,50,000', company: 'MarketMinds' },
    { name: 'Ravi Kumar', package: '₹10,00,000', company: 'Web Innovations' },
    { name: 'Priya Verma', package: '₹6,00,000', company: 'Media Global' },
    { name: 'Amit Singh', package: '₹8,50,000', company: 'Adverts Hub' },
    { name: 'Anjali Sharma', package: '₹7,00,000', company: 'Digital Pulse' },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title and Description */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          100% Guaranteed Placement Post Digital Marketing Course in Mumbai
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          At Digifine Academy, we place our students in a wide range of companies and organizations offering great industry exposure and experience. Being in this industry for a long time, we have established solid and valuable connections with companies and organizations in digital marketing and related sectors. This gives us and our students an upper hand over everyone else for internships and placements.
        </p>

        {/* Student Slider */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="student-slider mb-10"
        >
          {students.map((student, index) => (
            <SwiperSlide key={index} className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{student.name}</h4>
                <p className="text-gray-600 mb-2">{student.company}</p>
                <p className="text-lg font-semibold text-yellow-500">{student.package}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Download Brochure Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementSection;
