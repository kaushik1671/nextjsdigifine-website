"use client";

import React, { lazy } from "react";

// 1. Corrected LazySection Path (Specified exact LazySection file name)
import LazySection from "../../../../../hooks/LazySection"; // Ensure file name LazySection.jsx / LazySection.js is appended

// 2. Critical Above-the-fold components
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
import PlacementStats from "../../../../CourseComponents/PlacementStats/PlacementStats";

// 3. Below-the-fold Lazy Loaded Components
const FeaturesSection = lazy(() => import("../../../../CourseComponents/FeatureSection/FeatureSection"));
const UniqueModules = lazy(() => import("../../../../CourseComponents/UniqueModules/UniqueModules"));
const SupportSection = lazy(() => import("../../../../CourseComponents/SupportSection/SupportSection"));
const CourseOverview = lazy(() => import("../../../../CourseComponents/CourseOverview/CourseOverview"));
const Toggle = lazy(() => import("../../../../CourseComponents/Toggle/Toggle"));
const CompanyMarquee = lazy(() => import("../../../../CourseComponents/CompanyMarquee/CompanyMarquee"));
const SuccessStories = lazy(() => import("../../../../CourseComponents/SuccessStories/SuccessStories"));
const StudentPlacedAt = lazy(() => import("../../../../CourseComponents/StudentPlacedAt/StudentPlacedAt"));
const Testimonal = lazy(() => import("../../../../CourseComponents/Testimonal/Testimonal"));
const SyllabusTimeLine = lazy(() => import("../../../../CourseComponents/SyllabusTimeLine/SyllabusTimeLine"));
const CertificateSection = lazy(() => import("../../../../CourseComponents/CertificateSection/CertificateSection"));
const VerticalTimeline = lazy(() => import("../../../../CourseComponents/VerticleTimeLine/VerticalTimeLine"));
const BoxCardSection = lazy(() => import("../../../../Sections/BoxCardSection"));
const FAQsSection = lazy(() => import("../../../../FAQsSection/FAQsSection"));
const Location = lazy(() => import("../../../../CourseComponents/Location/Location"));

// 4. Data File Imports
import testimonialsData from "../DigitalMarketing/data/AdvancedExecutiveDm/testimonials";
import customCertificatesData from "../DigitalMarketing/data/AdvancedExecutiveDm/customCertificates";
import boxCardCategoriesData from "../DigitalMarketing/data/MBA/boxcard";
import faqsData from "../DigitalMarketing/data/AdvancedExecutiveDm/faqs";

// 5. In-Memory Static Data
const pgdmStatsData = [
  { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
  { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
  { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
  { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
];

const mbaFeatures = [
  {
    title: "100% Placement Assistance",
    description: "No need to go through a fiercely competitive job market all alone. The dedicated career cell at our end equips you from day one through personalized resume writing, portfolio making, and practice interviews to land the best jobs in top companies effortlessly.",
    imageSrc: "/images/banner-image/dm/placement.webp"
  },
  {
    title: "E-Commerce Management",
    description: "Get hands-on training on how to set up, manage, and grow extremely lucrative digital storefronts. Learn everything there is to know about running a digital store, setting up inventory, and creating conversion-based ad campaigns",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "3+ Globally Recognised Certifications",
    description: "Make an impression right from the beginning. You will earn more than 3+ internationally approved certificates from top platforms such as Google and Meta, which serve as quick evidence of your digital marketing skills.",
    imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
  }
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
    { iconName: "TrendingUp", title: "Salary", subtitle: "Hike" }
  ]
};

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Live Project & Real Case Studies",
    description: "Use live corporate accounts and real budgets to move from theory to practice. Dissect data-driven campaigns of the world’s best-known brands, evaluate the metrics and create a portfolio of successful projects that will make you a standout expert for recruiters.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue"
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Professional development does not stop after your graduation. Get lifetime access to guidance from experts to solve complex conversion tracking problems and confidently present your marketing strategy ideas to your employers or clients.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald"
  }
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Advance Executive Digital Marketing Program in Mumbai",
  paragraphs: [
    { 
      text: "The Advance Executive Digital Marketing Program, launched by Digifine, sets supporting learners to achieve career growth and access high-quality professional opportunities as its core positioning.It has built a complete set of core training modules and a full-process, implementation-focused job placement service system, aligns with specialized sub-positions in the digital marketing field, cultivates participants’ employment competitiveness, and helps program enrollees achieve career advancement within this sector.",
      alwaysVisible: true 
    }
  ],
  keyFeatures: [
    { title: "Placements", text: "The Senior Executive Digital Marketing Program launched by Digifine provides all-around employment placement support covering services such as resume creation and LinkedIn optimization. Leveraging its industry network and resources, the program helps participants secure high-growth career opportunities in the digital marketing field.", alwaysVisible: true },
    { title: "Comprehensive Curriculum", text: " We have launched the Advance Executive Digital Marketing Program, which is exclusively designed for professionals aiming to advance their careers in the marketing field, with a growth system tailored to meet industry needs.", alwaysVisible: false },
    { title: "Hands-on Tools", text: "The Advance Executive Digital Marketing Program provides participants with hands-on experience using the cutting-edge industry tools adopted by top global marketers. Covering 11 instructional tools including Google Ads, the program helps learners build workplace-applicable skills, execute marketing campaigns, analyze performance data, and develop confidence in project management.", alwaysVisible: false },
    { title: "Certifications", text: "The advanced executive digital marketing program that we have launched enables all learners who complete all required learning activities to receive an industry-recognized program certificate. Participants may also prepare to earn the authoritative certifications issued by Google, Meta, and HubSpot.", alwaysVisible: false },
    { title: "Real Mentorship", text: "All instructors for this senior executive digital marketing program are seasoned cross-industry digital marketing practitioners. These services offer students four kinds of specialized assistance that include customized tutoring which will enable them to deal with the difficulties that they may encounter as well as build their confidence, critical thinking skills, and core competencies in this discipline.", alwaysVisible: false },
    { title: "Practical Focus", text: " The Advance Executive Digital Marketing Program has been created on a practical teaching methodology. Students learn practical aspects of this program through live campaigns, projects, case studies, website optimizations, social media management, and performance marketing practices.", alwaysVisible: false }
  ]
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
      { text: "✓ Post-Course Career Support & Professional Guidance", icon: "TrendingUp" }
    ]
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
      { text: "✕ No Structured Career Support After Course Completion", icon: "TrendingDown" }
    ]
  }
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
  "/images/company_logo/dm/1.webp",
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
      "Social Media Marketing (Paid Ads)",
      "Google Analytics",
      "Microsoft Clarity",
      "Landing Page Technique",
      "Remarketing",
      "Conversions",
    ]
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
    ]
  },
  {
    term: "Term 3",
    title: "Advanced Marketing & Management",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: [
      "Website Development",
      "E-Commerce Management",
      "Influencer Marketing",
      "Mobile Marketing",
    ]
  }
];

