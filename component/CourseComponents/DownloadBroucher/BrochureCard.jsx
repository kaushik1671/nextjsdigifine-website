// import React from "react";
// import { FiDownload, FiFileText } from "react-icons/fi";

// const BrochureCard = ({
//   icon,
//   title,
//   fileUrl,
//   fileType = "PDF",
//   // fileSize = "2.4 MB",
// }) => {
//   return (
//     <div
//       className="group relative w-full max-w-sm sm:max-w-md mx-auto rounded-3xl p-[1px]
//       bg-gradient-to-br from-blue-500  to-blue-800
//       transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
//     >
//       {/* Inner Card */}
//       <div
//         className="relative flex flex-col justify-between h-72 rounded-3xl p-6
//         bg-white/10 backdrop-blur-xl border border-white/20 text-white overflow-hidden"
//       >
//         {/* Subtle Hover Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

//         {/* Top Section */}
//         <div className="flex items-start gap-4 relative z-10">
//           {/* Icon */}
//           <div className="text-2xl bg-white/20 p-3 rounded-xl">
//             { <FiFileText />}
//           </div>

//           {/* Title + Meta */}
//           <div className="flex-1">
//             <h3 className="text-lg sm:text-xl font-semibold leading-snug">
//               {title}
//             </h3>

//             <div className="flex items-center gap-2 mt-1 text-xs text-white/80">
//               <span className="bg-white/20 px-2 py-0.5 rounded-md">
//                 {fileType}
//               </span>
//               {/* <span>•</span> */}
//               {/* <span>{fileSize}</span> */}
//             </div>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-white/80 mt-3 relative z-10">
//           Download the brochure to explore more details
//         </p>

//         {/* Button */}
//         <a
//           href={fileUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="relative z-10 mt-4 w-full bg-white text-indigo-700 rounded-xl px-4 py-2.5 font-semibold
//           flex items-center justify-center gap-2
//           transition-all duration-300
//           hover:bg-gray-100 hover:scale-[1.03] active:scale-95"
//         >
//           <FiDownload className="text-lg group-hover:translate-y-0.5 transition" />
//           Download
//         </a>
//       </div>

//       {/* Glow Effect */}
//       {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-indigo-500/30 transition duration-500"></div> */}
//     </div>
//   );
// };

// export default BrochureCard;

import React from "react";
import {
  FiDownload,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

const BrochureCard = ({
  title,
  fileUrl,
  fileType = "PDF",
}) => {
  return (
    <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-[30px]">

      {/* Animated Border */}
      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-700 p-[1px] transition-all duration-500 group-hover:scale-[1.02]">
        <div className="h-full w-full rounded-[30px] bg-transparent" />
      </div>

      {/* Main Card */}
      <div
        className="
        relative
        h-[290px]
        sm:h-[310px]
        lg:h-[330px]
        rounded-[30px]
        overflow-hidden
        border border-white/15
        bg-white/10
        backdrop-blur-2xl
        p-6
        sm:p-7
        transition-all
        duration-500
        group-hover:-translate-y-2
        group-hover:shadow-[0_30px_70px_rgba(37,99,235,0.30)]
      "
      >

        {/* Decorative Glow */}
        <div className="absolute -top-20 -right-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-cyan-400/15 blur-3xl"></div>

        {/* Floating circles */}
        <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-white/30 animate-pulse"></div>
        <div className="absolute right-16 bottom-16 h-3 w-3 rounded-full bg-sky-300/40 animate-pulse delay-200"></div>

        {/* Shine */}
        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between">

          {/* Top */}
          <div>

            <div className="flex items-start gap-4">

              {/* Icon */}
              <div className="relative">

                <div className="absolute inset-0 rounded-2xl bg-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition"></div>

                <div
                  className="
                  relative
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-white/25
                  to-white/10
                  border
                  border-white/20
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                "
                >
                  <FiFileText className="text-3xl text-white" />
                </div>
              </div>

              {/* Heading */}
              <div className="flex-1">

                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[2px] text-white/80">
                  {fileType}
                </span>

                <h3 className="mt-3 text-xl font-bold leading-snug text-white sm:text-2xl">
                  {title}
                </h3>

              </div>

            </div>
          </div>

          {/* Button */}
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
            group/button
            flex
            items-center
            justify-between
            rounded-2xl
            bg-white
            px-5
            py-4
            font-semibold
            text-blue-700
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-slate-100
            active:scale-95
            shadow-lg
          "
          >

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-blue-100 p-2 transition group-hover/button:bg-blue-200">
                <FiDownload className="text-lg" />
              </div>

              <span>Download Brochure</span>

            </div>

            <FiArrowRight className="transition duration-300 group-hover/button:translate-x-1" />

          </a>

        </div>

      </div>
    </div>
  );
};

export default BrochureCard;