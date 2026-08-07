// import React from 'react';
// import PropTypes from 'prop-types';

// const HeroImage = ({ imageSrc, altText }) => {
//   return (
//     <div className="md:w-505 xs:w-full md:h-full md:rounded-2xl relative bg-black">
//       <div className="relative">
//         <div className="md:pt-8 xs:pt-7 xs:pb-5">
//           <img
//             src={imageSrc}
//             alt={altText}
//             className="rounded-lg mx-auto"
//             loading="lazy"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// HeroImage.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   altText: PropTypes.string.isRequired,
// };

// export default HeroImage;

import React from 'react';
import PropTypes from 'prop-types';

const HeroImage = ({ imageSrc, altText }) => {
  return (
    <div className="m-4 md:w-96 xs:w-full md:h-full md:rounded-2xl rounded-2xl relative bg-black xs:px-4 md:px-0">
      <div className="relative">
        <div className="md:pt-8 xs:pt-7 xs:pb-5 xs:px-2">
          <img
            src={imageSrc}
            alt={altText}
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
  );
};

HeroImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default HeroImage;