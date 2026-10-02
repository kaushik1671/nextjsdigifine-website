// src/hooks/usePageTracking.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: location.pathname,
      });
      console.log("Pageview tracked:", location.pathname); // optional debug
    }
  }, [location]);
}