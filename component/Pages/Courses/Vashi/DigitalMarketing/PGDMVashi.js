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
    title: "Expert Faculty",
    description: "Learns skills and marketing from corporate professionals. Learn all about the latest marketing tools and optimize campaigns only by field-tested certified professionals.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
  {
    title: "Placement before Course Completion",
    description: "Be placed early and start your career faster than other candidates. Secure legitimate digital marketing placements with world-agency firms even before the final module is completed.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "9+ Globally Recognized Certifications",
    description: "Create a highly competitive resume. Get certified through nine plus globally accepted portfolio certifications from Google and other top platforms.",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
  // {
  //   title: "Placement before Course Completion",
  //   description: "Ensure that you bag your dream job beforehand. With our unique placement process, we will help you create a portfolio, enhance your CV, and crack interview sessions through mock drills to ensure employment even before graduation!",
  //   imageSrc: "/images/banner-image/dm/placement.webp"
  // },
];

const uniqueModulesSectionData = {
  tagline: "About us",
  title: "Advanced Marketing Specializations for",
  highlightTitle: "Future Marketing Leaders",
  description: "You’ll also get to learn in-demand specializations like Programmatic Advertising, OTT Advertising, Luxury Brand Management, and Strategic Management all designed to actually boost your career opportunities in the marketing world.",
  modules: [
    // { iconName: "Gem", title: "Luxury Brand", subtitle: "Management" },
    { iconName: "Landmark", title: "Strategic", subtitle: "Management" },
    { iconName: "PlayCircle", title: "OTT Ads", subtitle: "" },
    { iconName: "RectangleHorizontal", title: "Programmatic", subtitle: "Advertising" },
    { iconName: "TrendingUp", title: "Salary", subtitle: "Hike" },
  ],
};

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Live Project & Real Case Studies",
    description: "The course will give you an opportunity to experience live projects and analysis of case studies from large brands, where you can learn optimization techniques and make a good marketing portfolio.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "This institute is here to stay with you throughout your journey. After completing the course, we provide guidance to prepare mock interviews and update your CV along with job notifications.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

// NEW (not in original file): tool names taken from the Overview "Tools" text. Image paths are a GUESS - please check the files exist.
const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Digital Marketing Tools",
  caption: "Work with the tools employers recognise across paid media and analytics.",
  tools: [
    { name: "Google Analytics", image: "images/toolslogo/DM/ga4.png" },
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Microsoft Clarity", image: "images/toolslogo/DM/clarity.png" },
    { name: "Microsoft Excel", image: "images/toolslogo/DM/excel.png" },
  ],
};

