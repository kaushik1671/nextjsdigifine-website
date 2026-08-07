"use client";

import React from "react";
import PropTypes from "prop-types";

const VerticalTimeline = ({
  steps = [],
  title,
  bluetitle,
  paragraph,
}) => {
  if (!steps || !steps.length) return null;

  return (
    <>
      <style>{`
        /* widget: Vertical Curved Timeline */
        #uc_vertical_curve_timeline_elementor_6b5fb502.ue-container {
          width: 100%;
          display: flex;
          align-items: center;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-timeline {
          width: 100%;
          margin: 0 auto;
          /* Mobile padding increase ki hai taaki numbers cut na ho */
          padding: 0 10px;
        }

        @media (min-width: 768px) {
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-timeline {
            padding: 0 20px;
          }
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-item-image {
          overflow: hidden;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-item-image img {
          width: 100%;
          height: 100%;
          transition: 0.3s;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card {
          position: relative;
          display: flex;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-slno {
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(-50%, -50%);
          display: grid;
          place-content: center;
          background-color: rgb(5, 5, 5);
          color: #fff;
          font-weight: bold;
          width: 36px;
          height: 36px;
          font-size: 0.9rem;
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        @media (min-width: 768px) {
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-slno {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        /* Mobile Adjustments for Left/Right padding */
        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd) {
          padding: 24px 0 24px 24px;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) {
          padding: 24px 24px 24px 0;
        }

        @media (min-width: 768px) {
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd) {
            padding: 30px 0 30px 30px;
          }

          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) {
            padding: 30px 30px 30px 0;
          }
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card::before {
          content: "";
          position: absolute;
          width: 50%;
          border-color: rgb(120, 120, 120);
          border-style: dashed;
          z-index: 1;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd)::before {
          left: 0px;
          top: -5px;
          bottom: -5px;
          border-width: 4px 0 4px 4px;
          border-radius: 16px 0 0 16px;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even)::before {
          right: 0;
          top: 0;
          bottom: 0;
          border-width: 4px 4px 4px 0;
          border-radius: 0 16px 16px 0;
        }

        @media (min-width: 768px) {
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd)::before {
            border-width: 5px 0 5px 5px;
            border-radius: 20px 0 0 20px;
          }
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even)::before {
            border-width: 5px 5px 5px 0;
            border-radius: 0 20px 20px 0;
          }
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:first-child::before {
          border-top: 0;
          border-top-left-radius: 0;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:last-child:nth-child(odd)::before {
          border-bottom: 0;
          border-bottom-left-radius: 0;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:last-child:nth-child(even)::before {
          border-bottom: 0;
          border-bottom-right-radius: 0;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-info {
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          padding: 10px;
          width: 100%;
          background-color: transparent;
          color: #003366;
          z-index: 5;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-title {
          position: relative;
          font-weight: 700;
          color: rgb(30, 41, 59);
          margin-bottom: 6px;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) {
          text-align: right;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) .ue-item-image {
          margin-left: auto;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) .ue-info {
          padding-right: 12px;
          margin-left: auto;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd) .ue-info {
          padding-left: 12px;
        }

        @media (min-width: 768px) {
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) .ue-info {
            padding-right: 20px;
          }
          #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(odd) .ue-info {
            padding-left: 20px;
          }
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) > .ue-slno {
          right: 0%;
          left: auto;
          transform: translate(50%, -50%);
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(1)::before {
          height: 50%;
          top: auto;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:last-child::before {
          height: 50%;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-button-link {
          width: fit-content;
          z-index: 100;
        }

        #uc_vertical_curve_timeline_elementor_6b5fb502 .ue-card:nth-child(even) .ue-button-link {
          margin-left: auto;
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto my-6 px-4 md:px-0">
        <div className="flex flex-col justify-start items-start relative md:gap-0 gap-2">
          <p className="font-semibold text-center text-sm text-gray-800 md:tracking-tight tracking-tight md:mb-2 mb-1">
            Steps
          </p>
          <div className="relative items-start justify-start flex-grow-0 flex-shrink-0 gap-2">
            <h2 className="font-semibold text-3xl md:text-4xl tracking-tight gap-2">
              {title} <span className="text-primary-main">{bluetitle}</span>
            </h2>
          </div>
          {paragraph && (
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              {paragraph}
            </p>
          )}
        </div>
      </div>

      {/* Timeline Wrapper - Added extra horizontal padding on mobile (px-8) */}
      <div
        className="ue-container max-w-6xl mx-auto bg-[#E9F2FF] px-8 sm:px-10 md:px-16 py-8 md:py-12 rounded-3xl mb-12"
        id="uc_vertical_curve_timeline_elementor_6b5fb502"
      >
        <div className="ue-timeline">
          <div className="ue-outer">
            {steps.map(({ title, description }, idx) => (
              <div key={idx} className="ue-card">
                <div className="ue-slno">{idx + 1}</div>
                <div className="ue-info">
                  <h3 className="ue-title text-lg md:text-2xl">{title}</h3>
                  <div className="ue-description">
                    <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

VerticalTimeline.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
  bluetitle: PropTypes.string,
  paragraph: PropTypes.string,
};

export default VerticalTimeline;