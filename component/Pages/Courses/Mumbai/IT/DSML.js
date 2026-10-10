"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import LazySection from "../../../../../hooks/LazySection";
import { Lightbulb, Rocket, Gauge, BarChart3, Castle } from "lucide-react";

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
  { src: "/images/Icons/formicon/ficon1.webp", hover: "/images/Icons/formicon/ficon5.webp", label: "10+ Industry Tools" },
  { src: "/images/Icons/formicon/ficon2.webp", hover: "/images/Icons/formicon/ficon6.webp", label: "9+ Live Projects" },
  { src: "/images/Icons/formicon/ficon3.webp", hover: "/images/Icons/formicon/ficon7.webp", label: "250+ Hours Training" },
  { src: "/images/Icons/formicon/ficon4.webp", hover: "/images/Icons/formicon/ficon8.webp", label: "10,000+ Students Trained" },
];

const mbaFeatures = [
  {
    title: "Get 3 Months Internship Letter as Part of the Program",
    description: "Enhance your CV with a 3-months internship letter that confirms your practical skills in the field of Data Science and Machine Learning. Gain theoretical and practical experience working with real business datasets and cases.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Get Certified in Data Analytics, Data Science, Machine Learning & AI",
    description: "Get a certificate of proficiency in Data Analytics, Data Science, Machine Learning, and Artificial Intelligence. Take advantage of having these certificates as confirmation of your expertise.",
    imageSrc: "/images/USP/certificate.webp",
  },
  {
    title: "Solve Industry Cases and Work on Real-World Datasets",
    description: "Build an impressive portfolio based on industry cases and real-world datasets. Acquire practical skills in solving real business problems using Python, Machine Learning, AI, and data visualization tools.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Attend Overseas Training and Mentoring",
    description: "Participate in overseas training and mentoring delivered by specialists in Data Science who will share with you their practical experience and reveal modern approaches in AI, Machine Learning, and Data Science.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Trained by working data scientists and ML engineers who deploy production systems for a living. You learn the skills hiring managers actually screen for, from people who screen for them.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Support doesn't stop at graduation mentors and the career panel stay available for mock interviews, resume feedback, and coding help once you're in your first job.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Data Science, Machine Learning Course in Mumbai",
  paragraphs: [
    {
      text: "This course is built for people who want to actually work with data, not memorize theory about it. Faculty here are practitioners first, and the training reflects that: you build data science pipelines through task-based assignments, not static coursework. It's a 9-month program covering the core data domains you need on the job. You'll get real working time with Python, MySQL, Power BI, Tableau, Scikit-learn, Plotly, and TensorFlow the enterprise toolset employers ask for. Finish the course, and you've got a 100% placement guarantee at IT companies, plus certifications that hold up.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements", text: "A dedicated career panel connects you directly with hiring managers at global tech firms, backed by a 100% placement guarantee.", alwaysVisible: true },
    { title: "Industry Tools", text: "Real depth in Python, SQL, Tableau, Power BI, Scikit-learn, and TensorFlow — not a surface tour, but working familiarity with each.", alwaysVisible: false },
    { title: "Certifications", text: "Professional credentials that reflect actual practical work in Data Analytics, Data Science, and Machine Learning pipelines.", alwaysVisible: false },
    { title: "Global Mentorship", text: "Live code reviews and algorithm-level guidance from overseas tech mentors who've built these systems in production.", alwaysVisible: false },
    { title: "Practical Training", text: "A 9-month curriculum built around capstone projects and real-world case studies — the portfolio comes from work you actually did.", alwaysVisible: false },
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
    { name: "Streamlit", image: "images/toolslogo/IT/streamlit.png" },
    { name: "MLflow", image: "images/toolslogo/IT/mlflow.jpg" },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Guaranteed Placement with direct hiring partners", icon: "Briefcase" },
      { text: "3-Month Internship Letter to build your professional resume", icon: "FileText" },
      { text: "Next-Gen Tech Stack including Python, ReactJS, and NodeJS", icon: "Layers" },
      { text: "Exclusive NextJS Module taught nowhere else in India", icon: "Globe" },
      { text: "80% Hands-On Coding via live projects and real clones", icon: "Laptop" },
      { text: "International Mentorship from global tech leaders", icon: "Users" },
      { text: "3 Professional Certifications (Front-End, Back-End, & Full-Stack)", icon: "Award" },
      { text: "Lifetime Post-Course Support with trainers (Only in Asia)", icon: "Lightbulb" },
      { text: "Continuous Coding Assessments with interactive feedback", icon: "CheckSquare" },
      { text: "Job-Ready Technical Portfolio that proves you can build real apps", icon: "TrendingUp" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Guarantees or direct recruiter access", icon: "Briefcase" },
      { text: "No Internship Experience to show on your resume", icon: "FileText" },
      { text: "Outdated Tech Stack failing to meet modern industry standards", icon: "Layers" },
      { text: "No Advanced NextJS Training for modern web dev roles", icon: "Globe" },
      { text: "80% Lecture-Heavy Theory with minimal actual keyboard time", icon: "Laptop" },
      { text: "No Global Mentorship or industry-level exposure", icon: "Users" },
      { text: "Single Generic Certificate that recruiters ignore", icon: "Award" },
      { text: "Ghosted After Graduation with zero technical support", icon: "Lightbulb" },
      { text: "No Hands-On Coding Assessments or direct feedback", icon: "CheckSquare" },
      { text: "Empty Developer Portfolio making it hard to stand out", icon: "TrendingUp" },
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
    title: "Basic (Data Collection & Cleaning)",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    modules: ["Excel", "Python", "SQL", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    term: "Term 2",
    title: "Intermediate (Data Visualization)",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: ["Statistics", "PowerBI", "Tableau", "Seaborn", "Scipy"],
  },
  {
    term: "Term 3",
    title: "Advance (ML Topics)",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: ["Scikit-learn", "Tensor Flow", "Machine Learning (ML)"],
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
    title: "Data Scientist",
    description: "Apply statistical analysis and predictive modeling on complex data to solve core business problems.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "ML Engineer",
    description: "Deploy machine learning models into production, build data pipelines, and monitor model performance.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "AI Research Scientist",
    description: "Experiment with advanced deep learning architectures, fine-tune LLMs, and develop novel AI algorithms.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Data Analyst",
    description: "Clean raw data, run SQL queries, and build dashboards in Power BI or Tableau to track key performance metrics.",
    icon: <BarChart3 size={32} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Business Analyst",
    description: "Gather business requirements, analyze operational workflows, and translate stakeholder needs into clear technical specs.",
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
  },
];

/* ---------- Component ---------- */

export default function MasterFSD() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/DSML/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/DSML/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/PGDSMLAI/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/DSML/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Data Science Course with Machine Learning in Mumbai"
        highlightText="with Guaranteed Placement"
        description="Launch your tech career with a Data Science course built around real training instead of filler modules and recycled slide decks. You'll work directly with practicing data professionals, people who deal with messy, real datasets on the job, and build your portfolio through actual project work rather than following along with someone else's code. By the time you finish, you've got industry-recognized certifications behind you and a 100% placement guarantee, putting you in front of companies that are hiring right now."
        emi="Placements"
        startDate="Internship letter"
        startDateby="3 Months"
        duration="Top Mentors"
        durationValue="Practical Training from"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/dsml.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's Data Science and Machine Learning Course Different "
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
            mainDescription="Build job-ready skills in Data Science, Machine Learning, and high-demand tech careers."
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