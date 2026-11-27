"use client";

import { useState, useEffect, lazy } from "react";
import LazySection from "../../../../../hooks/LazySection";

// Static Imports (Above the Fold - Critical Path)
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";

// Lazy Loaded Components (Below the Fold - Deferred)
const WhyDigifine = lazy(() => import("../../../../CourseComponents/WhyDigifine/WhyDigifine"));
const HorizontalTimeline = lazy(() => import("../../../../CourseComponents/HorizontalTimeline/HorizontalTimeline"));
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

export default function DMSimulation() {
  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const dataset = [
    {
      title: "Corporate Simulation",
      description: "Work inside a simulated agency floor from week one, not just a classroom."
    },
    {
      title: "AI Integrated Learning",
      description: "Every module is layered with the AI tools professionals use on the job today."
    },
    {
      title: "Real Client Projects",
      description: "Manage live campaigns and budgets for actual Digifine and Adbizit clients, with real results and real accountability."
    },
    {
      title: "Earn Monthly",
      description: "Get paid every month while you build real agency experience on live campaigns."
    },
    {
      title: "Offer Letter on Day One",
      description: "Get your official offer letter the day you enrol, before you've run a single campaign."
    },
    {
      title: "Placement Assistance",
      description: "Structured placement support through Digifine's hiring partner network."
    }
  ];

  const timelineSteps = [
    { title: "Enroll", description: "Onboarding & cohort mapping" },
    { title: "Offer Letter", description: "Issued on day one" },
    { title: "Monthly Stipend", description: "₹30,000 while you train" },
    { title: "Live Campaigns", description: "Run real client Projects" },
    { title: "Experience Letter", description: "Verifiable work history" },
    { title: "Placement", description: "Hiring partner network" }
  ];

  const digitalMarketingProjects = [
    {
      id: "1",
      title: "Meta Ads E-Commerce Campaign Simulation",
      studentName: "Aarav Sharma",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      placeholderText: "Meta ads preview"
    },
    {
      id: "2",
      title: "Google Search Ads & B2B Lead Gen Campaign",
      studentName: "Ananya Patel",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      placeholderText: "Google ads preview"
    },
    {
      id: "3",
      title: "Organic SEO Growth & Content Strategy Simulation",
      studentName: "Rohan Das",
      imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600",
      placeholderText: "SEO growth preview"
    },
    {
      id: "4",
      title: "LinkedIn B2B Account-Based Marketing Campaign",
      studentName: "Kabir Mehta",
      imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600",
      placeholderText: "ABM campaign preview"
    },
    {
      id: "5",
      title: "E-Commerce Email & Retention Marketing Setup",
      studentName: "Sneha Reddy",
      imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
      placeholderText: "Email automation preview"
    },
    {
      id: "6",
      title: "YouTube Video Ad Funnel Simulation",
      studentName: "Vikram Malhotra",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
      placeholderText: "YouTube funnel preview"
    }
  ];

  const aiToolsList = [
  { name: "ChatGPT", iconUrl: "/images/careericons/chatgpt.webp" },
  { name: "Claude", iconUrl: "/images/careericons/claude.webp" },
  { name: "Gemini", iconUrl: "/images/careericons/gemini.webp  " },
  { name: "Midjourney", iconUrl: "/images/careericons/midjourney.webp" },
  { name: "Perplexity", iconUrl: "/images/careericons/perplexity.webp" },
  { name: "Canva AI", iconUrl: "/images/careericons/canva.webp" },
  { name: "Notion AI", iconUrl: "/images/careericons/notion.webp" },
  { name: "Gamma", iconUrl: "/images/careericons/gamma.webp" },
  { name: "Runway", iconUrl: "/images/careericons/runway.webp" },
  { name: "ElevenLabs", iconUrl: "/images/careericons/elevenlabs.webp" },
  { name: "Meta AI", iconUrl: "/images/careericons/meta.webp" },
  // Agar last mein "+ more" text hi rakhna hai (image nahi):
  { name: "+ more", iconUrl: null, isText: true } 
];

const platformsList = [
  { name: "Google Ads", iconUrl: "/images/careericons/platforms/google-ads.webp" },
  { name: "Meta", iconUrl: "/images/careericons/platforms/meta.webp" },
  { name: "GA4", iconUrl: "/images/careericons/platforms/ga4.webp" },
  { name: "Clarity", iconUrl: "/images/careericons/platforms/clarity.webp" },
  { name: "Tag Manager", iconUrl: "/images/careericons/platforms/tag-manager.webp" },
  { name: "WordPress", iconUrl: "/images/careericons/platforms/wordpress.webp" },
  { name: "Tableau", iconUrl: "/images/careericons/dsml/tools/tableau.webp" },
  { name: "Power BI", iconUrl: "/images/careericons/platforms/powerbi.webp" },
  { name: "DV360", iconUrl: "/images/careericons/platforms/dv360.webp" },
  { name: "Merchant Center", iconUrl: "/images/careericons/platforms/merchant.webp" },
];

  const journeySteps = [
    { title: "Enrollment", description: "Counselling call, city & mode selection, admission confirmed." },
    { title: "Training", description: "Structured classroom + live sessions across every module." },
    { title: "Assignments", description: "Weekly graded assignments to lock in each concept." },
    { title: "Live Projects", description: "Real client briefs from Digifine and Adbizit accounts." },
    { title: "Corporate Simulation", description: "Full agency-floor simulation with deliverables and deadlines." },
    { title: "Certification", description: "10+ certifications across platforms and specializations." },
    { title: "Placement", description: "Resume prep, mock interviews, hiring partner introductions." }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "MBA-Level Digital Marketing Program in Mumbai",
    paragraphs: [
      { 
        text: "This is one of India’s top MBA-level Postgraduate Digital Marketing programs in Mumbai. The program runs for 6 months of intensive classroom training followed by 6 months of industry residency at top agencies across the country. In Mumbai, you also get an extra 6+6 months of guaranteed extensions and salary hikes with partner companies to support your career growth.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Expert Training", text: "Learn from experienced professionals who’ve worked on real campaigns and know the current digital marketing landscape.", alwaysVisible: true },
      { title: "Comprehensive Curriculum", text: "Covers Experiential Marketing, Website Development, E-Commerce Management, Programmatic Media Buying, OTT Advertising, Data Analytics, Television Planning, and more.", alwaysVisible: false },
      { title: "Strong Placements", text: "Get help securing high-paying jobs with leading companies. You’ll build a portfolio, update your resume, and do mock interviews.", alwaysVisible: false },
      { title: "Hands-on Tools", text: "Master the tools and software actually used in the industry, with free access to major AI tools.", alwaysVisible: false },
      { title: "Certifications", text: " Earn multiple Google certificates, an international certification from Digifine Academy, and one from the IBM Institute in Berlin, Germany.", alwaysVisible: false },
      { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
      { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false }
    ]
  };

  const toggleData = {
    digifine: {
      subheading: "Life With Digifine",
      description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
      cards: [
        { text: "100% Placement Assistance with Industry", icon: "Briefcase" },
        { text: "Guaranteed Extensions & Salary Hikes", icon: "TrendingUp" },
        { text: "In-Hand Offer Letter on Day 1", icon: "FileCheck" },
        { text: "Domestric Industry Visit", icon: "Plane" },
        { text: "Unique Modules for Real-World Edge", icon: "Zap" },
        { text: "10+ Industry Recognized Certifications", icon: "Award" },
        { text: "Industry Expert, Highly Skilled In-House Trainers", icon: "Users" },
        { text: "400+ Hours of Intense Classroom Training", icon: "Clock" },
        { text: "Post-Course Support Even After Completion", icon: "ShieldCheck" },
        { text: "Practical Training with Industry Experience", icon: "Laptop" },
        { text: "Continuous Assessments & Hands-On Learning", icon: "CheckSquare" },
        { text: "Career Coaching & Mock Interviews", icon: "UserCheck" }
      ]
    },
    without: {
      subheading: "Life Without Digifine",
      description: "And here's what usually happens when training misses the mark no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
      cards: [
        { text: "No Placement Assistance", icon: "Briefcase" },
        { text: "No Guarantee of High-Paying Jobs", icon: "TrendingUp" },
        { text: "No Offer Letter Upon Admission", icon: "FileCheck" },
        { text: "No International Visit", icon: "Plane" },
        { text: "Outdated & Generic Syllabus", icon: "Zap" },
        { text: "No Industry Recognized Certifications", icon: "Award" },
        { text: "Teachers & Trainers with Limited Experience", icon: "Users" },
        { text: "Not Enough Hours of Classroom Training", icon: "Clock" },
        { text: "No Post-Course Guidance", icon: "ShieldCheck" },
        { text: "Not Enough Practical Exposure", icon: "Laptop" },
        { text: "Limited Practical Training & Live Projects", icon: "CheckSquare" },
        { text: "No Interview Preparation", icon: "UserCheck" }
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
        "Conversion Optimization",
        "Landing Page Techniques",
        "Remarketing Strategies",
        "Google Analytics",
        "Microsoft Clarity",
        "Excel for Marketers"
      ]
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
        "Influencer Marketing"
      ]
    },
    {
      term: "Term 3",
      title: "Advanced Marketing & Management",
      description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
      modules: [
        "Website Development",
        "Brand Management",
        "E-Commerce Management",
        "Strategic Management",
        "Data Analytics",
        "OTT Advertising",
        "Programmatic Advertising",
        "BARC (Television Ads)",
        "Experiential Marketing",
        "Luxury Brand Management"
      ]
    }
  ];

  const timelineStepsData = [
    { title: "Enroll", description: "Secure your spot and start building real-world digital marketing skills from the ground up. No prior experience needed." },
    { title: "Get Offer Letter", description: "Get your official offer letter immediately on enrollment, from Day 1." },
    { title: "Learn on the Job", description: "Work in a real corporate environment on live Google Ads, Meta and SEO projects, with mentorship and daily challenges." },
    { title: "Get Certified", description: "Earn an industry-recognised certification and a verifiable experience letter for your portfolio and future employers." },
    { title: "Get Absorbed", description: "Move into full-time placement with our trusted partner agencies and launch your digital marketing career." },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/MBA/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/MBA/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/MBA/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/DMSimulation/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);

  return (
    <main className="w-full overflow-hidden">
      {/* Critical Above-The-Fold Components */}
      <CourseCard
        title="Digital Marketing Corporate Simulation with"
        highlightText="100% Placement Assistance"
        description="Digifine's Corporate Simulation is a Mumbai digital marketing program where you work in a real agency environment from Day 1, with an offer letter, live Google Ads, Meta and SEO projects, and an experience letter on completion."
        emi="Placements"
        startDate="Live Client Campaigns"
        startDateby='Work on'
        duration="Curriculum with Unique Modules"
        durationValue='One of its kind'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mba.webp"
        redirectlink="/course-brochures"
      />

      <MyComponent 
        type='dm'
        redirectlink="/course-brochures"
        title='Why Digifine for Digital Marketing Simulation'
        subtitlePart1='Why Digifine for' 
        subtitleHighlight='Simulation Training?'
      />

      {/* Lazy-Loaded Below-The-Fold Sections */}
      <div className="pt-5 pb-5 md:pt-6 md:pb-6 border-b border-gray-50"></div>
      <LazySection>
        <WhyDigifine 
          featuresData={dataset} 
          title="Six reasons this program trains differently"
          blueSubtitle="Why Digifine" 
        /> 
      </LazySection>

      <div className="py-7 md:py-12 bg-gray-50/30"></div>
      <LazySection>
        <HorizontalTimeline 
          stepsData={timelineSteps}
          title="The Corporate Simulation Timeline"
          subtitle="Six stages that mirror a real agency career path."
        />
      </LazySection>

      <LazySection>
        <Toggle content={toggleData} />
      </LazySection>

      <div className="py-5 md:py-13 border-b border-gray-50">
        <LazySection>
          <ToolStack 
            aiTools={aiToolsList}
            platforms={platformsList}
            title="Tools you'll master"
          />
        </LazySection>
      </div>

      <div className="py-15 md:py-22 border-b border-gray-50">
        <LazySection>
          <CorporateProjects 
            projectsData={digitalMarketingProjects} 
            title="Real corporate projects" 
          />
        </LazySection>
      </div>

      <LazySection>
        <SyllabusTimeLine syllabusData={syllabusSectionData} />
      </LazySection>

      <div className="py-5 md:py-6 border-b border-gray-50">
        <LazySection>
          <StudentJourney 
            stepsData={journeySteps}
            title="Student journey"
          />
        </LazySection>
      </div> 

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
        <StudentPlacedAt 
          companiesData={mbaPlacementsData} 
          btntext="Know More" 
          redirectlink="/course-brochures" 
        />
      </LazySection>
      
      <LazySection>
        <Testimonal 
          title='What Our'
          bluetitle='Students Have To Say:'
          testimonial={testimonials}
          paragraph="Hear from our students what their experience was like on the floor!" 
        />
      </LazySection>

      <LazySection>
        <CertificateSection
          title="Certifications"
          subtitlePart1="Earn Professional"
          subtitleHighlight="Certifications"
          paragraph="Acquire several professional certifications by the end of your simulator program."
          certificates={customCertificates}
        />
      </LazySection>

      <LazySection>
        <VerticalTimeline 
          steps={timelineStepsData} 
          title="Steps Towards Success With" 
          bluetitle="Digifine" 
          paragraph="Process mapped carefully to transform learners into digital marketing experts." 
        />
      </LazySection>

      <LazySection>
        <BoxCardSection coursedata={categories}/>
      </LazySection>

      <LazySection>
        <FAQsSection
          sectionTitle="Frequently Asked Questions"
          faqData={faqs}
        />
      </LazySection>
      
      <LazySection>
        <Location city="Mumbai" />
      </LazySection>
    </main>
  );
}