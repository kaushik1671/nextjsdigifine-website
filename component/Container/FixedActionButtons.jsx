// import React, { useState , lazy} from 'react';
// // import CareerForm from './CareerForm';

// const CareerForm = lazy(()=>import("./CareerForm"))

// const FixedActionButtons = () => {
//   const [showBrochureModal, setShowBrochureModal] = useState(false);

//   const toggleBrochureModal = () => {
//     setShowBrochureModal(!showBrochureModal);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50 md:hidden ">
//       {/* Call Us Button */}
//       <ActionButton
//       imgsrc='images/socialmediaicon/phone-call.webp'
//         text="Call Us"
//         link="tel:8169004863"
     
//       />

//       {/* WhatsApp Button - visible only on mobile */}
//       <ActionButton
//       imgsrc='images/socialmediaicon/whatsapp.webp'
//         text="WhatsApp Us"
//         link="https://wa.me/918169004863?text=Hi%20there!%20I'm%20interested%20in%20your%20courses."
//         className="md:hidden"
//       />

//       {/* Download Brochure Button */}
//       <button
//         onClick={toggleBrochureModal}
//         className="bg-white text-white py-4 px-4 rounded-full shadow-lg transform transition-all duration-300"
//       >
//             <img src="images/socialmediaicon/attachment.webp" alt="dowwnloadicon" className='w-9'/>
//       </button>

//       {/* Brochure Modal */}
//       {showBrochureModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 h-full">
//           <div className="relative p-6 bg-white rounded-lg shadow-xl max-w-md w-full">
//             {/* Close button */}
//             <button
//               onClick={toggleBrochureModal}
//               className="absolute top-7 right-7 text-gray-500 hover:text-gray-700 z-50"
//               aria-label="Close"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* CareerForm Component */}
//             <CareerForm style="h-[50%]" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ✅ Reusable ActionButton Component
// const ActionButton = ({ text, link, bgColor, hoverColor, className = '',imgsrc='' }) => (
//   <a
//     href={link}
//     target="_blank"
//     rel="noopener noreferrer"
//     className={`${className} bg-white text-white py-4 px-4 rounded-full shadow-lg transform transition-all duration-300`}
//   >
//     <img src={`${imgsrc}`} alt={`${imgsrc}`} className='w-9 h-auto' />
//   </a>
// );

// export default FixedActionButtons;

// import { string } from 'prop-types';
// import React, { useState, lazy, useEffect } from 'react';

// const CareerForm = lazy(() => import("./CareerForm"));

// const FixedActionButtons = () => {
//   const [showBrochureModal, setShowBrochureModal] = useState(false);
//   const [whatsappMessage, setWhatsappMessage] = useState('');

//   const toggleBrochureModal = () => {
//     setShowBrochureModal(!showBrochureModal);
//   };

//   // ✅ Set WhatsApp message after component mounts
//   useEffect(() => {
//     let url = window.location.href.toLowerCase();

//     if (url.includes("digital-marketing")) {
//       setWhatsappMessage("Hi Team, Could you share the Digital Marketing Course brochure?");
//     } else if (url.includes("data-science")) {
//       setWhatsappMessage("Hi Team, Could you share the Data Analytics Course brochure?");
//     } else if (url.includes("graphic-design")) {
//       setWhatsappMessage("Hi Team, Could you share the Graphic Design and Video Editing Course brochure?");
//     } else if (url.includes("web-development")) {
//       setWhatsappMessage("Hi Team, Could you share the Full Stack Development Course brochure?");
//     } else if (url.includes("ai-ml")) {
//       setWhatsappMessage("Hi Team, Could you share the Data Science, Machine Learning, and Ai Course brochure?");
//     } else {
//       setWhatsappMessage("Hi Team, Could you share the brochure? 1. Digital Marketing 2. Graphic Design 3. Full Stack Developer Course 4. Data Analytics Course 5. Data Science, Machine Learning & AI Course 6. Data Science with AI Integration");
//     }
//   }, [showBrochureModal]); // runs once after mount

//   const handleWhatsappClick = () => {
//     const url = window.location.href.toLowerCase();
//     console.log("Clicked URL:", url);
  
//     let message = "";
  
//     if (url.includes("digital-marketing")) {
//       message = "Hi Team, Could you share the Digital Marketing Course brochure?";
//     } else if (url.includes("data-science")) {
//       message = "Hi Team, Could you share the Data Analytics Course brochure?";
//     } else if (url.includes("graphic-design")) {
//       message = "Hi Team, Could you share the Graphic Design and Video Editing Course brochure?";
//     } else if (url.includes("web-development")) {
//       message = "Hi Team, Could you share the Full Stack Development Course brochure?";
//     } else if (url.includes("ai-ml")) {
//       message = "Hi Team, Could you share the Data Science, Machine Learning, and AI Course brochure?";
//     } else {
//       message = "Hi Team, Could you share the brochure?";
//     }
  