// NEW (not in original file): built from the 3 syllabus terms. Role titles and icons are my pick.
const careerSteps = [
  {
    id: "01",
    title: "Performance Marketer",
    description: "Run paid campaigns and track results with Google Ads, Social Media Marketing, Conversions, Remarketing Strategies, Google Analytics and Microsoft Clarity.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Organic Marketing Specialist",
    description: "Grow brand visibility through SEO, SMO, Content Marketing & Ad Scripting, Email Marketing, WhatsApp Marketing and Online Reputation Management (ORM).",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Marketing Manager",
    description: "Lead strategy across Website Development, E-commerce Management, Brand Management, Strategic Management, OTT Advertising and Programmatic Advertising.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "PG in Digital Marketing Program in Navi Mumbai",
  paragraphs: [
    {
      text: "At Digifine Academy, we offer India’s best Post Graduate Program in Digital Marketing, wherein one can benefit from mentorship provided by our experts and real-life projects along with career placement. Tailored to suit the needs of the new age digital world, our cutting-edge program provides knowledge beyond the basics of marketing through specialized training in E-commerce management, website development, programmatic media buying, OTT ads, data analytics, and so much more. Students graduate with comprehensive tool mastery, global exposure, and industry-recognized certifications.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "Get ahead with an outstanding portfolio and professional resume to bag some high-end internship and employment opportunities at the finest marketing agency in India.", alwaysVisible: true },
    { title: "Tools", text: "Develop skills using the latest software used by the industry professionals like Google Analytics, Google Ads, Microsoft Clarity, Excel, etc., as well as using AI tools.", alwaysVisible: false },
    { title: "Certifications", text: "Get a range of certifications in professional marketing including a prestigious certificate from the IBM Institute, Berlin, Germany.", alwaysVisible: false },
    { title: "Mentorship", text: "Learn from some very skilled digital marketing mentors along with the corporate guest lecturers who bring real-world industry insights straight to the classroom.", alwaysVisible: false },
    { title: "Training", text: "Learn about the entire digital landscape practically and bridge the gap between marketing theory and practicals.", alwaysVisible: false },
    // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
    // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "✓ 100% Comprehensive Placement Support", icon: "Briefcase" },
      { text: "✓ Accelerated & Higher Salary Growth", icon: "TrendingUp" },
      { text: "✓ Dedicated Career & Placement Guidance", icon: "Users" },
      { text: "✓ Global & Extensive Industry Exposure", icon: "Globe" },
      { text: "✓ Advanced & Constantly Updated Curriculum", icon: "Layers" },
      { text: "✓ Premium, Globally Recognised Certifications", icon: "Award" },
      { text: "✓ Corporate & Industry Expert Mentorship", icon: "Users" },
      { text: "✓ 100% Confirmed Career & Job Assurance", icon: "BadgeCheck" },
      { text: "✓ Rigorous & Continuous Skill Assessments", icon: "CheckSquare" },
      { text: "✓ Strong & Elite Professional Network", icon: "Globe" },
      { text: "✓ 100% Practical & Hands-On Learning", icon: "Laptop" },
      { text: "✓ Extensive Live Project & Case Study Experience", icon: "Lightbulb" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "✕ No Placement Support", icon: "FileX" },
      { text: "✕ Lower Salary Growth", icon: "TrendingDown" },
      { text: "✕ No Placement Guidance", icon: "UserX" },
      { text: "✕ Limited Industry Exposure", icon: "Ban" },
      { text: "✕ Outdated Curriculum", icon: "AlertCircle" },
      { text: "✕ Low-Value Certifications", icon: "Award" },
      { text: "✕ Faculty-Only Learning", icon: "Users" },
      { text: "✕ No Career Assurance", icon: "FileText" },
      { text: "✕ Few Skill Assessments", icon: "CheckSquare" },
      { text: "✕ Weak Professional Network", icon: "Globe" },
      { text: "✕ Theory-Heavy Learning", icon: "BookOpenCheck" },
      { text: "✕ Limited Project Experience", icon: "Laptop" },
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
      "Social Media Marketing (Meta Ads, LinkedIn Ads, X Ads, etc.)",
      "Conversions",
      "Landing Page Techniques",
      "Remarketing Strategies",
      "Google Analytics",
      "Microsoft Clarity",
      "Microsoft Excel",
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
      "Content Marketing & Ad Scripting",
      "Email Marketing",
      "WhatsApp Marketing",
      "Online Reputation Management (ORM)",
      "Mobile Marketing",
      // "Influencer Marketing"
    ],
  },
  {
    term: "Term 3",
    title: "Advanced Marketing & Management",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: [
      "Website Development",
      "E-commerce Management",
      "Brand Management",
      "Strategic Management",
      "OTT Advertising",
      "Programmatic Advertising",
      "Influencer Marketing",
      "Data Analytics (Marketing Analytics)",
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
  { title: "Mock Interview", description: "Practice with interview panels and boost your confidence." },
  { title: "Get Placed", description: "Secure a job with 100% placement support." },
];

/* ---------- Component ---------- */

export default function MBA() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/PGDMVashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/PGDMVashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("../../Mumbai/DigitalMarketing/data/MBA/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/PGDMVashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Post Graduate Course in Digital Marketing "
        highlightText="in Navi Mumbai"
        description="Ready to scale your marketing career? Enroll in our Post Graduate in Digital Marketing Course in Vashi, Navi Mumbai. Get trained under the guidance of experienced certified professionals and enjoy the benefit of 100% placement assistance with top-tier corporate organizations."
        emi="Placements"
        startDate="Industry Experts"
        startDateby="Practical Training from"
        duration="Curriculum with Unique Modules"
        durationValue="One of its kind"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/Untitled-design-23.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's Post Graduate Digital Marketing Program Different "
        highlightTitle="in Navi Mumbai?"
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
          <FeaturesSection featuresData={mbaFeatures} columns={3} />
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