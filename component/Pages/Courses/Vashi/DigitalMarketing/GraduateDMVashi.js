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
    title: "Core Curriculum & Advanced Modules",
    description: "Get access to a syllabus that is vetted in the industry and includes all key digital marketing concepts. Learn search marketing, social media strategies, web designing, branding and advanced data courses.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
  {
    title: "Practical, Hands-on Training Model",
    description: "Get trained on a model where 80% of training consists of practical experience. Develop an effective set of skills through hands-on marketing campaigns, group assignments and analysis of real-life business cases.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Career Support & Industry Placement",
    description: "Ensure that you have a successful career ahead. Get resume building services, portfolio development, training in interview etiquette and conduct mock interviews.",
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
    { iconName: "Landmark", title: "Strategic", subtitle: "Management" },
    { iconName: "ShoppingCart", title: "E-commerce", subtitle: "Growth" },
    { iconName: "Award", title: "Brand", subtitle: "Management" },
    { iconName: "Gauge", title: "Performance", subtitle: "Marketing" },
  ],
};

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Live Project & Real Case Studies",
    description: "Learn from live execution of marketing campaigns and solve business problems through analysis of real industry cases to create an impressive portfolio of your work.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "continuous career guidance even after completing your course. This will include guidance through life-long alumni networking support, mentorship classes, industry placement offers, and skills upgrade classes.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

// NEW (not in original file): tool names taken from the syllabus modules. Image paths are a GUESS - please check the files exist.
const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Digital Marketing Tools",
  caption: "Work with the tools employers recognise across paid media, analytics and social advertising.",
  tools: [
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Google Analytics", image: "images/toolslogo/DM/ga4.png" },
    { name: "Microsoft Clarity", image: "images/toolslogo/DM/clarity.png" },
    { name: "Meta Ads", image: "images/toolslogo/DM/meta.png" },
    { name: "LinkedIn Ads", image: "images/toolslogo/DM/linkedin.png" },
    { name: "X Ads", image: "images/toolslogo/DM/x.png" },
    { name: "Microsoft Excel", image: "images/toolslogo/DM/excel.png" },
  ],
};