const timelineStepsData = [
  { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
  { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
  { title: "Assessments", description: "Solve real-world problems to test your skills." },
  { title: "Mock Interview", description: "Practice with interview panels and boost your confidence." },
  { title: "Get Placed", description: "Secure a job with 100% placement support." },
];

export default function AdvancedExecutiveDM() {
  return (
    <>
      <CourseCard
        title="Advance Executive Digital Marketing Classes "
        highlightText="in Mumbai"
        description="Advanced Executive Digital Marketing Course by Digifine, Mumbai, enables professionals, entrepreneurs, business owners, and aspiring marketers to learn nine digital marketing skills, which include SEO & Google Ads. With practical experience gained from projects and expert training, students will be able to develop their skill set, think strategically, and become leaders."
        emi="Placements"
        startDate="Industry Experts"
        startDateby="Practical Training from"
        duration="Curriculum with Unique Modules"
        durationValue="One of its kind"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/aedm.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent 
        title="What Makes Digifine's Advance Executive Digital Marketing Program Different?"
        highlightTitle="in Mumbai?"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />

      <PlacementStats />

      <LazySection>
        <FeaturesSection featuresData={mbaFeatures} columns={3} />
      </LazySection>

      <LazySection>
        <UniqueModules uniqueModulesData={uniqueModulesSectionData} />
      </LazySection>

      <LazySection>
        <SupportSection supportData={supportSectionData} />
      </LazySection>

      <LazySection>
        <CourseOverview overviewData={overviewSectionData} />
      </LazySection>

      <LazySection>
        <Toggle content={toggleData} />
      </LazySection>

      <LazySection>
        <CompanyMarquee 
          tagline="Our Placements"
          title="Companies They"
          highlightTitle="Work At"
          topLogos={marqueeTopLogos}
          bottomLogos={marqueeBottomLogos}
        />
      </LazySection>

      <LazySection>
        <SyllabusTimeLine syllabusData={syllabusSectionData} />
      </LazySection>

      <LazySection>
        <SuccessStories storiesData={successStoriesData} />
      </LazySection>

      <LazySection>
        <StudentPlacedAt 
          companiesData={mbaPlacementsData} 
          btntext="Know More" 
          redirectlink="/course-brochures" 
        />
      </LazySection>

      <LazySection>
        <Testimonal 
          title="What Our"
          bluetitle="Students Have To Say:"
          testimonial={testimonialsData}
          paragraph="Still wondering what your future would look like after graduating from one of the best MBA - Level Digital Marketing Program Colleges in Mumbai? From training at Digifine, to placements and more: hear it all from our students!" 
        />
      </LazySection>

      <LazySection>
        <CertificateSection
          title="Certifications"
          subtitlePart1="Earn Professional"
          subtitleHighlight="Certifications"
          paragraph="Acquire several professional certifications as well as Google certifications by the end of your Post Graduate in Digital Marketing at Digifine Academy. Not only this, but you also get a chance to enhance your portfolio and resume by earning an international certification from the IBMI Institute in Berlin, Germany!"
          certificates={customCertificatesData}
        />
      </LazySection>

      <LazySection>
        <VerticalTimeline 
          steps={timelineStepsData} 
          title="Steps Towards Success With" 
          bluetitle="Digifine" 
          paragraph="Follow this structured process mapped carefully to transform dynamic learners into full-fledged corporate marketing leaders." 
        />
      </LazySection>

      <LazySection>
        <BoxCardSection coursedata={boxCardCategoriesData} />
      </LazySection>

      <LazySection>
        <FAQsSection
          sectionTitle="Frequently Asked Questions"
          faqData={faqsData}
        />
      </LazySection>

      <LazySection>
        <Location city="Mumbai" />
      </LazySection>
    </>
  );
}