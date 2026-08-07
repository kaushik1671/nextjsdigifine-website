import React from "react";
import { FiDownload, FiFileText } from "react-icons/fi";

const BrochureCard = ({
  icon,
  title,
  fileUrl,
  fileType = "PDF",
  // fileSize = "2.4 MB",
}) => {
  return (
    <div
      className="group relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl p-[1px]
      bg-gradient-to-br from-blue-500  to-blue-800
      transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Inner Card */}
      <div
        className="relative flex flex-col justify-between h-72 rounded-3xl p-6
        bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden"
      >
        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Top Section */}
        <div className="flex items-start gap-4 relative z-10">
          {/* Icon */}
          <div className="text-2xl bg-white/20 p-3 rounded-xl">
            { <FiFileText />}
          </div>

          {/* Title + Meta */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              {title}
            </h3>

            <div className="flex items-center gap-2 mt-1 text-xs text-white/80">
              <span className="bg-white/20 px-2 py-0.5 rounded-md">
                {fileType}
              </span>
              {/* <span>•</span> */}
              {/* <span>{fileSize}</span> */}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/80 mt-3 relative z-10">
          Download the brochure to explore more details
        </p>

        {/* Button */}
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 mt-4 w-full bg-white text-indigo-700 rounded-xl px-4 py-2.5 font-semibold
          flex items-center justify-center gap-2
          transition-all duration-300
          hover:bg-gray-100 hover:scale-[1.03] active:scale-95"
        >
          <FiDownload className="text-lg group-hover:translate-y-0.5 transition" />
          Download
        </a>
      </div>

      {/* Glow Effect */}
      {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-indigo-500/30 transition duration-500"></div> */}
    </div>
  );
};

export default BrochureCard;