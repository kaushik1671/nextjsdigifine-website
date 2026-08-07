import React from "react";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <a 
      href={link} 
      className="block group"
    >
      <div className="
        bg-gray-50
        shadow-md 
        rounded-xl 
        overflow-hidden 
        border 
        border-gray-100 
        hover:shadow-2xl 
        hover:-translate-y-2
        transition-all 
        duration-300
        p-6
      ">

        {/* Image */}
        <div className="w-full h-40 overflow-hidden rounded-md">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
