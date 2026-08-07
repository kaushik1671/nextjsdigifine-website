import React from "react";

const TrainerCard = ({ image, name, designation, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 border border-gray-600">
      {/* Slanted Overlay */}
      <div className="absolute inset-0 -z-10 bg-white group-hover:bg-primary-main">
        <div className="relative -top-48 left-0 w-[300%] h-16 transform rotate-45 origin-top-left bg-primary-main group-hover:bg-white group-hover:-translate-x-44 transition-all duration-500 ease-in-out"></div>
        <div className="relative -top-48 mt-16 left-0 w-[300%] h-16 transform rotate-45 origin-top-left bg-primary-main group-hover:bg-white group-hover:-translate-x-44 transition-all duration-500 ease-in-out"></div>

      </div>
      
      {/* Background Image */}
      <div className="relative w-1/3 h-52"></div>
      <div
        className="absolute inset-0 bg-cover transition duration-300  ease-in-out filter grayscale group-hover:grayscale-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div/>

      
      <div
        className="relative z-20 p-6 flex flex-col h-72 justify-end text-white transition-colors duration-300
        bg-gradient-to-t from-black via-transparent to-transparent"
      >
      {/* Content Overlay */}
      <div className="relative z-20 pt-6 flex flex-col h-72 justify-end text-white transition-colors duration-300">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm font-medium">{designation}</p>
        <p className="text-xs mt-2">{description}</p>
      </div>

       </div>
    </div>
  );
};

export default TrainerCard;