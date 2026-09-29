const BASE_URL = "https://digifine.in";

const routes = [
  // Main Pages
  {
    path: "/",
    priority: 1.0,
    changeFrequency: "daily",
  },
  {
    path: "/about",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    priority: 0.9,
    changeFrequency: "weekly",
  },

  // Brochure Pages
  {
    path: "/course-brochures",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/it-course-brochures",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/graphic-design-curriculum",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Utility Pages
  {
    path: "/payment",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/register",
    priority: 0.6,
    changeFrequency: "monthly",
  },

  // ===========================
  // MUMBAI
  // ===========================

  {
    path: "/ai-powered-digital-marketing-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/ai-powered-pg-in-digital-marketing-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/digital-marketing-diploma-course-in-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/masters-in-digital-marketing-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/advanced-digital-marketing-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/graphic-design-course-in-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/advanced-graphic-design-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/multimedia-graphic-design-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/video-editing-course-in-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/full-stack-developer-course-in-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/full-stack-developer-course-python-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/data-science-course-ml-ai-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-science-machine-learning-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-analytics-course-in-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  // ===========================
  // NAVI MUMBAI
  // ===========================

  {
    path: "/ai-powered-digital-marketing-course-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/pg-in-digital-marketing-in-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/digital-marketing-course-in-vashi-navi-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/masters-in-digital-marketing-program-in-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/advanced-digital-marketing-course-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/graphic-design-course-in-vashi-navi-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/masters-graphic-design-course-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/multimedia-graphic-design-course-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/master-in-full-stack-development-in-vashi-navi-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/full-stack-developer-course-python-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  {
    path: "/data-science-machine-learning-with-gen-ai-in-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-science-machine-learning-course-vashi-navi-mumbai",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-analytics-course-in-vashi-navi-mumbai-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },

  // ===========================
  // HYDERABAD
  // ===========================

  {
    path: "/ai-powered-pg-in-digital-marketing-in-hyderabad",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-science-machine-learning-ai-course-in-hyderabad",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/full-stack-developer-course-hyderabad",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/data-analytics-course-in-hyderabad-with-placement",
    priority: 0.9,
    changeFrequency: "monthly",
  },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}