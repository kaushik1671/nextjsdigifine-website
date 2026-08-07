"use client"

import React, { useState, useRef, useEffect } from 'react';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="slide px-2.5 w-full md:w-1/3 flex-shrink-0 transition-all duration-500">
      <div className="flex flex-col md:gap-8 gap-10">
        <div className="relative">
          <div className="flex flex-col md:gap-4 gap-5 p-7 rounded-xl bg-white shadow-md md:min-h-[312px] min-h-[253px]">
            <div className="flex flex-col md:gap-3 gap-2.5">
              <i className="icon-quote text-primary-main text-xl"></i>
              <div className="flex flex-col md:gap-2 gap-2.5 overflow-hidden">
                <div>
                  <div className="flex md:gap-0.5 gap-1 items-center"></div>
                </div>
                <p className="md:text-lg text-sm font-medium text-left text-gray-800 md:tracking-tight tracking-tight line-clamp-2">
                  {testimonial.title}
                </p>
                <p className="md:text-sm text-xs font-normal text-gray-600 md:tracking-tight tracking-tight">
                  {isExpanded ? testimonial.excerpt : `${testimonial.excerpt.substring(0, 100)}...`}
                  <span 
                    onClick={toggleReadMore}
                    className="md:text-sm text-xs underline font-medium text-gray-800 md:tracking-tight tracking-tight cursor-pointer whitespace-nowrap ml-1"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </span>
                </p>
              </div>
            </div>
            {/* <div>
              <a
                href={testimonial.linkedinUrl}
                rel="nofollow"
                target="_blank"
                className="flex gap-2 items-center md:text-lg text-sm cursor-pointer font-medium text-left md:tracking-tight tracking-tight w-fit text-linkedin-blue"
              >
                <span className="text-sm underline">LinkedIn</span>
                <img
                  alt="linkedin"
                  loading="lazy"
                  width="24"
                  height="24"
                  className="w-6 h-6"
                  src="https://assets.upgrad.com/2095/_next/static/media/LinkedinSmall.e95d7ba7.svg"
                />
              </a>
            </div> */}
          </div>
          <div className="absolute left-14 md:left-[72px] w-0 h-0 border-x-[13px] border-t-[14px] md:border-x-4 md:border-t-4 border-x-transparent border-t-white"></div>
        </div>
        <div className="flex md:px-8 px-9 pb-0 md:pb-3 gap-4">
          {/* <div className="flex flex-col">
            <img
              alt="profilePic"
              loading="lazy"
              width="86"
              height="86"
              className="rounded-full object-cover w-[86px] h-[86px]"
              src={testimonial.profileImage}
            />
          </div> */}
          <div className="flex flex-col md:gap-2 gap-1.5 flex-1">
            <p className="md:text-xl text-lg font-medium text-gray-800 tracking-tight line-clamp-1">
              {testimonial.name}
            </p>
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-2 items-center">
                <p className="md:text-sm text-xs text-gray-500 font-normal tracking-tight line-clamp-1">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OPJAlumniTestimonials = ({ paragraph="Still curious about what your future could look like after completing a professional program with Digifine Academy? From learning experiences to career opportunities and beyond, hear it all directly from our students!", title, bluetitle, testimonial = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonial.length - (windowWidth >= 768 ? 3 : 1) ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonial.length - (windowWidth >= 768 ? 3 : 1) : prev - 1));
  };

  const getTransformValue = () => {
    return `translateX(-${currentSlide * (windowWidth >= 768 ? 33.333 : 100)}%)`;
  };

  return (
    <section id="OPJ-MBA-Alumni" className="py-10 px-5 max-w-6xl w-full mx-auto relative">
      <div className="flex flex-col justify-start items-start relative md:gap-0 gap-2">
        <p className="font-semibold text-center text-sm text-gray-800 md:tracking-tight tracking-tight md:mb-2 mb-1 ">
          Testimonials
        </p>
        <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
          <h2 className="font-semibold text-4xl tracking-light gap-2">
            {title} <span className="text-primary-main">{bluetitle}</span>
          </h2>
        </div>
        <p className="mt-3">
          {paragraph}
        </p>
      </div>

      <div className="carousel-wrapper pt-9 md:pt-12 relative overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md block md:block"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md block md:block"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="slider-container relative">
          <div 
            ref={sliderRef}
            className="slider-list flex transition-transform duration-500 ease-in-out"
            style={{ transform: getTransformValue() }}
          >
            {testimonial.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {testimonial.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary-main' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default OPJAlumniTestimonials;


// import React, { useState, useRef, useEffect } from 'react';

// const TestimonialCard = ({ testimonial }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="slide px-2.5 w-full md:w-1/3 flex-shrink-0 transition-all duration-500">
//       <div className="flex flex-col md:gap-8 gap-10">
//         <div className="relative">
//           <div className="flex flex-col md:gap-4 gap-5 p-7 rounded-xl bg-white shadow-md md:min-h-[312px] min-h-[253px]">
//             <div className="flex flex-col md:gap-3 gap-2.5">
//               <i className="icon-quote text-primary-main text-xl"></i>
//               <div className="flex flex-col md:gap-2 gap-2.5 overflow-hidden">
//                 <div>
//                   <div className="flex md:gap-0.5 gap-1 items-center"></div>
//                 </div>
//                 <p className="md:text-lg text-sm font-medium text-left text-gray-800 md:tracking-tight tracking-tight line-clamp-2">
//                   {testimonial.title}
//                 </p>
//                 <p className="md:text-sm text-xs font-normal text-gray-600 md:tracking-tight tracking-tight">
//                   {isExpanded ? testimonial.excerpt : `${testimonial.excerpt.substring(0, 100)}...`}
//                   <span 
//                     onClick={toggleReadMore}
//                     className="md:text-sm text-xs underline font-medium text-gray-800 md:tracking-tight tracking-tight cursor-pointer whitespace-nowrap ml-1"
//                   >
//                     {isExpanded ? 'Read Less' : 'Read More'}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             {/* <div>
//               <a
//                 href={testimonial.linkedinUrl}
//                 rel="nofollow"
//                 target="_blank"
//                 className="flex gap-2 items-center md:text-lg text-sm cursor-pointer font-medium text-left md:tracking-tight tracking-tight w-fit text-linkedin-blue"
//               >
//                 <span className="text-sm underline">LinkedIn</span>
//                 <img
//                   alt="linkedin"
//                   loading="lazy"
//                   width="24"
//                   height="24"
//                   className="w-6 h-6"
//                   src="https://assets.upgrad.com/2095/_next/static/media/LinkedinSmall.e95d7ba7.svg"
//                 />
//               </a>
//             </div> */}
//           </div>
//           <div className="absolute left-14 md:left-[72px] w-0 h-0 border-x-[13px] border-t-[14px] md:border-x-4 md:border-t-4 border-x-transparent border-t-white"></div>
//         </div>
//         <div className="flex md:px-8 px-9 pb-0 md:pb-3 gap-4">
//           {/* <div className="flex flex-col">
//             <img
//               alt="profilePic"
//               loading="lazy"
//               width="86"
//               height="86"
//               className="rounded-full object-cover w-[86px] h-[86px]"
//               src={testimonial.profileImage}
//             />
//           </div> */}
//           <div className="flex flex-col md:gap-2 gap-1.5 flex-1">
//             <p className="md:text-xl text-lg font-medium text-gray-800 tracking-tight line-clamp-1">
//               {testimonial.name}
//             </p>
//             <div className="flex flex-col gap-0.5">
//               <div className="flex gap-2 items-center">
//                 <p className="md:text-sm text-xs text-gray-500 font-normal tracking-tight line-clamp-1">
//                   {testimonial.position}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // const OPJAlumniTestimonials = ({paragraph,title,bluetitle,testimonial=[] }) => {
// //   const testimonials = [
// //     {
// //       id: 1,
// //       title: 'Digifine is the perfect place to learn digital marketing.',
// //       excerpt: 'The trainers explain everything in a very simple, easy-to-follow way, with lots of real examples. Practical training sessions made concepts very clear. Our entire batch successfully received job placements, exactly as promised by the institute. I highly recommend it.',
// //       linkedinUrl: 'https://www.linkedin.com/in/kunda-jadhav-52409716/',
// //       profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Kunda%20(1)-e302a64fbfba4afb9385067e2f368efd.webp',
// //       name: 'Pooja Shrimal',
// //       position: 'Sr.Manager, Madison World',
// //     },
// //     {
// //       id: 2,
// //       title: 'At Digifine, the trainers didn\'t just teach us tools — they taught us how to think like smart marketers.',
// //       excerpt: 'Strategy, planning, audience targeting… everything made sense practically and clearly. I felt confident while giving job interviews because the institute covered what actually happens in the market. Got my placement exactly as promised.',
// //       linkedinUrl: 'https://www.linkedin.com/in/malay-roy-chowdhury-61602a12a/',
// //       profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Malay%20Roy%20Chowdhury%20(1)-f186f5e5a84d44c1a6eae47ac3d21325.webp',
// //       name: 'Nisha Vishwakarma',
// //       position: 'Associate Manager, Publicis Group',
// //     },
// //     {
// //       id: 3,
// //       title: 'I had zero background in marketing, but the trainers at Digifine made it so simple, ',
// //       excerpt: 'I had zero background in marketing, but the trainers at Digifine made it so simple, engaging, and crystal clear to understand. The demo campaigns, ad creation, and analytics breakdowns were my favourite part. They built my confidence slowly and steadily. Placement calls started coming in right after the course, and I landed a great job.',
// //       linkedinUrl: 'https://www.linkedin.com/in/ketan-kapoor-4591781b3/',
// //       profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Ketan%20Kapoor%20(1)-8501c19cfc86402cb622a3b14a469e1f.webp',
// //       name: 'Bilal Mulla',
// //       position: 'Group Head - Omnicorm media',
// //     },
// //     {
// //       id: 4,
// //       title: 'Digifine gave me much more than digital marketing knowledge.',
// //       excerpt: 'The soft skills training and interview preparation sessions were so valuable. I entered interviews well-prepared, knowing how to answer confidently. The placement team stayed in touch constantly, guiding us until every student got placed. They genuinely care about their students.',
// //       linkedinUrl: 'https://www.linkedin.com/in/liveakhand/',
// //       profileImage: 'https://d2o2utebsixu4k.cloudfront.net/Akhand%20Pratap%20Singh%20(1)-011f057e9d6f4f9bbf9c587e3c837559.webp',
// //       name: 'Akash Kand',
// //       position: 'New York',
// //     },
// //   ];

// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [windowWidth, setWindowWidth] = useState(0);
// //   const sliderRef = useRef(null);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWindowWidth(window.innerWidth);
// //     };
    
// //     handleResize(); // Set initial width
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   const nextSlide = () => {
// //     setCurrentSlide((prev) => (prev === testimonials.length - (windowWidth >= 768 ? 3 : 1) ? 0 : prev + 1));
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide((prev) => (prev === 0 ? testimonials.length - (windowWidth >= 768 ? 3 : 1) : prev - 1));
// //   };

// //   const getTransformValue = () => {
// //     return `translateX(-${currentSlide * (windowWidth >= 768 ? 33.333 : 100)}%)`;
// //   };

// //   return (
// //     <section id="OPJ-MBA-Alumni" className="py-10 px-5 max-w-6xl w-full mx-auto relative">
// //       <div className="flex flex-col justify-start items-start relative md:gap-0 gap-2">
// //         <h2 className="font-semibold text-center text-sm text-gray-800 md:tracking-tight tracking-tight md:mb-2 mb-1 uppercase">
// //           Testimonials
// //         </h2>
// //         <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
// //           <p className="font-semibold text-4xl tracking-light gap-2">
// //             {title} <span className="text-primary-main">{bluetitle}</span>
// //           </p>
// //         </div>
// //         <p className="mt-3">
// //           {paragraph}
// //         </p>
// //       </div>

// //       <div className="carousel-wrapper pt-9 md:pt-12 relative overflow-hidden">
// //         <button
// //           onClick={prevSlide}
// //           className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md hidden md:block"
// //           aria-label="Previous testimonial"
// //         >
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //           </svg>
// //         </button>
        
// //         <button
// //           onClick={nextSlide}
// //           className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md hidden md:block"
// //           aria-label="Next testimonial"
// //         >
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //           </svg>
// //         </button>

// //         <div className="slider-container relative">
// //           <div 
// //             ref={sliderRef}
// //             className="slider-list flex transition-transform duration-500 ease-in-out"
// //             style={{ transform: getTransformValue() }}
// //           >
// //             {testimonials.map((testimonial) => (
// //               <TestimonialCard key={testimonial.id} testimonial={testimonial} />
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex justify-center gap-2 mt-6 md:hidden">
// //         {testimonials.map((_, index) => (
// //           <button
// //             key={index}
// //             onClick={() => setCurrentSlide(index)}
// //             className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary-main' : 'bg-gray-300'}`}
// //             aria-label={`Go to testimonial ${index + 1}`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// const OPJAlumniTestimonials = ({ paragraph="Still curious about what your future could look like after completing a professional program with Digifine Academy? From learning experiences to career opportunities and beyond, hear it all directly from our students!", title, bluetitle, testimonial = [] }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(0);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     handleResize(); // Set initial width
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === testimonial.length - (windowWidth >= 768 ? 3 : 1) ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? testimonial.length - (windowWidth >= 768 ? 3 : 1) : prev - 1));
//   };

//   const getTransformValue = () => {
//     return `translateX(-${currentSlide * (windowWidth >= 768 ? 33.333 : 100)}%)`;
//   };

//   return (
//     <section id="OPJ-MBA-Alumni" className="py-10 px-5 max-w-6xl w-full mx-auto relative">
//       <div className="flex flex-col justify-start items-start relative md:gap-0 gap-2">
//         <p className="font-semibold text-center text-sm text-gray-800 md:tracking-tight tracking-tight md:mb-2 mb-1 uppercase">
//           Testimonials
//         </p>
//         <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
//           <h2 className="font-semibold text-4xl tracking-light gap-2">
//             {title} <span className="text-primary-main">{bluetitle}</span>
//           </h2>
//         </div>
//         <p className="mt-3">
//           {paragraph}
//         </p>
//       </div>

//       <div className="carousel-wrapper pt-9 md:pt-12 relative overflow-hidden">
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md hidden md:block"
//           aria-label="Previous testimonial"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
        
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-3 shadow-md hidden md:block"
//           aria-label="Next testimonial"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>

//         <div className="slider-container relative">
//           <div 
//             ref={sliderRef}
//             className="slider-list flex transition-transform duration-500 ease-in-out"
//             style={{ transform: getTransformValue() }}
//           >
//             {testimonial.map((test) => (
//               <TestimonialCard key={test.id} testimonial={test} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center gap-2 mt-6 md:hidden">
//         {testimonial.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary-main' : 'bg-gray-300'}`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OPJAlumniTestimonials;