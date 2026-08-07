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

export default function GraduateGDVashi() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
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
      title: "Access to All Important Software Suites Under One Umbrella!",
      description: "You can have access to all important software design suits such as Adobe Creative Suite and Figma from just one high-end software suite.",
      imageSrc: "/images/banner-image/gd/FeatureS/umbrella.jpg"
    },
     {
      title: "Work on Actual Projects and Create Your Own Unique Portfolio at Behance!",
      description: "Narrow down the gap between education and employment through live project execution and creation of a unique portfolio at Behance for yourself.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
  ];

  const supportSectionData = [
    {
      badge: "Hands-on Experience",
      title: "Expert Faculty",
      description: "Get trained by real-life studio experts who understand current production standards. Our trainer will guide you to learn the same creative processes and high-level skills that the best media companies require.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
   {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "Digifine Academy has designed an advanced training course for the creative design profession, centered on production, which the company provides.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Digifine Graduate Graphic Design Course in Navi Mumbai",
    paragraphs: [
      { 
        text: "Digifine Academy is one of the best Graphic Design Institutes in Navi Mumbai offering flexible classroom learning and online training programs. This course is designed for budding professionals and aims at providing them practical knowledge about working on different software applications such as Adobe Photoshop, Illustrator, InDesign, and Figma in order to create an industry-ready portfolio through practical assignments.Learning from highly experienced mentors in the industry, candidates get certified along with practical exposure in the field. Digifine Academy helps graduates in developing their portfolios along with their placement in graphic designing companies.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placement", text: "Kickstart your career with our professional career assistance services. We offer ATS-friendly resume preparation, portfolio development, strategic mock interviews, and interaction with leading design firms.", alwaysVisible: true },
      { title: "Tools", text: "Become adept at using the tools necessary for today’s visual communication. The applied learning approach followed here ensures that you learn all the operations related to some of the best software in use, such as Adobe Photoshop, Adobe Illustrator, Adobe InDesign, and Figma.", alwaysVisible: false },
      { title: "Certifications", text: "Enhance your technical credentials while gaining marketability from day one. You will receive industry-recognized certifications on completing the program.", alwaysVisible: false },
      { title: "Mentorship", text: "Learn directly from experienced graphic designers who bring real-world production standards into the classroom. Our mentorship program is designed to help students achieve high-tier creative skills.", alwaysVisible: false },
      { title: "Training", text: "Gain real-world experience via a flexible blend of interactive classroom lectures and online classes. Our curriculum focuses on hands-on experience to translate the basic design theories into practice.", alwaysVisible: false },
    ]
  };

  const toolsSectionData = {
    title: "Master",
    highlightTitle: "Industry-Standard Design Tools",
    caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
    tools: [
      { name: "Adobe Illustrator", image: "images/toolslogo/adobe.png" },
      { name: "Adobe Photoshop", image: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
      { name: "Adobe InDesign", image: "https://cdn.worldvectorlogo.com/logos/adobe-indesign-cc-icon.svg" },
      { name: "Figma", image: "images/toolslogo/figma.webp" },
    ],
  };

const toggleData = {
  digifine: {
    subheading: "The Digifine Advantage",
    description: "At Digifine, learning goes beyond theory. Our graphic design program is structured to help you master industry-standard software, build a standout portfolio, and launch a successful creative career.",
    cards: [
      { text: "✓ 100% Placement Assurance", icon: "Briefcase" },
      { text: "✓ Internship Guarantee", icon: "UserCheck" },
      { text: "✓ 80% Practical Learning", icon: "Layers" },
      { text: "✓ Industry-Leading Software", icon: "Laptop" },
      { text: "✓ Globally Recognized Certifications", icon: "Award" },
      { text: "✓ Expert Mentorship", icon: "Users" },
      { text: "✓ Professional Portfolio Development", icon: "Folder" },
      { text: "✓ Comprehensive Interview Prep", icon: "Target" },
      { text: "✓ Post-Course Career Support", icon: "TrendingUp" },
      { text: "✓ State-of-the-Art Training", icon: "Cpu" },
      { text: "✓ Industry-Aligned Curriculum", icon: "Compass" },
      { text: "✓ Flexible Career Scope", icon: "Zap" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical design exposure and direct industry connections, breaking into the competitive creative field often becomes a struggle limited to self-taught theory.",
    cards: [
      { text: "✕ No Placement Guarantee", icon: "FileX" },
      { text: "✕ Lack of Early Internship Support", icon: "UserX" },
      { text: "✕ Theory-Heavy Instruction", icon: "BookOpen" },
      { text: "✕ Fragmented Tool Knowledge", icon: "Slash" },
      { text: "✕ No Validated Certifications", icon: "Award" },
      { text: "✕ No Professional Guidance", icon: "HelpCircle" },
      { text: "✕ Weak or Non-Existent Portfolio", icon: "FolderMinus" },
      { text: "✕ Little or No Interview Preparation", icon: "AlertTriangle" },
      { text: "✕ Zero Ongoing Support", icon: "TrendingDown" },
      { text: "✕ Outdated Training Environment", icon: "Maximize" },
      { text: "✕ Disconnected from Industry Trends", icon: "XCircle" },
      { text: "✕ Limited Skill Development", icon: "Slash" }
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
    { title: "Enroll", description: "Kickstart your journey by registering for our program!" },
    { title: "Get Trained", description: "Learn from industry experts via hands-on sessions!" },
    { title: "Assessments", description: "Solve real-world problems to test your skills." },
    { title: "Mock Interview", description: "Practice with interview panels and boost your confidence." },
    { title: "Get Placed", description: "Secure a job with 100% placement support." },
  ];


  const graphicDesignProjects = [
    { title: "Concert Poster", category: "Poster Design", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" },
    { title: "S Brand Identity", category: "Logo & Branding", image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80" },
    { title: "Travel App Concept", category: "UI/UX Mockup", image: "images/card/gd/travel.png" },
    { title: "Abstract Loop Still", category: "Motion Graphic", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1000&q=80" },
    { title: "Cyberpunk Android", category: "3D Render", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80" },
    { title: "Tech Review Promo", category: "Video Edit Thumbnail", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80" },
    { title: "Aesthetic Grid Set", category: "Instagram Content", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=500&q=80" }
  ];



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("../GraphicDesign/data/Graduategd/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("../GraphicDesign/data/Graduategd/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../GraphicDesign/data/Multimedia/boxcard').then((m)=>setcategories(m.default))
    import("../GraphicDesign/data/Graduategd/faqs").then((m) => setFaqs(m.default));
  }, []);

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

  return (
    <>
      <CourseCard
        title="Graduate Graphic Design Classes "
        highlightText="in Navi Mumbai"
        description="Launch your career as a professional graphic designer at Digifine Graphic Design Institute in Navi Mumbai and master all the best industry skills, latest tools, and techniques through live projects, and that helps you build a diverse professional portfolio for your creative future."
        emi="Placements"
        startDate="3+ Software"
        startDateby='Top Industry'
        duration="Industry Experts"
        durationValue='Practical Training from'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mba.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Graduate Graphic Design Course Different"
        highlightTitle="in Navi Mumbai?"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={Features} columns={4} />
      <SupportSection supportData={supportSectionData} />
      <StudentPortfolio
        title="See What Our Students Create"
        subtitle="Student Portfolio Showcase"
        caption="Every student graduates with a live portfolio — not just a certificate."
        buttonText="View Full Portfolio"
        buttonLink="https://www.behance.net"
        badgeText={"Portfolio\nDriven\nLearning"}
        projects={graphicDesignProjects}
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