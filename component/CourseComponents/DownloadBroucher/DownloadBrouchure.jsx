"use client";

import React, { useEffect, useMemo, useState } from "react";
import { brochureConfig } from "./BroucherConfig";
import BrochureCard from "./BrochureCard"; 

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

const DownloadBrochure = ({ type }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentData = useMemo(() => {
    return brochureConfig.find((item) => item.route === type);
  }, [type]);

  useEffect(() => {
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
        </div>
      </section>
    );
  }

  if (!mounted) return null;

  return ( 
    <section className="bg-gray-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        
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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentData.cards.map((card, index) => (
            <BrochureCard
              key={card.id || index}
              icon={card.icon}
              title={card.title}
              fileUrl={card.fileUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DownloadBrochure;