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

export default function PGDMHydrabad() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "10+ Globally Recognized Certifications",
      description: "Finish the course and prove your international proficiency with more than 10 internationally recognized certificates such as platform certifications by Google and renowned international academies like the IBMI Institute in Berlin, Germany and Spain.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    },
    // {
    //   title: "Placement before Course Completion",
    //   description: "Ensure that you bag your dream job beforehand. With our unique placement process, we will help you create a portfolio, enhance your CV, and crack interview sessions through mock drills to ensure employment even before graduation!",
    //   imageSrc: "/images/banner-image/dm/placement.jpg"
    // },
    {
      title: "Live Project Deployment & Case Studies",
      description: "Construct an effective and successful professional resume through hands-on experience. You will be working on budgets of clients, developing funnels for targeted audiences, doing exercises in interactive marketing, and analyzing brand case studies to prove that you can conduct marketing campaigns.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Senior Industry Practitioners & Faculty",
      description: "Skip the old textbooks. All our courses are designed and delivered by skilled marketing professionals and current agency operators. Learn real world strategies from those who are on the ground spending millions of dollars on ads and creating cutting edge digital campaigns every single day.",
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
    highlightTitle: "PG in Digital Marketing Program in Hyderabad",
    paragraphs: [
      { 
        text: "The Post Graduate course offered by Digifine is a program designed to equip candidates with useful vocational skills. The program exclusively teaches hands-on skills and techniques. Students move from one practical campaign to another and overcome the skills gap created by purely academic theorists. With industry-oriented study, students undertake live projects and acquire valuable international certifications that can facilitate entry into top agencies.The program concentrates on deployment via new channels and modern tech stacks. Students learn execution frameworks for OTT Advertising, programmatic media buying, data analytics, E-Commerce, conversion-oriented Web Development, and corporate brand Strategy.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements", text: "The Digifine program provides placement assurance through strong corporate partnerships established before students graduate.", alwaysVisible: true },
      { title: "Tools", text: "Students gain hands-on experience by working on real brand challenges and managing live advertising campaigns.", alwaysVisible: false },
      { title: "Certifications", text: "Graduates earn platform certifications from Google and international academic certifications from the IBM Institute in Berlin, enhancing their employability worldwide.", alwaysVisible: false },
      { title: "Mentorship", text: "The program is delivered by experienced in-house trainers and industry professionals with practical expertise in digital marketing.", alwaysVisible: false },
      { title: "Training", text: "The training methodology focuses on learning by doing. Students actively participate in projects, campaign management, and business problem-solving exercises that mirror workplace expectations.", alwaysVisible: false }
      // { title: "Real Mentorship", text: "Get trained by in-house trainers and guest lecturers who have real industry experience.", alwaysVisible: false },
      // { title: "Practical Focus", text: "Lots of live projects, real case studies, and hands-on assignments instead of just theory.", alwaysVisible: false }
    ]
  };

  const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "✓ Guaranteed Extensions & Salary Growth Opportunities", icon: "TrendingUp" },
      { text: "✓ Specialized Modules for Future Marketing Leaders", icon: "BookOpen" },
      { text: "✓ 10+ Globally Recognised Certifications", icon: "Award" },
      { text: "✓ Learn from Industry Experts & Experienced Professionals", icon: "Users" },
      { text: "✓ Practical Training Through Live Projects & Case Studies", icon: "Laptop" },
      { text: "✓ 300+ Hours of Intensive Classroom Training", icon: "Hourglass" },
      { text: "✓ Post-Course Career Support & Guidance", icon: "Compass" }, // Changed to Compass for better career guidance mapping
      { text: "✓ Continuous Assessments & Hands-On Learning", icon: "CheckSquare" },
      { text: "✓ Industry-Focused Curriculum Designed for Career Growth", icon: "Layers" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "✕ Limited Opportunities for Career Advancement & Extensions", icon: "TrendingDown" },
      { text: "✕ Generic Curriculum with Limited Industry Relevance", icon: "BookOpen" },
      { text: "✕ Few or No Recognised Industry Certifications", icon: "Award" },
      { text: "✕ Limited Access to Experienced Industry Professionals", icon: "Users" },
      { text: "✕ Minimal Exposure to Live Projects & Practical Learning", icon: "Laptop" },
      { text: "✕ Limited Classroom Training & Skill Development", icon: "Hourglass" },
      { text: "✕ No Structured Post-Course Career Support", icon: "Compass" },
      { text: "✕ Fewer Opportunities for Hands-On Learning", icon: "CheckSquare" },
      { text: "✕ Outdated Curriculum Failing to Align with Market Needs", icon: "Layers" }
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
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("../DigitalMarketing/data/PGDM/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("../DigitalMarketing/data/PGDM/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../../Mumbai/DigitalMarketing/data/MBA/boxcard').then((m)=>setcategories(m.default))
    import("../DigitalMarketing/data/PGDM/faqs").then((m) => setFaqs(m.default));
  }, []);

  return (
    <>
      <CourseCard
        title="Post Graduate Course in Digital Marketing "
        highlightText="in Hyderabad"
        description="The advanced Post Graduate program focuses on practical lessons in core execution and data strategy. Students receive help in aligning with employers and securing a position well in advance of the program’s completion. This results in a 96% placement success record and an average placement of 4.9 LPA."
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
        title="What Makes Digifine's MBA-Level Digital Marketing Program Different"
        highlightTitle="in Hyderabad?"
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