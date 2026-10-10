"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import { Code2, Layout, Server, Cloud, Bot } from "lucide-react";

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
    description: "Secure your future before you've written your first line of code. Earn a monthly stipend while you train in a real corporate environment with mentor guidance, and finish with a verifiable experience letter.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Work Inside a Live Corporate Simulation",
    description: "Work inside a simulated development environment from week one with real client projects, not just classroom theory. Learn through daily challenges, deliverables and deadlines.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Build Portfolio-Ready Real Projects",
    description: "Build applications like e-commerce stores, job portals, food delivery apps, weather apps and your own portfolio website, using HTML, CSS, JavaScript, React, Node.js, Python and Django.",
    imageSrc: "/images/USP/certificate.webp",
  },
  {
    title: "Deploy to the Cloud with AWS & Azure",
    description: "Deploy applications to AWS and Azure and learn industry-standard DevOps practices from day one, along with Gen AI tools used in modern development teams.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Learn from industry experts and highly skilled in-house trainers with real development experience. Every module is backed by live coding, hands-on projects and continuous assessments.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Industry expert trainers guiding students on live coding projects",
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
  highlightTitle: "AI Powered Full Stack Developer & Cloud Engineering Course in Mumbai",
  paragraphs: [
    {
      text: "This program is built for people who want to work as developers from day one, not just learn theory. Instead of a regular classroom, you train in a live corporate simulation with real client projects, hands-on coding and daily challenges. You cover the complete stack: front-end, back-end, databases, cloud deployment and Gen AI tools, across 300+ hours of training and 50+ live projects. You also earn a monthly stipend while you train, receive your offer letter on day one, and get structured placement support through Digifine's hiring partner network.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Corporate Simulation", text: "Work inside a simulated development environment from week one with real client projects, not just classroom theory.", alwaysVisible: true },
    { title: "Full Stack Coverage", text: "Master front-end, back-end, databases, cloud deployment, and AI tools in one comprehensive program.", alwaysVisible: false },
    { title: "Real Live Projects", text: "Build portfolio-ready applications: e-commerce stores, job portals, food delivery apps, and more.", alwaysVisible: false },
    { title: "Paid Internship", text: "Earn a monthly stipend while you train in a real corporate environment with mentor guidance.", alwaysVisible: false },
    { title: "Cloud Deployment", text: "Deploy applications to AWS and Azure. Learn industry-standard DevOps practices from day one.", alwaysVisible: false },
  ],
};

const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Developer Tools",
  caption: "Work with the same tools used by professional developers and engineering teams, from coding and testing to deployment and AI-assisted development.",
  tools: [
    { name: "Visual Studio Code", image: "images/toolslogo/IT/vscode.png" },
    { name: "GitHub", image: "images/toolslogo/IT/github.png" },
    { name: "Git", image: "images/toolslogo/IT/git.png" },
    { name: "Postman", image: "images/toolslogo/IT/postman.png" },
    { name: "Vercel", image: "images/toolslogo/IT/vercel.png" },
    { name: "Render", image: "images/toolslogo/IT/render.png" },
    { name: "AI Tools like Lovable", image: "images/toolslogo/IT/lovable.png" },
    { name: "Cursor AI", image: "images/toolslogo/IT/cursor.png" },
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
  "/images/company_logo/it/1.webp",
  "/images/company_logo/it/2.webp",
  "/images/company_logo/it/3.webp",
  "/images/company_logo/it/4.webp",
  "/images/company_logo/it/5.webp",
  "/images/company_logo/it/6.webp",
  "/images/company_logo/it/7.webp",
];

const marqueeBottomLogos = [
  "/images/company_logo/it/8.webp",
  "/images/company_logo/it/9.webp",
  "/images/company_logo/it/10.webp",
  "/images/company_logo/it/11.webp",
  "/images/company_logo/it/12.webp",
  "/images/company_logo/it/13.webp",
  "/images/company_logo/it/1.webp", // first image repeated for a seamless loop
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
    title: "FrontEnd",
    description: "Build responsive, modern user interfaces with core web technologies and popular front-end frameworks.",
    modules: ["HTML", "CSS", "JavaScript", "Advance JavaScript", "Bootstrap", "React JS", "Next JS", "Tailwind CSS"],
  },
  {
    term: "Term 2",
    title: "BackEnd & Framework",
    description: "Create secure server-side applications, APIs and databases that power real-world products.",
    modules: ["Python", "NodeJS", "MySQL", "MongoDB", "Django", "Express JS"],
  },
  {
    term: "Term 3",
    title: "Cloud Deployment & Gen AI",
    description: "Deploy your applications to the cloud and add Gen AI features using industry-standard DevOps practices.",
    modules: ["Gen AI", "AWS", "Azure"],
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
    title: "Full Stack Developer",
    description: "Build complete web applications, from user interface to server, database and deployment.",
    icon: <Code2 size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Front-End Developer",
    description: "Create fast, responsive and accessible user interfaces using React, Next.js and Tailwind CSS.",
    icon: <Layout size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Back-End Developer",
    description: "Design APIs, manage databases and build secure server-side logic with Node.js, Python and Django.",
    icon: <Server size={32} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Cloud Engineer",
    description: "Deploy, monitor and scale applications on AWS and Azure using industry-standard DevOps practices.",
    icon: <Cloud size={32} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "AI Application Developer",
    description: "Integrate Gen AI features and AI-assisted workflows into modern web and cloud applications.",
    icon: <Bot size={32} strokeWidth={1.5} />,
  },
];

/* ---------- Component ---------- */

export default function ITSimulation() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/FullStack/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/FullStack/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/PGDSMLAI/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/FullStack/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="AI Powered Full Stack Developer & Cloud Engineering "
        highlightText="with Corporate Simulation"
        description="Train inside a live corporate simulation with real-world projects, hands-on coding, cloud deployment, and an offer letter on day one. Start earning Rs. 15,000 monthly while you build your developer career."
        emi="Placements"
        startDate="Industry Experts"
        startDateby="Practical Training from"
        duration="Curriculum with Unique Modules"
        durationValue="One of its kind"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/fsd.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's AI Powered Full Stack Developer & Cloud Engineering with Corporate Simulation Different "
        highlightTitle="in Mumbai"
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
            mainDescription="Build job-ready skills in Full Stack Development, Cloud Engineering, and high-demand tech careers."
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
            paragraph="Process mapped carefully to transform learners into job-ready full stack developers."
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