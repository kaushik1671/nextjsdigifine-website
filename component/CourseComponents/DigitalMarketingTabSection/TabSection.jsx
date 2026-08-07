import React, { useState , useRef } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import CareerForm from '../../Container/CareerForm';

const TabSection = ({ 
  redirectlink = "/course-brochures",
  title = "Why Choose Digifine for PG in Digital Marketing Course in Vashi, Navi Mumbai?",
  description = "Digifine Academy’s School of Marketing offers a range of premium-quality Digital Marketing Courses in Vashi, Navi Mumbai that are designed by a panel of highly qualified industry experts. The Postgraduate Certification in Digital Marketing here is a globally recognized program guided by experienced trainers through a predominantly practical training approach. Master industry-relevant tools and get placement guarantee with the best PG in Digital Marketing!",
  tabs = [
    {
      title: "One-of-its-kind Curriculum with Unique Modules",
      content: "A field like digital marketing requires upcoming and aspiring professionals to possess not only theoretical knowledge, but also practical mastery on various industry-relevant tools and techniques. Digifine’s PG in Digital Marketing Course in Vashi, Navi Mumbai is therefore designed in such a way that you not only cover the core fundamentals but also apply this knowledge via several assignments and live projects. Through real-world case studies and industry exposure, you can hone your skills and learn from your mistakes while collaborating with fellow students and professionals.",
      buttons: [
        { text: "Download Brochure", onClick: () => {} },
        { text: "Apply Now", onClick: () => {} }
      ]
    },
    {
      title: "Expert Faculty",
      content: "With Digifine’s Digital Marketing Courses in Vashi, Navi Mumbai, you get a chance to learn from a set of highly experienced trainers with years of expertise in the digital marketing as well as education industries. Their practical insights throughout this Postgraduate degree in Digital Marketing can help you gain a lot of in-depth knowledge. These teachers can provide you with not only the right information and training, but also the best guidance to boost your career or business in the field of digital marketing.",
      buttons: [
        { text: "Download Syllabus", onClick: () => {} },
        { text: "Apply Now", onClick: () => {} }
      ]
    },
    {
      title: "Practical Training",
      content: "Certificates are a testament that mark the successful completion of your Digital Marketing Graduate Course in Vashi, Navi Mumbai. Digifine thus gives you a chance to acquire multiple professional and international certifications from the institute as well as Google by the end of your Postgraduate degree in Digital Marketing.",
      buttons: [
        { text: "Download Syllabus", onClick: () => {} },
        { text: "Apply Now", onClick: () => {} }
      ]
    },
  ],
  defaultActiveTab = 1,
  ondownloadsyllabus,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const tabRef = useRef(null);
  
  const [showFormModal, setShowFormModal] = useState(false);


  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);

  const scrollTabs = (direction) => {
    if (tabRef.current) {
      const scrollAmount = 150;
      tabRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm">
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
      <CareerForm redirectlink={redirectlink} btntext='Apply Now'/>
    </div>
  </div>
</div>
)}
      {/* Header Section */}
      <div className="text-left mb-10">
        <h2 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 inline-block">
          {title}
        </h2>
        <p className="text-gray-600 mt-6 text-lg leading-relaxed ">
          {description}
        </p>
      </div>
      
      {/* Tabs Navigation */}
      <div className="relative border-b border-gray-200 mb-8">
      {/* <button 
          onClick={() => scrollTabs('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden sm:block"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        </button> */}
        <div
          ref={tabRef}
          className="flex space-x-1 overflow-x-auto scrollbar-hide px-10"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index + 1)}
              className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors duration-300 ${
                activeTab === index + 1
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        {/* <button 
          onClick={() => scrollTabs('right')} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden sm:block"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-500" />
        </button> */}
      </div>
      
      {/* Tab Content */}
      <div className="bg-gray-50 rounded-lg p-8">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index + 1 ? 'block' : 'hidden'} animate-fadeIn`}
          >
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-8 leading-relaxed" 
              style={{whiteSpace: 'pre-line', lineHeight: '2'}}>{tab.content}</p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                {/* {tab.buttons?.map((button, btnIndex) => (
                  
                ))} */}
                <button
                    // key={btnIndex}
                    onClick={openFormModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
                  >
                    Apply Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
              </div>
              
 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSection;

// import React, { useState , useRef } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// import CareerForm from '../../Container/CareerForm';

// const TabSection = ({ 
//   redirectlink = "/course-brochures",
//   title = "Why Choose Digifine for PG in Digital Marketing Course in Vashi, Navi Mumbai?",
//   description = "Digifine Academy’s School of Marketing offers a range of premium-quality Digital Marketing Courses in Vashi, Navi Mumbai that are designed by a panel of highly qualified industry experts. The Postgraduate Certification in Digital Marketing here is a globally recognized program guided by experienced trainers through a predominantly practical training approach. Master industry-relevant tools and get placement guarantee with the best PG in Digital Marketing!",
//   tabs = [
//     {
//       title: "One-of-its-kind Curriculum with Unique Modules",
//       content: "A field like digital marketing requires upcoming and aspiring professionals to possess not only theoretical knowledge, but also practical mastery on various industry-relevant tools and techniques. Digifine’s PG in Digital Marketing Course in Vashi, Navi Mumbai is therefore designed in such a way that you not only cover the core fundamentals but also apply this knowledge via several assignments and live projects. Through real-world case studies and industry exposure, you can hone your skills and learn from your mistakes while collaborating with fellow students and professionals.",
//       buttons: [
//         { text: "Download Brochure", onClick: () => {} },
//         { text: "Apply Now", onClick: () => {} }
//       ]
//     },
//     {
//       title: "Expert Faculty",
//       content: "With Digifine’s Digital Marketing Courses in Vashi, Navi Mumbai, you get a chance to learn from a set of highly experienced trainers with years of expertise in the digital marketing as well as education industries. Their practical insights throughout this Postgraduate degree in Digital Marketing can help you gain a lot of in-depth knowledge. These teachers can provide you with not only the right information and training, but also the best guidance to boost your career or business in the field of digital marketing.",
//       buttons: [
//         { text: "Download Syllabus", onClick: () => {} },
//         { text: "Apply Now", onClick: () => {} }
//       ]
//     },
//     {
//       title: "Practical Training",
//       content: "Certificates are a testament that mark the successful completion of your Digital Marketing Graduate Course in Vashi, Navi Mumbai. Digifine thus gives you a chance to acquire multiple professional and international certifications from the institute as well as Google by the end of your Postgraduate degree in Digital Marketing.",
//       buttons: [
//         { text: "Download Syllabus", onClick: () => {} },
//         { text: "Apply Now", onClick: () => {} }
//       ]
//     },
//   ],
//   defaultActiveTab = 1,
//   ondownloadsyllabus,
// }) => {
//   const [activeTab, setActiveTab] = useState(defaultActiveTab);
//   const tabRef = useRef(null);
  
//   const [showFormModal, setShowFormModal] = useState(false);


//   const openFormModal = () => setShowFormModal(true);
//   const closeFormModal = () => setShowFormModal(false);

//   const scrollTabs = (direction) => {
//     if (tabRef.current) {
//       const scrollAmount = 150;
//       tabRef.current.scrollBy({ 
//         left: direction === 'left' ? -scrollAmount : scrollAmount,
//         behavior: 'smooth' 
//       });
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm">
//       {/* Modal Section for CareerForm */}
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
//       <CareerForm redirectlink={redirectlink} />
//     </div>
//   </div>
// </div>
// )}
//       {/* Header Section */}
//       <div className="text-left mb-10">
//         <h2 className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 inline-block">
//           {title}
//         </h2>
//         <p className="text-gray-600 mt-6 text-lg leading-relaxed ">
//           {description}
//         </p>
//       </div>
      
//       {/* Tabs Navigation */}
//       <div className="relative border-b border-gray-200 mb-8">
//       {/* <button 
//           onClick={() => scrollTabs('left')} 
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden sm:block"
//         >
//           <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
//         </button> */}
//         <div
//           ref={tabRef}
//           className="flex space-x-1 overflow-x-auto scrollbar-hide px-10"
//         >
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index + 1)}
//               className={`px-6 py-3 font-medium text-sm rounded-t-lg transition-colors duration-300 ${
//                 activeTab === index + 1
//                   ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
//                   : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
//               }`}
//             >
//               {tab.title}
//             </button>
//           ))}
//         </div>
//         {/* <button 
//           onClick={() => scrollTabs('right')} 
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hidden sm:block"
//         >
//           <ChevronRightIcon className="h-5 w-5 text-gray-500" />
//         </button> */}
//       </div>
      
//       {/* Tab Content */}
//       <div className="bg-gray-50 rounded-lg p-8">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`${activeTab === index + 1 ? 'block' : 'hidden'} animate-fadeIn`}
//           >
//             <div className="prose max-w-none">
//               <p className="text-gray-700 mb-8 leading-relaxed" 
//               style={{whiteSpace: 'pre-line', lineHeight: '2'}}>{tab.content}</p>
              
//               <div className="flex flex-wrap gap-4 mt-8">
//                 {/* {tab.buttons?.map((button, btnIndex) => (
                  
//                 ))} */}
//                 <button
//                     // key={btnIndex}
//                     onClick={openFormModal}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 flex items-center"
//                   >
//                     Apply Now
//                     <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//               </div>
              
 
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TabSection;