import React, { useCallback, lazy, memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../Container/SearchBar';
import GoalLinks from '../Container/GoalLinks';
import CommunityStats from '../Container/CommunityStats';

// Lazy load heavy image component
// const HeroImage = lazy(() => import('../Container/HeroImage'));
import HeroImage from '../Container/HeroImage';

const HeroSection = ({
  title,
  subtitle,
  searchPlaceholder,
  goals,
  learnerCount,
  imageSrc,
  imageAlt,
}) => {
  // useCallback so function reference doesn’t change every render
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);
  const handleSearch = useCallback((query) => {
    console.log('Searching for:', query);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowImage(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="flex flex-col px-4 sm:px-6 lg:px-10 my-6 md:my-12 max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Side - Content */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            
            {/* Heading */}
            <header>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight font-raleway">
                {title}
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
                {subtitle}
              </h2>
            </header>

            {/* Search Bar */}
            <div className="mt-4">
              <SearchBar 
                placeholder={searchPlaceholder}
                onSearch={handleSearch}
              />
            </div>

            {/* Goals Section */}
            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <p className="text-sm font-medium text-gray-700">
                  Or select your goal
                </p>
                <i className="icon-target-arrow text-gray-500"></i>
              </div>
              <GoalLinks goals={goals} />
            </div>

            {/* Community Stats */}
            <div className="mt-6 md:mt-4">
              <CommunityStats learnerCount={learnerCount} />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="justify-center">
            {/* <HeroImage
              imageSrc={imageSrc} 
              altText={imageAlt} 
              // loading="lazy"
            /> */}

<div className="m-4 md:w-96 xs:w-full md:h-full md:rounded-2xl rounded-2xl relative bg-black xs:px-4 md:px-0">
      <div className="relative">
        <div className="md:pt-8 xs:pt-7 xs:pb-5 xs:px-2">
          <img
            src={imageSrc}
            alt='hero_image'
            className="rounded-lg mx-auto xs:rounded-xl md:rounded-lg xs:border-4 xs:border-white xs:shadow-lg"
            loading="lazy"
            style={{
              width: '95%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// PropTypes optimization: shape for goals array instead of generic
HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  learnerCount: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

// Memoize component to avoid unnecessary re-renders
export default memo(HeroSection);
