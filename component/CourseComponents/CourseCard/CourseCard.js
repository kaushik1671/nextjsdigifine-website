"use client"

import React, { useState , lazy , Suspense } from 'react';
import PropTypes from 'prop-types';
const CareerForm = lazy(() => import("../../Container/CareerForm"));

const CourseCard = ({
  title,
  highlightText,
  description,
  emi,
  emivalue = "100% Assured",
  startDate,
  startDateby = "Trained by",
  duration,
  durationValue = "One-of-its kind",
  appliedText,
  contactNumber,
  imageUrl,
  onApplyClick,
  ondownloadsyllabus,
  redirectlink,
}) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formBtnText, setFormBtnText] = useState('Apply Now'); 

  const openFormModal = (btnText) => {
    setFormBtnText(btnText);
    setShowFormModal(true);
  };
  const closeFormModal = () => setShowFormModal(false);

  return (
    <>
      {/* 🛠️ PREMIUM ADJUSTMENT: Increased max-w to 6xl for a wider, more professional desktop look */}
      <div className="flex flex-col md:flex-row items-stretch justify-center relative m-4 mt-6 max-w-6xl mx-auto">

        {/* Left Content Section */}
        {/* 🛠️ ADJUSTED: Set padding to md:py-8 and md:px-12 for a premium spacious feel (adds elegant height) */}
        <div className="relative z-[1] p-5 sm:p-6 md:px-12 md:py-8 md:pr-[80px] lg:pr-[90px] w-full md:w-[60%] h-auto rounded-[24px] sm:rounded-[32px] md:rounded-[40px] bg-white border border-[#EAEAEA] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* 🛠️ ADJUSTED: Changed gap to gap-5 for clean vertical spacing */}
          <div className="flex flex-col h-full justify-between gap-5">
            
            {/* Top Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F4FF]">
                  <span className="text-[#046AED] text-xs md:text-sm font-medium">New Course</span>
                </div>
                <button className="text-xl md:text-2xl text-gray-500 hover:text-gray-700">
                  <i className="ri-share-fill"></i>
                </button>
              </div>

              {/* 🛠️ ADJUSTED: Balanced font sizes for the wider layout */}
              <h1 className="text-2xl sm:text-3xl md:text-[30px] lg:text-[36px] leading-tight font-medium mb-3 text-slate-900">
                {title} <span className="text-[#046AED]">{highlightText}</span>
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-2 leading-relaxed">{description}</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 md:flex md:gap-8 lg:gap-12">
              <div>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-1">{emivalue}</p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                  {emi}
                </p>
              </div>
              <div>
                <p className="text-[11px] sm:text-xs text-gray-500 mb-1">{startDateby}</p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                  {startDate}
                </p>
              </div>
              <div className="col-span-2 md:col-auto">
                <p className="text-[11px] sm:text-xs text-gray-500 mb-1">{durationValue}</p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#046AED] to-[#0BABCE] bg-clip-text text-transparent">
                  {duration}
                </p>
              </div>
            </div>

            {/* Associations */}
            {/* 🛠️ ADJUSTED: Kept logos neat at md:h-14 so they look crisp but professional */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-wrap border-t border-gray-100 pt-4">
              <p className="text-xs sm:text-sm font-medium text-gray-500 whitespace-nowrap">
                In Association With:
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/images/gvr-logo/nsdc.webp"
                  alt="NSDC Logo"
                  className="h-11 md:h-14 object-contain w-auto"
                />
                <img
                  src="/images/gvr-logo/Skill-India.webp"
                  alt="Skill India Logo"
                  className="h-11 md:h-14 object-contain w-auto"
                />
              </div>
            </div> 

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-3 mt-1">
              <button 
                className="w-full sm:flex-1 h-11 border border-gray-300 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors bg-white text-gray-700"
                onClick={() => openFormModal('Apply Now')}            
              >
                Apply Now
              </button>
              <button 
                className="w-full sm:flex-1 h-11 bg-gradient-to-r from-[#046AED] to-[#0BABCE] text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => openFormModal('Download Syllabus')}
              >
                Download Syllabus
              </button>
            </div>

            {/* Footer Phone Space */}
            <div className="flex items-center gap-2 text-gray-600 empty:hidden">
              <i className="ri-phone-line text-sm md:text-base"></i>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        {/* 🛠️ ADJUSTED: Ratio is 60% left and 45% right with -5% negative margin. This equals a perfect 100% container fit while maintaining the overlap cleanly! */}
        <div className="w-full md:w-[45%] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden -mt-5 md:mt-0 md:-ml-[5%] relative z-0 shadow-lg md:shadow-none"
             style={{ aspectRatio: "4 / 3" }}> 
          <img
            src={imageUrl}
            alt="University Campus"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 550px"
          />
        </div>
      </div>

      {/* Modal Section for CareerForm */}
      {showFormModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative bg-white rounded-[20px] shadow-xl w-full max-w-3xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeFormModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50 p-1 bg-gray-50 rounded-full"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full max-w-[600px] mx-auto mt-4">
              <Suspense fallback={<div className="text-center p-4">loading...</div>}>
                <CareerForm redirectlink={redirectlink} btntext={formBtnText}/>
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  highlightText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  emi: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  appliedText: PropTypes.string,
  contactNumber: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
};

export default CourseCard;