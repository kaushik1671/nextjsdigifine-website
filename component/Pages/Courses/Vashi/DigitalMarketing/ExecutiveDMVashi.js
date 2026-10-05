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
    title: "100% Placement Assistance",
    description: "No need to go through a fiercely competitive job market all alone. The dedicated career cell at our end equips you from day one through personalized resume writing, portfolio making, and practice interviews to land the best jobs in top companies effortlessly.",
    imageSrc: "/images/banner-image/dm/placement.webp",
  },
  {
    title: "E-Commerce Management",
    description: "Get hands-on training on how to set up, manage, and grow extremely lucrative digital storefronts. Learn everything there is to know about running a digital store, setting up inventory, and creating conversion-based ad campaigns",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "3+ Globally Recognised Certifications",
    description: "Make an impression right from the beginning. You will earn more than 3+ internationally approved certificates from top platforms such as Google and Meta, which serve as quick evidence of your digital marketing skills.",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
];

const uniqueModulesSectionData = {
  tagline: "About us",
  title: "Advanced Marketing Specializations for",
  highlightTitle: "Future Marketing Leaders",
  description: "You’ll get to learn core in-demand skills like Website Development, Performance Marketing, along with dedicated Post Course Support and guaranteed Salary Hike tracks designed to completely elevate your tech and marketing career.",
  modules: [
    { iconName: "Laptop", title: "Website", subtitle: "Development" },
    { iconName: "BarChart3", title: "Performance", subtitle: "Marketing" },
    { iconName: "Compass", title: "Post Course", subtitle: "Support" },
    { iconName: "TrendingUp", title: "Salary", subtitle: "Hike" },
  ],
};

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Live Project & Real Case Studies",
    description: "Use live corporate accounts and real budgets to move from theory to practice. Dissect data-driven campaigns of the world’s best-known brands, evaluate the metrics and create a portfolio of successful projects that will make you a standout expert for recruiters.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Professional development does not stop after your graduation. Get lifetime access to guidance from experts to solve complex conversion tracking problems and confidently present your marketing strategy ideas to your employers or clients.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

// NEW (not in original file): tool names taken from the Overview "Tools" text and syllabus. Image paths are a GUESS - please check the files exist.
const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Digital Marketing Tools",
  caption: "Work with the tools employers recognise across paid media and analytics.",
  tools: [
    { name: "Google Ads", image: "images/toolslogo/DM/googleads.png" },
    { name: "Google Analytics 4", image: "images/toolslogo/DM/ga4.png" },
    { name: "Meta Ads Manager", image: "images/toolslogo/DM/meta.png" },
    { name: "Microsoft Clarity", image: "images/toolslogo/DM/clarity.png" },
  ],
};

