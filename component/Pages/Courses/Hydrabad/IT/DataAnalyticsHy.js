"use client"

import { useState, useEffect } from "react"; // ✅ Fixed: Hooks standard import completely defined here
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
import PlacementStats from "../../../../CourseComponents/PlacementStats/PlacementStats";
import FeaturesSection from "../../../../CourseComponents/FeatureSection/FeatureSection";
import CareerPath from "../../../../CourseComponents/CareerPath/CareerPath";
import SupportSection from "../../../../CourseComponents/SupportSection/SupportSection";
import CourseOverview from "../../../../CourseComponents/CourseOverview/CourseOverview";
import ToolsMastered from "../../../../CourseComponents/ToolsMastered/ToolsMastered"
import Toggle from "../../../../CourseComponents/Toggle/Toggle";
import CompanyMarquee from "../../../../CourseComponents/CompanyMarquee/CompanyMarquee";
import SuccessStories from "../../../../CourseComponents/SuccessStories/SuccessStories";
import StudentPlacedAt from "../../../../CourseComponents/StudentPlacedAt/StudentPlacedAt"; 
import Testimonal from "../../../../CourseComponents/Testimonal/Testimonal";
import SyllabusTimeLine from "../../../../CourseComponents/SyllabusTimeLine/SyllabusTimeLine";
import CertificateSection from "../../../../CourseComponents/CertificateSection/CertificateSection";
import VerticalTimeline from "../../../../CourseComponents/VerticleTimeLine/VerticalTimeLine";
import BoxCardSection from "../../../../Sections/BoxCardSection";
import FAQsSection from "../../../../FAQsSection/FAQsSection";
import Location from "../../../../CourseComponents/Location/Location";
import { 
  FileSpreadsheet, 
  BarChart, 
  TrendingUp, 
  PieChart, 
  Crown 
} from 'lucide-react';

export default function DataAnalyticsHy() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '30+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '25+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '350+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "Industry Specific Data Analytics Program",
      description: "Equip yourself with knowledge that is required by companies and choose to take an industry specific Data Analytics Course. Learn skills in using Excel, SQL, Python, Power BI, Tableau and AI analytics to prepare yourself for the industry right from day one.",
      imageSrc: "/images/USP/da.jpg"
    },
    {
      title: "Get 3 Month Internship Offer",
      description: "Increase your resume weightage by getting a 3 month internship offer in Data Analytics. Gather industry experience by handling real-world data projects even before you step into the industry.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: "Get Industry Approved Data Analytics Certification",
      description: "Go for industry approved Data Analytics certification to demonstrate your technical and analytic ability. Improve your resume and increase chances of getting well-paid jobs in analytics and business intelligence industry.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Practical Training From Industry Experts",
      description: "Benefit from the practical training provided by industry experts and experienced mentors who teach you how to apply analytics concepts to solve business problems.",
      imageSrc: "/images/banner-image/dm/faculty.jpg"
    }
  ];

  const uniqueModulesSectionData = {
    tagline: "About us",
    title: "Advanced Marketing Specializations for",
    highlightTitle: "Future Marketing Leaders",
    description: "You’ll also get to learn in-demand specializations like Programmatic Advertising, OTT Advertising, Luxury Brand Management, and Strategic Management all designed to actually boost your career opportunities in the marketing world.",
    modules: [
      { iconName: "Gem", title: "Luxury Brand", subtitle: "Management" },
      { iconName: "Users", title: "Experiential", subtitle: "Marketing" },
      { iconName: "RectangleHorizontal", title: "Programmatic", subtitle: "Advertising" },
      { iconName: "Tv", title: "BARC Television", subtitle: "Ad Planning" },
      { iconName: "PlayCircle", title: "OTT Ads", subtitle: "" },
      { iconName: "Landmark", title: "Strategic", subtitle: "Management" }
    ]
  };

  const supportSectionData = [
    {
      badge: "Hands-on Experience",
      title: "Expert Faculty",
      description: "Trainers here are working professionals in data analytics and AI, not full-time academics. About 80% of the course is hands-on, covering Excel, Python, SQL, Power BI, Tableau, and the generative AI tools showing up in real analytics job postings right now.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "Support doesn't stop when the course does. Graduates can still reach out to trainers with technical questions and get help with resumes, portfolios, and interview prep while job hunting.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Data Analytics Course in Hyderabad",
    paragraphs: [
      { 
        text: "The course runs on live projects instead of theory-heavy modules retail sales dashboards, HR analytics, bank loan analysis, supply chain tracking, and marketing campaign reports. Mentors working in the field review the output directly.The syllabus covers Excel, Google Sheets, Python, MySQL, NumPy, Pandas, Power BI, and Tableau, along with a machine learning module (regression, decision trees, model evaluation) and a generative AI section on ChatGPT, Microsoft Copilot, and Julius AI for analytics work. Finishing the course means a placement guarantee plus certifications tied to actual project work, not just attendance.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements ", text: "Comes with a 3-month internship letter. Placement support includes resume building, mock interviews, and introductions to hiring companies, backed by the placement guarantee.", alwaysVisible: true },
      { title: "Tools ", text: "MySQL Workbench, SQL Server, Git, GitHub, Kaggle, Jupyter Notebook, and AI Tools like Julius AI/Copilot are used by students throughout the course rather than seeing once on a slide.", alwaysVisible: false },
      { title: "Certifications ", text: "Certifications in Data Analytics, Tableau, and Power BI, plus the internship letter, are awarded on completion.", alwaysVisible: false },
      { title: "Mentorship ", text: "Guidance comes from mentors currently working in data analytics and AI, including a few based overseas with international industry exposure. Feedback is given directly on student projects.", alwaysVisible: false },
      { title: "Training ", text: "Delivered through live projects, assignments, and case studies pulled from retail, banking, HR, and supply chain data, about 80% hands-on, 20% instruction.", alwaysVisible: false },
    ]
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
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Placement Guarantee", icon: "Briefcase" },
      { text: "3-Month Internship Letter", icon: "FileText" },
      { text: "Advanced AI & Gen AI Integration", icon: "Cpu" },
      { text: "End-to-End Modern Tech Stack", icon: "Layers" },
      { text: "80% Intensive Practical Approach", icon: "CheckCircle" },
      { text: "Dual-Layer Expert Guidance", icon: "Users" },
      { text: "Comprehensive Mastery Certificates", icon: "Award" },
      { text: "Lifetime Support System", icon: "ShieldCheck" },
      { text: "8 Live Enterprise Projects", icon: "Laptop" },
      { text: "Job-Ready Analytics Portfolio", icon: "FolderCheck" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Corporate Placement Networks", icon: "Briefcase" },
      { text: "Zero Corporate Internships", icon: "FileText" },
      { text: "Outdated Syllabus", icon: "BookOpen" },
      { text: "Surface-Level Learning", icon: "Layers" },
      { text: "80% Theory-Heavy Lectures", icon: "XCircle" },
      { text: "No Global Exposure", icon: "Globe" },
      { text: "Single Generic Certificate", icon: "Award" },
      { text: "Abandoned Post-Graduation", icon: "Users" },
      { text: "Zero Enterprise-Grade Case Studies", icon: "Laptop" },
      { text: "Empty Technical Portfolio", icon: "FolderX" }
    ]
  }
};

  const marqueeTopLogos = [
  "/images/company_logo/it/1.jpg",
  "/images/company_logo/it/2.jpg",
  "/images/company_logo/it/3.jpg",
  "/images/company_logo/it/4.jpg",
  "/images/company_logo/it/5.jpg",
  "/images/company_logo/it/6.jpg",
  "/images/company_logo/it/7.jpg",
];

