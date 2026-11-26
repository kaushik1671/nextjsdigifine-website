import React, { lazy, Suspense, useState } from 'react';

const CareerForm = lazy(() => import('./CareerForm'));

const MyComponent = ({
  type = "dm",
  title = "",
  subtitlePart1 = "",
  subtitleHighlight = '',
  redirectlink = 'course-brochures',
  category = "digital" // ✅ ADD THIS


}) => {

  const imageData = [
    { src: '/images/Icons/formicon/ficon1.webp',alt: '10,000+ Students Trained', hover: "/images/Icons/formicon/ficon5.webp", label: '10,000+ Students Trained' },
    { src: '/images/Icons/formicon/ficon2.webp', alt: '12 LPA Highest Package', hover: "/images/Icons/formicon/ficon6.webp", label: '12 LPA Highest Package' },
    { src: '/images/Icons/formicon/ficon3.webp', alt: '4.9 LPA Average Package', hover: "/images/Icons/formicon/ficon7.webp", label: '4.9 LPA Average Package' },
    { src: '/images/Icons/formicon/ficon4.webp', alt: '96% Placement Rate', hover: "/images/Icons/formicon/ficon8.webp", label: '96% Placement Rate' },
  ];

  const logoData = {
    dm: [
      { src: '/images/company_logo/homeCompany/GROUPM-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Jio-Studios-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Hotstar-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Foxy-Moron-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Publicis-Groupe-150x150.webp' },
    ],
    gd: [
      { src: '/images/company_logo/homeCompany/GROUPM-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Jio-Studios-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Hotstar-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Foxy-Moron-150x150.webp' },
      { src: '/images/company_logo/homeCompany/Publicis-Groupe-150x150.webp' },
    ],
    it: [
      { src: '/images/company_logo/it/1.jpg' },
      { src: '/images/company_logo/it/2.jpg' },
      { src: '/images/company_logo/it/3.jpg' },
      { src: '/images/company_logo/it/4.jpg' },
      { src: '/images/company_logo/it/5.jpg' },
      // { src: '/images/company_logo/it/6.jpg' },
      // { src: '/images/company_logo/it/7.jpg' },
      // { src: '/images/company_logo/it/8.jpg' },
      // { src: '/images/company_logo/it/9.jpg' },
      // { src: '/images/company_logo/it/10.jpg' },
      // { src: '/images/company_logo/it/11.jpg' },
      // { src: '/images/company_logo/it/12.jpg' },
      // { src: '/images/company_logo/it/13.jpg' },
    ]
  };

  const imageDataLogo = logoData[type] || logoData.dm;

  const renderLabel = (label, index) => {
    const words = label.split(' ');
    if (index === 0 || index === 3) {
      return words.map((word, idx) => (
        <span key={idx} className={idx === 0 ? 'font-bold text-xl' : ''}>
          {word}{' '}
        </span>
      ));
    }
    return words.map((word, idx) => (
      <span key={idx} className={idx < 2 ? 'font-bold text-xl' : ''}>
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-start p-4">

      {/* Heading */}
      {title && (
        <div className="flex flex-col py-11">
          <p className="font-semibold text-sm text-greyscale-1 mb-2">
            {/* Why Digifine */}
          </p>
          <h2 className="font-semibold text-4xl">
            {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
          </h2>
        </div>
      )}

      <div className="flex flex-col-reverse md:flex-row gap-6 w-full">

        {/* LEFT SIDE */}
        <div className='flex flex-col gap-5 w-full '>

          {/* Section 1 */}
          <div className="grid sm:grid-cols-2 gap-4 p-8 border rounded-xl border-gray-300 h-full">
            <p className="col-span-2 text-xl font-semibold text-center">
              100% Placement Assurance Upon Course Completion
            </p>

            {imageData.map((image, index) => {
              const [imgSrc, setImgSrc] = useState(image.src);

              return (
                <div key={index} className="flex flex-col items-center p-4">
                  <img
                    src={imgSrc}
                    className="w-16 h-16 object-contain"
                    onMouseEnter={() => setImgSrc(image.hover)}
                    onMouseLeave={() => setImgSrc(image.src)}
                    alt = {image.alt}
                  />
                  <p className="text-sm text-center mt-2">
                    {renderLabel(image.label, index)}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className='w-full md:w-[55%]'>
          <Suspense fallback={<div>Loading...</div>}>
            <CareerForm redirectlink={redirectlink} category={category} />
          </Suspense>
        </div>

      </div>

      {/* ✅ LOGO SECTION (SIMPLE ROW) */}
      <div className="w-full mt-8 border rounded-xl border-gray-200 p-6">

        <p className="text-xl font-semibold text-center mb-6">
          Our alumni work with brands like
        </p>

        <div className="flex justify-between items-center flex-wrap max-w-5xl mx-auto">
          {imageDataLogo.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={`Logo ${index}`}
              className="h-16 md:h-20 object-contain"
              loading="lazy"
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default MyComponent;

//   "use client";

// import React, { lazy, Suspense, useState } from 'react';

// const CareerForm = lazy(() => import('./CareerForm'));

// const StatIcon = ({ src, hoverSrc, label, index, renderLabel }) => {
//   const [imgSrc, setImgSrc] = useState(src);

//   return (
//     <div className="flex flex-col items-center p-4">
//       <img
//         src={imgSrc}
//         alt={label}
//         className="w-16 h-16 object-contain transition-all duration-200"
//         onMouseEnter={() => setImgSrc(hoverSrc)}
//         onMouseLeave={() => setImgSrc(src)}
//       />
//       <p className="text-sm text-center mt-2">
//         {renderLabel(label, index)}
//       </p>
//     </div>
//   );
// };

// const MyComponent = ({
//   type = "dm",
//   title = "",             
//   highlightTitle = "",     
//   statsSubheading = "100% Placement Assurance Upon Course Completion", 
//   statsData,               
//   redirectlink = 'course-brochures'
// }) => {
  
//   const imageData = statsData || [
//     { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '10,000+ Students Trained' },
//     { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '12 LPA Highest Package' },
//     { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '4.9 LPA Average Package' },
//     { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '96% Placement Rate' },
//   ];

//   const renderLabel = (label, index) => {
//     const words = label.split(' ');
//     if (index === 0 || index === 3) {
//       return words.map((word, idx) => (
//         <span key={idx} className={idx === 0 ? 'font-bold text-xl text-[#046AED]' : ''}>
//           {word}{' '}
//         </span>
//       ));
//     }
//     return words.map((word, idx) => (
//       <span key={idx} className={idx < 2 ? 'font-bold text-xl text-[#046AED]' : ''}>
//         {word}{' '}
//       </span>
//     ));
//   };

//   return (
//     /* Yahan changes kiye gaye hain: 'my-16 md:my-24' add kiya gaya hai standard section spacing ke liye */
//     <div className="relative mx-auto mt-16 md:mt-24 mb-8 md:mb-12 px-4 max-w-6xl w-full">

//       {title && (
//         <div className="flex flex-col pb-6 pt-2">
//           <h2 className="text-2xl sm:text-2xl md:text-[25px] lg:text-[30px] font-bold text-slate-900 leading-tight">
//             {title} <span className="text-[#046AED]">{highlightTitle}</span>
//           </h2>
//         </div>
//       )}

//       {/* Main Grid Section */}
//       <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-stretch">

//         {/* LEFT SIDE STATS */}
//         <div className='flex flex-col w-full md:w-[45%] lg:w-[50%]'>
//           <div className="grid grid-cols-2 gap-4 p-6 sm:p-8 bg-white border rounded-[24px] border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full justify-center items-center">
//             <p className="col-span-2 text-lg sm:text-xl font-bold text-center text-slate-800 mb-2">
//               {statsSubheading}
//             </p>

//             {imageData.map((image, index) => (
//               <StatIcon
//                 key={index}
//                 src={image.src}
//                 hoverSrc={image.hover}
//                 label={image.label}
//                 index={index}
//                 renderLabel={renderLabel}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className='w-full md:w-[55%] lg:w-[50%] flex'>
//           <div className="w-full bg-white border border-gray-200 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
//             <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading form...</div>}>
//               <CareerForm redirectlink={redirectlink} />
//             </Suspense>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MyComponent;