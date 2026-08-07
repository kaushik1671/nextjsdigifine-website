
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const CompaniesCarousel = () => {
//   const companies = [
//     { name: "GROUPM", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GROUPM-150x150.webp" },
//     { name: "Jio Studios", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Jio-Studios-150x150.webp" },
//     { name: "Hotstar", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Hotstar-150x150.webp" },
//     { name: "Foxy Moron", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Foxy-Moron-150x150.webp" },
//     { name: "Publicis Groupe", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Publicis-Groupe-150x150.webp" },
//     { name: "Tonic Worldwide", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Tonic-Worldwide-150x150.webp" },
//     { name: "KINNECT", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/KINNECT-150x150.webp" },
//     { name: "TATA", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/TATA-150x150.webp" },
//     { name: "Starbuzz", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Starbuzz-150x150.webp" },
//     { name: "GOZOOP", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GOZOOP-150x150.webp" },
//     { name: "Fork Media Group", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Fork-Media-Group-150x150.webp" },
//     { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.webp" },
//     { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.webp" },
//     { name: "CAPGEMINI", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/CAPGEMINI-150x150.webp" },
//     { name: "L&T", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LT-150x150.webp" },
//   ];

//   return (
//     <section className="elementor-section elementor-top-section flex justify-center items-center my-32">
//       <div className="elementor-container elementor-column-gap-default max-w-6xl">
//         {/* Heading */}
//         <div className="elementor-column elementor-col-100">
//           <h3 className="elementor-heading-title text-center text-2xl font-medium mb-8">
//             Companies They Work At:
//           </h3>
//         </div>

//         {/* Carousel */}
//         <div className="elementor-column elementor-col-100">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={3} // Default for large screens
//             navigation={{
//               prevEl: ".swiper-button-prev",
//               nextEl: ".swiper-button-next",
//             }}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               // For screens up to 640px (mobile)
//               640: {
//                 slidesPerView: 2, // Show 2 items per view on mobile screens
//               },
//               // For tablets (screens up to 768px)
//               768: {
//                 slidesPerView: 3, // Show 3 items per view on tablets
//               },
//               // For larger screens (1024px and up)
//               1024: {
//                 slidesPerView: 4, // Show 4 items per view on larger screens
//               },
//             }}
//           >
//             {companies.map((company, index) => (
//               <SwiperSlide key={index}>
//                 <figure className="flex justify-center items-center">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="w-24 h-24 object-contain"
//                     loading="lazy"
//                   />
//                 </figure>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesCarousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const companyData = {
  dm: [
    { name: "GROUPM", logo: "/images/company_logo/dm/1.webp" },
    { name: "Jio Studios", logo: "/images/company_logo/dm/2.webp" },
    { name: "Hotstar", logo: "/images/company_logo/dm/3.webp" },
    { name: "Foxy Moron", logo: "/images/company_logo/dm/4.webp" },
    { name: "Publicis Groupe", logo: "/images/company_logo/dm/5.webp" },
    { name: "Tonic Worldwide", logo: "/images/company_logo/dm/6.webp" },
    { name: "KINNECT", logo: "/images/company_logo/dm/7.webp" },
    { name: "TATA", logo: "/images/company_logo/dm/8.webp" },
    { name: "Starbuzz", logo: "/images/company_logo/dm/9.webp" },
    { name: "GOZOOP", logo: "/images/company_logo/dm/10.webp" },
    { name: "Fork Media Group", logo: "/images/company_logo/dm/11.webp" },
    // { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.webp" },
    // { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.webp" },
    { name: "CAPGEMINI", logo: "/images/company_logo/dm/12.webp" },
    { name: "L&T", logo: "/images/company_logo/dm/13.webp" },  
  ],

  gd: [
    { name: "GROUPM", logo: "/images/company_logo/dm/1.webp" },
    { name: "Jio Studios", logo: "/images/company_logo/dm/2.webp" },
    { name: "Hotstar", logo: "/images/company_logo/dm/3.webp" },
    { name: "Foxy Moron", logo: "/images/company_logo/dm/4.webp" },
    { name: "Publicis Groupe", logo: "/images/company_logo/dm/5.webp" },
    { name: "Tonic Worldwide", logo: "/images/company_logo/dm/6.webp" },
    { name: "KINNECT", logo: "/images/company_logo/dm/7.webp" },
    { name: "TATA", logo: "/images/company_logo/dm/8.webp" },
    { name: "Starbuzz", logo: "/images/company_logo/dm/9.webp" },
    { name: "GOZOOP", logo: "/images/company_logo/dm/10.webp" },
    { name: "Fork Media Group", logo: "/images/company_logo/dm/11.webp" },
    // { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.webp" },
    // { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.webp" },
    { name: "CAPGEMINI", logo: "/images/company_logo/dm/12.webp" },
    { name: "L&T", logo: "/images/company_logo/dm/13.webp" },
  ],

  it: [
    { name: "Capgemini", logo: "/images/company_logo/it/1.webp" },
    { name: "Cognizant", logo: "/images/company_logo/it/2.webp" },
    { name: "Deloitte", logo: "/images/company_logo/it/3.webp" },
    { name: "Fujitsu", logo: "/images/company_logo/it/4.webp" },
    { name: "TCS", logo: "/images/company_logo/it/5.webp" },
    { name: "Osian Infotech", logo: "/images/company_logo/it/6.webp" },
    { name: "Blue Star", logo: "/images/company_logo/it/7.webp" },
    { name: "HSBC", logo: "/images/company_logo/it/8.webp" },
    { name: "iConnect", logo: "/images/company_logo/it/9.webp" },
    { name: "indosomic", logo: "/images/company_logo/it/10.webp" },
    { name: "Wipro", logo: "/images/company_logo/it/11.webp" },
    ]
};


