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
import ToolStack from "../../../../CourseComponents/ToolStack/ToolStack"
import StudentJourney from "../../../../CourseComponents/StudentJourney/StudentJourney";

export default function DMSimulationVashi() {

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
      description: "Execute live briefs for actual Digifine and Adbizit clients, not mock data."
    },
    {
      title: "Paid Internship",
      description: "Earn a stipend while you train — this is a job, not just a course."
    },
    {
      title: "Offer Letter",
      description: "Receive your offer letter on day one, before you've written a single ad."
    },
    {
      title: "Placement Assistance",
      description: "Structured placement support through Digifine's hiring partner network."
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
        "ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "Canva AI",
        "Notion AI", "Gamma", "Runway", "ElevenLabs", "Meta AI", "+ more"
      ];
    
      const platformsList = [
        "Google Ads", "Meta", "GA4", "Clarity", "Tag Manager", "WordPress",
        "Looker Studio", "Power BI", "DV360", "Merchant Center"
      ];

        const journeySteps = [
          { title: "Enrollment", description: "Counselling call, city & mode selection, admission confirmed." },
          { title: "Training", description: "Structured classroom + live sessions across every module." },
          { title: "Assignments", description: "Weekly graded assignments to lock in each concept." },
          { title: "Live Projects", description: "Real client briefs from Digifine and Adbizit accounts." },
          { title: "Corporate Simulation", description: "Full agency-floor simulation with deliverables and deadlines." },
          { title: "Certification", description: "14 certifications across platforms and specializations." },
          { title: "Placement", description: "Resume prep, mock interviews, hiring partner introductions." }
        ];

  // const uniqueModulesSectionData = {
  //   tagline: "About us",
  //   title: "Advanced Marketing Specializations for",
  //   highlightTitle: "Future Marketing Leaders",
  //   description: "You’ll also get to learn in-demand specializations like Programmatic Advertising, OTT Advertising, Luxury Brand Management, and Strategic Management.",
  //   modules: [
  //     { iconName: "Gem", title: "Luxury Brand", subtitle: "Management" },
  //     { iconName: "Users", title: "Experiential", subtitle: "Marketing" },
  //     { iconName: "RectangleHorizontal", title: "Programmatic", subtitle: "Advertising" },
  //     { iconName: "Tv", title: "BARC Television", subtitle: "Ad Planning" },
  //     { iconName: "PlayCircle", title: "OTT Ads", subtitle: "" },
  //     { iconName: "Landmark", title: "Strategic", subtitle: "Management" }
  //   ]
  // };

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
        "E-commerce Management",
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
    { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
    { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
    { title: "Assessments", description: "Solve real-world problems to test your skills." },
    { title: "International Emmersion", description: "Practice with interview panels and boost your confidence." },
    { title: "Coorporate Training", description: "Secure a job with 100% placement support." },
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
  const [customCertificates, setCustomCertificates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Sahi Relative Paths for dynamic imports
    import("./data/GraduateDMVashi/testimonials")
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonials load fail:", err));

    import("./data/GraduateDMVashi/customCertificates")
      .then((m) => setCustomCertificates(m.default))
      .catch((err) => console.error("Certificates load fail:", err));

    import("./data/MBAVashi/boxcard")
      .then((m) => setCategories(m.default))
      .catch((err) => console.error("Boxcard load fail:", err));

    import("./data/GraduateDMVashi/faqs")
      .then((m) => setFaqs(m.default))
      .catch((err) => console.error("Faqs load fail:", err));
  }, []);


  return (
    <>
      <CourseCard
        title="Digital Marketing Corporate Simulation with"
        highlightText="100% Placement Assistance in Vashi"
        description="Experience the real agency flow, manage actual budgets, and earn dynamic experience letters with professional guidance."
        emi="Placements"
        startDate="Industry Experts"
        startDateby='Practical Training from'
        duration="Curriculum with Unique Modules"
        durationValue='One of its kind'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mba.webp"
        redirectlink = "/course-brochures"
      />

      <MyComponent 
        title="What Makes Digifine's Full Stack in Web Development Different "
        highlightTitle="in Navi Mumbai"
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
        <ToolStack 
          aiTools={aiToolsList}
          platforms={platformsList}
          title="Tools you'll master"
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
          title="Student journey"
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