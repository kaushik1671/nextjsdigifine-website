"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import { Target, Search, Share2, BarChart3, Megaphone } from "lucide-react";

// Static Imports (Above the Fold - Critical Path)
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";

// Lazy Loaded Components (Below the Fold - Deferred)
const PlacementStats = lazy(() => import("../../../../CourseComponents/PlacementStats/PlacementStats"));
const FeaturesSection = lazy(() => import("../../../../CourseComponents/FeatureSection/FeatureSection"));
const CareerPath = lazy(() => import("../../../../CourseComponents/CareerPath/CareerPath"));
const SupportSection = lazy(() => import("../../../../CourseComponents/SupportSection/SupportSection"));
const CourseOverview = lazy(() => import("../../../../CourseComponents/CourseOverview/CourseOverview"));
const ToolsMastered = lazy(() => import("../../../../CourseComponents/ToolsMastered/ToolsMastered"));
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
    title: "Paid Internship with Offer Letter on Day One",
    description: "Earn a monthly stipend of ₹20,000 while you train and receive your offer letter on day one, before you've written a single ad. This is a job, not just a course, and it ends with a verifiable experience letter.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Work Inside a Simulated Agency Floor",
    description: "Work inside a simulated agency floor from week one, not just a classroom. Experience the real agency flow, manage actual budgets, and work with deliverables and deadlines.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Execute Real Client Projects with AI Tools",
    description: "Execute live briefs for actual Digifine and Adbizit clients, not mock data. Every module is layered with the AI tools professionals use on the job today.",
    imageSrc: "/images/USP/certificate.webp",
  },
  {
    title: "Placement Assistance with Hiring Partners",
    description: "Get structured placement support through Digifine's hiring partner network, including resume prep, mock interviews and career coaching.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Learn from industry experts and highly skilled in-house trainers who have worked on real campaigns. Every module is backed by live projects, hands-on assignments and continuous assessments.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Industry expert trainers guiding students on live marketing campaigns",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Support doesn't stop when the course ends. Career coaching, mock interviews and placement guidance stay available even after completion.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post course career guidance and placement support",
    theme: "emerald",
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Digital Marketing Corporate Simulation Program in Hyderabad",
  paragraphs: [
    {
      text: "This program is built for people who want to work in digital marketing from day one, not just learn theory. Instead of a regular classroom, you train inside a simulated agency floor, working on live briefs for actual Digifine and Adbizit clients with real budgets, deliverables and deadlines. Every module is layered with the AI tools professionals use today, across 300+ hours of training and 50+ live projects. You also earn a stipend while you train, receive your offer letter on day one, and get structured placement support through Digifine's hiring partner network.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Corporate Simulation", text: "Work inside a simulated agency floor from week one, not just a classroom.", alwaysVisible: true },
    { title: "AI Integrated Learning", text: "Every module is layered with the AI tools professionals use on the job today.", alwaysVisible: false },
    { title: "Real Client Projects", text: "Execute live briefs for actual Digifine and Adbizit clients, not mock data.", alwaysVisible: false },
    { title: "Paid Internship", text: "Earn a stipend while you train — this is a job, not just a course.", alwaysVisible: false },
    { title: "Placement Assistance", text: "Structured placement support through Digifine's hiring partner network.", alwaysVisible: false },
  ],
};

const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Marketing Tools",
  caption: "Work with the AI tools and ad platforms that agencies and marketing teams rely on every day.",
  tools: [
    { name: "ChatGPT", image: "images/toolslogo/DM/chatgpt.png" },
    { name: "Claude", image: "images/toolslogo/DM/claude.png" },
    { name: "Gemini", image: "images/toolslogo/DM/gemini.png" },
    { name: "Canva AI", image: "images/toolslogo/DM/canva.png" },
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Meta", image: "images/toolslogo/DM/meta.png" },
    { name: "GA4", image: "images/toolslogo/DM/ga4.png" },
    { name: "Looker Studio", image: "images/toolslogo/DM/lookerstudio.png" },
    { name: "Power BI", image: "images/toolslogo/DM/powerbi.png" },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Placement Assistance with Industry Residency Program", icon: "Briefcase" },
      { text: "Guaranteed Extensions & Salary Hikes", icon: "TrendingUp" },
      { text: "In-Hand Offer Letter on Day 1", icon: "FileCheck" },
      { text: "International Visit to Dubai", icon: "Plane" },
      { text: "Unique Modules for Real-World Edge", icon: "Zap" },
      { text: "10+ Globally Recognized Certifications", icon: "Award" },
      { text: "Industry Expert, Highly Skilled In-House Trainers", icon: "Users" },
      { text: "400+ Hours of Intense Classroom Training", icon: "Clock" },
      { text: "Post-Course Support Even After Completion", icon: "ShieldCheck" },
      { text: "Practical Training with Industry Experience", icon: "Laptop" },
      { text: "Continuous Assessments & Hands-On Learning", icon: "CheckSquare" },
      { text: "Career Coaching & Mock Interviews", icon: "UserCheck" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Assistance", icon: "Briefcase" },
      { text: "No Guarantee of High-Paying Jobs", icon: "TrendingUp" },
      { text: "No Offer Letter Upon Admission", icon: "FileCheck" },
      { text: "No International Exposure", icon: "Plane" },
      { text: "Outdated & Generic Syllabus", icon: "Zap" },
      { text: "No Globally Recognized Certifications", icon: "Award" },
      { text: "Teachers & Trainers with Limited Experience", icon: "Users" },
      { text: "Not Enough Hours of Classroom Training", icon: "Clock" },
      { text: "No Post-Course Guidance", icon: "ShieldCheck" },
      { text: "Not Enough Practical Exposure", icon: "Laptop" },
      { text: "Limited Practical Training & Live Projects", icon: "CheckSquare" },
      { text: "No Interview Preparation", icon: "UserCheck" },
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

const timelineStepsData = [
  { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
  { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
  { title: "Assessments", description: "Solve real-world problems to test your skills." },
  { title: "International Immersion", description: "Practice with interview panels and boost your confidence." },
  { title: "Corporate training", description: "Secure a job with 100% placement support." },
];

const analyticsSteps = [
  {
    id: "01",
    title: "Performance Marketer",
    description: "Plan, run and optimise paid campaigns on Google Ads and Meta to drive leads and sales within a budget.",
    icon: <Target size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "SEO Specialist",
    description: "Grow organic visibility through keyword research, on-page optimisation, content strategy and link building.",
    icon: <Search size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Social Media Manager",
    description: "Build brand presence and engagement across social platforms with content calendars, community management and influencer collaborations.",
    icon: <Share2 size={32} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Marketing Analyst",
    description: "Track campaign performance in GA4 and Looker Studio, and turn the data into clear decisions and reports.",
    icon: <BarChart3 size={32} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Digital Marketing Manager",
    description: "Lead end-to-end marketing strategy across channels, manage budgets and teams, and drive business growth.",
    icon: <Megaphone size={32} strokeWidth={1.5} />,
  },
];

/* ---------- Component ---------- */

export default function DMSimulationHy() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/Graduate/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/Graduate/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("../../Mumbai/DigitalMarketing/data/MBA/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/Graduate/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Digital Marketing Corporate Simulation with"
        highlightText="100% Placement Assistance in Hyderabad"
        description="Experience the real agency flow, manage actual budgets, and earn dynamic experience letters with professional guidance."
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
        title="What Makes Digifine's Digital Marketing Corporate Simulation Different "
        highlightTitle="in Hyderabad"
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
            mainDescription="Build job-ready skills in Performance Marketing, SEO, Social Media, and high-demand digital marketing careers."
            steps={analyticsSteps}
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
            paragraph="Hear from our students what their experience was like on the floor!"
          />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <CertificateSection
            title="Certifications"
            subtitlePart1="Earn Professional"
            subtitleHighlight="Certifications"
            paragraph="Acquire several professional certifications by the end of your simulator program."
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
            paragraph="Process mapped carefully to transform learners into digital marketing experts."
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
          <Location city="Hyderabad" />
        </Suspense>
      </LazySection>
    </main>
  );
}