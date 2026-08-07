import React from 'react';
import LogoSlider from './LogoSlider';

const logos = [
  { src: '/images/logo/company/clogo1.webp', alt: 'Logo 1' },
  { src: '/images/logo/company/clogo2.webp', alt: 'Logo 2' },
  { src: '/images/logo/company/clogo3.webp', alt: 'Logo 3' },
  { src: '/images/logo/company/clogo4.webp', alt: 'Logo 4' },
  { src: '/images/logo/company/clogo5.webp', alt: 'Logo 5' },
  { src: '/images/logo/company/clogo6.webp', alt: 'Logo 6' },
  { src: '/images/logo/company/clogo7.webp', alt: 'Logo 7' },
  { src: '/images/logo/company/clogo8.webp', alt: 'Logo 8' },
  { src: '/images/logo/company/clogo9.webp', alt: 'Logo 9' },
  { src: '/images/logo/company/clogo10.webp', alt: 'Logo 10' },
  { src: '/images/logo/company/clogo11.webp', alt: 'Logo 11' },
  { src: '/images/logo/company/clogo12.webp', alt: 'Logo 12' },
  { src: '/images/logo/company/clogo13.webp', alt: 'Logo 13' },
  { src: '/images/logo/company/clogo14.webp', alt: 'Logo 14' },
  { src: '/images/logo/company/clogo15.webp', alt: 'Logo 15' },
  { src: '/images/logo/company/clogo16.webp', alt: 'Logo 16' },
  { src: '/images/logo/company/clogo17.webp', alt: 'Logo 17' },
  { src: '/images/logo/company/clogo18.webp', alt: 'Logo 18' },
  { src: '/images/logo/company/clogo19.webp', alt: 'Logo 19' },

];

const animations = [
  { name: 'animate-marquee', margin: '2rem 0' },
  // { name: 'animate-marqueereverse', margin: '2rem 0' },
];

function LogoSliding() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-left justify-center p-4">
      {/* Title */}

      {/* Logo Sliders */}
      <div className='w-full'>
        {animations.map((animation, index) => (
          <div key={index} className="my-8">
            <LogoSlider logos={logos} animation={animation.name} />
          </div>
        ))}
      </div>

      {/* Button to Book Demo Class */}
      {/* <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Book Demo Class
      </button> */}
    </div> 
  );
}

export default LogoSliding;
