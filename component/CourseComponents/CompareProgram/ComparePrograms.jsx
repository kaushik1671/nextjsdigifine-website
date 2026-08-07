import { useState } from 'react';
import React from "react";
import CareerForm from "../../Container/CareerForm";


const ComparePrograms = ({
  redirectlink = "/course-brochures",
  title = "How Our Program Compares",
  subtitlePart1 = "Why Is Digifine's",
  subtitleHighlight = "PG Digital Marketing is Best?",
  upGradFeatures = [
    "12-month accelerated program to get you job-ready faster",
    "500+ hours of comprehensive learning, including live sessions and recorded content.",
    "15+ industry-relevant projects in domains like finance, healthcare, and e-commerce.",
    "Training in 15+ tools, including Python, Power BI, Tableau, and Generative AI tools.",
    "Masters in AI and DS degree from JGU, recognized as an Institution of Eminence by the Government of India.",
    "High number of live sessions and personalized industry interactions for deeper learning and insights.",
    "Earn a complimentary Microsoft Certification to boost your professional profile.",
  ],
  otherCoursesFeatures = [
    "Traditional 24 months (2 years), delaying entry into the workforce.",
    "Fewer learning hours, often limited to recorded content.",
    "Limited capstone projects with narrow industry focus.",
    "Limited tools, often focused on basic programming and analytics.",
    "Limited recognition and accreditations.",
    "Fewer to no live sessions and limited opportunities for personalized industry engagement.",
    "No additional industry-recognized certifications.",
  ],
  button1Text = "Download Brochure",
  button2Text = "Talk to Career Expert",
  ondownloadsyllabus,
}) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formBtnText, setFormBtnText] = useState('Apply Now'); 
  


    const openFormModal = (btnText) => {
  setFormBtnText(btnText); // set dynamic text
  setShowFormModal(true);
};
  const closeFormModal = () => setShowFormModal(false);

  return (
    <section id="Compare-Programs" className="overflow-hidden">
      <div className="flex flex-col xs:px-4 xs:py-8 max-w-6xl w-full mx-auto px-6 md:px-0 md:my-spacing20 mt-16">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start w-full md:gap-0 xs:gap-2 mb-6 md:mb-8">
          <p className="font-semibold text-left text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2">
            {title}
          </p>
          <div className="w-full">
            <h2 className="font-semibold text-2xl md:text-4xl tracking-tight md:leading-tight">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </h2>
          </div>
        </div>

        {/* Gradient Background Circles - Hidden on mobile */}
        <div className="hidden md:block relative md:max-w-1240 w-full md:mb-0">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 -left-[10%] top-[1%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-80 md:h-80 right-[0%] top-[1%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-60 md:h-60 left-[2%] bottom-[5%] rotate-40"></div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 right-[3%] bottom-[2%] rotate-40"></div>
        </div>

        {/* Comparison Cards */}
        <div className="flex flex-col md:flex-row justify-start items-start w-full relative md:mt-12 gap-4">
          {/* upGrad Card */}
          <div className="flex flex-col w-full md:max-w-[60%] justify-start items-start flex-grow overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-primary-main">
            <div className="flex justify-center items-center self-stretch h-16 md:h-20 relative overflow-hidden px-4 py-4 md:py-5 border-b border-greyscale-6 w-full rounded-t-2xl md:rounded-t-3xl">
              <p className="text-lg md:text-xl font-bold tracking-wide text-left text-primary-main">DIGIFINE</p>
            </div>
            {upGradFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start self-stretch min-h-16 px-4 py-3 md:px-5 md:py-4 border-b border-greyscale-6"
              >
                <div className="flex justify-start items-start self-stretch gap-2">
                  <i className="icon-like text-green-500 text-lg mt-0.5"></i>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-left text-greyscale-1">
                      {/* {feature} */}
                      {feature.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Courses Card */}
          <div className="flex flex-col justify-start items-start w-full md:w-[400px] overflow-hidden rounded-2xl md:rounded-tr-3xl md:rounded-br-3xl bg-white border border-greyscale-6 md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-0">
            <div className="flex justify-center h-16 items-center self-stretch relative overflow-hidden px-4 py-4 md:py-5 border-b border-greyscale-6">
              <p className="text-lg md:text-xl font-medium text-left text-greyscale-main">Other Courses</p>
            </div>
            {otherCoursesFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-start self-stretch min-h-16 px-4 py-3 md:px-5 md:py-4 border-b border-greyscale-6"
              >
                <div className="flex justify-start items-start self-stretch gap-2">
                  <i className="icon-dislike text-greyscale-4 text-lg mt-0.5"></i>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-left text-greyscale-2">
                      {feature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row w-full mt-8 md:mt-12 justify-center items-center gap-3 md:gap-5">
          <button 
          onClick={() => openFormModal('Download Syllabus')} 
          className="h-11 justify-center items-center gap-2 inline-flex whitespace-nowrap bg-white rounded-lg border border-greyscale-4 text-greyscale-main font-medium px-4 py-2.5 w-full md:w-[300px] hover:bg-greyscale-5 transition-colors">
            {button1Text}
          </button>
          <button 
          onClick={() => openFormModal('Apply Now')} 
          className="h-11 justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg text-white font-medium px-4 py-2.5 w-full md:w-[300px] hover:opacity-90 transition-opacity">
            {button2Text}
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
      <CareerForm redirectlink={redirectlink} 
      btntext={formBtnText}
      />
    </div>
  </div>
</div>
)}
        
      </div>
    </section>
  );
};

export default ComparePrograms;

// import { useState } from 'react';
// import React from "react";
// import CareerForm from "../../Container/CareerForm";


// const ComparePrograms = ({
//   redirectlink = "/course-brochures",
//   title = "How Our Program Compares",
//   subtitlePart1 = "Why Is Digifine's",
//   subtitleHighlight = "PG Digital Marketing is Best?",
//   upGradFeatures = [
//     "12-month accelerated program to get you job-ready faster",
//     "500+ hours of comprehensive learning, including live sessions and recorded content.",
//     "15+ industry-relevant projects in domains like finance, healthcare, and e-commerce.",
//     "Training in 15+ tools, including Python, Power BI, Tableau, and Generative AI tools.",
//     "Masters in AI and DS degree from JGU, recognized as an Institution of Eminence by the Government of India.",
//     "High number of live sessions and personalized industry interactions for deeper learning and insights.",
//     "Earn a complimentary Microsoft Certification to boost your professional profile.",
//   ],
//   otherCoursesFeatures = [
//     "Traditional 24 months (2 years), delaying entry into the workforce.",
//     "Fewer learning hours, often limited to recorded content.",
//     "Limited capstone projects with narrow industry focus.",
//     "Limited tools, often focused on basic programming and analytics.",
//     "Limited recognition and accreditations.",
//     "Fewer to no live sessions and limited opportunities for personalized industry engagement.",
//     "No additional industry-recognized certifications.",
//   ],
//   button1Text = "Download Brochure",
//   button2Text = "Talk to Career Expert",
//   ondownloadsyllabus,
// }) => {
//   const [showFormModal, setShowFormModal] = useState(false);


//   const openFormModal = () => setShowFormModal(true);
//   const closeFormModal = () => setShowFormModal(false);

//   return (
//     <section id="Compare-Programs" className="overflow-hidden">
//       <div className="flex flex-col xs:px-4 xs:py-8 max-w-6xl w-full mx-auto px-6 md:px-0 md:my-spacing20 mt-16">
//         {/* Header Section */}
//         <div className="flex flex-col justify-start items-start w-full md:gap-0 xs:gap-2 mb-6 md:mb-8">
//           <p className="font-semibold text-left text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2">
//             {title}
//           </p>
//           <div className="w-full">
//             <h2 className="font-semibold text-2xl md:text-4xl tracking-tight md:leading-tight">
//               {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
//             </h2>
//           </div>
//         </div>

//         {/* Gradient Background Circles - Hidden on mobile */}
//         <div className="hidden md:block relative md:max-w-1240 w-full md:mb-0">
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 -left-[10%] top-[1%] rotate-40"></div>
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-80 md:h-80 right-[0%] top-[1%] rotate-40"></div>
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-60 md:h-60 left-[2%] bottom-[5%] rotate-40"></div>
//           <div className="bg-gradient-to-r from-blue-500 to-purple-500 absolute rounded-full opacity-10 blur-100 md:w-96 md:h-96 right-[3%] bottom-[2%] rotate-40"></div>
//         </div>

//         {/* Comparison Cards */}
//         <div className="flex flex-col md:flex-row justify-start items-start w-full relative md:mt-12 gap-4">
//           {/* upGrad Card */}
//           <div className="flex flex-col w-full md:max-w-[60%] justify-start items-start flex-grow overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-primary-main">
//             <div className="flex justify-center items-center self-stretch h-16 md:h-20 relative overflow-hidden px-4 py-4 md:py-5 border-b border-greyscale-6 w-full rounded-t-2xl md:rounded-t-3xl">
//               <p className="text-lg md:text-xl font-bold tracking-wide text-left text-primary-main">DIGIFINE</p>
//             </div>
//             {upGradFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col justify-center items-start self-stretch min-h-16 px-4 py-3 md:px-5 md:py-4 border-b border-greyscale-6"
//               >
//                 <div className="flex justify-start items-start self-stretch gap-2">
//                   <i className="icon-like text-green-500 text-lg mt-0.5"></i>
//                   <div className="flex-1">
//                     <p className="font-medium text-sm text-left text-greyscale-1">
//                       {/* {feature} */}
//                       {feature.split('\n').map((line, index) => (
//     <span key={index}>
//       {line}
//       <br />
//     </span>
//   ))}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Other Courses Card */}
//           <div className="flex flex-col justify-start items-start w-full md:w-[400px] overflow-hidden rounded-2xl md:rounded-tr-3xl md:rounded-br-3xl bg-white border border-greyscale-6 md:border-t-0 md:border-b-0 md:border-l-0 md:border-r-0">
//             <div className="flex justify-center h-16 items-center self-stretch relative overflow-hidden px-4 py-4 md:py-5 border-b border-greyscale-6">
//               <p className="text-lg md:text-xl font-medium text-left text-greyscale-main">Other Courses</p>
//             </div>
//             {otherCoursesFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col justify-center items-start self-stretch min-h-16 px-4 py-3 md:px-5 md:py-4 border-b border-greyscale-6"
//               >
//                 <div className="flex justify-start items-start self-stretch gap-2">
//                   <i className="icon-dislike text-greyscale-4 text-lg mt-0.5"></i>
//                   <div className="flex-1">
//                     <p className="font-medium text-sm text-left text-greyscale-2">
//                       {feature}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row w-full mt-8 md:mt-12 justify-center items-center gap-3 md:gap-5">
//           <button 
//           onClick={ondownloadsyllabus}
//           className="h-11 justify-center items-center gap-2 inline-flex whitespace-nowrap bg-white rounded-lg border border-greyscale-4 text-greyscale-main font-medium px-4 py-2.5 w-full md:w-[300px] hover:bg-greyscale-5 transition-colors">
//             {button1Text}
//           </button>
//           <button 
//           onClick={openFormModal}
//           className="h-11 justify-center items-center gap-2 inline-flex whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg text-white font-medium px-4 py-2.5 w-full md:w-[300px] hover:opacity-90 transition-opacity">
//             {button2Text}
//           </button>
//         </div>

//  {/* Modal Section for CareerForm */}
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
//       <CareerForm redirectlink={redirectlink}/>
//     </div>
//   </div>
// </div>
// )}
        
//       </div>
//     </section>
//   );
// };

// export default ComparePrograms;