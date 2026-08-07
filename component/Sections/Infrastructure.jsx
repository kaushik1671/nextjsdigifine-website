import React from 'react';

const Infrastructure = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Flex container for video and content */}
      <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-8 mb-8">
        {/* YouTube Video on the left */}
        <iframe
          className="mb-4 lg:mb-0 flex-shrink-0"
          width="full"
          height="662"
          loading="lazy"
          src="https://www.youtube.com/embed/JZh6aHfJ7xo"
          title="Digifine Academy | Best Institute for Digital Marketing Course | Infrastructure"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Title and content on the right */}
        <div className="p-6 rounded-lg flex flex-col justify-between h-full">
        <h2 className="text-xl font-semibold text-custom-btn mb-4 pb-4 border rounded-2xl p-4 inline-block w-full sm:w-[31%]">
  Our Infrastructure
</h2>


          {/* Bigger title below */}
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Bigger Title Below the Video
          </h3>

          {/* Paragraph below the title */}
          <p className="text-lg text-gray-700 mb-6">
            This is a sample paragraph that describes some additional content. You can write here
            a few lines explaining the context of the title and video above. Feel free to add more
            lines if needed.
          </p>

          {/* Section with numbers and paragraph */}
          <div className="flex flex-col lg:flex-row items-start mb-8 border rounded-xl p-6">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <p className="text-3xl font-bold text-blue-600">85%</p>
              <p className="text-lg text-gray-600">Success Rate</p>
            </div>

            {/* Divider line between success rate and paragraph */}
            <div className="border-2 mt-4 ml-8 border-gray-300 py-11 hidden lg:block" />

            {/* Paragraph on the right of success rate */}
            <div className="flex-1 pl-4 lg:pl-8">
              <p className="text-lg text-gray-600">
                We believe in the power of continuous learning. The 85% success rate reflects the
                effectiveness of our comprehensive training approach, which is designed to give you
                the skills you need to excel.
              </p>
            </div>
          </div>

          {/* Download brochure button */}
          <div className="text-left mt-4">
            <a href="/path-to-brochure.pdf" download>
              <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-xl">
                Download Brochure
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;


