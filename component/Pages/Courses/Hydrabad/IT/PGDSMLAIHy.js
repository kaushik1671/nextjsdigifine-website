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
import { Lightbulb, Rocket, Gauge, BarChart3, Castle } from 'lucide-react';

export default function PGDSMLALHy() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '30+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '25+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '350+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "Get 3 Months Internship Letter",
      description: "Get a 3-months internship letter, that would serve you as evidence of practical skills and knowledge in the fields of Data Science, Machine Learning and Artificial Intelligence. You will have a chance to gain practical industry exposure dealing with real business datasets and projects.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: "Certificate of Professional Competence in Data Analytics, Data Science, Machine Learning & AI",
      description: "Get the industry standard certificate on your professional competence in Data Analytics, Data Science, Machine Learning and Artificial Intelligence. Prove your technical competencies and get industry-recognized certificates.",
      imageSrc: "/images/USP/certificate.jpg"
    },
    {
      title: "Implement Real Business Live Projects, Practical Assignments & Real World Cases",
      description: "Develop your portfolio through completion of business projects, case studies and assignments. Apply your Data Science, Machine Learning and Artificial Intelligence knowledge to real business problems. Use modern tools like Python, SQL, Power BI etc.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "International Mentoring & Practical Training",
      description: "Benefit from the mentorship of international experts in data science and learn from their experience. Enhance your knowledge through interactive learning and practical use of real datasets. Study the state-of-the-art approaches in modern AI.",
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
      description: "You're learning from people who work with data professionally building models, running analysis, deploying AI systems not instructors reciting a syllabus. With international mentorship and an 80% practical approach, they walk you through the algorithms and the code until it's actually yours, not just something you copied down.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "Graduation isn't where this ends. You keep direct access to trainers for technical questions afterward, and get real support with your resume, your data portfolio, and mock interviews once you're out there applying.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Data Science, Machine Learning, Artificial Intelligence Course in Hyderabad",
    paragraphs: [
      { 
        text: "This is India's first year-long Data Science course with Machine Learning & AI practical, industry-oriented training backed by a 3-month internship letter and full placement assistance.You're not sitting through theory-heavy semesters; you're working through live projects, assignments, and real case studies alongside mentors who've actually done this work.The curriculum covers Python, MySQL, Tableau, Power BI, Scikit-Learn, TensorFlow, Deep Learning, NLP, and Artificial Intelligence, the exact stack employers screen for. By the end, you've got a portfolio that proves it, plus professional certifications that back it up.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements ", text: "Internship opportunities, placement assistance, resume building, and interview preparation are all part of getting you into a Data Science role, not scattered extras.", alwaysVisible: true },
      { title: "Tools ", text: "Python, MySQL, Tableau, Power BI, TensorFlow, Scikit-Learn, and you're using them to build things, not watching someone else use them on a screen.", alwaysVisible: false },
      { title: "Certifications ", text: "Professional certifications in Data Science, Machine Learning, Artificial Intelligence, and Data Analytics, each one tied to work you actually did during the course.", alwaysVisible: false },
      { title: "Mentorship ", text: "Learn straight from industry professionals who've built this stuff for a living. The training is hands-on because that's the only way any of it actually sticks.", alwaysVisible: false },
      { title: "Training ", text: "Assignments, live projects, real-world case studies that's the whole training model. You learn Data Science by doing Data Science.", alwaysVisible: false },
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
      { name: "PyTorch", image: "images/toolslogo/IT/pytorch.png" },
      { name: " AI Tools like Julius AI", image: "images/toolslogo/IT/julius.webp" },
      { name: "OpenCV", image: "images/toolslogo/IT/opencv.Webp" },
      { name: "TensorBoard", image: "images/toolslogo/IT/tensorboard.png" },
    ],
  };

  const toggleData = {
  digifine: {
    subheading: "Two Paths. Two Outcomes. Your Choice.",
    description: "Life With Digifine:",
    cards: [
      { text: "100% Guaranteed Placement", icon: "Briefcase" },
      { text: "3-Month Internship Letter", icon: "FileText" },
      { text: "Cutting-Edge AI Tech Stack", icon: "Layers" },
      { text: "Exclusive Gen AI & NLP Modules", icon: "Globe" },
      { text: "350+ Hours of Intense Practical Training", icon: "Laptop" },
      { text: "Dual-Layer Mentorship", icon: "Users" },
      { text: "6+ Professional Certifications", icon: "Award" },
      { text: "Lifetime Post-Course Support", icon: "Lightbulb" },
      { text: "Elite Technical Portfolio", icon: "TrendingUp" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Guarantees", icon: "Briefcase" },
      { text: "No Prior Internship Experience", icon: "FileText" },
      { text: "Outdated Syllabus", icon: "Layers" },
      { text: "No Advanced Gen AI or Deep Learning Modules", icon: "Globe" },
      { text: "Lecture-Heavy Theory", icon: "Laptop" },
      { text: "No International Exposure", icon: "Users" },
      { text: "Single Generic Certificate", icon: "Award" },
      { text: "Ghosted After Graduation", icon: "Lightbulb" },
      { text: "Zero Practical Case Studies", icon: "CheckSquare" },
      { text: "Empty Data Portfolio", icon: "TrendingUp" }
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
      title: "Data Analytics",
      description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
      modules: [
        "Excel",
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Statisticsm PowerBI ",
        "Tableau",
      ]
    },
    {
      term: "Term 2",
      title: "Intermediate (ML)",
      description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
      modules: [
        "Scikit-learn",
        "Tensor Flow",
        "Plotly",
        "Machine Learning (ML)",
      ]
    },
    {
      term: "Term 3",
      title: "Advance (AI Topics)",
      description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
      modules: [
        "Deep Learning",
        "NLP",
        "Flask/FastAPI",
        "OpenSource",
        "Artificial Intelligence (AI)",
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
    title: 'Data Scientist',
    description: 'Apply statistical analysis and predictive modeling on complex data to solve core business problems.',
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: '02',
    title: 'ML Engineer',
    description: 'Deploy machine learning models into production, build data pipelines, and monitor model performance.',
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: '03',
    title: 'AI Research Scientist',
    description: 'Experiment with advanced deep learning architectures, fine-tune LLMs, and develop novel AI algorithms.',
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
  {
    id: '04',
    title: 'Data Analyst',
    description: 'Clean raw data, run SQL queries, and build dashboards in Power BI or Tableau to track key performance metrics.',
    icon: <BarChart3 size={32} strokeWidth={1.5} />,
  },
  {
    id: '05',
    title: 'Business Analyst',
    description: 'Gather business requirements, analyze operational workflows, and translate stakeholder needs into clear technical specs.',
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
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
    import("./data/PGDSMLAI/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("./data/PGDSMLAI/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../../Mumbai/IT/data/PGDSMLAI/boxcard').then((m)=>setcategories(m.default))
    import("./data/PGDSMLAI/faqs").then((m) => setFaqs(m.default));
  }, []);

  return (
    <>
      <CourseCard
        title="Data Science Course with Machine Learning & AI"
        highlightText="in Hyderabad"
        description="India's first year-long Data Science course with Machine Learning & AI, right here in Hyderabad. It's built for people who actually want a career in data not a certificate to file away. You get real, industry-oriented training: live projects, case studies, and problem-solving work guided by mentors who do this professionally. Add a 3-month internship letter, professional certifications, and a 100% placement guarantee, and you've got everything you need to break into data science, machine learning, or AI."
        emi="Placements"
        startDate="Internship letter"
        startDateby='3 Months'
        duration="Top Mentors"
        durationValue='Practical Training from'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/dsmlai.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Data Science, Machine Learning, Artificial Intelligence Course Different "
        highlightTitle="in Hyderabad"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={mbaFeatures} columns={4} />
      <SupportSection supportData={supportSectionData} />
      <ToolsMastered toolsData={toolsSectionData} />
      <CareerPath 
        mainDescription="Build job-ready skills in Data Science, Machine Learning, and AI for high-demand tech careers."
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