import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. DIGITAL MARKETING - MUMBAI     
      {
        source: "/mba-in-digital-marketing",
        destination: "/ai-powered-digital-marketing-course-in-mumbai", // Matches your MBAMumbai key
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-mumbai",
        destination: "/ai-powered-pg-in-digital-marketing-in-mumbai", // Matches your PGDM key
        permanent: true,
      },
      {
        source: "/graduate-in-digital-marketing-course-in-mumbai",
        destination: "/digital-marketing-diploma-course-in-mumbai-with-placement", // Matches your GraduateDM key
        permanent: true,
      },
      {
        source: "/masters-in-digital-marketing-program-digital-marketing-masters-program-d-a-d-e",
        destination: "/masters-in-digital-marketing-in-mumbai", // Matches your Masters key
        permanent: true,
      },
      {
        source: "/digital-marketing-institute-in-mumbai",
        destination: "/advanced-digital-marketing-course-in-mumbai", // Matches your AdvancedExecutiveDM key
        permanent: true,
      },

      // 2. DIGITAL MARKETING - VASHI (Google links mapping to your exact coursesData keys)
      {
        source: "/ai-powered-digital-marketing-course-vashi-navi-mumbai",
        destination: "/ai-powered-digital-marketing-course-in-vashi", // Exact key for MBAVashi
        permanent: true,
      },
      {
        source: "/ai-powered-digital-marketing-course-in-mumbai-in-vashi-mumbai",
        destination: "/ai-powered-digital-marketing-course-in-vashi", // Backup rule for alternate old links
        permanent: true,
      },
      {
        source: "/pg-in-digital-marketing-in-vashi-navi-mumbai",
        destination: "/ai-powered-pg-in-digital-marketing-in-vashi", // Exact key for PGDMVashi
        permanent: true,
      },
      {
        source: "/post-graduate-course-in-digital-marketing-navi-mumbai-vashi",
        destination: "/ai-powered-pg-in-digital-marketing-in-vashi",
        permanent: true,
      },
      {
        source: "/digital-marketing-course-in-vashi-navi-mumbai-with-placement",
        destination: "/digital-marketing-diploma-course-in-vashi", // Exact key for GraduateDMVashi
        permanent: true,
      },
      {
        source: "/graduate-in-digital-marketing-course-in-mumbai-in-vashi-mumbai",
        destination: "/digital-marketing-diploma-course-in-vashi",
        permanent: true,
      },
      {
        source: "/masters-in-digital-marketing-program-in-vashi-navi-mumbai",
        destination: "/masters-in-digital-marketing-in-vashi", // Exact key for MastersDMVashi
        permanent: true,
      },
      {
        source: "/masters-in-digital-marketing-program-digital-marketing-masters-program-d-a-d-e-in-vashi-mumbai",
        destination: "/masters-in-digital-marketing-in-vashi",
        permanent: true,
      },
      {
        source: "/advanced-digital-marketing-course-vashi-navi-mumbai",
        destination: "/executive-digital-marketing-course-in-vashi", // Exact key for ExecutiveDMVashi
        permanent: true,
      },
      {
        source: "/executive-program-in-digital-marketing-in-vashi-mumbai",
        destination: "/executive-digital-marketing-course-in-vashi",
        permanent: true,
      },

      // 3. DIGITAL MARKETING - HYDERABAD
      {
        source: "/ai-powered-post-graduate-digital-marketing-program-in-hyderabad",
        destination: "/ai-powered-pg-in-digital-marketing-in-hyderabad", // Matches your PGDMHydrabad key
        permanent: true,
      },

      // 4. GRAPHIC DESIGN (GD) & IT 
      // (Baki rules jo aapne likhe the, unhe as-is rakha hai jab tak aap unka data object na bana lein)
      {
        source: "/graphic-design-course-in-mumbai-with-placement",
        destination: "/graphic-design-course-in-mumbai-with-placement",
        permanent: true,
      },
      {
        source: "/graphic-design-course-in-mumbai-with-placement-in-mumbai",
        destination: "/advanced-graphic-design-course-in-mumbai-with-placement-in-mumbai",
        permanent: true,
      },
      {
        source: "/multimedia-course-animation-classes",
        destination: "/multimedia-graphic-design-course-in-mumbai-with-placement-in-mumbai",
        permanent: true,
      },
      {
        source: "/online-video-editing-course",
        destination: "/video-editing-course-in-mumbai-with-placement",
        permanent: true,
      },
      {
        source: "/full-stack-developer-course",
        destination: "/full-stack-developer-course-in-mumbai-with-placement",
        permanent: true,
      },
      {
        source: "/full-stack-python-development-course",
        destination: "/full-stack-developer-course-python-mumbai",
        permanent: true,
      },
      {
        source: "/data-science-machine-learning-program",
        destination: "/data-science-machine-learning-course-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-science-machine-learning-ai-course",
        destination: "/data-science-course-ml-ai-in-mumbai",
        permanent: true,
      },
      {
        source: "/data-science-machine-learning-artificial-intelligence-course-in-hyderabad",
        destination: "/data-science-machine-learning-ai-course-in-hyderabad",
        permanent: true,
      },
      {
        source: "/full-stack-developer-course-in-hyderabad",
        destination: "/full-stack-developer-course-hyderabad",
        permanent: true,
      },
      {
        source: "/data-analyst-course-in-hyderabad-with-100-placement-guaranteed",
        destination: "/data-analytics-course-in-hyderabad-with-placement",
        permanent: true,
      },
      {
        source: "/data-analytics-course-in-mumbai",
        destination: "/data-analytics-course-in-mumbai-with-placement",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;