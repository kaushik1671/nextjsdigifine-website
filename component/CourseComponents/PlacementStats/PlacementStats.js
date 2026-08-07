"use client";

import { FaTrophy, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function PlacementStats() {
  const cards = [
    {
      icon: <FaTrophy className="text-[#046AED] text-xl sm:text-2xl" />,
      value: "12 LPA",
      title: "Highest Package",
      bg: "bg-blue-100",
      textColor: "text-[#046AED]",
    },
    {
      icon: <FaChartLine className="text-[#046AED] text-xl sm:text-2xl" />,
      value: "4.9 LPA",
      title: "Average Package",
      bg: "bg-blue-100",
      textColor: "text-[#046AED]",
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-xl sm:text-2xl" />,
      value: "96%",
      title: "Placement Rate",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
  ];

  return (
    <section className="w-full mt-23 md:mt-35 mb-25 md:mb-35 bg-white flex justify-center px-4">
        {/* <section className="w-full mt-16 md:mt-24 mb-8 md:mb-12 bg-white flex justify-center px-4"> */}
      
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-r from-blue-950 to-blue-900 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] py-6 px-6 sm:px-8 md:px-12 shadow-xl">
        
        {/* Section Heading */}
        <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold mb-6 tracking-wide text-center md:text-left leading-tight">
          <span className="text-blue-400 block sm:inline">PROVEN RESULTS.</span>{" "}
          <span className="text-white block sm:inline">POWERFUL OUTCOMES.</span>
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                index === 2 ? "col-span-1 sm:col-span-2 md:col-span-1" : ""
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-full ${card.bg} flex items-center justify-center shrink-0`}
              >
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center">
                <span className={`text-xl sm:text-2xl md:text-3xl font-black ${card.textColor} leading-none`}>
                  {card.value}
                </span>
                <span className="text-gray-500 text-xs sm:text-sm font-semibold tracking-wide mt-1">
                  {card.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}