//     const finalLink = `https://wa.me/918169004863?text=${encodeURIComponent(message)}`;
  
//     window.open(finalLink, "_blank");
//   };

//   return (
//     <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50 md:hidden ">
//       <ActionButton
//         imgsrc='images/socialmediaicon/phone-call.webp'
//         text="Call Us"
//         link="tel:8169004863"
//       />

//       {whatsappMessage && (
//         <ActionButton
//           imgsrc='images/socialmediaicon/whatsapp.webp'
//           text="WhatsApp Us"
//           link={`https://wa.me/918169004863?text=${encodeURIComponent(whatsappMessage)}`}
//           className="md:hidden"
//         />
//       )}

//       <button
//         onClick={toggleBrochureModal}
//         className="bg-white text-white py-4 px-4 rounded-full shadow-lg transform transition-all duration-300"
//       >
//         <img src="images/socialmediaicon/attachment.webp" alt="downloadicon" className='w-9'/>
//       </button>

//       {showBrochureModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 h-full">
//           <div className="relative p-6 bg-white rounded-lg shadow-xl max-w-md w-full">
//             <button
//               onClick={toggleBrochureModal}
//               className="absolute top-7 right-7 text-gray-500 hover:text-gray-700 z-50"
//               aria-label="Close"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//               </svg>
//             </button>

//             <CareerForm style="h-[50%]" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const ActionButton = ({ text, link, className = '', imgsrc='' , handleWhatsappClick }) => (
//   <button
//   onClick={handleWhatsappClick}
//   className="md:hidden bg-white py-4 px-4 rounded-full shadow-lg transform transition-all duration-300"
// >
//   <img src="images/socialmediaicon/whatsapp.webp" alt="WhatsApp Us" className="w-9 h-auto" />
// </button>
// );

// export default FixedActionButtons;

import React, { useState, lazy, Suspense } from 'react';

const CareerForm = lazy(() => import("./CareerForm"));

const FixedActionButtons = () => {
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const toggleBrochureModal = () => {
    setShowBrochureModal(!showBrochureModal);
  };

  // ✅ WhatsApp Click Handler
  const handleWhatsappClick = () => {
    const url = window.location.href.toLowerCase();
    console.log("Clicked URL:", url);

    let message = "";

    if (url.includes("digital-marketing")) {
      message = "Hi Team, Could you share the Digital Marketing Course brochure?";
    } else if (url.includes("data-science")) {
      message = "Hi Team, Could you share the Data Analytics Course brochure?";
    } else if (url.includes("graphic-design")) {
      message = "Hi Team, Could you share the Graphic Design and Video Editing Course brochure?";
    } else if (url.includes("web-development")) {
      message = "Hi Team, Could you share the Full Stack Development Course brochure?";
    } else if (url.includes("ai-ml")) {
      message = "Hi Team, Could you share the Data Science, Machine Learning, and AI Course brochure?";
    } else {
      message = "Hi Team, Could you share the brochure? 1. Digital Marketing 2. Graphic Design 3. Full Stack Developer Course 4. Data Analytics Course 5. Data Science, Machine Learning & AI Course 6. Data Science with AI Integration";
    }

    const finalLink = `https://wa.me/918169004863?text=${encodeURIComponent(message)}`;
    window.open(finalLink, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-4 z-50 md:hidden">

      {/* Call Button */}
      <ActionButton
        imgsrc='images/socialmediaicon/phone-call.webp'
        onClick={() => window.open("tel:8169004863")}
      />

      {/* WhatsApp Button */}
      <ActionButton
        imgsrc='images/socialmediaicon/whatsapp.webp'
        onClick={handleWhatsappClick}
      />

      {/* Download Brochure Button */}
      <button
        onClick={toggleBrochureModal}
        className="bg-white py-4 px-4 rounded-full shadow-lg"
      >
        <img src="images/socialmediaicon/attachment.webp" alt="downloadicon" className='w-9'/>
      </button>

      {/* Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
          <div className="relative p-6 bg-white rounded-lg shadow-xl max-w-md w-full">

            <button
              onClick={toggleBrochureModal}
              className="absolute top-7 right-7 text-gray-500"
            >
              ✕
            </button>

            <Suspense fallback={<div>Loading...</div>}>
              <CareerForm style="h-[50%]" />
            </Suspense>

          </div>
        </div>
      )}
    </div>
  );
};

// ✅ Reusable Button (FIXED)
const ActionButton = ({ onClick, imgsrc }) => (
  <button
    onClick={onClick}
    className="bg-white py-4 px-4 rounded-full shadow-lg"
  >
    <img src={imgsrc} alt="icon" className='w-9 h-auto' />
  </button>
);

export default FixedActionButtons;