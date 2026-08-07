import React, { useState } from "react";

const ProjectCard = ({
  imageSrc,
  title,
  description,
  skills,
  additionalSkillsCount,
  modalIcon,
  modalTitle,
  modalSummary
}) => { 
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="relative rounded-xl xs:rounded-2xl bg-greyscale-white border border-greyscale-5 shadow-hard-normal hover:border-primary-main h-full px-5 py-6 sm:px-0 sm:py-0">
        <div className="flex flex-col md:p-spacing4 xs:p-spacing20 gap-spacing8 md:h-330px xs:h-301px cursor-pointer h-full">
          <div className="flex flex-col xs:gap-spacing20 h-186">
            <img
              alt="image"
              loading="lazy"
              width="50"
              height="full"
              decoding="async"
              className="md:w-94px xs:w-107px h-full xs:h-45px object-cover my-2"
              src={imageSrc}
              draggable="false"
              style={{ color: "transparent" }}
            />
            <div className="flex flex-col justify-start items-start self-stretch gap-spacing4 xs:h-126px md:h-32">
              <div className="flex flex-col self-stretch gap-spacing4">
                <p className="font-medium text-title2 md:-tracking-0.24 xs:-tracking-0.175 line-clamp-1">
                  {title}
                </p>
              </div>
              <div className="flex flex-col self-stretch relative gap-spacing8">
                <p className="self-stretch text-bodySmall text-left font-450 text-greyscale-2 md:-tracking-0.16 xs:-tracking-0.14 line-clamp-4">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="border-solid border border-greyscale-6 w-full"></div>

          <div className="flex flex-col self-stretch relative xs:gap-spacing10 md:gap-spacing12 xs:h-54px">
            <p className="md:text-labelNormal font-medium text-left text-greyscale-main pb-2 xs:text-captionNormal md:-tracking-0.14 xs:-tracking-0.122">
              Skills learned
            </p>

            <div className="flex gap-spacing4">
              {skills.map((skill, index) => (
                <p
                  key={index}
                  className="inline-flex justify-center items-center text-center font-light text-sm opacity-80 border skill-tag !text-black whitespace-nowrap py-2 px-5 rounded-full"
                >
                  {skill}
                </p>
              ))}

              {/* -------- CLICKABLE ADDITIONAL COUNT -------- */}
              {additionalSkillsCount > 0 && (
                <p
                  onClick={handleOpenModal}
                  className="inline-flex justify-center items-center text-center font-light text-sm opacity-80 border skill-tag !text-black whitespace-nowrap py-2 px-5 rounded-full cursor-pointer hover:bg-greyscale-4"
                >
                  +{additionalSkillsCount}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>


      {/* ---------------- MODAL ---------------- */}
{showModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40">
    
    {/* Centered Modal */}
    <div
      className="
        absolute 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        bg-white 
        rounded-xl shadow-lg 
        max-w-md w-[90%] 
        p-6 
      "
    >
      {/* Close Button */}
      <button
        onClick={handleCloseModal}
        className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"
      >
        ×
      </button>

      {/* Icon */}
      {modalIcon && (
        <img
          src={modalIcon}
          alt="icon"
          className="w-16 h-16 mx-auto mb-4"
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-semibold text-center mb-2">
        {`Additional Skills ${additionalSkillsCount}`}
      </h2>
<div className="mt-4">
  {Array.isArray(modalSummary) ? (
    // Array: scrollable numbered list
    <div className="max-h-64 overflow-y-auto">
      <ol className="text-gray-600 space-y-2 list-decimal list-inside">
        {modalSummary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  ) : (
    // String: simple paragraph
    <p className="text-gray-600">{modalSummary}</p>
  )}
</div>

    </div>
  </div>
)}





    </>
  );
};

export default ProjectCard;


