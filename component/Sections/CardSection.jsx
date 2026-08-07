import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// ✅ Reusable Card Component
const Card = React.memo(({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    backgroundImage: 'linear-gradient(45deg, #000000 40%, #429AFF 100%)',
  };

  const textHoverStyle = isHovered ? { color: 'white' } : {};

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl p-4 flex flex-col items-center"
      style={isHovered ? hoverStyle : {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        className="w-[35%] object-cover rounded-t-lg mb-4"
      />
      <div className="p-4 flex flex-col justify-center items-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900 text-center" style={textHoverStyle}>
          {title}
        </h3>
        <p className="text-gray-700 text-center" style={textHoverStyle}>
          {description}
        </p>
      </div>
    </motion.div>
  );
});

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// ✅ CardSection Component
const CardSection = ({ cardData = [], title = "Steps towards success with Digifine" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('card-section');
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="px-4 py-8 max-w-6xl mx-auto"
      id="card-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Title */}
      <h2 className="text-3xl font-semibold mb-10 text-gray-900 text-left inline-block rounded-full outline outline-1 outline-blue-500 px-4 py-2 max-w-3xl">
        {title}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-custom-bg-div p-6 rounded-lg">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

// ✅ Prop validation
CardSection.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default CardSection;
