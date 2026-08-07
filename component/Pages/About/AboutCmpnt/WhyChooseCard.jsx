import React from 'react';

// You can pass the icon, title, and content as props to make it reusable.
const WhyChooseCard = ({ icon, title, content }) => {
  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:translate-y-[-10px] hover:bg-blue-500 hover:text-white hover:border-blue-500 border border-gray-200 rounded-lg p-6 shadow-xl hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <div className="text-3xl text-blue-500 mr-4">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mt-3">{content}</p>
    </div>
  );
};

export default WhyChooseCard;