// NEW (not in original file): built from the 3 syllabus terms. Role titles and icons are my pick.
const careerSteps = [
  {
    id: "01",
    title: "Performance Marketer",
    description: "Run paid campaigns and track results with Google Ads, Social Media Marketing, Google Analytics, Microsoft Clarity, Remarketing and Conversions.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Organic Marketing Specialist",
    description: "Grow brand visibility through SEO, SMO, Content Marketing & Ad Scripting, Email Marketing, WhatsApp Marketing and ORM.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Digital Marketing Manager",
    description: "Manage complete digital ecosystems through Website Development, Brand Management, E-commerce Management, Strategic Management, Influencer Marketing and Mobile Marketing.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Digital Marketing Diploma Course in Navi Mumbai",
  paragraphs: [
    {
      text: "Enroll in the Graduate Digital Marketing Diploma This is a comprehensive program that helps close the skills gap through 80% practical training methods. With the guidance of our experienced instructors, create a strong professional portfolio through interactive live projects, industry case studies, and international projects along with various industry certifications. Our extensive training curriculum aims at helping you boost your career and business by achieving full expertise of all the key digital concepts, including performance marketing, social media techniques, technical SEO, branding, web development, and e-commerce.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: " Enjoy complete career assistance with 100% placement support. Enjoy the added advantage of corporate recruitment, resume building, and interview preparation to jumpstart your corporate career.", alwaysVisible: true },
    { title: "Tools", text: "Learn the top-notch tools of the industry. Get comprehensive and practical exposure to all leading premium software, automated execution, analytics suite, and AI marketing tools for generation", alwaysVisible: false },
    { title: "Certifications", text: "Establish your expertise in the digital world. Get certified to prove your skills and enhance your corporate image through several industry-recognized certifications including Google Professional and Advanced certifications.", alwaysVisible: false },
    { title: "Mentorship", text: "Get faster access to knowledge through personalization. Learn from an experienced industry expert mentoring team, who are well-exposed to various corporate aspects of marketing.", alwaysVisible: false },
    { title: "Training", text: "Enjoy an employment-oriented approach for learning where 80% learning involves execution through managing budgets, agency projects, and digital lab simulation exercises.", alwaysVisible: false },
    // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
    // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "✓ 50+ Live Projects & Case Studies", icon: "CheckSquare" },
      { text: "✓ 35+ Latest Marketing & AI Tools", icon: "Laptop" },
      { text: "✓ Industry Professionals & Guest Experts", icon: "Users" },
      { text: "✓ Dedicated Placement Support & Mock Interviews", icon: "Briefcase" },
      { text: "✓ Real Campaign Portfolio Creation", icon: "FileText" },
      { text: "✓ Google, NSDC & Industry Certifications", icon: "Award" },
      { text: "✓ Advanced AI & Automation Modules", icon: "Cpu" },
      { text: "✓ Website Development Included in Curriculum", icon: "Globe" },
      { text: "✓ Comprehensive E-Commerce Modules", icon: "ShoppingCart" },
      { text: "✓ Dedicated Career Development Sessions", icon: "TrendingUp" },
      { text: "✓ Real Business Projects (Live Brand Projects)", icon: "Layers" },
      { text: "✓ Regular Guest Lectures & Workshops", icon: "Compass" },
      { text: "✓ Career-Ready from Day One", icon: "Target" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "✕ Mostly Theory-Based Training", icon: "BookOpen" },
      { text: "✕ Limited Tool Exposure", icon: "AlertTriangle" },
      { text: "✕ Trainer-Dependent Mentorship", icon: "Users" },
      { text: "✕ Basic Job Support Only", icon: "Briefcase" },
      { text: "✕ Limited Portfolio Work", icon: "FileText" },
      { text: "✕ Institute Certifications Only", icon: "Award" },
      { text: "✕ AI Marketing Often Not Included", icon: "Cpu" },
      { text: "✕ Website Dev: Additional Cost or Basic Coverage", icon: "Globe" },
      { text: "✕ E-Commerce Rarely Covered in Depth", icon: "ShoppingCart" },
      { text: "✕ Limited Guidance on Resume & Interview", icon: "TrendingUp" },
      { text: "✕ Demo Projects Only", icon: "Layers" },
      { text: "✕ Occasional Industry Sessions Only", icon: "Compass" },
      { text: "✕ General Training Approach (Not Career-Ready)", icon: "Target" },
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
      "Google Analytics",
      "Microsoft Clarity",
      "Landing Page Technique",
      "Remarketing",
      "Conversions",
    ],
  },
  {
    term: "Term 2",
    title: "Organic Marketing & Engagement",
    description: "Learn how to build long-term brand presence and customer engagement.",
    modules: [
      "SEO (Search Engine Optimization)",
      "SMO (Social Media Optimization)",
      // "Social Media Marketing",
      "Content Marketing & Ad Scripting",
      "Email Marketing",
      "WhatsApp Marketing",
      // "Mobile Marketing",
      "ORM (Online Reputation Management)",
      // "Influencer Marketing"
    ],
  },
  {
    term: "Term 3",
    title: "Advanced Marketing & Management",
    description: "Develop strategic and technical skills to manage complete digital marketing ecosystems.",
    modules: [
      "Website Development",
      "Brand Management",
      "E-commerce Management",
      "Strategic Management",
      "Influencer Marketing",
      "Mobile Marketing",
      "Microsoft Excel",
      // "BARC (Television Ads)",
      // "Experiential Marketing",
      // "Luxury Brand Management"
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

export default function GraduateDMVashi() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/GraduateDMVashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/GraduateDMVashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/MBAVashi/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/GraduateDMVashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Graduate Digital Marketing Diploma Course in Navi Mumbai with "
        highlightText="100% Placement Assistance"
        description="Embark on your professional journey with the best Graduate Digital Marketing Diploma offered in Navi Mumbai. It is a unique combination of skilled training and practical implementation that aims at making the participants experts in utilizing advanced digital marketing techniques and software, getting global digital marketing certifications, and creating a strong portfolio for themselves."
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
        title="What Makes Digifine's Graduate Digital Marketing Program Different "
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