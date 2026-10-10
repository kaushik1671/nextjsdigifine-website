"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import { Rocket, Gauge, Castle } from "lucide-react";

// Static Imports (Above the Fold - Critical Path)
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";

// Lazy Loaded Components (Below the Fold - Deferred)
const PlacementStats = lazy(() => import("../../../../CourseComponents/PlacementStats/PlacementStats"));
const FeaturesSection = lazy(() => import("../../../../CourseComponents/FeatureSection/FeatureSection"));
const UniqueModules = lazy(() => import("../../../../CourseComponents/UniqueModules/UniqueModules"));
const SupportSection = lazy(() => import("../../../../CourseComponents/SupportSection/SupportSection"));
const ToolsMastered = lazy(() => import("../../../../CourseComponents/ToolsMastered/ToolsMastered"));
const CareerPath = lazy(() => import("../../../../CourseComponents/CareerPath/CareerPath"));
const CourseOverview = lazy(() => import("../../../../CourseComponents/CourseOverview/CourseOverview"));
const Toggle = lazy(() => import("../../../../CourseComponents/Toggle/Toggle"));
const CompanyMarquee = lazy(() => import("../../../../CourseComponents/CompanyMarquee/CompanyMarquee"));
const SyllabusTimeLine = lazy(() => import("../../../../CourseComponents/SyllabusTimeLine/SyllabusTimeLine"));
const SuccessStories = lazy(() => import("../../../../CourseComponents/SuccessStories/SuccessStories"));
const StudentPlacedAt = lazy(() => import("../../../../CourseComponents/StudentPlacedAt/StudentPlacedAt"));
const Testimonal = lazy(() => import("../../../../CourseComponents/Testimonal/Testimonal"));
const CertificateSection = lazy(() => import("../../../../CourseComponents/CertificateSection/CertificateSection"));
const VerticalTimeline = lazy(() => import("../../../../CourseComponents/VerticleTimeLine/VerticalTimeLine"));
const BoxCardSection = lazy(() => import("../../../../Sections/BoxCardSection"));
const FAQsSection = lazy(() => import("../../../../FAQsSection/FAQsSection"));
const Location = lazy(() => import("../../../../CourseComponents/Location/Location"));

/* ---------- Static data (outside component = no re-creation on render) ---------- */

const pgdmStatsData = [
  { src: "/images/Icons/formicon/ficon1.webp", hover: "/images/Icons/formicon/ficon5.webp", label: "35+ Industry Tools" },
  { src: "/images/Icons/formicon/ficon2.webp", hover: "/images/Icons/formicon/ficon6.webp", label: "50+ Live Projects" },
  { src: "/images/Icons/formicon/ficon3.webp", hover: "/images/Icons/formicon/ficon7.webp", label: "300+ Hours Training" },
  { src: "/images/Icons/formicon/ficon4.webp", hover: "/images/Icons/formicon/ficon8.webp", label: "10,000+ Students Trained" },
];

const mbaFeatures = [
  {
    title: "International Visit to Dubai",
    description: "An immersive global residency program specializing in international luxury brand management and global market strategies.",
    imageSrc: "/images/banner-image/dm/dubai.webp",
  },
  {
    title: "Salary Hike",
    description: "Maximize your salary earning potential by becoming an expert at high-paying digital marketing jobs.",
    imageSrc: "/images/banner-image/dm/SalaryHike.webp",
  },
  {
    title: "Industry Residency Program",
    description: "Get 6 months of experience within a corporate environment running digital marketing campaigns.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "10+ Globally Recognised Certifications",
    description: "Become certified on 10+ industry-recognized certificates by top platforms like Google, and Meta.",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
];

const uniqueModulesSectionData = {
  tagline: "About us",
  title: "Advanced Marketing Specializations for",
  highlightTitle: "Future Marketing Leaders",
  description: "You’ll also get to learn in-demand specializations like Programmatic Advertising, OTT Advertising, Luxury Brand Management, and Strategic Management all designed to actually boost your career opportunities in the marketing world.",
  modules: [
    { iconName: "Gem", title: "Luxury Brand", subtitle: "Management" },
    { iconName: "Users", title: "Experiential", subtitle: "Marketing" },
    { iconName: "RectangleHorizontal", title: "Programmatic", subtitle: "Advertising" },
    { iconName: "Tv", title: "BARC Television", subtitle: "Ad Planning" },
    { iconName: "PlayCircle", title: "OTT", subtitle: "Ads" },
    { iconName: "Landmark", title: "Strategic", subtitle: "Management" },
  ],
};

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Learn directly from expert marketers and experienced business professionals in your industry. You get hands-on experience through real-world case studies and current market data. ",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "After Course Completion Helping you with resume development and interviews to assist you with your future career opportunities.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

// NEW (not in original file): tool names taken from the Overview "Hands-on Tools" text and syllabus. Image paths are a GUESS - please check the files exist.
const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Digital Marketing Tools",
  caption: "Work with the tools employers recognise across paid media and analytics.",
  tools: [
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Google Analytics", image: "images/toolslogo/DM/ga4.png" },
    { name: "Meta Ads Manager", image: "images/toolslogo/DM/meta.png" },
    { name: "Microsoft Clarity", image: "images/toolslogo/DM/clarity.png" },
  ],
};

