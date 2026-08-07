import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import CareerForm from "./CareerForm";
import "swiper/css/navigation";

import "swiper/css";

const YtVideo = ({
  redirectlink = "/course-brochures",
  headline = "Gain insight into Digifine from our students’ perspective",
  paragraph = "Understand our teaching approach and hear directly from students about their experience.",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);


  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);


  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById("yt-video");
      const rect = element?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // YouTube Video List → Add unlimited videos here
  const videoList = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/1wbYTzXbteU",
      title: "Digifine Digital Marketing Course Student Review - Bhavisha Jain",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/3gh3OD3fAs8",
      title: "Digifine Digital Marketing Course Student Review - Raghu Vyas",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/PAYf12IeUbg",
      title: "Digifine Digital Marketing Course Student Review - Charmi Shah",
    },
    // Add more videos here...
  ];

  return (
    <>
    <div
      id="yt-video"
      className={`flex flex-col items-center justify-center p-6 max-w-6xl mx-auto transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Title */}
      <h2 className="mb-4 text-3xl font-semibold my-16 text-center">
        {headline}
      </h2>

      {/* Paragraph */}
      <p className="text-center text-lg mb-8">{paragraph}</p>

      {/* Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={true}
  spaceBetween={16}
  autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {videoList.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="w-full flex justify-center">
              <iframe
                width="356"
                height="634"
                loading="lazy"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Button */}
      <button 
      onClick={openFormModal}
      className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-10 hover:bg-blue-700 transition duration-300">
        Book Demo Class
      </button>
    </div>


     {/* Modal Section for CareerForm */}
 {showFormModal && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
  {/* Modal Card */}
  <div
    className={`
      relative bg-white rounded-[20px] shadow-xl
      w-full max-w-3xl
      p-6
      overflow-auto
      max-h-[90vh]
    `}
  >
    {/* Close button */}
    <button
      onClick={closeFormModal}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* CareerForm with fixed width inside modal */}
    <div className="w-full md:w-[600px] mx-auto">
      <CareerForm  redirectlink={redirectlink} btntext="Book Demo Class"/>
    </div>
  </div>
</div>
)}
    </>
  );
};

export default YtVideo;

// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import CareerForm from "./CareerForm";

// import "swiper/css";

// const YtVideo = ({
//   redirectlink = "/course-brochures",
//   headline = "Gain insight into Digifine from our students’ perspective",
//   paragraph = "understand our teaching approach and hear directly from students about their experience.",
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [showFormModal, setShowFormModal] = useState(false);


//   const openFormModal = () => setShowFormModal(true);
//   const closeFormModal = () => setShowFormModal(false);


//   useEffect(() => {
//     const onScroll = () => {
//       const element = document.getElementById("yt-video");
//       const rect = element?.getBoundingClientRect();
//       if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
//         setIsVisible(true);
//       }
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // YouTube Video List → Add unlimited videos here
//   const videoList = [
//     {
//       id: 1,
//       src: "https://www.youtube.com/embed/1wbYTzXbteU",
//       title: "Digifine Digital Marketing Course Student Review - Bhavisha Jain",
//     },
//     {
//       id: 2,
//       src: "https://www.youtube.com/embed/3gh3OD3fAs8",
//       title: "Digifine Digital Marketing Course Student Review - Raghu Vyas",
//     },
//     {
//       id: 3,
//       src: "https://www.youtube.com/embed/PAYf12IeUbg",
//       title: "Digifine Digital Marketing Course Student Review - Charmi Shah",
//     },
//     // Add more videos here...
//   ];

//   return (
//     <>
//     <div
//       id="yt-video"
//       className={`flex flex-col items-center justify-center p-6 max-w-6xl mx-auto transition-opacity duration-1000 ease-in-out ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//     >
//       {/* Title */}
//       <h2 className="mb-4 text-3xl font-semibold my-16 text-center">
//         {headline}
//       </h2>

//       {/* Paragraph */}
//       <p className="text-center text-lg mb-8">{paragraph}</p>

//       {/* Slider */}
//       <Swiper
//         modules={[Autoplay]}
//         spaceBetween={20}
//         autoplay={{
//           delay: 3500,
//           disableOnInteraction: false,
//         }}
//         loop={true}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="w-full"
//       >
//         {videoList.map((video) => (
//           <SwiperSlide key={video.id}>
//             <div className="w-full flex justify-center">
//               <iframe
//                 width="356"
//                 height="634"
//                 loading="lazy"
//                 src={video.src}
//                 title={video.title}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//                 className="rounded-lg shadow-lg"
//               ></iframe>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Button */}
//       <button 
//       onClick={openFormModal}
//       className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-10 hover:bg-blue-700 transition duration-300">
//         Book Demo Class

//       </button>
//     </div>


//      {/* Modal Section for CareerForm */}
//  {showFormModal && (
//   <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
//   {/* Modal Card */}
//   <div
//     className={`
//       relative bg-white rounded-[20px] shadow-xl
//       w-full max-w-3xl
//       p-6
//       overflow-auto
//       max-h-[90vh]
//     `}
//   >
//     {/* Close button */}
//     <button
//       onClick={closeFormModal}
//       className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
//       aria-label="Close"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//       </svg>
//     </button>

//     {/* CareerForm with fixed width inside modal */}
//     <div className="w-full md:w-[600px] mx-auto">
//       <CareerForm  redirectlink={redirectlink}/>
//     </div>
//   </div>
// </div>
// )}
//     </>
//   );
// };

// export default YtVideo;
