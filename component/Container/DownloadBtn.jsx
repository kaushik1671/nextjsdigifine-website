// import React from 'react';
// import { AiOutlineArrowRight } from 'react-icons/ai'; // You can change the icon here

// const DownloadBtn = ({ buttonText = "Know More", icon: Icon = AiOutlineArrowRight }) => {
//   const handleClick = () => {
//     alert('Redirecting to more details!');
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="flex items-center px-9 py-3 text-white font-semibold rounded-full hover:bg-custom-btn-hover transition duration-300 bg-custom-btn outline outline-2 outline-offset-4 outline-custom-btn"
//     >
//       {buttonText} {/* The button text */}
//       <Icon className="ml-2" /> {/* The icon next to the text */}
//     </button>
//   );
// };

// export default DownloadBtn;

import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Default icon
// import { Link } from 'react-router-dom'; // For routing
import Link from "next/link";
import PropTypes from 'prop-types';

const DownloadBtn = ({ 
  buttonText = "Know More", 
  icon: Icon = AiOutlineArrowRight,
  link = '/', // Default link to home
  onClick // Optional click handler
}) => {
  // Handle button click
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={link} className="w-max">
      <button
        onClick={handleClick}
        className="flex items-center px-9 py-3 text-white font-semibold rounded-full hover:bg-custom-btn-hover transition duration-300 bg-custom-btn outline outline-2 outline-offset-4 outline-custom-btn"
      >
        {buttonText} {/* The button text */}
        <Icon className="ml-2" /> {/* The icon next to the text */}
      </button>
    </Link>
  );
};

DownloadBtn.propTypes = {
  buttonText: PropTypes.string,
  icon: PropTypes.elementType,
  link: PropTypes.string,
  onClick: PropTypes.func
};

export default DownloadBtn;