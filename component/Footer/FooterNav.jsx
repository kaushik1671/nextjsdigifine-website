"use client";
import React, { useState } from "react";
import CareerForm from "../Container/CareerForm";
import MobileNavCourses from "./MobileNavCourses";

const FooterNav = ({ openCourses }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const openFormModal = () => setShowFormModal(true);
  const closeFormModal = () => setShowFormModal(false);

  const handleWhatsappClick = () => {
    const url = window.location.href.toLowerCase();
    let message = "";

    // if(url.includes("digital-marketing-course-in-mumbai")){
    //   message = "Hi Team,\nCould you share the PG in Digital Marketing Course brochure?"
    // }
    // else if (url.includes("digital-marketing")) {
    //   message = "Hi Team,\nCould you share the Digital Marketing Course brochure?";
    // } else if (url.includes("data-science")) {
    //   message = "Hi Team,\nCould you share the Data Science with Machine Learning Course brochure?";
    // } else if (url.includes("graphic-design")) {
    //   message =
    //     "Hi Team,\nCould you share the Graphic Design and Video Editing Course brochure?";
    // } else if (url.includes("web-development")) {
    //   message = "Hi Team,\nCould you share the Full Stack Development Course brochure?";
    // } else if (url.includes("ai-ml")) {
    //   message =
    //     "Hi Team,\nCould you share the Data Science, Machine Learning, and AI Course brochure?";
    // } else {
    //   message =
    //     "Hi Team,\nCould you share the brochure?\n\n" +
    //     "1. Digital Marketing\n" +
    //     "2. Graphic Design\n" +
    //     "3. Full Stack Developer Course\n" +
    //     "4. Data Analytics Course\n" +
    //     "5. Data Science, Machine Learning & AI Course\n" +
    //     "6. Data Science with AI Integration";
    // }




// -------------------- DIGITAL MARKETING - MUMBAI --------------------

if (url.includes("digital-marketing-course-in-mumbai")) {
  message = "Hi Team,\nCould you share the PG in Digital Marketing Course brochure?";
}
else if (url.includes("ai-powered-digital-marketing-course-in-mumbai")) {
  message = "Hi Team,\nCould you share the MBA in Digital Marketing Course brochure?";
}
else if (url.includes("masters-in-digital-marketing-program-digital-marketing-masters-program-d-a-d-e")) {
  message = "Hi Team,\nCould you share the Masters in Digital Marketing Program brochure?";
}
else if (url.includes("graduate-in-digital-marketing-course-in-mumbai")) {
  message = "Hi Team,\nCould you share the Graduate in Digital Marketing Course brochure?";
}
else if (url.includes("digital-marketing-institute-in-mumbai")) {
  message = "Hi Team,\nCould you share the Advanced Executive Program in Digital Marketing brochure?";
}

// -------------------- GRAPHIC DESIGN - MUMBAI --------------------

else if (url.includes("graphic-design-course-in-mumbai-with-placement")) {
  message = "Hi Team,\nCould you share the Graduate in Graphic Design Course brochure?";
}
else if (url.includes("advanced-graphic-design-course-in-mumbai-with-placement-in-mumbai")) {
  message = "Hi Team,\nCould you share the Master in Graphic Design Course brochure?";
}
else if (url.includes("multimedia-course-animation-classes")) {
  message = "Hi Team,\nCould you share the Multimedia and Animation Course brochure?";
}
else if (url.includes("video-editing-course-in-mumbai-with-placement")) {
  message = "Hi Team,\nCould you share the Video Editing Course brochure?";
}
else if (url.includes("uiux-design-course")) {
  message = "Hi Team,\nCould you share the UI/UX Design Course brochure?";
}

// -------------------- IT - MUMBAI --------------------

else if (url.includes("data-science-machine-learning-program")) {
  message = "Hi Team,\nCould you share the Data Science and Machine Learning Program brochure?";
}
else if (url.includes("data-analytics-course-in-mumbai")) {
  message = "Hi Team,\nCould you share the Data Analytics Course brochure?";
}
else if (url.includes("full-stack-developer-course")) {
  message = "Hi Team,\nCould you share the Full Stack Developer Course brochure?";
}
else if (url.includes("full-stack-python-development-course")) {
  message = "Hi Team,\nCould you share the Full Stack Python Development Course brochure?";
}
else if (url.includes("certification-in-data-science-and-ai")) {
  message = "Hi Team,\nCould you share the Certification in Data Science and AI Course brochure?";
}
else if (url.includes("data-science-machine-learning-ai-course")) {
  message = "Hi Team,\nCould you share the PG in Data Science, Machine Learning & AI Course brochure?";
}

// -------------------- DIGITAL MARKETING - VASHI --------------------

else if (url.includes("post-graduate-course-in-digital-marketing-navi-mumbai-vashi")) {
  message = "Hi Team,\nCould you share the PG in Digital Marketing Course (Vashi) brochure?";
}
else if (url.includes("ai-powered-digital-marketing-course-in-mumbai-in-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the MBA in Digital Marketing Course (Vashi) brochure?";
}
else if (url.includes("masters-in-digital-marketing-program-digital-marketing-masters-program-d-a-d-e-in-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Masters in Digital Marketing Program (Vashi) brochure?";
}
else if (url.includes("graduate-in-digital-marketing-course-in-mumbai-in-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Graduate in Digital Marketing Course (Vashi) brochure?";
}
else if (url.includes("executive-program-in-digital-marketing-in-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Executive Program in Digital Marketing (Vashi) brochure?";
}

// -------------------- GRAPHIC DESIGN - VASHI --------------------

else if (url.includes("graduate-in-graphic-design-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Graduate in Graphic Design Course (Vashi) brochure?";
}
else if (url.includes("master-in-graphic-design-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Master in Graphic Design Course (Vashi) brochure?";
}
else if (url.includes("multimedia-in-graphic-design-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Multimedia in Graphic Design Course (Vashi) brochure?";
}

// -------------------- IT - VASHI --------------------

else if (url.includes("data-science-and-machine-learning-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Data Science and Machine Learning Course (Vashi) brochure?";
}
else if (url.includes("certification-in-data-analytics-course-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Data Analytics Course (Vashi) brochure?";
}
else if (url.includes("master-in-full-stack-development-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Master in Full Stack Development Course (Vashi) brochure?";
}
else if (url.includes("master-in-full-stack-development-with-python-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Master in Full Stack Development with Python Course (Vashi) brochure?";
}
else if (url.includes("certification-in-data-science-and-ai-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the Certification in Data Science and AI Course (Vashi) brochure?";
}
else if (url.includes("post-graduate-in-data-science-with-ml-and-ai-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the PG in Data Science with ML & AI Course (Vashi) brochure?";
}
else if (url.includes("uiux-design-course-at-vashi-mumbai")) {
  message = "Hi Team,\nCould you share the UI/UX Design Course (Vashi) brochure?";
}

// -------------------- HYDERABAD --------------------

else if (url.includes("data-science-machine-learning-artificial-intelligence-course-in-hyderabad")) {
  message = "Hi Team,\nCould you share the Data Science, Machine Learning & AI Course (Hyderabad) brochure?";
}
else if (url.includes("full-stack-developer-course-in-hyderabad")) {
  message = "Hi Team,\nCould you share the Full Stack Developer Course (Hyderabad) brochure?";
}
else if (url.includes("data-analyst-course-in-hyderabad-with-100-placement-guaranteed")) {
  message = "Hi Team,\nCould you share the Data Analyst Course (Hyderabad) brochure?";
}
else if (url.includes("ai-powered-post-graduate-digital-marketing-program-in-hyderabad")) {
  message = "Hi Team,\nCould you share the AI-Powered PG in Digital Marketing Course (Hyderabad) brochure?";
}

// -------------------- DEFAULT --------------------

else {
  message =
    "Hi Team,\nCould you share the brochure?\n\n" +
    "1. Digital Marketing\n" +
    "2. Graphic Design\n" +
    "3. Full Stack Developer Course\n" +
    "4. Data Analytics Course\n" +
    "5. Data Science, Machine Learning & AI Course\n" +
    "6. Data Science with AI Integration";
}


    const finalLink = `https://wa.me/918169004863?text=${encodeURIComponent(message)}`;
    window.open(finalLink, "_blank");
  };

  const navItems = [
   
    { id: "contact", label: "Contact", icon: "/images/FooterNav/mob-call.svg", link: "tel:+918169004863" },
    { id: "chat", label: "Download Brochure", icon: "/images/FooterNav/mob-chat.svg", onClick: handleWhatsappClick },
    // { id: "brochure", label: "Brochure", icon: "/images/FooterNav/dload.svg", onClick: openFormModal }, 
    {
      id: "courses",
      label: "Courses",
      icon: "/images/FooterNav/mob-book.svg",
      onClick: () => setShowCourses(true),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full rounded-t-2xl shadow-lg z-[111] md:hidden py-3 -mb-2">
      {/* Show Courses Modal */}
      {showCourses && <MobileNavCourses closeCourses={() => setShowCourses(false)} />}

      {/* Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/30 backdrop-blur-sm ">
          <div className="relative bg-white rounded-[20px] shadow-xl w-full max-w-3xl p-6 overflow-auto max-h-[90vh]">
            <button
              onClick={closeFormModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
              aria-label="Close"
            >
              X
            </button>
            <div className="w-full md:w-[600px] mx-auto">
              <CareerForm redirectlink="digital-marketing-mumbai" />
            </div>
          </div>
        </div>
      )}




<div className="fixed bottom-0 left-0 w-full z-[111] md:hidden">

  {/* 🔥 Background fade (fixes blue bleed) */}
  <div className="absolute bottom-0 left-0 w-full h-28 to-transparent pointer-events-none" />

  {/* 🚀 Floating Dock */}
  <div className="relative bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md">
    <div className="flex justify-between items-center px-6 py-3 rounded-2xl 
     bg-neutral-900/90 
      backdrop-blur-xl 
      border border-white/10
      shadow-[0_10px_30px_rgba(0,0,0,0.35)]">

      {navItems.map((item) => {
        const isChat = item.id === "chat";

        return (
          <div key={item.id} className="flex-1 flex justify-center relative">

            {isChat ? (
              // 🔥 Floating Main Action
              <button
                onClick={item.onClick}
                className="absolute -top-10 flex items-center justify-center w-16 h-16 rounded-2xl 
                bg-gradient-to-br from-green-400 to-green-600 
                shadow-[0_10px_30px_rgba(34,197,94,0.7)]
                ring-4 ring-neutral-900
                active:scale-90 transition-all duration-200"
              >
                <img src={item.icon} alt={item.label} className="h-12 w-12" />
              </button>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                className="flex flex-col items-center text-gray-300 
                 hover:text-white 
                transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl  bg-white/5 group-hover:bg-white/10 transition">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-5 w-5 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[11px] mt-1 font-medium">
                  {item.label}
                </span>
              </button>
            ) : item.link ? (
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-300 
               hover:text-white 
                transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="h-5 w-5 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[11px] mt-1 font-medium">
                  {item.label}
                </span>
              </a>
            ) : null}

             {item.id === "chat" ?  <span className="text-[11px] font-medium mt-9 text-white">
                  {item.label}
                </span> : ""}

          </div>
        );
      })}
    </div>
  </div>
</div>

    </div>
  );
};

export default FooterNav;