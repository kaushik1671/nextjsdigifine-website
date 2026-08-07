import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

const LogoSlider = ({ logos = [] }) => {
  const swiperRef = useRef(null);

  if (!Array.isArray(logos)) {
    console.warn("The 'logos' prop should be an array.");
    return null;
  }

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()} // Pause on hover
      onMouseLeave={() => swiperRef.current?.autoplay.start()} // Resume on leave
    >
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        freeMode={true}
        // freeModeMomentum={false} // Prevent bounce
        speed={5000} // Continuous smooth speed (higher = slower)
        autoplay={{
          delay: 1, // No pause at all
          disableOnInteraction: false,
        }}
        grabCursor={true}
        allowTouchMove={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
      >
        {logos.length > 0 ? (
          // duplicate logos once manually for seamless effect
          [...logos, ...logos].map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto px-2 transition-all duration-300 grayscale hover:grayscale-0"
                // loading="lazy" 
              />
            </SwiperSlide>
          ))
        ) : (
          <div className="text-center text-gray-500">No logos available</div>
        )}
      </Swiper>
    </div>
  );
};

LogoSlider.propTypes = {
  logos: PropTypes.array,
};

export default LogoSlider;