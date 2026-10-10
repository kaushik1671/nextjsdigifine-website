"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import {
  FileSpreadsheet,
  BarChart,
  TrendingUp,
  PieChart,
  Crown,
} from "lucide-react";

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
  { src: "/images/Icons/formicon/ficon1.webp", hover: "/images/Icons/formicon/ficon5.webp", label: "30+ Industry Tools" },
  { src: "/images/Icons/formicon/ficon2.webp", hover: "/images/Icons/formicon/ficon6.webp", label: "25+ Live Projects" },
  { src: "/images/Icons/formicon/ficon3.webp", hover: "/images/Icons/formicon/ficon7.webp", label: "350+ Hours Training" },
  { src: "/images/Icons/formicon/ficon4.webp", hover: "/images/Icons/formicon/ficon8.webp", label: "10,000+ Students Trained" },
];

const mbaFeatures = [
  {
    title: "Get a 3-Month Internship Program as a Part of the Course",
    description: "Gain industry experience with the help of a 3-month internship program, which is a part of the Data Analytics course program. Practice industry datasets and live analytics projects to build up your experience and make your professional resume more attractive.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Gain Professional Certifications in Tableau, Power BI and Data Analytics",
    description: "Gain industry-specific certifications in Tableau, Power BI and Data Analytics to validate your knowledge and skills in this particular industry. This will help build up your reputation and earn more money working in your analytics job role.",
    imageSrc: "/images/USP/certificate.webp",
  },
  {
    title: "Practice Industry-Oriented Case Studies, Live Projects and Practical Assignments",
    description: "Create your professional analytics portfolio with industry-oriented case studies, live business projects, dashboarding and other practical assignments.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Get Overseas and International Training and Mentoring",
    description: "Train with international mentors who are experienced in the area of data analytics and who can pass their experience to you and prepare you for a data-driven business problem.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Trainers are working professionals in data analytics and AI. About 80% of class time is hands-on practice across Excel, Python, SQL, Power BI, Tableau, and generative AI tools used in current analytics roles.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Support continues after the course ends trainers remain reachable for technical questions, and students get help with resumes, portfolios, and interview prep during their job search.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Data Analytics Course in Mumbai",
  paragraphs: [
    {
      text: "The course is built around live projects: retail sales dashboards, HR analytics, bank loan analysis, supply chain tracking, and marketing campaign reports, reviewed directly by mentors working in the field. The syllabus covers Excel, Google Sheets, Python, MySQL, NumPy, Pandas, Power BI, and Tableau, plus a machine learning module (regression, decision trees, model evaluation) and a generative AI section on ChatGPT, Microsoft Copilot, and Julius AI. Course completion includes a placement guarantee and certifications tied to completed project work.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "3-month internship letter included. Placement support covers resume building, mock interviews, and introductions to hiring companies, backed by the placement guarantee.", alwaysVisible: true },
    { title: "Industry Tools", text: "Excel, Python, MySQL, NumPy, Pandas, Power BI, Tableau, Julius AI, and Git — used throughout the course.", alwaysVisible: false },
    { title: "Certifications", text: "Certifications in Data Analytics, Tableau, and Power BI, plus the internship letter, on completion.", alwaysVisible: false },
    { title: "Global Mentorship", text: "Mentors currently working in data analytics and AI, including some with international industry experience, give direct feedback on student projects.", alwaysVisible: false },
    { title: "Practical Training", text: "Live projects, assignments, and case studies from retail, banking, HR, and supply chain data 80% hands-on, 20% instruction.", alwaysVisible: false },
  ],
};

const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Design Tools",
  caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
  tools: [
    { name: "MySQL Workbench", image: "images/toolslogo/IT/mysqlworkbench.png" },
    { name: "SQL Server", image: "images/toolslogo/IT/sqlserver.jpg" },
    { name: "Github", image: "images/toolslogo/IT/github.png" },
    { name: "Git", image: "images/toolslogo/IT/git.png" },
    { name: "Kaggle", image: "images/toolslogo/IT/kaggle.jpg" },
    { name: "Jupyter Notebook", image: "images/toolslogo/IT/jupyter.png" },
    { name: " AI Tools like Julius AI", image: "images/toolslogo/IT/julius.webp" },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Two Paths. Two Outcomes. Your Choice.",
    description: "Life With Digifine:",
    cards: [
      { text: "100% Placement Guarantee", icon: "Briefcase" },
      { text: "3-Month Internship Letter", icon: "FileText" },
      { text: "Advanced AI & Gen AI Integration", icon: "Globe" },
      { text: "End-to-End Modern Tech Stack", icon: "Layers" },
      { text: "80% Intensive Practical Approach", icon: "Laptop" },
      { text: "Dual-Layer Expert Guidance", icon: "Users" },
      { text: "Comprehensive Mastery Certificates", icon: "Award" },
      { text: "Lifetime Support System", icon: "Lightbulb" },
      { text: "8 Live Enterprise Projects", icon: "CheckSquare" },
      { text: "Job-Ready Analytics Portfolio", icon: "TrendingUp" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Corporate Placement Networks", icon: "Briefcase" },
      { text: "Zero Corporate Internships", icon: "FileText" },
      { text: "Outdated Syllabus", icon: "Layers" },
      { text: "Surface-Level Learning", icon: "Globe" },
      { text: "80% Theory-Heavy Lectures", icon: "Laptop" },
      { text: "No Global Exposure", icon: "Users" },
      { text: "Single Generic Certificate", icon: "Award" },
      { text: "Abandoned Post-Graduation", icon: "Lightbulb" },
      { text: "Zero Enterprise-Grade Case Studies", icon: "CheckSquare" },
      { text: "Empty Technical Portfolio", icon: "TrendingUp" },
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
    title: "Data Cleaning & Visualization",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    modules: ["Excel", "Python", "MySQL", "Numpy", "Pandas", "Power BI", "Tableau"],
  },
  {
    term: "Term 2",
    title: "Adv. Data Analytics",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: ["Statistics", "Machine Learning"],
  },
  {
    term: "Term 3",
    title: "Gen AI",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: [
      "Introduction to Git and Version Control",
      "Commits, Pull, Fetch, and Push",
      "Introduction to AI and ChatGPT",
      "AI Tools",
      "Key Concepts in AI",
      "Prompt Engineering Basics",
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
    title: "Data Analyst Trainee / Junior Analyst",
    description: "Build core foundational skills in Excel, SQL, and basic data visualization tools like Tableau or Power BI to clean, structure, and explore datasets.",
    icon: <FileSpreadsheet size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Data Analyst",
    description: "Write complex SQL queries, analyze business metrics, construct dynamic dashboards, and perform exploratory data analysis to extract actionable insights.",
    icon: <BarChart size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Senior Data Analyst",
    description: "Leverage Python/R for advanced statistical modeling, automate reporting workflows, mentor junior team members, and partner with key stakeholders to drive strategic decisions.",
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Business Intelligence (BI) Analyst / Manager",
    description: "Architect enterprise data models, establish data governance standards, oversee performance analytics, and translate complex business problems into data solutions.",
    icon: <PieChart size={32} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Analytics Team Lead / Head of Insights",
    description: "Lead cross-functional analytics teams, define company-wide data strategies, optimize infrastructure investments, and align insight deliverables directly with business revenue goals.",
    icon: <Crown size={32} strokeWidth={1.5} />,
  },
];

/* ---------- Component ---------- */

export default function DataAnalytics() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/DataAnalytics/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/DataAnalytics/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/PGDSMLAI/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/DataAnalytics/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Data Analytics Course with"
        highlightText="Placement Guarantee"
        description="Digifine's Data Analytics course in Mumbai backs its training with a 100% placement guarantee plus a 3-month internship letter once you're done. You'll work in Excel, Python, MySQL, Power BI, and Tableau, get into machine learning fundamentals, and use AI tools like ChatGPT and Julius AI on real analytics work. Most of the course is project-based, with mentors who actually work in the field reviewing what you build."
        emi="Placements"
        startDate="Internship letter"
        startDateby="3 Months"
        duration="Top Mentors"
        durationValue="Practical Training from"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/da.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's Data Analytics Course Different "
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
            mainDescription="Build industry-ready analytical skills and apply for high-demand data and business roles."
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