// NEW (not in original file): built from the 3 syllabus terms. Role titles and icons are my pick.
const careerSteps = [
  {
    id: "01",
    title: "Performance Marketer",
    description: "Run paid campaigns and track results with Google Ads, Social Media Marketing (Paid Ads), Google Analytics, Microsoft Clarity and Remarketing.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Organic Marketing Specialist",
    description: "Grow brand visibility through SEO, SMO, Content Marketing, Email Marketing, WhatsApp Marketing and ORM.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Website & E-Commerce Specialist",
    description: "Build and manage online presence through Website Development, E-commerce Management, Influencer Marketing and Mobile Marketing.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Advance Executive Digital Marketing Course in Navi Mumbai.",
  paragraphs: [
    {
      text: "Enroll in the Digital Marketing Courses at Digifine Academy to speed up your career, freelance work or your business. The Advance Executive Digital Marketing Courses at Navi Mumbai involve expert mentorship with a practical execution approach, allowing you to get professional certifications along with 100% placements. Step out of theory and move into live projects and case studies built for maximum market exposure. This comprehensive program provides intensive training in Performance Marketing, Social Media Optimization, Remarketing, Website Development, and E-commerce.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "Enjoy 100% placement support through resume workshops, mock interviews, and direct access to career opportunities from our top-notch agency and corporate partners.", alwaysVisible: true },
    { title: "Tools", text: "Be proficient at premium tools used in the industry, such as Google Analytics 4, Meta Ads Manager, and tracking pixels through the execution of campaigns.", alwaysVisible: false },
    { title: "Certifications", text: "Acquire globally accredited certifications such as those offered by Google, Meta, combined with an Executive Digifine certificate validating your marketing acumen.", alwaysVisible: false },
    { title: "Mentorship", text: "Learn directly from active marketers in real-time, through 1-on-1 strategy review sessions and lifelong guidance on resolving your existing jobs and freelancing", alwaysVisible: false },
    { title: "Training", text: "Engage in a 100% practical hybrid approach by implementing live budget campaigns for corporates in fields such as performance marketing, SEO, and E-commerce.", alwaysVisible: false },
    // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
    // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "At Digifine",
    description: "At Digifine, learning goes beyond theory. Every module is designed to help you build practical skills, gain confidence through real-world experience, and become job-ready with guidance from industry professionals.",
    cards: [
      { text: "✓ Practical Training Through Live Projects & Case Studies", icon: "Layers" },
      { text: "✓ Learn from Industry Experts & Experienced Professionals", icon: "Users" },
      { text: "✓ Career-Focused Curriculum Aligned with Industry Needs", icon: "Target" },
      { text: "✓ Hands-On Learning with Real Marketing Tools", icon: "Laptop" },
      { text: "✓ AI-Powered Digital Marketing Training", icon: "Cpu" },
      { text: "✓ Interview Preparation & Resume Building Support", icon: "Briefcase" },
      { text: "✓ Portfolio Development with Real Campaign Experience", icon: "Folder" },
      { text: "✓ Personalized Mentorship & Doubt-Solving Sessions", icon: "UserCheck" },
      { text: "✓ Globally Recognised Industry Certifications", icon: "Award" },
      { text: "✓ Exposure to Multiple Digital Marketing Specializations", icon: "Compass" },
      { text: "✓ Freelancing & Personal Branding Guidance", icon: "Zap" },
      { text: "✓ Post-Course Career Support & Professional Guidance", icon: "TrendingUp" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical exposure and structured career guidance, learning often stays limited to theory, making it difficult to build confidence and succeed in real-world digital marketing roles.",
    cards: [
      { text: "✕ Limited Practical Exposure Beyond Classroom Learning", icon: "BookOpen" },
      { text: "✕ Generic Teaching Without Industry Mentorship", icon: "UserX" },
      { text: "✕ Outdated Curriculum with Limited Real-World Relevance", icon: "AlertTriangle" },
      { text: "✕ Minimal Hands-On Experience with Marketing Tools", icon: "Slash" },
      { text: "✕ No AI-Focused Marketing Training", icon: "Cpu" },
      { text: "✕ Little or No Interview & Resume Preparation", icon: "FileX" },
      { text: "✕ No Portfolio to Showcase Practical Skills", icon: "FolderMinus" },
      { text: "✕ Limited Mentorship & Personalized Support", icon: "HelpCircle" },
      { text: "✕ Few or No Industry-Recognised Certifications", icon: "Award" },
      { text: "✕ Limited Exposure to Specialized Marketing Domains", icon: "Maximize" },
      { text: "✕ No Guidance for Freelancing or Personal Branding", icon: "XCircle" },
      { text: "✕ No Structured Career Support After Course Completion", icon: "TrendingDown" },
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
      "Social Media Marketing (Paid Ads)",
      "Google Analytics",
      "Microsoft Clarity",
      "Landing Page Technique",
      "Remarketing",
      "Conversions",
      // "Excel for Marketers"
    ],
  },
  {
    term: "Term 2",
    title: "Organic Marketing & Engagement",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: [
      "SEO (Search Engine Optimization)",
      "SMO (Social Media Optimization)",
      "Content Marketing / Ad Scripting",
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
      // "Brand Management",
      "E-commerce Management",
      "Influencer Marketing",
      "Mobile Marketing",
      // "OTT Advertising",
      // "Programmatic Advertising",
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

export default function ExecutiveDMVashi() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/AEDMP_Vashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/AEDMP_Vashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/MBAVashi/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/AEDMP_Vashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Advance Executive Digital Marketing Classes in Navi Mumbai "
        highlightText="100% Placement Assistance"
        description="Are you searching for the best digital marketing courses in Navi Mumbai? Get practical training directly from working professionals in the industry. You get trained in the most dynamic marketing skills, do live projects for companies, and learn the exact technical skills required for becoming a marketing expert."
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
        title="What Makes Digifine's Advance Executive Digital Marketing Program Different "
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
            mainDescription="Build job-ready skills across performance marketing, organic marketing, website development and e-commerce."
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