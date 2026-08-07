"use client";
import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const { pathname } = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;