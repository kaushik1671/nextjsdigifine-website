import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

// Sample data for the reviews
const reviews = [
  {
    name: "John Doe",
    rating: 5,
    description: "Digifine's Digital Marketing course in Mumbai helped me enhance my skills and grow my career. The faculty is outstanding, and the course structure is well thought out. Highly recommended!",
  },
  {
    name: "Jane Smith",
    rating: 4,
    description: "Great learning experience! The course provided practical insights and hands-on experience. The support for placements was a huge plus. I feel much more confident in digital marketing now.",
  },
  {
    name: "Samuel Lee",
    rating: 5,
    description: "The best digital marketing course in Mumbai! The training was top-notch, and the mentors are very experienced. It’s been a great journey with Digifine, and I am very happy with the results.",
  },
  {
    name: "Emily White",
    rating: 4,
    description: "I really enjoyed the course. The material was up-to-date and taught by industry professionals. The only downside was the pace, but overall a fantastic experience.",
  },
];

const StudentReviewSection = () => {
  return (
    <div className="w-full py-16 bg-blue-500">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">
          Digital Marketing Institute in Mumbai Student Reviews
        </h2>

        {/* Swiper Slider for Reviews */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
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
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-4">
                  <div className="text-xl font-semibold text-gray-800">{review.name}</div>
                  <div className="flex justify-center items-center mt-2">
                    {/* Displaying stars for rating */}
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-gray-600">{review.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StudentReviewSection;