const CompaniesCarousel = ({ type = "dm" }) => {

  const companies = companyData[type] || companyData.dm;

  return (
    <section className="flex justify-center items-center mt-24 mb-5 md:my-14 px-4">
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <h3 className="text-center text-xl md:text-2xl font-medium mb-6 md:mb-8">
          Companies They Work At:
        </h3>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
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
              320: { slidesPerView: 2, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 25 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <figure className="flex justify-center items-center p-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    // className="w-20 h-20 md:w-24 md:h-24 object-contain"
                    className={`object-contain ${
    type === "it"
      ? "w-28 h-28 md:w-32 md:h-32"
      : "w-20 h-20 md:w-24 md:h-24"
  }`}
                    loading="lazy"
                    
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev !w-10 !h-10 !mt-0 !-left-2 md:!-left-4 after:!text-sm md:after:!text-base"></div>
          <div className="swiper-button-next !w-10 !h-10 !mt-0 !-right-2 md:!-right-4 after:!text-sm md:after:!text-base"></div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesCarousel;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";




// const CompaniesCarousel = ({type = 'dm'}) => {

//   const companies = {
//   dm: [
//     { name: "GROUPM", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GROUPM-150x150.webp" },
//     { name: "Jio Studios", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Jio-Studios-150x150.webp" },
//     { name: "Hotstar", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Hotstar-150x150.webp" },
//     { name: "Foxy Moron", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Foxy-Moron-150x150.webp" },
//     { name: "Publicis Groupe", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Publicis-Groupe-150x150.webp" },
//     { name: "Tonic Worldwide", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Tonic-Worldwide-150x150.webp" },
//     { name: "KINNECT", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/KINNECT-150x150.webp" },
//     { name: "TATA", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/TATA-150x150.webp" },
//     { name: "Starbuzz", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Starbuzz-150x150.webp" },
//     { name: "GOZOOP", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GOZOOP-150x150.webp" },
//     { name: "Fork Media Group", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Fork-Media-Group-150x150.webp" },
//     { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.webp" },
//     { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.webp" },
//     { name: "CAPGEMINI", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/CAPGEMINI-150x150.webp" },
//     { name: "L&T", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LT-150x150.webp" },
//   ],
//   gd: [
//     { name: "Adobe", logo: "..." },
//     { name: "Canva", logo: "..." },
//     { name: "WPP", logo: "..." },
//   ],
//   it: [
//     { name: "Capgemini", logo: "company_logo/it/1.webp" },
//     { name: "Cognizant", logo: "" },
//     { name: "Deloitte", logo: "" },
//     { name: "Fujitsu", logo: "" },
//     { name: "TCS", logo: "" },
//     { name: "Osian Infotech", logo: "" },
//     { name: "Blue Star", logo: "" },
//     { name: "HSBC", logo: "" },
//     { name: "iConnect", logo: "" },
//     { name: "indosomic", logo: "" },
//     { name: "Wipro", logo: "" },
//     { name: "LionBridge", logo: "" },
//   ]
// };

//   return (
//     <section className="elementor-section elementor-top-section flex justify-center items-center mt-24 mb-5 md:my-14 px-4">
//       <div className="elementor-container elementor-column-gap-default max-w-6xl w-full">
//         {/* Heading */}
//         <div className="elementor-column elementor-col-100">
//           <h3 className="elementor-heading-title text-center text-xl md:text-2xl font-medium mb-6 md:mb-8">
//             Companies They Work At:
//           </h3>
//         </div>

//         {/* Carousel */}
//         <div className="elementor-column elementor-col-100 relative">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20} // Reduced on mobile
//             slidesPerView={3}
//             navigation={{
//               prevEl: ".swiper-button-prev",
//               nextEl: ".swiper-button-next",
//             }}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               320: {
//                 slidesPerView: 2,
//                 spaceBetween: 15
//               },
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 25
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 30
//               },
//             }}
//           >
//             {companies.map((company, index) => (
//               <SwiperSlide key={index}>
//                 <figure className="flex justify-center items-center p-2">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="w-20 h-20 md:w-24 md:h-24 object-contain" // Smaller on mobile
//                     loading="lazy"
//                   />
//                 </figure>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Navigation buttons with larger touch area for mobile */}
//           <div className="swiper-button-prev !w-10 !h-10 !mt-0 !-left-2 md:!-left-4 after:!text-sm md:after:!text-base"></div>
//           <div className="swiper-button-next !w-10 !h-10 !mt-0 !-right-2 md:!-right-4 after:!text-sm md:after:!text-base"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesCarousel;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";




// const CompaniesCarousel = () => {
//   const companies = [
//     { name: "GROUPM", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GROUPM-150x150.webp" },
//     { name: "Jio Studios", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Jio-Studios-150x150.webp" },
//     { name: "Hotstar", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Hotstar-150x150.webp" },
//     { name: "Foxy Moron", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Foxy-Moron-150x150.webp" },
//     { name: "Publicis Groupe", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Publicis-Groupe-150x150.webp" },
//     { name: "Tonic Worldwide", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Tonic-Worldwide-150x150.webp" },
//     { name: "KINNECT", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/KINNECT-150x150.webp" },
//     { name: "TATA", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/TATA-150x150.webp" },
//     { name: "Starbuzz", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Starbuzz-150x150.webp" },
//     { name: "GOZOOP", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/GOZOOP-150x150.webp" },
//     { name: "Fork Media Group", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/Fork-Media-Group-150x150.webp" },
//     { name: "MediaDonuts", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/MediaDonuts-150x150.webp" },
//     { name: "LEO BURNET", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LEO-BURNET-150x150.webp" },
//     { name: "CAPGEMINI", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/CAPGEMINI-150x150.webp" },
//     { name: "L&T", logo: "https://schoolofdigital.in/wp-content/uploads/2024/11/LT-150x150.webp" },
//   ];

//   return (
//     <section className="elementor-section elementor-top-section flex justify-center items-center my-16 md:my-32 px-4">
//       <div className="elementor-container elementor-column-gap-default max-w-6xl w-full">
//         {/* Heading */}
//         <div className="elementor-column elementor-col-100">
//           <h3 className="elementor-heading-title text-center text-xl md:text-2xl font-medium mb-6 md:mb-8">
//             Companies They Work At:
//           </h3>
//         </div>

//         {/* Carousel */}
//         <div className="elementor-column elementor-col-100 relative">
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20} // Reduced on mobile
//             slidesPerView={3}
//             navigation={{
//               prevEl: ".swiper-button-prev",
//               nextEl: ".swiper-button-next",
//             }}
//             autoplay={{
//               delay: 2000,
//               disableOnInteraction: false,
//             }}
//             loop={true}
//             breakpoints={{
//               320: {
//                 slidesPerView: 2,
//                 spaceBetween: 15
//               },
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 20
//               },
//               768: {
//                 slidesPerView: 3,
//                 spaceBetween: 25
//               },
//               1024: {
//                 slidesPerView: 4,
//                 spaceBetween: 30
//               },
//             }}
//           >
//             {companies.map((company, index) => (
//               <SwiperSlide key={index}>
//                 <figure className="flex justify-center items-center p-2">
//                   <img
//                     src={company.logo}
//                     alt={company.name}
//                     className="w-20 h-20 md:w-24 md:h-24 object-contain" // Smaller on mobile
//                     loading="lazy"
//                   />
//                 </figure>
//               </SwiperSlide>
//             ))}
//           </Swiper>
          
//           {/* Navigation buttons with larger touch area for mobile */}
//           <div className="swiper-button-prev !w-10 !h-10 !mt-0 !-left-2 md:!-left-4 after:!text-sm md:after:!text-base"></div>
//           <div className="swiper-button-next !w-10 !h-10 !mt-0 !-right-2 md:!-right-4 after:!text-sm md:after:!text-base"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompaniesCarousel;