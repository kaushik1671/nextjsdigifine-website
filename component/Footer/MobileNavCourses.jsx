"use client";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import coursesData from "./data/footermobilenav";

const MobileNavCourses = ({ closeCourses }) => {
  const [courses] = useState(coursesData);
  const [activeCourse, setActiveCourse] = useState(null);
  const navigate = useRouter();

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md flex flex-col p-5 overflow-auto ">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Courses</h2>
        <button
          onClick={closeCourses}
          className="text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>
      </div>

      {/* Courses List */}
      <ul className="space-y-3" style={{
        paddingBottom : "200px"
      }}>
        {courses.map((course, index) => (
          <li
            key={index}
            className="border rounded-xl p-3 shadow-sm bg-white"
          >
            {/* Course Header */}
            <div
              onClick={() =>
                setActiveCourse(activeCourse === index ? null : index)
              }
              className="flex justify-between items-center cursor-pointer"
            >
              <span className="font-semibold text-gray-800">
                {course.name}
              </span>

              <span
                className={`transform transition-transform duration-300 ${
                  activeCourse === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>

            {/* Sub Courses */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeCourse === index ? "max-h-96 mt-3-" : "max-h-0"
              }`}
            >
              <ul className="space-y-2 ">
                {course.subCourses.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="p-2 rounded-lg hover:bg-blue-50 cursor-pointer text-gray-700 hover:text-blue-600 transition"
                    onClick={() => {
                      navigate.push(sub.link); // ✅ navigation works now
                      closeCourses(); // optional: close menu
                    }}
                  >
                    {sub.title}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavCourses;