"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import { Rocket, Gauge, Castle } from "lucide-react";

// Static Imports (Above the Fold - Critical Path)
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";

// Lazy Loaded Components (Below the Fold - Deferred)
const PlacementStats = lazy(() => import("../../../../CourseComponents/PlacementStats/PlacementStats"));
const WhyDigifine = lazy(() => import("../../../../CourseComponents/WhyDigifine/WhyDigifine"));
const HorizontalTimeline = lazy(() => import("../../../../CourseComponents/HorizontalTimeline/HorizontalTimeline"));
const ToolsMastered = lazy(() => import("../../../../CourseComponents/ToolsMastered/ToolsMastered"));
const CareerPath = lazy(() => import("../../../../CourseComponents/CareerPath/CareerPath"));
const Toggle = lazy(() => import("../../../../CourseComponents/Toggle/Toggle"));
const ToolStack = lazy(() => import("../../../../CourseComponents/ToolStack/ToolStack"));
const CorporateProjects = lazy(() => import("../../../../CourseComponents/CorporateProjects/CorporateProjects"));
const SyllabusTimeLine = lazy(() => import("../../../../CourseComponents/SyllabusTimeLine/SyllabusTimeLine"));
const StudentJourney = lazy(() => import("../../../../CourseComponents/StudentJourney/StudentJourney"));
const CompanyMarquee = lazy(() => import("../../../../CourseComponents/CompanyMarquee/CompanyMarquee"));
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

const dataset = [
  {
    title: "Corporate Simulation",
    description: "Work inside a simulated agency floor from week one, not just a classroom.",
  },
  {
    title: "AI Integrated Learning",
    description: "Every module is layered with the AI tools professionals use on the job today.",
  },
  {
    title: "Real Client Projects",
    description: "Execute live briefs for actual Digifine and Adbizit clients, not mock data.",
  },
  {
    title: "Paid Internship",
    description: "Earn a stipend while you train — this is a job, not just a course.",
  },
  {
    title: "Offer Letter",
    description: "Receive your offer letter on day one, before you've written a single ad.",
  },
  {
    title: "Placement Assistance",
    description: "Structured placement support through Digifine's hiring partner network.",
  },
];

const timelineSteps = [
  { title: "Enroll", description: "Onboarding & cohort mapping" },
  { title: "Offer Letter", description: "Issued on day one" },
  { title: "Monthly Stipend", description: "₹10,000 while you train" },
  { title: "Live Corporate Training", description: "Real client campaigns" },
  { title: "Experience Letter", description: "Verifiable work history" },
  { title: "Placement", description: "Hiring partner network" },
];

// NEW (not in original file): tools taken from platformsList below. Image paths are a GUESS (copied from the MBA Vashi pattern) - please check the files exist.
const toolsSectionData = {
  title: "Tools You'll",
  highlightTitle: "Master",
  caption: "Work with the platforms used across paid media and analytics.",
  tools: [
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "GA4", image: "images/toolslogo/DM/ga4.png" },
    { name: "Meta", image: "images/toolslogo/DM/meta.png" },
    { name: "Clarity", image: "images/toolslogo/DM/clarity.png" },
  ],
};

// NEW (not in original file): built from the 3 syllabus terms. Icons are my pick.
const careerSteps = [
  {
    id: "01",
    title: "Performance Marketing & Analytics",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Organic Marketing & Engagement",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Advanced Marketing & Management",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

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

const aiToolsList = [
  "ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "Canva AI",
  "Notion AI", "Gamma", "Runway", "ElevenLabs", "Meta AI", "+ more",
];

const platformsList = [
  "Google Ads", "Meta", "GA4", "Clarity", "Tag Manager", "WordPress",
  "Looker Studio", "Power BI", "DV360", "Merchant Center",
];

const digitalMarketingProjects = [
  {
    id: "1",
    title: "Meta Ads E-Commerce Campaign Simulation",
    studentName: "Aarav Sharma",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    placeholderText: "Meta ads preview",
  },
  {
    id: "2",
    title: "Google Search Ads & B2B Lead Gen Campaign",
    studentName: "Ananya Patel",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    placeholderText: "Google ads preview",
  },
  {
    id: "3",
    title: "Organic SEO Growth & Content Strategy Simulation",
    studentName: "Rohan Das",
    imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600",
    placeholderText: "SEO growth preview",
  },
  {
    id: "4",
    title: "LinkedIn B2B Account-Based Marketing Campaign",
    studentName: "Kabir Mehta",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600",
    placeholderText: "ABM campaign preview",
  },
  {
    id: "5",
    title: "E-Commerce Email & Retention Marketing Setup",
    studentName: "Sneha Reddy",
    imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
    placeholderText: "Email automation preview",
  },
  {
    id: "6",
    title: "YouTube Video Ad Funnel Simulation",
    studentName: "Vikram Malhotra",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
    placeholderText: "YouTube funnel preview",
  },
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
      "E-commerce Management",
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

const journeySteps = [
  { title: "Enrollment", description: "Counselling call, city & mode selection, admission confirmed." },
  { title: "Training", description: "Structured classroom + live sessions across every module." },
  { title: "Assignments", description: "Weekly graded assignments to lock in each concept." },
  { title: "Live Projects", description: "Real client briefs from Digifine and Adbizit accounts." },
  { title: "Corporate Simulation", description: "Full agency-floor simulation with deliverables and deadlines." },
  { title: "Certification", description: "14 certifications across platforms and specializations." },
  { title: "Placement", description: "Resume prep, mock interviews, hiring partner introductions." },
];

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

export default function GDSimulationVashi() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/Graduategd/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/Graduategd/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/Multimedia/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/Graduategd/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Graphic Design Corporate Simulation with"
        highlightText="100% Placement Assistance Vashi"
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
        title="What Makes Digifine's Full Stack in Web Development Different "
        highlightTitle="in Navi Mumbai"
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

      <div className="pt-5 pb-5 md:pt-6 md:pb-6 border-b border-gray-50"></div>

      <LazySection>
        <Suspense fallback={null}>
          <WhyDigifine
            featuresData={dataset}
            title="Six reasons this program trains differently"
            blueSubtitle="Why Digifine"
          />
        </Suspense>
      </LazySection>

      <div className="py-7 md:py-12 bg-gray-50/30"></div>

      <LazySection>
        <Suspense fallback={null}>
          <HorizontalTimeline
            stepsData={timelineSteps}
            title="The Corporate Simulation Timeline"
            subtitle="Six stages that mirror a real agency career path."
          />
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
          <Toggle content={toggleData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <div className="py-5 md:py-13 border-b border-gray-50">
            <ToolStack
              aiTools={aiToolsList}
              platforms={platformsList}
              title="Tools you'll master"
            />
          </div>
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <div className="py-15 md:py-22 border-b border-gray-50">
            <CorporateProjects
              projectsData={digitalMarketingProjects}
              title="Real corporate projects"
            />
          </div>
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <SyllabusTimeLine syllabusData={syllabusSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <div className="py-5 md:py-6 border-b border-gray-50">
            <StudentJourney
              stepsData={journeySteps}
              title="Student journey"
            />
          </div>
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
          <Location city="Mumbai" />
        </Suspense>
      </LazySection>
    </main>
  );
}