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
  { src: "/images/Icons/formicon/ficon1.webp", hover: "/images/Icons/formicon/ficon5.webp", label: "22+ Industry Tools" },
  { src: "/images/Icons/formicon/ficon2.webp", hover: "/images/Icons/formicon/ficon6.webp", label: "35+ Live Projects" },
  { src: "/images/Icons/formicon/ficon3.webp", hover: "/images/Icons/formicon/ficon7.webp", label: "300+ Hours Training" },
  { src: "/images/Icons/formicon/ficon4.webp", hover: "/images/Icons/formicon/ficon8.webp", label: "10,000+ Students Trained" },
];

const mbaFeatures = [
  {
    title: "International Mentoring & Hands-On Learning",
    description: "Learning from international mentors and experienced software development professionals who have worked in the industry will help you learn the latest trends in development.",
    imageSrc: "/images/banner-image/dm/Placement.webp",
  },
  {
    title: "Earn Professional Certification in Front-End, Back-End, and Python Full Stack Development",
    description: "Earning professional certification in Front-End Development, Back-End Development, and Python Full Stack Development will make you technically proficient and provide more job opportunities.",
    imageSrc: "/images/USP/certificate.webp",
  },
  {
    title: "Work on Live Projects, Coding Assignments and Real-Life Case Studies ",
    description: "Developing live projects, coding assignments and real-life case studies will add a lot of value to your portfolio. Gain experience in building responsive websites, APIs and full stack web applications using the latest technologies.",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Hands-On Training by Industry Professionals",
    description: "Get hands-on training in Python Full Stack Development from industry professionals. Understand how to build professional applications using Python, Django, React, SQL, Git, and REST APIs.",
    imageSrc: "/images/banner-image/dm/faculty.webp",
  },
];

const supportSectionData = [
  {
    badge: "Hands-on Experience",
    title: "Expert Faculty",
    description: "Trainers here have actually worked in the industry overseas, and 80% of the course is hands-on rather than lecture-based. So when you get stuck on something in a web dev module, you're getting help from someone who's solved that exact problem before, not just read about it.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
    alt: "Live Project Budgets and Marketing Analytics Performance",
    theme: "blue",
  },
  {
    badge: "Placement & Beyond",
    title: "Post Course Support",
    description: "Here's the thing: most institutes don't tell you that support usually ends the day you graduate. Digifine doesn't. You can still reach trainers with technical questions afterward, and you'll get help with your resume, portfolio, and mock interviews when you're actually job hunting.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
    alt: "Post Course Lifelong Career Guidance and Executive Networking",
    theme: "emerald",
  },
];

const toolsSectionData = {
  title: "Master",
  highlightTitle: "Industry-Standard Design Tools",
  caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
  tools: [
    { name: "Visual Studio", image: "images/toolslogo/IT/vs.png" },
    { name: "Github", image: "images/toolslogo/IT/github.png" },
    { name: "Git", image: "images/toolslogo/IT/git.png" },
    { name: "Vercel", image: "images/toolslogo/IT/vercel.png" },
    { name: "AI Tools like Lovable", image: "images/toolslogo/IT/lovable.webp" },
    { name: "Cursor", image: "images/toolslogo/IT/cursor.png" },
  ],
};

