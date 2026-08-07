
import React from "react";
import DownloadBtn from "../../Container/DownloadBtn";


export default function DigifineOfferSection({onViewCourses}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* RIGHT IMAGE (shows first on mobile) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src="/images/aboutus/banner_image/class2.webp"
                alt="Students learning digital skills at Digifine"
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Digifine is your perfect go-to institute for all things digital. From
              expertly designed Data Science, Machine Learning, and Digital
              Marketing programs to industry-ready UI/UX and Graphic Design
              courses — Digifine has it all.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              All courses are globally recognized and structured with a powerful
              20% theory and 80% practical approach. Learn using top industry
              tools, real-world projects, and gain access to 100% job placement
              assistance and internships with leading companies across India.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <DownloadBtn buttonText="View Courses" onClick={onViewCourses} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
