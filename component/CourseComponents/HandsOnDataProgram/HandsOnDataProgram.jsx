import React from "react";
import { AcademicCapIcon, CodeIcon, ChartBarIcon } from '@heroicons/react/solid'; // Example for heroicons

const HandsOnDataProgram = ({
  title = "Most Hands-on Data Program",
  subtitlePart1 = "Master 15+ Cutting-Edge",
  subtitleHighlight = "Data Science Tools",
  tools = [
    {
      icon: AcademicCapIcon,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 1, Custom Tool 2",
    },
    {
      icon: CodeIcon,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
    {
      icon: ChartBarIcon,
      category: "Data Management and Development Tools",
      toolsList: "Tools: Custom Tool 3, Custom Tool 4",
    },
  ],
  imageSrc = "/images/toolslogo/tools.webp",
  imageAlt = "Tools Logo Collage",
}) => {

  

  return (
    <section id="Most-Hands-on-Data-Program" className="sm:my-10 px-6 md:px-0 mt-10">
      <div className="flex flex-col xs:px-5 max-w-6xl w-full mx-auto md:my-40 sm:my-0 xs:gap-9 md:gap-12">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start relative md:gap-0 xs:gap-2 w-full">
          <h2 className="font-semibold text-center text-sm text-greyscale-1 md:tracking-tight xs:tracking-tight md:mb-2 whitespace-nowrap capitalize">
            {title}
          </h2>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
            <p className="font-semibold text-4xl tracking-tight gap-2 md:w-[596px] whitespace-break-spaces">
              {subtitlePart1} <span className="text-primary-main">{subtitleHighlight}</span>
            </p>
          </div>
        </div>

        {/* Tools Section */}
        <div className="inline-flex items-start">
          <div className="flex justify-start items-start self-stretch gap-8">
            <div className="flex flex-col gap-8">
              {/* Tools List */}
              <div className="flex flex-col gap-8">
                {tools?.map((tool, index) =>
                
                {
                  const Icon = tool.icon
                  return (
                  <div
                    key={index}
                    className="flex flex-row justify-start items-start self-stretch gap-4"
                  >
                    {/* Icon */}
                    <div className="flex justify-start items-start relative gap-8 p-3.5 rounded-full bg-system-fill-bg-accent-2">
                      {/* {tool.icon}
                       */}
                       {/* <i className={tool.icon}></i> */}
                       <Icon className="w-6 h-6 text-dark-red" />
                    </div>

                    {/* Tool Details */}
                    <div className="flex flex-col justify-start items-start relative gap-1">
                      <p className="text-2xl font-semibold text-left text-greyscale-main md:tracking-tight">
                        {tool.category}
                      </p>
                      <p className="self-stretch md:w-[400px] font-medium text-sm text-left text-greyscale-2 md:tracking-tight">
                        {tool.toolsList}
                      </p>
                    </div>
                  </div>
                )})}
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-[490px] md:h-[360px] relative hidden md:block">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="md:rounded-lg object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Section for Mobile */}
      <div className="md:hidden mt-8 relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-lg object-contain w-full h-[250px] md:h-[360px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HandsOnDataProgram;
