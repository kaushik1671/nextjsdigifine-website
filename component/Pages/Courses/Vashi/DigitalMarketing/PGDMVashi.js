"use client";

import { useState, useEffect } from "react"; // ✅ Fixed: Hooks standard import completely defined here
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
import PlacementStats from "../../../../CourseComponents/PlacementStats/PlacementStats";
import FeaturesSection from "../../../../CourseComponents/FeatureSection/FeatureSection";
import UniqueModules from "../../../../CourseComponents/UniqueModules/UniqueModules";
import SupportSection from "../../../../CourseComponents/SupportSection/SupportSection";
import CourseOverview from "../../../../CourseComponents/CourseOverview/CourseOverview";
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

export default function MBA() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "Expert Faculty",
      description: "Learns skills and marketing from corporate professionals. Learn all about the latest marketing tools and optimize campaigns only by field-tested certified professionals.",
      imageSrc: "/images/banner-image/dm/faculty.jpg"
    },
    {
      title: "Placement before Course Completion",
      description: "Be placed early and start your career faster than other candidates. Secure legitimate digital marketing placements with world-agency firms even before the final module is completed.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "9+ Globally Recognized Certifications",
      description: "Create a highly competitive resume. Get certified through nine plus globally accepted portfolio certifications from Google and other top platforms.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    },
    // {
    //   title: "Placement before Course Completion",
    //   description: "Ensure that you bag your dream job beforehand. With our unique placement process, we will help you create a portfolio, enhance your CV, and crack interview sessions through mock drills to ensure employment even before graduation!",
    //   imageSrc: "/images/banner-image/dm/placement.jpg"
    // },
    
  ];

   const uniqueModulesSectionData = {
    tagline: "About us",
    title: "Advanced Marketing Specializations for",
    highlightTitle: "Future Marketing Leaders",
    description: "You’ll also get to learn in-demand specializations like Programmatic Advertising, OTT Advertising, Luxury Brand Management, and Strategic Management all designed to actually boost your career opportunities in the marketing world.",
    modules: [
      // { iconName: "Gem", title: "Luxury Brand", subtitle: "Management" },
      { iconName: "Landmark", title: "Strategic", subtitle: "Management" },
      { iconName: "PlayCircle", title: "OTT Ads", subtitle: "" },
      { iconName: "RectangleHorizontal", title: "Programmatic", subtitle: "Advertising" },
      { iconName: "TrendingUp", title: "Salary", subtitle: "Hike" }
    ]
  };

  const supportSectionData = [
    {
      badge: "Hands-on Experience",
      title: "Live Project & Real Case Studies",
      description: "The course will give you an opportunity to experience live projects and analysis of case studies from large brands, where you can learn optimization techniques and make a good marketing portfolio.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "This institute is here to stay with you throughout your journey. After completing the course, we provide guidance to prepare mock interviews and update your CV along with job notifications.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "PG in Digital Marketing Program in Navi Mumbai",
    paragraphs: [
      { 
        text: "At Digifine Academy, we offer India’s best Post Graduate Program in Digital Marketing, wherein one can benefit from mentorship provided by our experts and real-life projects along with career placement.Tailored to suit the needs of the new age digital world, our cutting-edge program provides knowledge beyond the basics of marketing through specialized training in E-commerce management, website development,  programmatic media buying, OTT ads, data analytics,  and so much more. Students graduate with comprehensive tool mastery, global exposure, and industry-recognized certifications.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements", text: "Get ahead with an outstanding portfolio and professional resume to bag some high-end internship and employment opportunities at the finest marketing agency in India.", alwaysVisible: true },
      { title: "Tools", text: "Develop skills using the latest software used by the industry professionals like Google Analytics, Google Ads, Microsoft Clarity, Excel, etc., as well as using AI tools.", alwaysVisible: false },
      { title: "Certifications", text: "Get a range of certifications in professional marketing including a prestigious certificate from the IBM Institute, Berlin, Germany.", alwaysVisible: false },
      { title: "Mentorship", text: "Learn from some very skilled digital marketing mentors along with the corporate guest lecturers. who bring real-world industry insights straight to the classroom.", alwaysVisible: false },
      { title: "Training", text: "Learn about the entire digital landscape practically and bridge the gap between marketing theory and practicals.", alwaysVisible: false }
      // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
      // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false }
    ]
  };

  const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "✓ 100% Comprehensive Placement Support", icon: "Briefcase" },
      { text: "✓ Accelerated & Higher Salary Growth", icon: "TrendingUp" },
      { text: "✓ Dedicated Career & Placement Guidance", icon: "Users" },
      { text: "✓ Global & Extensive Industry Exposure", icon: "Globe" },
      { text: "✓ Advanced & Constantly Updated Curriculum", icon: "Layers" },
      { text: "✓ Premium, Globally Recognised Certifications", icon: "Award" },
      { text: "✓ Corporate & Industry Expert Mentorship", icon: "Users" },
      { text: "✓ 100% Confirmed Career & Job Assurance", icon: "BadgeCheck" },
      { text: "✓ Rigorous & Continuous Skill Assessments", icon: "CheckSquare" },
      { text: "✓ Strong & Elite Professional Network", icon: "Globe" },
      { text: "✓ 100% Practical & Hands-On Learning", icon: "Laptop" },
      { text: "✓ Extensive Live Project & Case Study Experience", icon: "Lightbulb" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "✕ No Placement Support", icon: "FileX" },
      { text: "✕ Lower Salary Growth", icon: "TrendingDown" },
      { text: "✕ No Placement Guidance", icon: "UserX" },
      { text: "✕ Limited Industry Exposure", icon: "Ban" },
      { text: "✕ Outdated Curriculum", icon: "AlertCircle" },
      { text: "✕ Low-Value Certifications", icon: "Award" },
      { text: "✕ Faculty-Only Learning", icon: "Users" },
      { text: "✕ No Career Assurance", icon: "FileText" },
      { text: "✕ Few Skill Assessments", icon: "CheckSquare" },
      { text: "✕ Weak Professional Network", icon: "Globe" },
      { text: "✕ Theory-Heavy Learning", icon: "BookOpenCheck" },
      { text: "✕ Limited Project Experience", icon: "Laptop" }
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

  // 5. Syllabus TimeLine Component Data
    const syllabusSectionData = [
    {
      term: "Term 1",
      title: "Performance Marketing & Analytics",
      description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
      modules: [
        "Introduction to Digital Marketing",
        "Google Ads",
        "Social Media Marketing (Meta Ads, LinkedIn Ads, X Ads, etc.)",
        "Conversions",
        "Landing Page Techniques",
        "Remarketing Strategies",
        "Google Analytics",
        "Microsoft Clarity",
        "Microsoft Excel"
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
        "Content Marketing & Ad Scripting",
        "Email Marketing",
        "WhatsApp Marketing",
        "Online Reputation Management (ORM)",
        "Mobile Marketing",
        // "Influencer Marketing"
      ]
    },
    {
      term: "Term 3",
      title: "Advanced Marketing & Management",
      description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
      modules: [
        "Website Development",
        "E-commerce Management",
        "Brand Management",
        "Strategic Management",
        "OTT Advertising",
        "Programmatic Advertising",
        "Influencer Marketing",
        "Data Analytics (Marketing Analytics)",
      ]
    }
  ];

   // 8. Vertical Timeline Component Data
  const timelineStepsData = [
    { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
    { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
    { title: "Assessments", description: "Solve real-world problems to test your skills." },
    { title: "Mock Interview", description: "Practice with interview panels and boost your confidence." },
    { title: "Get Placed", description: "Secure a job with 100% placement support." },
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
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/PGDMVashi/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("./data/PGDMVashi/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../../Mumbai/DigitalMarketing/data/MBA/boxcard').then((m)=>setcategories(m.default))
    import("./data/PGDMVashi/faqs").then((m) => setFaqs(m.default));
  }, []);


  return (
    <>
      <CourseCard
        title="Post Graduate Course in Digital Marketing "
        highlightText="in Navi Mumbai"
        description="Ready to scale your marketing career? Enroll in our Post Graduate in Digital Marketing Course in Vashi, Navi Mumbai. Get trained under the guidance of experienced certified professionals and enjoy the benefit of 100% placement assistance with top-tier corporate organizations."
        emi="Placements"
        startDate="Industry Experts"
        startDateby='Practical Training from'
        duration="Curriculum with Unique Modules"
        durationValue='One of its kind'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/Untitled-design-23.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Post Graduate Digital Marketing Program Different "
        highlightTitle="in Navi Mumbai?"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={mbaFeatures} columns={3} />
      <UniqueModules uniqueModulesData={uniqueModulesSectionData} />
      <SupportSection supportData={supportSectionData} />
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