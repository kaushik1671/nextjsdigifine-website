import React from "react";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFileAlt } from "react-icons/fa";


const ProjectsSection = ({subtitle = "Real Projects, Real Learning",para = "Real-world project choices",projects = [{
  imageSrc: "/images/Icons/job.webp",
  title: "SEO",
  description:
    "Learn on-page, off-page and technical SEO by deriving lessons from case studies of various brands like Tata Motors and rank any website with just a few steps!",
  skills: ["SEO"],
  additionalSkillsCount: 7,

  // MODAL CONTENT
  modalIcon: "/images/Icons/award.webp",
  modalTitle: "Additional Skills (7)",
  modalSummary:
    "These include feature engineering, cost-benefit analysis, fraud detection pipelines, model evaluation metrics, and advanced ML techniques used to detect fraudulent transactions.",
},
{
  imageSrc: "/images/Icons/job.webp",
  title: "Marketing and Retail Analytics",
  description:
    "Optimize product categories with Pareto analysis, market basket insights, and data visualization for improved sales.",
  skills: ["Data Understanding"],
  additionalSkillsCount: 5,

  modalIcon: "/images/Icons/award.webp",
  modalTitle: "Additional Skills (5)",
  modalSummary:
    "Skills include Pareto analysis, market basket analysis, pricing insights, customer segmentation, and retail performance visualization.",
},
{
  imageSrc: "/images/Icons/job.webp",
  title: "Ecommerce Analytics",
  description:
    "Identify revenue dips and churn, optimize marketing spends with a market mix model, and present strategic recommendations.",
  skills: ["Data Understanding"],
  additionalSkillsCount: 4,

  modalIcon: "/images/Icons/award.webp",
  modalTitle: "Additional Skills (4)",
  modalSummary:
    "Includes revenue forecasting, churn analysis, marketing mix modeling, and dashboard-building for ecommerce KPIs.",
},
{
  imageSrc: "/images/Icons/job.webp",
  title: "Customer Sentiment Analysis",
  description:
    "Build a product recommendation system using sentiment analysis and deploy it for real-world use.",
  skills: ["Data Understanding"],
  additionalSkillsCount: 5,

  modalIcon: "/images/Icons/award.webp",
  modalTitle: "Additional Skills (5)",
  modalSummary:
    "Covers NLP preprocessing, sentiment scoring, recommendation algorithms, text classification, and model deployment.",
},
{
  imageSrc: "/images/Icons/job.webp",
  title: "MRI Data Enhancement",
  description:
    "Generate artificial MRI images for diagnostic accuracy using enhanced imaging perspectives.",
  skills: ["Data Understanding"],
  additionalSkillsCount: 4,

  modalIcon: "/images/Icons/award.webp",
  modalTitle: "Additional Skills (4)",
  modalSummary:
    "Includes image preprocessing, augmentation techniques, generative modeling, and medical imaging evaluation metrics.",
},]}) => {


  return (
    <section id="Projects">
      <div className="max-w-6xl mx-auto mt-20 mb-14 px-6 md:px-0">

        {/* HEADER */}
        <div className="flex flex-col gap-2 items-start">
          <p className="font-semibold text-sm text-greyscale-1 ">
            Projects
          </p>

          <h2 className="font-semibold text-3xl xs:text-4xl">
            Learn <span className="text-primary-main">by Doing</span>
          </h2>

          <p className="text-greyscale-2 mt-3">
            {subtitle}
          </p>
        </div>

        {/* STATS */}
        <div className="mt-8 flex items-center gap-4">
          <div className="p-3 rounded-full bg-system-fill-bg-accent-2">
            {/* <i className="fas fa-file-alt text-primary-main text-3xl"></i> */}
            <FaFileAlt className="text-primary-main text-3xl" />
          </div>
          <div>
            <p className="text-2xl font-semibold">{projects.length}</p>
            <p className="text-greyscale-2">{para}</p>  
          </div>
        </div>

        <div className="relative mt-12">
        <button
  className="swiper-button-prev-custom w-10 h-10 flex justify-center items-center absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 bg-primary-main text-white rounded-full shadow-lg hover:bg-primary-dark z-20"
>
  ❮
</button>

<button
  className="swiper-button-next-custom w-10 h-10 flex justify-center items-center absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-primary-main text-white rounded-full shadow-lg hover:bg-primary-dark z-20"
>
  ❯
</button>

        {/* SLIDER FIXED */}
        <div className="mt-10 px-6">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}

          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}  >
                <div className="h-full min-h-[420px] md:min-h-[480px] ">
                <ProjectCard {...project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;