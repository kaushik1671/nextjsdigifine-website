import React from 'react';

// Importing the logo image
const logo = '/images/logo/digi-logo-white.svg';

function LogoWhite() {
  return (
    <div style={{width:'79%'}}>
      <img src={logo} alt="digifine-logo" loading="lazy" className="h-12 w-auto" />
    </div>
  );
}

export default LogoWhite;