const marqueeBottomLogos = [
  "/images/company_logo/it/8.jpg",
  "/images/company_logo/it/9.jpg",
  "/images/company_logo/it/10.jpg",
  "/images/company_logo/it/11.jpg",
  "/images/company_logo/it/12.jpg",
  "/images/company_logo/it/13.jpg",
  "/images/company_logo/it/1.jpg", // loop seamless dikhne ke liye pehli image repeat ki hai
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

  // 5. Syllabus TimeLine Component Data
  const syllabusSectionData = [
    {
      term: "Term 1",
      title: "Data Cleaning & Visualization",
      description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
      modules: [
        "Excel",
        "Python",
        "MySQL",
        "Numpy",
        "Pandas",
        "Power BI",
        "Tableau"
      ]
    },
    {
      term: "Term 2",
      title: "Adv. Data Analytics",
      description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
      modules: [
        "Statistics",
        "Machine Learning"
      ]
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
      ]
    }
  ];

   // 8. Vertical Timeline Component Data
  const timelineStepsData = [
    { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
    { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
    { title: "Assessments", description: "Solve real-world problems to test your skills." },
    { title: "International Emmersion", description: "Practice with interview panels and boost your confidence." },
    { title: "Coorporate Training", description: "Secure a job with 100% placement support." },
  ];

const analyticsSteps = [
  {
    id: '01',
    title: 'Data Analyst Trainee / Junior Analyst',
    description: 'Build core foundational skills in Excel, SQL, and basic data visualization tools like Tableau or Power BI to clean, structure, and explore datasets.',
    icon: <FileSpreadsheet size={32} strokeWidth={1.5} />,
  },
  {
    id: '02',
    title: 'Data Analyst',
    description: 'Write complex SQL queries, analyze business metrics, construct dynamic dashboards, and perform exploratory data analysis to extract actionable insights.',
    icon: <BarChart size={32} strokeWidth={1.5} />,
  },
  {
    id: '03',
    title: 'Senior Data Analyst',
    description: 'Leverage Python/R for advanced statistical modeling, automate reporting workflows, mentor junior team members, and partner with key stakeholders to drive strategic decisions.',
    icon: <TrendingUp size={32} strokeWidth={1.5} />,
  },
  {
    id: '04',
    title: 'Business Intelligence (BI) Analyst / Manager',
    description: 'Architect enterprise data models, establish data governance standards, oversee performance analytics, and translate complex business problems into data solutions.',
    icon: <PieChart size={32} strokeWidth={1.5} />,
  },
  {
    id: '05',
    title: 'Analytics Team Lead / Head of Insights',
    description: 'Lead cross-functional analytics teams, define company-wide data strategies, optimize infrastructure investments, and align insight deliverables directly with business revenue goals.',
    icon: <Crown size={32} strokeWidth={1.5} />,
  },
];

  const locationsSectionData = [
    {
      city: "Hyderabad",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.379087549703!2d78.39266049999999!3d17.4894082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91922683190b%3A0x1aa3a76ef5e0199e!2sDigifine%20Academy!5e0!3m2!1sen!2sin", 
      googleMapsLink: "https://www.google.com/maps/place/Digifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Hyderabad/@17.4895142,78.3923309,3323m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bcb91922683190b:0x1aa3a76ef5e0199e!2sDigifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Hyderabad!8m2!3d17.4894082!4d78.3926605!10e5!16s%2Fg%2F11ym_kqlv_!3m5!1s0x3bcb91922683190b:0x1aa3a76ef5e0199e!8m2!3d17.4894082!4d78.3926605!16s%2Fg%2F11ym_kqlv_?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
      address: "3rd & 4th Floor, SITA CITY ONE Venkatarambagh, SITA CITY ONE, Begumpet, Hyderabad, Telangana 500016",
      phone: "+91 81690-04863 /+91 88790-25425", 
      email: "info@adbizit.com",
      timing: "Mon - Sat: 10:30 AM - 7:30 PM"
    }
  ];



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/DataAnalytics/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("./data/DataAnalytics/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../../Mumbai/IT/data/PGDSMLAI/boxcard').then((m)=>setcategories(m.default))
    import("./data/DataAnalytics/faqs").then((m) => setFaqs(m.default));
  }, []);

  return (
    <>
      <CourseCard
        title="Data Analytics Course with "
        highlightText="Placement Guarantee"
        description="Digifine's Data Analytics course in Hyderabad backs its training with a 100% placement guarantee, plus a 3-month internship letter once you're done. You'll work in Excel, Python, MySQL, Power BI, and Tableau, get into machine learning fundamentals, and use AI tools like ChatGPT and Julius AI on real analytics work. Most of the course is project-based, with mentors who actually work in the field reviewing what you build."
        emi="Placements"
        startDate="Internship letter"
        startDateby='3 Months'
        duration="Top Mentors"
        durationValue='Practical Training from'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/da.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Data Analytics Course Different "
        highlightTitle="in Hydrabad"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={mbaFeatures} columns={4} />
      <SupportSection supportData={supportSectionData} />
      <ToolsMastered toolsData={toolsSectionData} />
      <CareerPath 
        mainDescription="Build industry-ready analytical skills and apply for high-demand data and business roles."
        steps={analyticsSteps}
      />
      
      <CourseOverview overviewData={overviewSectionData} />
      <Toggle content={toggleData} />
      <CompanyMarquee tagline="Our Placements"
        title="Companies They"
        highlightTitle="Work At"
        topLogos={marqueeTopLogos}
        bottomLogos={marqueeBottomLogos}/>

      <SyllabusTimeLine syllabusData={syllabusSectionData} />
      <SuccessStories storiesData={successStoriesData} />
      
      <StudentPlacedAt 
        companiesData={mbaPlacementsData} 
        btntext="Know More" 
        redirectlink="/course-brochures" 
      />
      
      <Testimonal 
        title='What Our'
        bluetitle='Students Have To Say:'
        testimonial={testimonials}
        paragraph="Still wondering what your future would look like after graduating from one of the best MBA - Level Digital Marketing Program Colleges in Mumbai? From training at Digifine, to placements and more: hear it all from our students!" 
      />

      <CertificateSection
        title="Certifications"
        subtitlePart1="Earn Professional"
        subtitleHighlight="Certifications"
        paragraph="
        Acquire several professional certifications as well as Google certifications by the end of your Post Graduate in Digital Marketing at Digifine Academy. Not only this, but you also get a chance to enhance your portfolio and resume by earning an international certification from the IBMI Institute in Berlin, Germany!
        "
        certificates={customCertificates}
      />

      <VerticalTimeline 
        steps={timelineStepsData} 
        title="Steps Towards Success With" 
        bluetitle="Digifine" 
        paragraph="Follow this structured process mapped carefully to transform dynamic learners into full-fledged corporate marketing leaders." 
      />

      <BoxCardSection coursedata={categories}/>

      <FAQsSection
      sectionTitle="Frequently Asked Questions"
      faqData={faqs}
      />
      <Location locationsData={locationsSectionData} />
    </> 
  );
} 