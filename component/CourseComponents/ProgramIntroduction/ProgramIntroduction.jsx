import React from "react";

const ProgramIntroduction = ({
  title = "MSc AI & Data Science: Your Pathway to AI Career",
  subtitlePart1 = "Key",
  subtitleHighlight = "Program Highlights",
  stats = [
    { value: "15+", label: "Case Studies & Projects" },
    { value: "500+", label: "Hours of learning" },
    { value: "15+", label: "Programming Tools" }
  ],
  features = [
    "India’s First Recognised One-Year Master’s Certification",
    "Earn Complementary Microsoft Certification Credentials",
    "Designed and Delivered by top data science experts mentored by Prof. Dinesh Singh",
    "Extensive Support for Learners without coding background",
    "GenAI Modules for Advanced AI Competency",
    "Capstone Projects Across Multiple Industry Domains"
  ],
  imageSrc = "",
  imageAlt = "Program illustration"
}) => {
  return (
    <section id="Introduction" className="px-4">
      <div className="flex flex-col xs:px-spacing20 max-w-6xl w-full mx-auto mt-12 md:mt-28">
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-spacing8">
          <p className="font-semibold text-left w-full text-sm text-title-all-caps-normal text-greyscale-1 md:-tracking-0.14 xs:-tracking-0.122 mb-2 capitalize">
            Statistics
          </p>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-spacing8">
            <h2 className="font-semibold text-4xl text-heading2 -tracking-0.44 gap-spacing8 whitespace-break-spaces">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:mt-spacing4 xs:mt-spacing36">
          <div className="flex md:gap-spacing8 xs:gap-spacing36 flex-col max-w-600px py-4 w-full">
            <div className="inline-flex flex-wrap justify-between md:flex-row xs:flex-col">
              <div className="inline-flex justify-start items-start gap-spacing8 px-spacing16 py-spacing8 xs:py-spacing20 rounded-2xl bg-white shadow-hard-normal border-1 border-system-stroke-default w-full xs:w-full md:w-fit">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col justify-center items-start xs:px-spacing10 md:pl-0 w-full xs:w-full mx-auto">
                    <p className="md:text-heading3 xs:text-title1 md:-tracking-0.32 xs:-tracking-0.21 font-semibold text-3xl text-primary-main">
                      {stat.value}
                    </p>
                    <p className="font-450 md:text-title3 xs:text-captionSmall text-greyscale-1 md:-tracking-0.18 xs:-tracking-0.105">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:gap-spacing10 xs:gap-spacing16 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="inline-flex xs:gap-spacing6 md:gap-spacing8 items-start">
                  <i className="icon-check-circle xs:text-icon-lg md:text-icon-md text-primary-main"></i>
                  <p className="text-greyscale-1 md:-tracking-0.16 font-450 xs:-tracking-0.14 xs:text-bodySmall md:text-bodyNormal">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 xs:w-full flex justify-center mt-8 md:mt-0">
            <img 
              alt={imageAlt}
              width={650}
              height={650}
              loading="lazy"
              decoding="async"
              className="h-auto max-w-full object-contain" 
              style={{ color: "transparent" }}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramIntroduction;