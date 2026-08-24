import React from 'react';

// Importing the logo image
const logo = '/images/logo/digi-logo.svg';

function Logo() {
  return (
    <div style={{width:'79%'}}>
      <img src={logo} alt="digifine-logo" loading="lazy" className="h-12 w-auto" />
    </div>
  );
}

export default Logo;

// import React from 'react';

// function Logo() {
//   return (
//     <div style={{ width: '79%' }}>
//       {/* Reference directly from the public folder */}
//       <img 
//         src="/images/logo/digi-logo.webp" 
//         alt="digifine-logo" 
//         loading="lazy" 
//         className="h-12 w-auto" 
//       />
//     </div>
//   );
// }

// export default Logo;