const analyticsSteps = [
  {
    id: "01",
    title: "Frontend Developer / Developer Trainee",
    description: "Start by learning HTML, CSS, JavaScript, and modern UI libraries to build responsive and user-friendly web interfaces.",
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "Backend Developer",
    description: "Independently design server-side logic, build secure REST APIs, manage databases, and optimize backend server performance.",
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "Python Developer",
    description: "Write clean, executable Python scripts for automation, data processing, backend microservices, or AI/ML model integrations.",
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "Full stack Developer",
    description: "Handle both client-side and server-side architectures seamlessly, connecting robust databases with modern frontends.",
    icon: <BarChart3 size={32} strokeWidth={1.5} />,
  },
  {
    id: "05",
    title: "Software Engineer",
    description: "Architect scalable enterprise systems, implement system design patterns, and lead software development cycles.",
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

const overviewSectionData = {
  title: "Overview of",
  highlightTitle: "Full Stack in Web Development Course in Hyderabad",
  paragraphs: [
    {
      text: "This course walks you through the entire software development lifecycle, not just learn React and hope for the best. It's structured around assignments, real projects, and mentors who've been in the field. You leave with skills that actually transfer, plus placement help along the way, not just at the end. On the technical side, you're covering HTML5, CSS3, JavaScript, ReactJS, and NextJS for front-end, Python, NodeJS, Django, and ExpressJS for back-end. Add MySQL, MongoDB, Gen AI tools, and cloud deployment into the mix. And the certifications you walk away with actually mean something to the companies hiring for these roles.",
      alwaysVisible: true,
    },
  ],
  keyFeatures: [
    { title: "Placements ", text: "Mock interviews, resume work, portfolio building, all of it happens during the course, not tacked on at the end once you're already done. The placement team is in direct touch with hiring companies, so you're not just applying and hoping.", alwaysVisible: true },
    { title: "Industry Tools ", text: "You'll be working with Visual Studio Code, GitHub, Postman, Git, Vercel, Render, and AI Tools like Lovable/Cursor, basically what teams are using right now, learned by building things, not sitting through slides about them.", alwaysVisible: false },
    { title: "Certifications ", text: "Front-End, Back-End, Full-Stack, you get certified in all three, on top of NSDC and Skill India certification. These aren't participation certificates; they're tied to what you can actually build.", alwaysVisible: false },
    { title: "Mentorship ", text: "Your mentors have shipped real software. That's the whole point the feedback you get is based on how things actually work on a team, not how a textbook explains it. Stuck on a concept? They sit with you until it clicks.", alwaysVisible: false },
    { title: "Training ", text: "Less watching, more doing 80% of this course is practical. Assignments, case studies, and real builds on repeat until it sticks.", alwaysVisible: false },
  ],
};

const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Guaranteed Placement", icon: "Briefcase" },
      { text: "3-Month Internship Letter", icon: "FileText" },
      { text: "Next-Gen Tech Stack including Python, ReactJS, and NodeJS", icon: "Layers" },
      { text: "Exclusive NextJS Module", icon: "Code" },
      { text: "80% Hands-On Coding", icon: "Laptop" },
      { text: "International Mentorship", icon: "Globe" },
      { text: "3 Professional Certifications (Front-End, Back-End, & Full-Stack)", icon: "Award" },
      { text: "Lifetime Post-Course Support", icon: "ShieldCheck" },
      { text: "Continuous Coding Assessments", icon: "CheckSquare" },
      { text: "Job-Ready Technical Portfolio", icon: "FolderCheck" },
    ],
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Guarantees", icon: "Briefcase" },
      { text: "No Internship Experience", icon: "FileText" },
      { text: "Outdated Tech Stack", icon: "Layers" },
      { text: "No Advanced NextJS Training", icon: "Code" },
      { text: "80% Lecture-Heavy Theory", icon: "BookOpen" },
      { text: "No Global Mentorship", icon: "Globe" },
      { text: "Single Generic Certificate", icon: "Award" },
      { text: "Ghosted After Graduation", icon: "Users" },
      { text: "No Hands-On Coding Assessments", icon: "XSquare" },
      { text: "Empty Developer Portfolio", icon: "FolderX" },
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

const syllabusSectionData = [
  {
    term: "Term 1",
    title: "FrontEnd",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    modules: ["HTML", "CSS", "JavaScript", "Advance JavaScript", "Bootstrap", "React JS", "Next JS", "Tailwind CSS"],
  },
  {
    term: "Term 2",
    title: "BackEnd & Framework",
    description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
    modules: ["Python", "NodeJS", "MySQL", "MongoDB", "Django", "Express JS"],
  },
  {
    term: "Term 3",
    title: "Cloud Deployment & Gen AI",
    description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
    modules: ["Gen AI", "AWS", "Azure"],
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
  { title: "International Immersion", description: "Practice with interview panels and boost your confidence." },
  { title: "Corporate Training", description: "Secure a job with 100% placement support." },
];

/* ---------- Component ---------- */

export default function MasterFSDHy() {
  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/MasterFSD/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/MasterFSD/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("../../Mumbai/IT/data/PGDSMLAI/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/MasterFSD/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Full Stack Developer Course"
        highlightText="with Guaranteed Placement"
        description="Looking for a Full Stack Developer course in Hyderabad that actually guarantees placement? That's what Digifine's program is built for. It's aimed at people who want to become real software developers, with deep, practical work across the MERN stack and Python. You come out with a portfolio worth showing, a 100% placement guarantee, and support that doesn't stop once you're hired."
        emi="Placements"
        startDate="Internship letter"
        startDateby="3 Months"
        duration="Top Mentors"
        durationValue="Practical Training from"
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/fsd.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent
        title="What Makes Digifine's Full Stack in Web Development Different "
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
            mainDescription="Prepare for high-demand careers in Front-End, Back-End, Python, and Full-Stack Development."
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
          <Location city="Hyderabad" />
        </Suspense>
      </LazySection>
    </main>
  );
}