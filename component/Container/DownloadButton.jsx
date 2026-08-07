import { useState } from 'react';
import React from 'react';
import CareerForm from './CareerForm';

const DownloadButton = ({ 
  bgColor = 'bg-white', 
  textColor = 'text-black', 
  padding = 'py-2 px-6', 
  hoverColor = 'hover:bg-gray-300', 
  borderRadius = 'rounded-lg' ,
redirectlink = "/course-brochures"

}) => {

  const [showFormModal, setShowFormModal] = useState(false);


  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);
  return (
    <>
    <div className="h-[15vh] flex items-center justify-center bg-custom-btn my-8">
      <button 
      onClick={openFormModal}
        className={`${bgColor} ${textColor} ${padding} ${borderRadius} ${hoverColor} font-semibold transition duration-300`}
      >
        Download Brochure
      </button>
    </div>
    

 {/* Modal Section for CareerForm */}
 {showFormModal && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm">
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
      <CareerForm redirectlink={redirectlink}/>
    </div>
  </div>
</div>
)}

    </>
  );
};

export default DownloadButton;
