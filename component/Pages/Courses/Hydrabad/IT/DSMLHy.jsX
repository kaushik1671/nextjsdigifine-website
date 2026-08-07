"use client"

import { useState, useEffect } from "react"; // ✅ Fixed: Hooks standard import completely defined here
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
import PlacementStats from "../../../../CourseComponents/PlacementStats/PlacementStats";
import FeaturesSection from "../../../../CourseComponents/FeatureSection/FeatureSection";
import CareerPath from "../../../../CourseComponents/CareerPath/CareerPath";
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
import { Lightbulb, Rocket, Gauge, BarChart3, Castle } from 'lucide-react';

export default function DSMLHy() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "Global Immersion",
      description: "International Visit to Dubai for Luxury Brand Management experience.",
      imageSrc: "/images/banner-image/dm/Dubai.jpg"
    },
    {
      title: "100% Placement Support",
      description: "Dedicated placement cell with mock interviews and resume building.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: "Live Projects",
      description: "Work on real brand budgets and track live performance analytics.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Executive Faculty",
      description: "Learn directly from corporate leaders and senior digital marketers.",
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
      description: "You’ll train under people who’ve been in the trenches - professionals with real experience running actual campaigns, managing big brands, and staying ahead in this ever-changing digital marketing world.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "Once the course is over, you’ll still get ongoing career guidance, regular industry updates, and solid professional support to help you keep moving forward in your marketing career.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
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
        { text: "Guaranteed Extensions & Salary Growth Opportunities", icon: "TrendingUp" },
        { text: "In-Hand Offer Letter from Day 1", icon: "FileText" },
        { text: "International Visit to Dubai", icon: "Globe" },
        { text: "Specialized Modules for Future Marketing Leaders", icon: "BookOpen" },
        { text: "10+ Globally Recognised Certifications", icon: "Award" },
        { text: "Learn from Industry Experts & Experienced Professionals", icon: "Users" },
        { text: "Practical Training Through Live Projects & Case Studies", icon: "Laptop" },
        { text: "600+ Hours of Intensive Classroom Training", icon: "Hourglass" },
        { text: "Post-Course Career Support & Guidance", icon: "Lightbulb" },
        { text: "Continuous Assessments & Hands-On Learning", icon: "CheckSquare" },
        { text: "Industry-Focused Curriculum Designed for Career Growth", icon: "Layers" }
      ]
    },
    without: {
      subheading: "Imagine Without Digifine",
      description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
      cards: [
        { text: "No Placement Assistance or Industry Residency Experience", icon: "Briefcase" },
        { text: "Limited Opportunities for Career Advancement", icon: "TrendingUp" },
        { text: "No Early Career Assurance or Offer Support", icon: "FileText" },
        { text: "No International Industry Exposure", icon: "Globe" },
        { text: "Generic Curriculum with Limited Industry Relevance", icon: "BookOpen" },
        { text: "Few or No Recognised Industry Certifications", icon: "Award" },
        { text: "Limited Access to Experienced Industry Professionals", icon: "Users" },
        { text: "Minimal Exposure to Live Projects & Practical Learning", icon: "Laptop" },
        { text: "Limited Classroom Training & Skill Development", icon: "Hourglass" },
        { text: "No Structured Post-Course Career Support", icon: "Lightbulb" },
        { text: "Fewer Opportunities for Hands-On Learning", icon: "CheckSquare" },
        { text: "Limited Exposure to Emerging Marketing Specializations", icon: "Layers" }
      ]
    }
  };

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
      title: 'Data Analyst Trainee',
      description: 'Start by learning data cleaning, basic SQL, and understanding core business metrics under supervision.',
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
    },
    {
      id: '02',
      title: 'Data Analyst',
      description: 'Independently query databases, build operational dashboards, and generate reports for stakeholders.',
      icon: <Rocket size={32} strokeWidth={1.5} />,
    },
    {
      id: '03',
      title: 'Senior Data Analyst',
      description: 'Lead complex data modeling, perform advanced statistical analysis, and optimize data processes.',
      icon: <Gauge size={32} strokeWidth={1.5} />,
    },
    {
      id: '04',
      title: 'BI Analyst / Manager',
      description: 'Manage full BI architecture, translate business needs into data solutions, and guide team strategy.',
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
    },
    {
      id: '05',
      title: 'Head of Insights',
      description: 'Direct the entire analytics department, driving predictive insights and executive decision-making.',
      icon: <Castle size={32} strokeWidth={1.5} />,
    },
  ];



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("../DigitalMarketing/data/MBA/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("../DigitalMarketing/data/MBA/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../DigitalMarketing/data/MBA/boxcard').then((m)=>setcategories(m.default))
    import("../DigitalMarketing/data/MBA/faqs").then((m) => setFaqs(m.default));
  }, []);

  const locationsSectionData = [
    {
      city: "Mumbai",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7205418753974!2d72.8490324!3d19.1199119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d8dd9a8411%3A0xf4014bbce03395d7!2sDigifine%20Academy!5e0!3m2!1sen!2sin", 
      googleMapsLink: "https://www.google.com/maps?q=Digifine+Academy+Andheri+Mumbai",
      address: "303, 3rd Floor, Vertex Vikas Building, A Wing, Court Ln, above A2Z Xerox, opposite Railway Station, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 81690-04863 /+91 88790-25425", 
      email: "info@adbizit.com",
      timing: "Mon - Sat: 10:00 AM - 7:00 PM"
    }
  ];

  return (
    <>
      <CourseCard
        title="Data Science Course with Machine Learning in Hydrabad"
        highlightText="100% Placement Assistance"
        description="MBA in Digital Marketing provides industry-oriented courses in Google Ads, SEO, Social Media Marketing, Data Analytics, Brand Management, Programmatic Advertising, and Strategic Marketing.Students will get the opportunity to learn by doing through practical assignments, sessions from industry experts and International Visit to Dubai for Luxury Brand Management."
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
      
      <MyComponent type='dm'
redirectlink = "/course-brochures"
title='Why Digifine for an MBA - Level Digital Marketing Program'
subtitlePart1='Why Digifine for an' subtitleHighlight='MBA in Digital Marketing?'
/>
      
      <PlacementStats />
      <FeaturesSection featuresData={mbaFeatures} columns={4} />
      <CareerPath 
        mainTitle="CAREER"
        mainSubtitle="PATH"
        mainDescription="Here's how a career in Data Analytics typically progresses once you're job-ready. Each step builds on your analytical toolkit."
        steps={analyticsSteps}
      />

      <UniqueModules uniqueModulesData={uniqueModulesSectionData} />
      <SupportSection supportData={supportSectionData} />
      <CourseOverview overviewData={overviewSectionData} />
      <Toggle content={toggleData} />
      <CompanyMarquee />
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
      <SyllabusTimeLine syllabusData={syllabusSectionData} />

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