// NEW (not in original file): built from the 3 syllabus terms. Role titles and icons are my pick.
const careerSteps = [
  {
    id: "01",
    title: "Performance Marketer",
    description: "Run paid campaigns and track results with Google Ads, Conversion Optimization, Remarketing Strategies, Google Analytics and Microsoft Clarity.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Organic Marketing Specialist",
    description: "Grow brand visibility through SEO, Social Media Marketing, Content Marketing, Email Marketing and Influencer Marketing.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Marketing Manager",
    description: "Lead strategy across Brand Management, E-commerce Management, Strategic Management, Programmatic Advertising and Luxury Brand Management.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "MBA-Level Digital Marketing Program in Navi Mumbai",
  paragraphs: [
    {
      text: "The MBA-Level Digital Marketing Program offered by Digifine in Navi Mumbai is the best corporate readiness program in India that provides your career and educational journey an executive kick start right away! The MBA-Level Digital Marketing Program.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Expert Training", text: "Get training on execution from certified experts who are leading marketing professionals. Get insights on execution from modern marketing campaigns.", alwaysVisible: true },
    { title: "Comprehensive Curriculum", text: "Master a future-ready syllabus engineered by Digifine. Explore deep-dive modules spanning programmatic advertising and performance marketing.", alwaysVisible: false },
    { title: "Strong Placements", text: "Secure your target career transition with verified interview opportunities. Leverage our extensive hiring network to land premium marketing roles.", alwaysVisible: false },
    { title: "Hands-on Tools", text: "Use the industry-approved marketing software including Google Analytics, Google Ads, Meta Ads Manager, and marketing automation tools.", alwaysVisible: false },
    { title: "Certifications", text: " Get 10+ certifications that will showcase your competence as a marketer and will increase your employability around the globe.", alwaysVisible: false },
    { title: "Real Mentorship", text: "Get personalized mentoring from experienced mentors who guide you on building a successful career in marketing.", alwaysVisible: false },
    { title: "Practical Focus", text: "Transition from passive learning to active execution. Solve live business bottlenecks and build a performance portfolio that proves you can deliver.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Placement Assistance with Industry Residency Program", icon: "Briefcase" },
      { text: "Guaranteed Extensions & Salary Growth Opportunities", icon: "TrendingUp" },
      { text: "In-Hand Offer Letter from Day 1", icon: "FileText" },
      { text: "International Visit to Dubai", icon: "Globe" },
      { text: "Specialized Modules for Future Marketing Leaders", icon: "BookOpen" },
      { text: "10+ Globally Recognised Certifications", icon: "Award" },
      { text: "Learn from Industry Experts & Experienced Professionals", icon: "Users" },
      { text: "Practical Training Through Live Projects & Case Studies", icon: "Laptop" },
      { text: "600+ Hours of Intensive Classroom Training", icon: "Hourglass" },
      { text: "Post-Course Career Support & Guidance", icon: "Lightbulb" },
      { text: "Continuous Assessments & Hands-On Learning", icon: "CheckSquare" },
      { text: "Industry-Focused Curriculum Designed for Career Growth", icon: "Layers" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Assistance or Industry Residency Experience", icon: "Briefcase" },
      { text: "Limited Opportunities for Career Advancement", icon: "TrendingUp" },
      { text: "No Early Career Assurance or Offer Support", icon: "FileText" },
      { text: "No International Industry Exposure", icon: "Globe" },
      { text: "Generic Curriculum with Limited Industry Relevance", icon: "BookOpen" },
      { text: "Few or No Recognised Industry Certifications", icon: "Award" },
      { text: "Limited Access to Experienced Industry Professionals", icon: "Users" },
      { text: "Minimal Exposure to Live Projects & Practical Learning", icon: "Laptop" },
      { text: "Limited Classroom Training & Skill Development", icon: "Hourglass" },
      { text: "No Structured Post-Course Career Support", icon: "Lightbulb" },
      { text: "Fewer Opportunities for Hands-On Learning", icon: "CheckSquare" },
      { text: "Limited Exposure to Emerging Marketing Specializations", icon: "Layers" },
    ],
  },
};

const marqueeTopLogos = [
  "/images/company_logo/dm/1.webp",
  "/images/company_logo/dm/2.webp",
  "/images/company_logo/dm/3.webp",
  "/images/company_logo/dm/4.webp",
  "/images/company_logo/dm/5.webp",
  "/images/company_logo/dm/6.webp",
  "/images/company_logo/dm/7.webp",
];

const marqueeBottomLogos = [
  "/images/company_logo/dm/8.webp",
  "/images/company_logo/dm/9.webp",
  "/images/company_logo/dm/10.webp",
  "/images/company_logo/dm/11.webp",
  "/images/company_logo/dm/12.webp",
  "/images/company_logo/dm/13.webp",
  "/images/company_logo/dm/1.webp", // first image repeated for a seamless loop
];

const syllabusSectionData = [
  {
    term: "Term 1",
    title: "Performance Marketing & Analytics",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    modules: [
      "Introduction to Digital Marketing",
      "Google Ads",
      "Conversion Optimization",
      "Landing Page Techniques",
      "Remarketing Strategies",
      "Google Analytics",
      "Microsoft Clarity",
      "Excel for Marketers",
    ],
  },
  {
    term: "Term 2",
    title: "Organic Marketing & Engagement",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: [
      "SEO (Search Engine Optimization)",
      "SMO (Social Media Optimization)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Mobile Marketing",
      "ORM (Online Reputation Management)",
      "Influencer Marketing",
    ],
  },
  {
    term: "Term 3",
    title: "Advanced Marketing & Management",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: [
      "Website Development",
      "Brand Management",
      "E-Commerce Management",
      "Strategic Management",
      "Data Analytics",
      "OTT Advertising",
      "Programmatic Advertising",
      "BARC (Television Ads)",
      "Experiential Marketing",
      "Luxury Brand Management",
    ],
  },
];

const successStoriesData = [
  [
    { title: "Brand One", revenue: "₹5L+ Revenue", description: "Premium student-built brand with strong market demand.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" },
    { title: "Brand Two", revenue: "₹3L+ Revenue", description: "Creative products built with innovation and quality.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200" },
    { title: "Brand Three", revenue: "₹4L+ Revenue", description: "Fast growing startup solving real customer problems.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200" },
    { title: "Brand Four", revenue: "₹2L+ Revenue", description: "Student founders building successful businesses.", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200" },
  ],
  [
    { title: "Brand Five", revenue: "₹6L+ Revenue", description: "Rapidly expanding with strong customer loyalty.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200" },
    { title: "Brand Six", revenue: "₹7L+ Revenue", description: "Premium products loved by thousands of customers.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200" },
    { title: "Brand One", revenue: "₹5L+ Revenue", description: "Premium student-built brand with strong market demand.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" },
    { title: "Brand Two", revenue: "₹3L+ Revenue", description: "Creative products built with innovation and quality.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200" },
  ],
];

const mbaPlacementsData = [
  { id: 1, logo: "/images/placement/student1.webp", alt: "Santhana Pandian" },
  { id: 2, logo: "/images/placement/student2.webp", alt: "Piyush Gurav" },
  { id: 3, logo: "/images/placement/student3.webp", alt: "Ayushi Mehta" },
  { id: 4, logo: "/images/placement/student4.webp", alt: "Dhruv Narwani" },
  { id: 5, logo: "/images/placement/student5.webp", alt: "Student 5" },
  { id: 6, logo: "/images/placement/student6.webp", alt: "Student 6" },
  { id: 7, logo: "/images/placement/student7.webp", alt: "Student 7" },
  { id: 8, logo: "/images/placement/student8.webp", alt: "Student 8" },
  { id: 9, logo: "/images/placement/student9.webp", alt: "Student 9" },
];

const timelineStepsData = [
  { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
  { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
  { title: "Assessments", description: "Solve real-world problems to test your skills." },
  { title: "International Immersion", description: "Practice with interview panels and boost your confidence." },
  { title: "Corporate Training", description: "Secure a job with 100% placement support." },
];

/* ---------- Component ---------- */

export default function MBAVashi() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("../DigitalMarketing/data/MBAVashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("../DigitalMarketing/data/MBAVashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("../DigitalMarketing/data/MBAVashi/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("../DigitalMarketing/data/MBAVashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="MBA - Level Digital Marketing Program with"
        highlightText="100% Placement Assistance"
        description="The Digifine’s MBA-level digital marketing course in Navi Mumbai is aimed at future marketing professionals, marketing executives, and business leaders. This course covers topics such as performance marketing, SEO, brand management, data analytics, and luxury brand marketing. In addition, students learn from the best in the industry while working on live projects and enjoying the benefit of the International Visit to Dubai for Luxury Brand Management."
        emi="Placements"
        startDate="Industry Experts"
        startDateby="Practical Training from"
        duration="Curriculum with Unique Modules"
        durationValue="One of its kind"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mba.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="Why Choose Digifine’s MBA-Level Digital Marketing Program "
        highlightTitle="in Vashi?"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />

      {/* Lazy-Loaded Below-The-Fold Sections */}
      <LazySection>
        <Suspense fallback={null}>
          <PlacementStats />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <FeaturesSection featuresData={mbaFeatures} columns={4} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <UniqueModules uniqueModulesData={uniqueModulesSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <SupportSection supportData={supportSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <ToolsMastered toolsData={toolsSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <CareerPath
            mainDescription="Build job-ready skills across performance marketing, organic marketing and advanced marketing management."
            steps={careerSteps}
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <CourseOverview overviewData={overviewSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <Toggle content={toggleData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <CompanyMarquee
            tagline="Our Placements"
            title="Companies They"
            highlightTitle="Work At"
            topLogos={marqueeTopLogos}
            bottomLogos={marqueeBottomLogos}
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <SyllabusTimeLine syllabusData={syllabusSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <SuccessStories storiesData={successStoriesData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <StudentPlacedAt
            companiesData={mbaPlacementsData}
            btntext="Know More"
            redirectlink="/course-brochures"
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <Testimonal
            title="What Our"
            bluetitle="Students Have To Say:"
            testimonial={testimonials}
            paragraph="Still wondering what your future would look like after graduating from one of the best MBA - Level Digital Marketing Program Colleges in Mumbai? From training at Digifine, to placements and more: hear it all from our students!"
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <CertificateSection
            title="Certifications"
            subtitlePart1="Earn Professional"
            subtitleHighlight="Certifications"
            paragraph="Acquire several professional certifications as well as Google certifications by the end of your Post Graduate in Digital Marketing at Digifine Academy. Not only this, but you also get a chance to enhance your portfolio and resume by earning an international certification from the IBMI Institute in Berlin, Germany!"
            certificates={customCertificates}
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <VerticalTimeline
            steps={timelineStepsData}
            title="Steps Towards Success With"
            bluetitle="Digifine"
            paragraph="Follow this structured process mapped carefully to transform dynamic learners into full-fledged corporate marketing leaders."
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <BoxCardSection coursedata={categories} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <FAQsSection sectionTitle="Frequently Asked Questions" faqData={faqs} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <Location city="Vashi" />
        </Suspense>
      </LazySection>
    </main>
  );
}