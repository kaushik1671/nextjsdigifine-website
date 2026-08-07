// TrainerProfile.jsx
import React from "react";
import TrainerCard from "./TrainerCard";

const TrainerProfile = ({ title,subtitle,subtitleHighlight,paragraph,trainers}) => {
  return (
    <section id="TrainerProfile" className="overflow-hidden">
      <div className="flex flex-col xs:px-4 md:px-0 px-6 my-14 md:my-28 max-w-6xl w-full mx-auto md:gap-12 gap-6">
        {/* Header */}
        <div className="flex flex-col justify-start items-start w-full md:gap-0 gap-2">
          <h2 className="font-semibold text-left md:text-center text-sm text-greyscale-1 tracking-tight md:mb-2">
            {title}
          </h2>
          <div className="w-full">
            <p className="font-semibold text-2xl md:text-4xl tracking-tight">
              {subtitle}<span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
          <p className="text-sm text-greyscale-2 mt-2 md:mt-3">{paragraph}</p>
        </div>

        {/* Trainers List */}
        <div className="grid md:grid-cols-3 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerProfile;
