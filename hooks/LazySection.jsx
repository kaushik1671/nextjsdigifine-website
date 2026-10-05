"use client";

import React, { Suspense } from "react";
import { useInView } from "react-intersection-observer";

function LazySection({
  children,
  fallback = <div className="min-h-[100px]" />,
  threshold = 0.1,
  rootMargin = "300px",
  triggerOnce = true,
}) {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
    rootMargin,
  });

  return (
    <section ref={ref}>
      {inView ? (
        <Suspense fallback={fallback}>{children}</Suspense>
      ) : (
        fallback
      )}
    </section>
  );
}

export default LazySection;