import { useState } from 'react';
import React from 'react';
import CareerForm from '../../Container/CareerForm';

const CourseVideo = ({
  redirectlink = "/course-brochures"
}) => {
  const [showFormModal, setShowFormModal] = useState(false);


  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 fade-up">

        {/* Left: YouTube Vertical Video */}
        <div className="w-full lg:w-1/2 aspect-[9/16] rounded-3xl    overflow-hidden shadow-custom">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/3gh3OD3fAs8"
            title="Vertical Course Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Text and Buttons */}
        <div className="w-full sm:w-4/5 text-center lg:text-left px-2">
          <h2 className="text-3xl md:text-[40px] leading-tight font-medium text-gray-800 mb-4">
            Launch Your Career with <span className="text-[#046AED]">Exclusive Video Lessons</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
            Dive into our expertly crafted video curriculum designed to elevate your skills with real-world scenarios, guided by industry professionals.
            Dive into our expertly crafted video curriculum designed to elevate your skills with real-world scenarios, guided by industry professionals.
            Dive into our expertly crafted video curriculum designed to elevate your skills with real-world scenarios, guided by industry professionals. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <button
              className="w-full sm:w-auto h-11 bg-gradient-to-r from-[#046AED] to-[#0BABCE] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow px-6 py-2 text-sm font-medium flex items-center justify-center"
            onClick={openFormModal}
            >
              Know More            </button>



            <a
              href="tel:+8169004863"
              className="w-full sm:w-auto h-11 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors px-6 py-2 text-sm font-medium flex items-center justify-center text-gray-700"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-[#046AED] text-sm">
            <i className="ri-alarm-warning-line"></i>
            <span>Limited seats available. Enroll now!</span>
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
      <CareerForm redirectlink={redirectlink} />
    </div>
  </div>
</div>
)}
        </div>
      </div>

      {/* Fade-up Animation */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        .shadow-custom {
          box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default CourseVideo;
