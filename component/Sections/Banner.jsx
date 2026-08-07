import React, { useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import CareerForm from '../Container/CareerForm';
import DownloadBtn from '../Container/DownloadBtn';

const Banner = ({
  title,
  description,
  backgroundColor = 'custom-light-blue',
  highlightedWords = [],
}) => {
  const images = [
    'https://randomuser.me/api/portraits/men/1.webp',
    'https://randomuser.me/api/portraits/men/2.webp',
    'https://randomuser.me/api/portraits/men/3.webp',
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to render title with highlighted words
  const renderTitle = () => {
    return title.split(' ').map((word, index) => {
      const isHighlighted = highlightedWords.includes(word);

      return (
        <span
          key={index}
          className={isHighlighted ? 'text-custom-btn' : ''}
        >
          {word}{' '}
        </span>
      );
    });
  };

  // Trigger fade-in effect when the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`w-full py-16 text-left text-black ${backgroundColor}`}>
      <div
        className={`max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-between relative mt-8 transition-all duration-1000 ease-in-out transform ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {/* Text content */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 w-full" style={{ margin: 'auto' }}>
          <h1 className="text-3xl font-bold mb-6">{renderTitle()}</h1>
          <p className="text-lg leading-relaxed mb-6">
            {description.split('\n').map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </p>

          {/* Google Icon with Animation */}
          <div className="relative flex items-center space-x-2 bg-white p-2 rounded-lg -mt-4 mb-4">
            <FaGoogle className="text-blue-500 text-2xl" />
            <div className="relative flex items-center space-x-3">
              <div className="flex justify-center items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-yellow-500 text-xl"
                    style={{
                      animation: `starAnimation 4s ease-in-out infinite ${i * 0.3}s`, // Looping animation
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 relative">
            <DownloadBtn />

            {/* Overlapping Circles with Profile Images */}
            <div className="relative flex justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 rounded-full overflow-hidden relative group cursor-pointer`}
                  style={{
                    marginLeft: index === 0 ? '0' : '-20px', // Adjust overlap distance here
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 group-hover:z-50 transition duration-300">
                    <img
                      src={image}
                      alt={`User ${index + 1}`}
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-1/2 w-full lg:pl-8" style={{ marginTop: '5rem' }}>
          <div
            style={{
              borderRadius: '7px',
              boxShadow: '0 4px 36px rgb(0 0 0 / 25%)',
            }}
          >
            <CareerForm />
          </div>
        </div>
      </div>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 transform transition-all duration-300 scale-100 opacity-100">
            <img
              src={selectedImage}
              alt="Selected User"
              className="w-64 h-64 object-cover rounded-full"
              loading="lazy"
            />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
