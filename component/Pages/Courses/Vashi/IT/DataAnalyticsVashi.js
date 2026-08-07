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

export default function DataAnalyticsVashi() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '20+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '35+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '200+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "India's First Data Analyst Course with Placement Program",
      description: "Here is a chance to be a part of India’s First Ever Data Analyst Course with Placement, where you get to learn, garner, and get guided by industry-ready experience to turn you into a Data Analyst professional.",
      imageSrc: "/images/banner-image/dm/Dubai.jpg"
    },
    {
      title: "Acquire a 3-month Internship Certificate",
      description: "You will acquire a 3-month Internship Certificate as a part of the course and get an edge in the race among the aspirants during the Data Analytics Interviews.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: "Live Projects and Real Time Case Studies With Assignments",
      description: "Work on live projects to create a Data Analytics portfolio and solve business use cases through Data Analysis.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "International Exposure Through Mentorship and Practical Experience",
      description: "You will gain international exposure through the mentorship of industry practitioners and the completion of industry-related case studies.",
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
      description: "Digifine doesn't rely on career trainers. Our faculty is senior software engineers and mentors several based overseas actively working on production systems at real companies. We'd rather you learn from someone shipping code this week than someone teaching the same syllabus for a decade.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "We don't treat placement as a one-time resume review. Our placement team stays involved through resume building, mock interviews, and direct introductions to hiring partners until you're placed.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Data Analytics Course in Navi Mumbai",
    paragraphs: [
      { 
        text: "The Digifine Academy provides a Data Analytics with Generative AI Certification Program that aims to provide the learners with the skills required for working in the most popular industries like analytics, business intelligence, and decision making using AI. This certification program includes not only conventional approaches to data analysis but also modern techniques associated with Generative AI which can improve the efficiency of your work, automate your routine tasks, speed up the process of gaining insights, and boost your business reporting process. The program has a highly practical approach to training.During the course, the trainees will become skillful in a variety of tools and technologies including Microsoft Excel, Python, SQL, NumPy, Pandas, Statistics, Power BI, Tableau, Git, basics of Machine Learning, Prompt Engineering, ChatGPT, Microsoft Copilot, NotebookLM, Julius AI, and AI Analytics. Upon completion of the course, the trainees will have a collection of their business projects.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Guaranteed Placement ", text: "Have the benefits of Placement Assistance, Resume Building, Mock Interviews, and Career Guidance and kick start your journey towards becoming a Data Analyst.", alwaysVisible: true },
      { title: "Help from Industry Experts ", text: "Receive real-time answers and solutions to your queries with the aid of industry experts and their skills and knowledge.", alwaysVisible: false },
      { title: "Certification from Recognized Courses ", text: "Become a better skilled employee by being a part of the Data Analytics, Tableau, and Power BI certification courses.", alwaysVisible: false },
      { title: "Gain Extensive Software Knowledge ", text: "Have Knowledge of Software’s like Excel, Google Sheets, Python, SQL, MySQL, Tableau, Power BI, NumPy, and Pandas.", alwaysVisible: false },
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
    subheading: "THE DIGIFINE ADVANTAGE",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Placement Guarantee at top companies", icon: "Briefcase" },
      { text: "3-month Internship Letter during the course", icon: "FileText" },
      { text: "Professional certifications that are globally recognized for Power BI, Tableau & Data Analytics", icon: "Award" },
      { text: "Industry Expert, Highly Skilled In-house Trainers", icon: "Users" },
      { text: "Overseas Mentors for international industry insights", icon: "Globe" },
      { text: "Training on Python (NumPy, Pandas, Matplotlib) with an upgraded syllabus (MySQL, Tableau, PowerBI, Advanced Excel, Google Sheets)", icon: "Database" },
      { text: "Practical Training with Live Projects, Case Studies, and Regular Assignments", icon: "Laptop" },
      { text: "Post-Course Support for each student, even after completion of data analyst classes", icon: "ShieldCheck" },
      { text: "200+ hours of Intense Course Training", icon: "Clock" }
    ]
  },
  without: {
    subheading: "Other Courses",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No placement assistance", icon: "Briefcase" },
      { text: "No internship letter during the course", icon: "FileText" },
      { text: "No globally recognized certification", icon: "Award" },
      { text: "Faculty with not enough relevant experience", icon: "Users" },
      { text: "No overseas mentorship", icon: "Globe" },
      { text: "No unique, relevant, and upgraded syllabus with multiple tools, programming languages, and databases", icon: "Database" },
      { text: "Not enough assessments or hands-on training", icon: "Laptop" },
      { text: "No post-course support after training", icon: "ShieldCheck" },
      { text: "Not enough hours of training", icon: "Clock" }
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
      city: "Vashi",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9696402193986!2d72.9952648!3d19.0650724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16a1f13fa3f%3A0x55e10730cac72380!2sDigifine%20Academy!5e0!3m2!1sen!2sin", 
      googleMapsLink: "https://www.google.com/maps/place/Digifine+Academy+%7C+Digital+Marketing,+I.T.,+Graphic+Design+%26+Video+Editing+Institute+in+Vashi,+Navi+Mumbai/@19.065072,72.995265,15z/data=!4m6!3m5!1s0x3be7c16a1f13fa3f:0x55e10730cac72380!8m2!3d19.0650724!4d72.9952648!16s%2Fg%2F11mclhkbs5?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyMy4wIKXMDSoASAFQAw%3D%3D",
      address: "6th Floor, Vashi Infotech Park, 610, 611, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703, India",
      phone: "+91 81690-04863 /+91 88790-25425", 
      email: "info@adbizit.com",
      timing: "Mon - Sat: 10:00 AM - 7:00 PM"
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
    import('./data/PGDSMLAI/boxcard').then((m)=>setcategories(m.default))
    import("./data/DataAnalytics/faqs").then((m) => setFaqs(m.default));
  }, []);

  return (
    <>
      <CourseCard
        title="Data Analytics Course "
        highlightText="in Navi Mumbai"
        description="Digifine offers a Data Analytics Course in Navi Mumbai which comes highly recommended in the industry. This course focuses on the students' data visualization and analytics skills and offers features like a 3 month internship letter, complete career assurance and practical training under the guidance of experts. Working alongside the NSDC and Skill India, the course aims at professionally enhancing the students portfolio and giving them the chance to create a data driven career and also gain well known certifications."
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
        highlightTitle="in Navi Mumbai"
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