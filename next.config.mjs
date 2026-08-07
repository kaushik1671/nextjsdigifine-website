/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      // 1. DIGITAL MARKETING - MUMBAI      
      {
  source: "/mba-in-digital-marketing",
  destination: "/ai-powered-digital-marketing-course-in-mumbai", 
  permanent: false, // Changed to false for testing
},
{
  source: "/digital-marketing-course-in-mumbai",
  destination: "/ai-powered-pg-in-digital-marketing-in-mumbai", 
  permanent: false, // Changed to false for testing
},
{
        source: "/multimedia-course-animation-classes",
        destination: "/multimedia-graphic-design-course-in-mumbai-with-placement-in-mumbai",
        permanent: false,
      },
      {
        source: "/online-video-editing-course",
        destination: "/video-editing-course-in-mumbai-with-placement",
        permanent: false,
      },
      {
        source: "/data-analytics-course-in-mumbai",
        destination: "/data-analytics-course-in-mumbai-with-placement",
        permanent: false,
      },
      {
        source: "/data-science-machine-learning-ai-course",
        destination: "/data-science-course-ml-ai-in-mumbai",
        permanent: false,
      },
      {
        source: "/full-stack-developer-course",
        destination: "/full-stack-developer-course-in-mumbai-with-placement",
        permanent: true,
      },
      ];
  },
};

export default nextConfig;
