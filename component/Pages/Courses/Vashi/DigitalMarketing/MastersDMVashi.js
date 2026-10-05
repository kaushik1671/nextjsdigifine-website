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
  // {
  //   title: "Core Curriculum & Advanced Modules",
  //   description: "Get access to a syllabus that is vetted in the industry and includes all key digital marketing concepts. Learn search marketing, social media strategies, web designing, branding and advanced data courses.",
  //   imageSrc: "/images/banner-image/dm/faculty.webp"
  // },
  {
    title: "Early Placement Support",
    description: "Gain a competitive edge in your career from day 1 through focused placement assistance, portfolio creation, and corporate interviews organized long before you graduate from your program.",
    imageSrc: "/images/banner-image/dm/placement.webp",
  },
  {
    title: "Agency-Aligned Practical Mastery",
    description: "Skip outdated theoretical learning and acquire hands-on experience working on current live dashboards, artificial intelligence-based software, and other advanced technologies used by today’s digital marketing agencies.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "6+ Globally Recognised Certifications",
    description: "Ensure that leading organizations notice your potential by earning 6+ globally recognized certificates including elite credentials validated at the national level by NSDC & Skill India",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
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
    description: "Gain experience using key marketing models with live ad budget management for real brand campaigns. Examine business case studies of corporations to develop a high return on investment portfolio that showcases your practical skills directly to leading digital agencies.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Ensure your career success by joining our elite alumni program, advanced upskilling sessions, and placement support services that remain entirely at your disposal even after course completion.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

// NEW (not in original file): tool names taken from the syllabus modules and Overview text. Image paths are a GUESS - please check the files exist.
const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Digital Marketing Tools",
  caption: "Work with the tools employers recognise across paid media, analytics and social advertising.",
  tools: [
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Google Analytics", image: "images/toolslogo/DM/ga4.png" },
    { name: "Microsoft Clarity", image: "images/toolslogo/DM/clarity.png" },
    { name: "Meta Ads", image: "images/toolslogo/DM/meta.png" },
    { name: "LinkedIn", image: "images/toolslogo/DM/linkedin.png" },
    { name: "X", image: "images/toolslogo/DM/x.png" },
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
    description: "Grow brand visibility through SEO, SMO, Content Marketing & Ad Scripting, Email Marketing, WhatsApp Marketing, Mobile Marketing and ORM.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Digital Marketing Manager",
    description: "Manage complete digital ecosystems through Website Development, Brand Management, E-commerce Management, Strategic Management, OTT Advertising and Influencer Marketing.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Master's in Digital Marketing Course in Navi Mumbai.",
  paragraphs: [
    {
      text: "Join Digifine Academy, the premier academy that take your career and freelancing venture to the next level. Under the guidance of experienced mentors from the industry, learn advanced digital marketing and automation techniques using a practical execution approach. Based in Navi Mumbai, the professional program at Digifine Academy comes with a mix of industry certifications and an executive portfolio from live projects. Acquire comprehensive practical knowledge about highly specialized subjects such as Performance Marketing, SEO, SMO, Branding, Web Development, E-commerce, and OTT Advertising.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "Kick-start your career with placements made easy via placement counseling, resume building, and professional mock interviews to make sure you’re ready for the job market.", alwaysVisible: true },
    { title: "Tools", text: "Get armed with in-demand expertise through extensive, hands-on training on more than 35 state-of-the-art software tools and advanced AI-based marketing platforms.", alwaysVisible: false },
    { title: "Certifications", text: "Add value to your resume with multiple global certifications, including certified Google certifications, Meta Ads certifications, and internationally accredited certifications", alwaysVisible: false },
    { title: "Mentorship", text: "Get first-hand industry experience from our seasoned in-house faculty and corporate guest lectures who manage live global brand portfolios.", alwaysVisible: false },
    { title: "Training", text: "Master marketing through an 80:20 practical framework. Move beyond textbooks by managing live ad budgets and executing real-world brand campaigns.", alwaysVisible: false },
    // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
    // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "At Digifine",
    description: "At Digifine, learning goes beyond theory. Every module is designed to help you build practical skills, gain confidence through real-world experience, and become job-ready with guidance from industry professionals.",
    cards: [
      { text: "✓ Internship Opportunity Before Course Completion", icon: "Briefcase" },
      { text: "✓ AI-Powered & Future-Ready Digital Marketing Curriculum", icon: "Cpu" },
      { text: "✓ Specialized Modules Not Commonly Offered Elsewhere", icon: "Star" },
      { text: "✓ Practical Learning Through Live Campaigns & Case Studies", icon: "Layers" },
      { text: "✓ Learn from Experienced Industry Professionals", icon: "Users" },
      { text: "✓ Advanced Training on Industry Tools & Technologies", icon: "Laptop" },
      { text: "✓ Portfolio Development with Real Client Projects", icon: "Folder" },
      { text: "✓ Globally Recognised Professional Certifications", icon: "Award" },
      { text: "✓ Career Mentorship, Resume Building & Interview Preparation", icon: "UserCheck" },
      { text: "✓ Hands-On Learning Through Assignments & Simulations", icon: "Edit3" },
      { text: "✓ Freelancing & Entrepreneurship Guidance", icon: "Zap" },
      { text: "✓ Continuous Career Support Beyond Course Completion", icon: "TrendingUp" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical exposure and structured career guidance, learning often stays limited to theory, making it difficult to build confidence and succeed in real-world digital marketing roles.",
    cards: [
      { text: "✕ No Internship Opportunities During the Course", icon: "FileX" },
      { text: "✕ Outdated Curriculum with Limited AI Integration", icon: "AlertTriangle" },
      { text: "✕ Generic Modules with Limited Industry Relevance", icon: "Grid" },
      { text: "✕ Minimal Exposure to Real Campaigns & Case Studies", icon: "EyeOff" },
      { text: "✕ Limited Access to Experienced Industry Mentors", icon: "UserX" },
      { text: "✕ Little Hands-On Experience with Marketing Tools", icon: "Slash" },
      { text: "✕ No Portfolio to Demonstrate Practical Skills", icon: "FolderMinus" },
      { text: "✕ Few or No Globally Recognised Certifications", icon: "XOctagon" },
      { text: "✕ No Structured Resume or Interview Preparation", icon: "Frown" },
      { text: "✕ Theory-Focused Learning with Limited Practical Application", icon: "BookOpen" },
      { text: "✕ No Guidance for Freelancing or Entrepreneurship", icon: "MinusCircle" },
      { text: "✕ Limited Career Support After Course Completion", icon: "TrendingDown" },
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
      "Social Media Marketing (Paid Social – Meta, LinkedIn, X, etc.)",
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
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: [
      "SEO (Search Engine Optimization)",
      "SMO (Social Media Optimization)",
      // "Social Media Marketing",
      "Content Marketing & Ad Scripting",
      "Email Marketing",
      "WhatsApp Marketing",
      "Mobile Marketing",
      "ORM (Online Reputation Management)",
      // "Influencer Marketing"
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
      "OTT Advertising",
      "Influencer Marketing",
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

export default function MastersDMVashi() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/MastersDMVashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/MastersDMVashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/MBAVashi/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/MastersDMVashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Master's in Digital Marketing Course with "
        highlightText="100% Assistance on placement"
        description="Kickstart your career at the best digital marketing institute in Navi Mumbai. Join us for our complete Master’s program, where you will learn about the latest technologies and automation through practical industrial exposure. Being associated with NSDC and Skill India, we provide you with complete placement support in reputed digital marketing agencies and corporate houses of India."
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
        title="What Makes Digifine's Master’s Digital Marketing Program Different "
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