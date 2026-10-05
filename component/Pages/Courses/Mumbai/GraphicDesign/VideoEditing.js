"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";

// Static Imports (Above the Fold - Critical Path)
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";

// Lazy Loaded Components (Below the Fold - Deferred)
const PlacementStats = lazy(() => import("../../../../CourseComponents/PlacementStats/PlacementStats"));
const FeaturesSection = lazy(() => import("../../../../CourseComponents/FeatureSection/FeatureSection"));
const SupportSection = lazy(() => import("../../../../CourseComponents/SupportSection/SupportSection"));
const StudentPortfolio = lazy(() => import("../../../../CourseComponents/StudentPortfolio/StudentPortfolio"));
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

const Features = [
  {
    title: "India’s First Masters Graphic Design Course in Mumbai with Placement Guarantee",
    description: "An innovative, production-focused course in Mumbai, combining creative training with a guaranteed placement to facilitate your journey towards professional success in the field of design.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Earn More Than 10 Internationally Certified Courses After Course Completion",
    description: "Prove your creativity through an exhaustive set of 10+ internationally certified courses, which guarantee that you have all the technical knowledge as per international standards.",
    imageSrc: "/images/banner-image/gd/FeatureS/ICertifiedC.webp",
  },
  {
    title: "Access All Major Software Packages under One Roof!",
    description: "Get access to the complete design ecosystem including Adobe Creative Suite and Figma through a single, high-end platform.",
    imageSrc: "/images/banner-image/gd/FeatureS/umbrella.webp",
  },
  {
    title: "Work on Real Projects and Make a Distinctive Portfolio for Yourself on Behance!",
    description: "Reduce the gap between your education and job through execution of live projects and making a distinctive digital portfolio on Behance for yourself.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Get mentored by working professionals who know the production standards today. These mentors will teach you everything that they have learned about the creative processes and the advanced skills that will help you impress media companies.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Career Assistance Post-Course",
    description: "We bridge the transition from student to professional with dedicated career support, including personalized resume engineering, technical portfolio reviews, and direct placement alignments.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

const overviewSectionData = {
  title: "Overview of Digifine  ",
  highlightTitle: "Video Editing & Motion Graphics Course in Mumbai",
  paragraphs: [
    {
      text: "Video Editing & Motion Graphics Course in Mumbai, offered by Digifine Academy, is a focused 6-8 month training course meant to hone your creative visualization abilities. This extensive curriculum helps you get multiple professional certifications along with 100% placement support to launch your career in the creative agencies of your choice. During this course, you will learn graphic design, video editing, and motion graphics with the help of industry-standard software such as Adobe Photoshop, Illustrator, Premiere Pro, and After Effects. With the assistance of industry professionals, you will work on live projects to create a professional portfolio for yourself.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "Ensure yourself a bright career prospect through our unique 100% placement assistance service. Bridge the gap between education and job hunting a framework that provides you with opportunities to meet top media companies, production studios, and creative agencies.", alwaysVisible: true },
    { title: "Tools", text: "Gain total proficiency on all of the tools that dominate the digital media industry. Become a master of Adobe Premiere Pro, After Effects, Photoshop, and Illustrator – the very tools used in contemporary studios.", alwaysVisible: false },
    { title: "Certifications", text: "Kickstart your creativity and expertise level through official industry-recognized credentials. Students earn multiple certifications that make a huge difference when it comes to adding more value to their resumes.", alwaysVisible: false },
    { title: "Mentorship", text: "Benefit from the guidance of experienced industry professionals who help you accelerate in your creative endeavors. Genuine studio production insights are shared with students by our mentors through portfolio evaluation.", alwaysVisible: false },
    { title: "Training", text: "Take part in a specialized curriculum oriented entirely to practical training. Get ready for building your professional portfolio by working on real-world projects and client briefs.", alwaysVisible: false },
  ],
};

const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Design Tools",
  caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
  tools: [
    { name: "Adobe Illustrator", image: "images/toolslogo/adobe.png" },
    { name: "Adobe Photoshop", image: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
    { name: "Adobe Premiere Pro", image: "images/toolslogo/APPro.webp" },
    { name: "Adobe After Effects", image: "images/toolslogo/AE.jpg" },
  ],
};

const toggleData = {
  digifine: {
    subheading: "The Digifine Advantage",
    description: "At Digifine, learning goes beyond theory. Every module is designed to help you build practical skills, gain confidence through real-world creative projects, and become job-ready with guidance from industry professionals.",
    cards: [
      { text: "✓ 100% Placement Assurance", icon: "Briefcase" },
      { text: "✓ Industry Residency Program", icon: "Users" },
      { text: "✓ Master Industry-Standard Software", icon: "Laptop" },
      { text: "✓ Portfolio That Gets Hired", icon: "Folder" },
      { text: "✓ 80% Practical Production", icon: "Layers" },
      { text: "✓ Globally Recognised Certifications", icon: "Award" },
      { text: "✓ Expert Mentorship", icon: "UserCheck" },
      { text: "✓ Comprehensive Career Preparation", icon: "Target" },
      { text: "✓ End-to-End Workflow Training", icon: "Cpu" },
      { text: "✓ Ongoing Career Support", icon: "TrendingUp" },
      { text: "✓ State-of-the-Art Editing Suite", icon: "Compass" },
      { text: "✓ Career-Aligned Curriculum", icon: "Zap" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical design exposure and structured career guidance, learning often stays limited to theory, making it difficult to build a professional portfolio and break into the creative industry.",
    cards: [
      { text: "✕ No Placement Support", icon: "FileX" },
      { text: "✕ Lack of Practical Experience", icon: "UserX" },
      { text: "✕ Theoretical-Only Learning", icon: "BookOpen" },
      { text: "✕ Missing Industry Certification", icon: "Award" },
      { text: "✕ Fragmented Knowledge", icon: "Slash" },
      { text: "✕ No Professional Critique", icon: "HelpCircle" },
      { text: "✕ Weak Showreel", icon: "FolderMinus" },
      { text: "✕ Outdated Workflow Training", icon: "AlertTriangle" },
      { text: "✕ Zero Interview Preparation", icon: "Maximize" },
      { text: "✕ No Access to Industry Mentors", icon: "UserX" },
      { text: "✕ Insufficient Skill Development", icon: "XCircle" },
      { text: "✕ Disconnected from Market Needs", icon: "TrendingDown" },
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
    title: "Adobe Illustrator",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    part1Title: "Adobe Illustrator",
    part1Modules: [
      "Introduction to Adobe Illustrator",
      "Basics",
      "Working with Objects",
      "Drawing",
      "Appearance of Objects",
      "Brushes",
      "Type (Text)",
      "Working with Images",
      "Advanced Techniques",
      "Artboards & Export",
    ],
    part2Title: "PAdobe Photoshop",
    part2Modules: [
      "Introduction to Adobe Photoshop",
      "Get Started",
      "Layers Part 1",
      "Layers Part 2",
      "Selections Part 1",
      "Selections Part 2",
      "Raster Layers",
      "Shape Layers",
      "Artboards",
      "Work with Smart Objects",
      "Repair Your Photos",
      "Actions",
      "Text Layers",
      "Adjustment Layers",
      "Camera Raw - Edit Your Photos",
      "Cloud Documents",
      "Effects",
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
    ],
  },
  {
    term: "Term 3",
    title: "Advanced Marketing & Management",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: [
      "Website Development",
      "E-commerce Management",
      "Influencer Marketing",
      "Mobile Marketing",
    ],
  },
];

const timelineStepsData = [
  { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
  { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
  { title: "Assessments", description: "Solve real-world problems to test your skills." },
  { title: "Mock Interview", description: "Practice with interview panels and boost your confidence." },
  { title: "Get Placed", description: "Secure a job with 100% placement support." },
];

const studentProjects = [
  { id: 1, title: "Eco-Wear Branding & Poster Design", category: "Poster & Branding", image: "/images/toolslogo/ecowear.png", url: "https://behance.net/student-branding-project" },
  { id: 2, title: "FinTech Mobile Wallet App", category: "UI/UX Mockup", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80", url: "https://behance.net/student-uiux-mockup" },
  { id: 3, title: "Cyberpunk Cityscape 3D Environment", category: "3D Render", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", url: "https://behance.net/student-3d-render" },
  { id: 4, title: "Abstract Kinetic Typography Intro", category: "Motion Graphics", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80", url: "https://behance.net/student-motion-graphic" },
  { id: 5, title: "Streetwear Brand Autumn Campaign", category: "Instagram Content Set", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80", url: "https://behance.net/student-social-media" },
  { id: 6, title: "Neo-Noir Short Film Cinematic Cut", category: "Video Editing", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80", url: "https://behance.net/student-video-edit" },
  { id: 7, title: "Mythological Character Concept Art", category: "Illustration Piece", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80", url: "https://behance.net/student-illustration" },
  { id: 8, title: "Minimalist Coffee House Logo Suite", category: "Logo Design", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80", url: "https://behance.net/student-logo-design" },
];

/* ---------- Component ---------- */

export default function VideoEditing() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/VideoEditing/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/VideoEditing/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/Multimedia/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/VideoEditing/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Video Editing & Motion Graphics Course "
        highlightText="in Mumbai"
        description="Learn the skill of storytelling visually through our career-oriented Video Editing & Motion Graphics Course in Mumbai. The course has been designed for you to create an outstanding portfolio of work under the guidance of expert faculty and make your brand stand out. Learn all the latest techniques that will help you increase the value of your brand and your career."
        emi="Placements"
        startDate="3+ Software"
        startDateby="Top Industry"
        duration="Industry Experts"
        durationValue="Practical Training from"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/gd/bgd2.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's Multimedia & Animation Course Different"
        highlightTitle="in Mumbai?"
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
          <FeaturesSection featuresData={Features} columns={4} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <SupportSection supportData={supportSectionData} />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={null}>
          <StudentPortfolio
            subtitle="Student Portfolio Showcase"
            title="See What Our Students Create"
            caption="Every student graduates with a live portfolio — not just a certificate."
            buttonText="View Full Portfolio"
            buttonLink="https://www.behance.net"
            badgeText={"Portfolio\nDriven\nLearning"}
            projects={studentProjects}
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
          <ToolsMastered toolsData={toolsSectionData} />
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
          <SyllabusTimeLine syllabusData={syllabusSectionData} columns={5} />
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
          <Location city="Mumbai" />
        </Suspense>
      </LazySection>
    </main>
  );
}