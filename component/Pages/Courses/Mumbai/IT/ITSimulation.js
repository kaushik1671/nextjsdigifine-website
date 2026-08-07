"use client"

import { useState, useEffect } from "react"; 
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
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
import WhyDigifine from "../../../../CourseComponents/WhyDigifine/WhyDigifine"
import HorizontalTimeline from "../../../../CourseComponents/HorizontalTimeline/HorizontalTimeline"
import CorporateProjects from "../../../../CourseComponents/CorporateProjects/CorporateProjects";
import CourseOverview from "../../../../CourseComponents/CourseOverview/CourseOverview";
import ToolsSectionSimulation from "../../../../CourseComponents/ToolsSectionSimulation/ToolsSectionSimulation"
import StudentJourney from "../../../../CourseComponents/StudentJourney/StudentJourney";

export default function ITSimulation() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const dataset = [
    {
      title: "Corporate Simulation",
      description: "Work inside a simulated development environment from week one with real client projects, not just classroom theory."
    },
    {
      title: "Full Stack Coverage",
      description: "Master front-end, back-end, databases, cloud deployment, and AI tools in one comprehensive program."
    },
    {
      title: "Real Live Projects",
      description: "Build portfolio-ready applications: e-commerce stores, job portals, food delivery apps, and more."
    },
    {
      title: "Paid Internship",
      description: "Earn Rs. 15,000 monthly while you train in a real corporate environment with mentor guidance."
    },
    {
      title: "Offer Letter Day 1",
      description: "Secure your future before you've written your first line of code. Employment starts immediately."
    },
    {
      title: "Cloud Deployment",
      description: "Deploy applications to AWS and Azure. Learn industry-standard DevOps practices from day one."
    }
  ];

  const timelineSteps = [
    { title: "Enroll", description: "Onboarding & cohort mapping" },
    { title: "Offer Letter", description: "Issued on day one" },
    { title: "Monthly Stipend", description: "₹10,000 while you train" },
    { title: "Live Corporate Training", description: "Real client campaigns" },
    { title: "Experience Letter", description: "Verifiable work history" },
    { title: "Placement", description: "Hiring partner network" }
  ];

  const digitalMarketingProjects = [
      {
        id: "1",
        title: "Game: Tic Tac Toe",
        studentName: "Interactive game using HTML, CSS, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
        placeholderText: "Meta ads preview"
      },
      {
        id: "2",
        title: "Game: Rock, Paper & Scissor",
        studentName: "Game with scoring logic and user interaction",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
        placeholderText: "Google ads preview"
      },
      {
        id: "3",
        title: "Game: Quiz Game (KBC Style)",
        studentName: "Interactive quiz with scoring and timer",
        imageUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=600",
        placeholderText: "SEO growth preview"
      },
      {
        id: "4",
        title: "Tip Calculator",
        studentName: "Frontend calculator with user-friendly interface",
        imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600",
        placeholderText: "ABM campaign preview"
      },
      {
        id: "5",
        title: "Job Portal (Naukri/Shine Clone)",
        studentName: "Full-stack job listing and search application",
        imageUrl: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600",
        placeholderText: "Email automation preview"
      },
      {
        id: "6",
        title: "E-Commerce Store",
        studentName: "Full-stack shopping cart with payment integration",
        imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600",
        placeholderText: "YouTube funnel preview"
      }
    ];

    const myTools = [
    'Visual Studio Code', 'GitHub', 'Postman', 'Git', 'Vercel', 'Render',
    'AI Tools like Lovable', 'Cursor AI ', 'Plotly', 'Power BI', 'Tableau', 'Scikit-learn',
    'TensorFlow', 'GitHub', 'ChatGPT', 'Julius AI'
  ];

        const journeySteps = [
          { title: "Enroll for Simulation Program", description: "Secure your spot in our immersive corporate simulation program. No prior experience required. Start your transformation today." },
          { title: "Receive Offer Letter Immediately", description: "Get your official offer letter on day one. Start earning Rs. 15,000 per month from day one as a trainee developer." },
          { title: "Learn While on the Job", description: "Dive into hands-on training with HTML, CSS, JavaScript, React, Python, Django, Node.js, MongoDB, AWS, and more through live projects and daily challenges." },
          { title: "Build Real-World Projects", description: "Create portfolio-ready applications: e-commerce stores, job portals, food delivery platforms, weather apps, and your personal portfolio website." },
          { title: "Get Certified & Placed", description: "Earn industry-recognized certification and an experience letter. Get absorbed into full-time positions with our partner agencies or secure external opportunities." },
        ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "MBA-Level Digital Marketing Program in Mumbai",
    paragraphs: [
      { 
        text: "This is one of India’s top MBA-level Postgraduate Digital Marketing programs in Mumbai.The program runs for 6 months of intensive classroom training followed by 6 months of industry residency at top agencies across the country. In Mumbai, you also get an extra 6+6 months of guaranteed extensions and salary hikes with partner companies to support your career growth.",
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
      { text: "Career Coaching & Mock Interviews", icon: "UserCheck" }
    ]
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
      title: "FrontEnd",
      description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
      modules: [
        "HTML",
        "CSS",
        "JavaScript",
        "Advance JavaScript",
        "Bootstrap",
        "React JS",
        "Next JS",
        "Tailwind CSS"
      ]
    },
    {
      term: "Term 2",
      title: "BackEnd & Framework",
      description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
      modules: [
        "Python",
        "NodeJS",
        "MySQL",
        "MongoDB",
        "Django",
        "Express JS",
      ]
    },
    {
      term: "Term 3",
      title: "Cloud Deployment & Gen AI",
      description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
      modules: [
        "Gen AI",
        "AWS",
        "Azure",
      ]
    }
  ];

  const timelineStepsData = [
    { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
    { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
    { title: "Assessments", description: "Solve real-world problems to test your skills." },
    { title: "International Emmersion", description: "Practice with interview panels and boost your confidence." },
    { title: "Coorporate Training", description: "Secure a job with 100% placement support." },
  ];

  const locationsSectionData = [
    {
      city: "Mumbai",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7205418753974!2d72.8490324!3d19.1199119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d8dd9a8411%3A0xf4014bbce03395d7!2sDigifine%20Academy!5e0!3m2!1sen!2sin", 
      googleMapsLink: "https://www.google.com/maps?q=Digifine+Academy+Andheri+Mumbai",
      address: "303, 3rd Floor, Vertex Vikas Building, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 81690-04863 /+91 88790-25425", 
      email: "info@adbizit.com",
      timing: "Mon - Sat: 10:00 AM - 7:00 PM"
    }
  ];



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Sahi Relative Paths for dynamic imports
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
    <>
      <CourseCard
        title="AI Powered Full Stack Developer & Cloud Engineering "
        highlightText="with Corporate Simulation"
        description="Train inside a live corporate simulation with real-world projects, hands-on coding, cloud deployment, and an offer letter on day one. Start earning Rs. 15,000 monthly while you build your developer career."
        emi="Placements"
        startDate="Industry Experts"
        startDateby='Practical Training from'
        duration="Curriculum with Unique Modules"
        durationValue='One of its kind'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/fsd.webp"
        redirectlink = "/course-brochures"
      />

      <MyComponent 
        title="What Makes Digifine's AI Powered Full Stack Developer & Cloud Engineering with Corporate Simulation Different "
        highlightTitle="in Mumbai"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />

      <div className="pt-5 pb-5 md:pt-6 md:pb-6 border-b border-gray-50"></div>
      <WhyDigifine 
        featuresData={dataset} 
        title="Six reasons this program trains differently"
        blueSubtitle="Why Digifine" 
      /> 

      <div className="py-7 md:py-12 bg-gray-50/30"></div>
      <HorizontalTimeline 
        stepsData={timelineSteps}
        title="The Corporate Simulation Timeline"
        subtitle="Six stages that mirror a real agency career path."
      />

      <Toggle content={toggleData} />

      <div className="py-5 md:py-13 border-b border-gray-50">
        <ToolsSectionSimulation
                badge="TOOLS"
                subBadge="TOOLS COVERED"
                title="Work with the tools employers recognise"
                tools={myTools}
              />
      </div>

      <div className="py-15 md:py-22 border-b border-gray-50">
        <CorporateProjects 
          projectsData={digitalMarketingProjects} 
          title="Real corporate projects" 
        />
      </div>

      <SyllabusTimeLine syllabusData={syllabusSectionData} />

      <div className="py-5 md:py-6 border-b border-gray-50">
        <StudentJourney 
          stepsData={journeySteps}
          title="Your journey to becoming a full stack developer"
        />
      </div> 

      {/* <CourseOverview overviewData={overviewSectionData} /> */}
      
      <CompanyMarquee tagline="Our Placements"
        title="Companies They"
        highlightTitle="Work At"
        topLogos={marqueeTopLogos}
        bottomLogos={marqueeBottomLogos}/>

      {/* <SuccessStories storiesData={successStoriesData} /> */}

      <StudentPlacedAt 
        companiesData={mbaPlacementsData} 
        btntext="Know More" 
        redirectlink="/course-brochures" 
      />
      
      <Testimonal 
        title='What Our'
        bluetitle='Students Have To Say:'
        testimonial={testimonials}
        paragraph="Hear from our students what their experience was like on the floor!" 
      />

      <CertificateSection
        title="Certifications"
        subtitlePart1="Earn Professional"
        subtitleHighlight="Certifications"
        paragraph="Acquire several professional certifications by the end of your simulator program."
        certificates={customCertificates}
      />

      <VerticalTimeline 
        steps={timelineStepsData} 
        title="Steps Towards Success With" 
        bluetitle="Digifine" 
        paragraph="Process mapped carefully to transform learners into digital marketing experts." 
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