"use client";

import { useState, useEffect } from "react"; 
import CourseCard from "../../../../CourseComponents/CourseCard/CourseCard";
import MyComponent from "../../../../Container/MyComponent";
import PlacementStats from "../../../../CourseComponents/PlacementStats/PlacementStats";
import FeaturesSection from "../../../../CourseComponents/FeatureSection/FeatureSection";
import SupportSection from "../../../../CourseComponents/SupportSection/SupportSection";
import StudentPortfolio from "../../../../CourseComponents/StudentPortfolio/StudentPortfolio";
import CourseOverview from "../../../../CourseComponents/CourseOverview/CourseOverview";
import ToolsMastered from "../../../../CourseComponents/ToolsMastered/ToolsMastered";
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

import { FaDesktop, FaFolder, FaRegClock, FaUsers } from "react-icons/fa";

export default function Multimedia() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '10+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '16+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const Features = [
    {
      title: "India’s First Masters Graphic Design Course in Mumbai with Placement Guarantee",
      description: "An innovative, production-focused course in Mumbai, combining creative training with a guaranteed placement to facilitate your journey towards professional success in the field of design.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: "Earn More Than 10 Internationally Certified Courses After Course Completion",
      description: "Prove your creativity through an exhaustive set of 10+ internationally certified courses, which guarantee that you have all the technical knowledge as per international standards.",
      imageSrc: "/images/banner-image/gd/FeatureS/ICertifiedC.jpg"
    },
    
    {
      title: "Access All Major Software Packages under One Roof!",
      description: "Get access to the complete design ecosystem including Adobe Creative Suite and Figma through a single, high-end platform.",
      imageSrc: "/images/banner-image/gd/FeatureS/umbrella.jpg"
    },
     {
      title: "Work on Real Projects and Make a Distinctive Portfolio for Yourself on Behance!",
      description: "Reduce the gap between your education and job through execution of live projects and making a distinctive digital portfolio on Behance for yourself.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const supportSectionData = [
    {
      badge: "Hands-on Experience",
      title: "Expert Faculty",
      description: "Get to learn from expert faculty members who are professional designers and have many years of experience in the field of design. Get personal mentoring sessions and get your skills refined according to the highest industry standards.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Career Assistance Post-Course",
      description: "Rest assured of getting placed in any of the best media agencies with 100 percent placement guarantee along with assistance for job placements.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Digifine Multimedia & Animation Course in Mumbai",
    paragraphs: [
      { 
        text: "Develop yourself as a rounded and talented multimedia professional with India’s best 1.5-year course in Multimedia & Animation in Mumbai at Digifine. Learn all the aspects of Graphic Design, UI/UX, Video Editing, Motion Graphics, VFX, and 2D/3D animation under one roof, along with expertise in 10 key software tools such as Photoshop, Figma, Premiere Pro, and Blender.Get 10 professional certifications and an impressive production-level portfolio as you complete this Multimedia & Animation course in Mumbai. Digifine gives you full assurance of getting 100% internship and job placement in this career-oriented Multimedia & Animation course in Mumbai.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements", text: "Get guaranteed employment with a 100% job placement and internship opportunity. With Digifine, you get complete assistance after your course, which includes building a professional resume, creating a portfolio, and attending special interview drives with leading media agencies.", alwaysVisible: true },
      { title: "Tools", text: "Develop your technical skills with more than 10 design tools used by industry professionals. You will learn how to use cutting-edge software like Photoshop, Illustrator, Figma, Premiere Pro, After Effects, DaVinci, and Blender.", alwaysVisible: false },
      { title: "Certifications", text: "Get recognized for your skills and boost your CV with 10 internationally acknowledged certifications. Get certified upon completion of each of the 1.5-year program's core software modules.", alwaysVisible: false },
      { title: "Mentorship", text: "Receive direct mentorship from a team of the most experienced industry experts, professionals, and animators. Benefit from their invaluable career advice during personal mentoring sessions and feedback on your portfolio.", alwaysVisible: false },
      { title: "Training", text: "Attend a fully practice-based 1.5-year training program. Create a strong portfolio by working on practical projects and assignments.", alwaysVisible: false },
    ]
  };

  const toolsSectionData = {
    title: "Master",
    highlightTitle: "Industry-Standard Design Tools",
    caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
    tools: [
      { name: "Adobe Photoshop", image: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
      { name: "Adobe Illustrator", image: "images/toolslogo/adobe.png" },
      { name: "Adobe InDesign", image: "https://cdn.worldvectorlogo.com/logos/adobe-indesign-cc-icon.svg" },
      { name: "Figma", image: "images/toolslogo/figma.webp" },
      { name: "Adobe Premiere Pro", image: "images/toolslogo/APPro.webp" },
      { name: "Adobe After Effects", image: "images/toolslogo/AE.jpg" },
      { name: "Davinci", image: "images/toolslogo/davinci.webp" },
      { name: "Adobe Animate", image: "images/toolslogo/AAnimate.png" },
      { name: "Adobe Audition", image: "images/toolslogo/AA.jpg" },
      { name: "Blender", image: "https://cdn.worldvectorlogo.com/logos/blender-2.svg" },
    ],
  };

const toggleData = {
  digifine: {
    subheading: "The Digifine Advantage",
    description: "At Digifine, learning goes beyond theory. Every module is designed to help you build practical skills, gain confidence through real-world creative projects, and become job-ready with guidance from industry professionals.",
    cards: [
      { text: "✓ 100% Placement Assistance", icon: "Briefcase" },
      { text: "✓ Industry Residency Program", icon: "Building" },
      { text: "✓ Master 10+ Industry Software", icon: "Laptop" },
      { text: "✓ 80% Practical Training Approach", icon: "Layers" },
      { text: "✓ Live Projects & Case Studies", icon: "GitBranch" },
      { text: "✓ Expert Mentorship", icon: "Users" },
      { text: "✓ Comprehensive Skill Set", icon: "Sliders" },
      { text: "✓ Hands-On Branding & Publication Projects", icon: "Palette" },
      { text: "✓ Post-Course Career Support", icon: "TrendingUp" },
      { text: "✓ Flexible Learning", icon: "Clock" },
      { text: "✓ Structured Career Path", icon: "Milestone" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical design exposure and structured career guidance, learning often stays limited to theory, making it difficult to build a professional portfolio and break into the creative industry.",
    cards: [
      { text: "✕ No Structured Placement Support", icon: "FileX" },
      { text: "✕ Lack of Practical Industry Experience", icon: "UserX" },
      { text: "✕ Limited or No Professional Certifications", icon: "FileCheck" },
      { text: "✕ Outdated or Generic Curriculum", icon: "AlertTriangle" },
      { text: "✕ Theory-Heavy Learning", icon: "BookOpen" },
      { text: "✕ No Professional Portfolio", icon: "FolderMinus" },
      { text: "✕ Limited Access to Experts", icon: "HelpCircle" },
      { text: "✕ Fragmented Knowledge", icon: "Scissors" },
      { text: "✕ No Exposure to Real-World Deliverables", icon: "XCircle" },
      { text: "✕ Zero Career Guidance", icon: "Compass" },
      { text: "✕ Insufficient Skill Development", icon: "Activity" },
      { text: "✕ Disconnected from Industry Trends", icon: "Radio" }
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
    title: "Adobe Illustrator",
    description: "Master data-driven strategies, paid campaigns, and analytical tools to track and scale business growth effectively.",
    part1Title: "Adobe Illustrator",
    part1Modules: [
      "Introduction to Adobe Illustrator",
      "Basics",
      "Working with Objects",
      "Drawing",
      "Appearance of Objects",
      "Brushes",
      "Type (Text)",
      "Working with Images",
      "Advanced Techniques",
      "Artboards & Export",
      // "Ad Copy Writing",
      // "Audience Targeting",
      // "Competitor Analysis",
      // "Bidding Strategies",
      // "Campaign ROI Setup"
    ],
    part2Title: "PAdobe Photoshop",
    part2Modules: [
      "Introduction to Adobe Photoshop",
      "Get Started",
      "Layers Part 1",
      "Layers Part 2",
      "Selections Part 1",
      "Selections Part 2",
      "Raster Layers",
      "Shape Layers",
      "Artboards",
      "Work with Smart Objects",
      "Repair Your Photos",
      "Actions",
      "Text Layers",
      "Adjustment Layers",
      "Camera Raw - Edit Your Photos",
      "Cloud Documents",
      "Effects"
      ]
    },
    {
      term: "Term 2",
      title: "Organic Marketing & Engagement",
      description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
      modules: [
        "SEO (Search Engine Optimization)",
        "SMO (Social Media Optimization)",
        "Content Marketing / Ad Scripting",
        "Email Marketing",
        "WhatsApp Marketing",
        "Mobile Marketing",
        "ORM (Online Reputation Management)",
        // "Influencer Marketing"
      ]
    },
    {
      term: "Term 3",
      title: "Advanced Marketing & Management",
      description: "Deep dive into executive-level leadership tracks covering programmatic media, luxury systems, and technical architectures.",
      modules: [
        "Website Development",
        // "Brand Management",
        "E-commerce Management",
        "Influencer Marketing",
        "Mobile Marketing",
        // "OTT Advertising",
        // "Programmatic Advertising",
        // "BARC (Television Ads)",
        // "Experiential Marketing",
        // "Luxury Brand Management"
      ]
    }
  ];

   // 8. Vertical Timeline Component Data
  const timelineStepsData = [
    { title: "Enrollment", description: "Get your course today, and get one step closer to yourself." },
    { title: "Get Trained", description: "Learn in detail from experts in the field through comprehensive training programs." },
    { title: "Assessments", description: "Measure yourself and track your progress through regular assessments." },
    { title: "Interview Preparation", description: "Build confidence with real mock interviews and complete interview prep support." },
    { title: "Get Placed", description: "Move ahead confidently with your new career." },
  ];

  const studentProjects = [
  {
    id: 1,
    title: "Eco-Wear Branding & Poster Design",
    category: "Poster & Branding",
    image: "/images/toolslogo/ecowear.png",
    url: "https://behance.net/student-branding-project"
  },
  {
    id: 2,
    title: "FinTech Mobile Wallet App",
    category: "UI/UX Mockup",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    url: "https://behance.net/student-uiux-mockup"
  },
  {
    id: 3,
    title: "Cyberpunk Cityscape 3D Environment",
    category: "3D Render",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    url: "https://behance.net/student-3d-render"
  },
  {
    id: 4,
    title: "Abstract Kinetic Typography Intro",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    url: "https://behance.net/student-motion-graphic"
  },
  {
    id: 5,
    title: "Streetwear Brand Autumn Campaign",
    category: "Instagram Content Set",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    url: "https://behance.net/student-social-media"
  },
  {
    id: 6,
    title: "Neo-Noir Short Film Cinematic Cut",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    url: "https://behance.net/student-video-edit"
  },
  {
    id: 7,
    title: "Mythological Character Concept Art",
    category: "Illustration Piece",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    url: "https://behance.net/student-illustration"
  },
  {
    id: 8,
    title: "Minimalist Coffee House Logo Suite",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80",
    url: "https://behance.net/student-logo-design"
  }
];



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/Multimedia/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("./data/Multimedia/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('./data/Multimedia/boxcard').then((m)=>setcategories(m.default))
    import("./data/Multimedia/faqs").then((m) => setFaqs(m.default));
  }, []);

  const locationsSectionData = [
    {
      city: "Mumbai",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7205418753974!2d72.8490324!3d19.1199119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d8dd9a8411%3A0xf4014bbce03395d7!2sDigifine%20Academy!5e0!3m2!1sen!2sin", 
      googleMapsLink: "https://www.google.com/maps?q=Digifine+Academy+Andheri+Mumbai",
      address: "303, 3rd Floor, Vertex Vikas Building, A Wing, Court Ln, above A2Z Xerox, opposite Railway Station, Andheri East, Mumbai, Maharashtra 400069",
      phone: "+91 81690-04863 /+91 88790-25425", 
      email: "info@adbizit.com",
      timing: "Mon - Sun: 10:00 AM - 8:00 PM"
    }
  ];

  return (
    <>
      <CourseCard
        title="Multimedia & Animation "
        highlightText="Course in Mumbai"
        description="Accelerate your creative journey with Digifine Academy’s premium Multimedia and Animation Course in Mumbai.  In this one-stop training program, you will master the concepts of Graphic Design, UI/UX Design, Video Editing, Motion Graphics, Visual Effects, 2D and 3D Animation, all rolled into one. Train on 9+ industry software using the expertise of your mentors, and be assured of 100% job placement."
        emi="Placements"
        startDate="Software"
        startDateby='3+ Top Industry'
        duration="Industry Experts"
        durationValue='Practical Training from'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mba.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Multimedia & Animation Course Different"
        highlightTitle=" in Mumbai?"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={Features} columns={4} />
      {/* <UniqueModules uniqueModulesData={uniqueModulesSectionData} /> */}
      <SupportSection supportData={supportSectionData} />
      <StudentPortfolio 
        subtitle="Student Portfolio Showcase"
        title="See What Our Students Create"
        caption="Every student graduates with a live portfolio — not just a certificate."
        buttonText="View Full Portfolio"
        buttonLink="https://www.behance.net" 
        badgeText={`Portfolio\nDriven\nLearning`}
        projects={studentProjects}
      />

      <CourseOverview overviewData={overviewSectionData} />
      <ToolsMastered toolsData={toolsSectionData} />
      <Toggle content={toggleData} />
      <CompanyMarquee tagline="Our Placements"
        title="Companies They"
        highlightTitle="Work At"
        topLogos={marqueeTopLogos}
        bottomLogos={marqueeBottomLogos}/>

      <SyllabusTimeLine syllabusData={syllabusSectionData} columns={5} />  
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