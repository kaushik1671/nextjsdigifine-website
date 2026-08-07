import React from 'react';
import DownloadBtn from '../Container/DownloadBtn';

function OurVision() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Flex container for video and content */}
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 mb-8">
        
        {/* Image on the left */}
        {/* <div className="lg:w-1/2 mb-4 lg:mb-0 relative"> */}
          {/* Div behind image */}
          {/* <div className="bg-custom-bg-div rounded-lg absolute inset-0 -z-10 w-full"></div> */}
          
          {/* Image with hover translation effect */}
          {/* <img
            src="/images/banner-image/Siddharth-Mehta-CEO.webp" // Placeholder image URL
            alt="Our Vision"
            loading="lazy"
            className="w-full h-auto rounded-lg transition-transform duration-300 ease-in-out md:hover:-translate-x-12 md:hover:-translate-y-12"
          />
        </div> */}

<div className="lg:w-1/2 mb-4 lg:mb-0">
  <div className="relative group inline-block">
    
    {/* Background */}
    <div className="bg-custom-bg-div rounded-lg absolute inset-0 -z-10"></div>

    {/* Image */}
    <img
      src="/images/banner-image/Siddharth-Mehta-CEO.webp"
      alt="Our Vision"
      loading="lazy"
      className="block w-full h-auto rounded-lg transition-transform duration-300 ease-in-out md:group-hover:-translate-x-12 md:group-hover:-translate-y-12"
    />
    
  </div>
</div>
        
        {/* Title and content on the right */}
        <div className="p-6 rounded-lg flex flex-col justify-between h-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-custom-btn mb-4 pb-4 border rounded-2xl p-4 inline-block w-full sm:w-[27%]">
            Our Vision
          </h2>
          
          {/* Bigger title below */}
          {/* <h3 className="text-4xl font-bold text-gray-900 mb-4">
          Empowering Creators, Shaping Futures
          </h3> */}
          
          {/* Paragraph below the title */} 
          <p className="text-lg text-gray-700 mb-6 text-justify">
            At Digifine Academy, our vision is to ignite a digital revolution that empowers millions with cutting-edge skills in AI-powered digital marketing, creative design, and technology - transforming them into industry leaders who drive economic growth and innovation across India and beyond. We bridge the academia-industry divide through simulation-based learning, replacing rote theory with real-world projects, guaranteed placements, and global certifications, ensuring every student not only secures a thriving career but also contributes to a digitally inclusive society. By equipping underserved talent with practical expertise in Digital Marketing, Graphic Design, Data Analytics, Full-Stack Development, and many more. We foster sustainable societal progress, redefine "Digifine" excellence, and build a future where digital opportunities uplift communities nationwide.
          </p>
          
          
          {/* Download brochure button */}
          <div className="text-left mt-4">
            <DownloadBtn link='/about' />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OurVision;
