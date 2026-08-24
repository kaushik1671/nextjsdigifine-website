"use client";

import { useEffect, useMemo } from "react";
import { brochureConfig } from "../../../component/CourseComponents/DownloadBroucher/BroucherConfig";
import BrochureCard from "../../../component/CourseComponents/DownloadBroucher/BrochureCard";
import { useParams } from "next/navigation";

const conversionMap = {
  "course-brochures": "AW-834246291/hphSCNW6i7IaEJOt5o0D",
  "it-course-brochures": "AW-834246291/29uyCLu-i7IaEJOt5o0D",
  "graphic-design-curriculum": "AW-834246291/XMXzCLi-i7IaEJOt5o0D",
};

const sendConversion = (sendTo) => {
  if (typeof window === "undefined") return;

  const trySend = () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: sendTo,
      });
      return;
    }

    setTimeout(trySend, 300);
  };

  trySend();
};

export default function DownloadBrochure() {
  const params = useParams();
  const type = params?.type;

  // 🔍 Debug (remove later)
  console.log("TYPE:", type);

  const currentData = useMemo(() => {
    return brochureConfig.find((item) => item.route === type);
  }, [type]);

  useEffect(() => {
    if (!type) return;

    const sendTo = conversionMap[type];
    if (!sendTo) return;

    const storageKey = `conv_${type}`;
    if (sessionStorage.getItem(storageKey)) return;

    sendConversion(sendTo);
    sessionStorage.setItem(storageKey, "true");
  }, [type]);

  if (!currentData) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">
            No Brochures Available
          </h2>
          <p className="mt-3 text-gray-500">
            The brochure you’re looking for doesn’t exist or may have been moved.
          </p>
          <p className="mt-1 text-sm text-gray-400">
            Please check the URL or contact our support team.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {currentData.heading}
          </h1>

          {currentData.subHeading && (
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              {currentData.subHeading}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentData.cards.map((card) => (
            <BrochureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              fileUrl={card.fileUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}