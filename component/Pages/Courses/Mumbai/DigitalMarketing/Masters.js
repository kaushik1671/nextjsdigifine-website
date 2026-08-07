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

export default function Masters() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '35+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '50+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '300+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    // {
    //   title: "Core Curriculum & Advanced Modules",
    //   description: "Get access to a syllabus that is vetted in the industry and includes all key digital marketing concepts. Learn search marketing, social media strategies, web designing, branding and advanced data courses.",
    //   imageSrc: "/images/banner-image/dm/faculty.jpg"
    // },
    {
      title: "100% Placement Assistance",
      description: "No need to go through a fiercely competitive job market all alone. The dedicated career cell at our end equips you from day one through personalized resume writing, portfolio making, and practice interviews to land the best jobs in top companies effortlessly.",
      imageSrc: "/images/banner-image/dm/placement.jpg"
    },
    {
      title: "E-Commerce Management",
      description: "Get hands-on training on how to set up, manage, and grow extremely lucrative digital storefronts. Learn everything there is to know about running a digital store, setting up inventory, and creating conversion-based ad campaigns",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "3+ Globally Recognised Certifications",
      description: "Make an impression right from the beginning. You will earn more than 3+ internationally approved certificates from top platforms such as Google and Meta, which serve as quick evidence of your digital marketing skills.",
      imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
    }
    
  ];

 const uniqueModulesSectionData = {
  tagline: "About us",
  title: "Advanced Marketing Specializations for",
  highlightTitle: "Future Marketing Leaders",
  description: "You’ll get to learn core in-demand skills like Website Development, Performance Marketing, along with dedicated Post Course Support and guaranteed Salary Hike tracks designed to completely elevate your tech and marketing career.",
  modules: [
    { iconName: "Laptop", title: "Website", subtitle: "Development" },
    { iconName: "BarChart3", title: "Performance", subtitle: "Marketing" },
    { iconName: "Compass", title: "Post Course", subtitle: "Support" },
    { iconName: "TrendingUp", title: "Salary", subtitle: "Hike" }
  ]
};

  const supportSectionData = [
    {
      badge: "Hands-on Experience",
      title: "Live Project & Real Case Studies",
      description: "Use live corporate accounts and real budgets to move from theory to practice. Dissect data-driven campaigns of the world’s best-known brands, evaluate the metrics and create a portfolio of successful projects that will make you a standout expert for recruiters.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "Professional development does not stop after your graduation. Get lifetime access to guidance from experts to solve complex conversion tracking problems and confidently present your marketing strategy ideas to your employers or clients.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Master’s Digital Marketing Program in Mumbai",
    paragraphs: [
      { 
        text: "Mumbai-based Digifine has introduced a master’s level course in digital marketing that is specially tailored to graduates, career changers, and professionals.The curriculum designed by Digifine is industry-specific and focuses on 11 major areas of digital marketing. The course includes SEO and Google Ads among other aspects. The curriculum follows a hybrid training method.In partnership with NSDC and Skill India, the program also provides expert mentorship, industry certification, and dedicated employment placement services, to equip learners to fill high-growth digital marketing roles and leadership positions in the digital economy.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements", text: "Digifine  digital marketing training institute, provides its students with exclusive employment placement services that cover the full job search process, including resume building, portfolio creation, mock interviews, and career mentor coaching.", alwaysVisible: true },
      { title: "Expert Training", text: "Digifine’s Master’s Digital Marketing Program uses only senior industry experts as its lecturers, all of whom have hands-on experience successfully leading digital marketing initiatives for top-tier brands.", alwaysVisible: false },
      { title: "Comprehensive Curriculum", text: "The Master’s Program in Digital Marketing launched by Digifine has developed a comprehensive curriculum that covers all core sectors of modern digital marketing.Its core modules include SEO, Google Ads, social media marketing, AI marketing tools, and other key content.", alwaysVisible: false },
      { title: "Hands-on Tools", text: "The Digifine Master’s Program in Digital Marketing adopts the latest digital marketing tools used by leading global agencies and top international brands.The program covers nine mainstream marketing platforms, including those supporting SEO, Google Ads, and data analytics.", alwaysVisible: false },
      { title: "Certifications", text: "certificate issued by Digifine Academy, and may also sign up to take certifications from leading industry platforms including Google and NSDC. The certificates serve as proof of practical skills in disciplines including SEO, Google Ads, social media marketing, and data analysis.", alwaysVisible: false },
      { title: "Real Mentorship", text: "Digifine has introduced a vocational educational service that incorporates a real mentor system for the digital marketing industry stream. The program participants will benefit from the mentorship of experienced and industry veterans.", alwaysVisible: false },
      { title: "Practical Focus", text: "The program incorporates three types of content—real projects, industry case studies, and hands-on assignments—to replicate the actual marketing challenges faced by businesses, helping students refine their critical thinking, execution, and problem-solving skills, and grow into qualified professional digital marketing talents suited to today’s competitive landscape.", alwaysVisible: false }
    ]
  };

  const toggleData = {
  digifine: {
    subheading: "At Digifine",
    description: "At Digifine, learning goes beyond theory. Every module is designed to help you build practical skills, gain confidence through real-world experience, and become job-ready with guidance from industry professionals.",
    cards: [
      { text: "✓ Internship Opportunity Before Course Completion", icon: "Briefcase" },
      { text: "✓ AI-Powered & Future-Ready Digital Marketing Curriculum", icon: "Cpu" },
      { text: "✓ Specialized Modules Not Commonly Offered Elsewhere", icon: "Star" },
      { text: "✓ Practical Learning Through Live Campaigns & Case Studies", icon: "Layers" },
      { text: "✓ Learn from Experienced Industry Professionals", icon: "Users" },
      { text: "✓ Advanced Training on Industry Tools & Technologies", icon: "Laptop" },
      { text: "✓ Portfolio Development with Real Client Projects", icon: "Folder" },
      { text: "✓ Globally Recognised Professional Certifications", icon: "Award" },
      { text: "✓ Career Mentorship, Resume Building & Interview Preparation", icon: "UserCheck" },
      { text: "✓ Hands-On Learning Through Assignments & Simulations", icon: "Edit3" },
      { text: "✓ Freelancing & Entrepreneurship Guidance", icon: "Zap" },
      { text: "✓ Continuous Career Support Beyond Course Completion", icon: "TrendingUp" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "Without practical exposure and structured career guidance, learning often stays limited to theory, making it difficult to build confidence and succeed in real-world digital marketing roles.",
    cards: [
      { text: "✕ No Internship Opportunities During the Course", icon: "FileX" },
      { text: "✕ Outdated Curriculum with Limited AI Integration", icon: "AlertTriangle" },
      { text: "✕ Generic Modules with Limited Industry Relevance", icon: "Grid" },
      { text: "✕ Minimal Exposure to Real Campaigns & Case Studies", icon: "EyeOff" },
      { text: "✕ Limited Access to Experienced Industry Mentors", icon: "UserX" },
      { text: "✕ Little Hands-On Experience with Marketing Tools", icon: "Slash" },
      { text: "✕ No Portfolio to Demonstrate Practical Skills", icon: "FolderMinus" },
      { text: "✕ Few or No Globally Recognised Certifications", icon: "XOctagon" },
      { text: "✕ No Structured Resume or Interview Preparation", icon: "Frown" },
      { text: "✕ Theory-Focused Learning with Limited Practical Application", icon: "BookOpen" },
      { text: "✕ No Guidance for Freelancing or Entrepreneurship", icon: "MinusCircle" },
      { text: "✕ Limited Career Support After Course Completion", icon: "TrendingDown" }
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
        "Social Media Marketing (Paid Social – Meta, LinkedIn, X, etc.)",
        "Google Analytics",
        "Microsoft Clarity",
        "Landing Page Technique",
        "Remarketing",
        "Conversions"
      ]
    },
    {
      term: "Term 2",
      title: "Organic Marketing & Engagement",
      description: "Build powerful brand presence and organic visibility through search optimization, content funnels, and social engagement.",
      modules: [
        "SEO (Search Engine Optimization)",
        "SMO (Social Media Optimization)",
        // "Social Media Marketing",
        "Content Marketing & Ad Scripting",
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
        "Brand Management",
        "E-commerce Management",
        "Strategic Management",
        "OTT Advertising",
        "Influencer Marketing",
        "Microsoft Excel",
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



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("../DigitalMarketing/data/Masters/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("../DigitalMarketing/data/Masters/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('../DigitalMarketing/data/MBA/boxcard').then((m)=>setcategories(m.default))
    import("../DigitalMarketing/data/Masters/faqs").then((m) => setFaqs(m.default));
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
        title="Master in Digital Marketing Course "
        highlightText="in Mumbai"
        description="Mumbai Digital Marketing Master’s Degree is an elite and career-oriented program designed for students, graduates, and professionals. Designed in collaboration with NSDC and Skill India, this program integrates expert theoretical knowledge with practical training on SEO, Google Ads, and other important aspects of digital marketing. It offers you 100% placement and internships support."
        emi="Placements"
        startDate="Industry Experts"
        startDateby='Practical Training from'
        duration="Curriculum with Unique Modules"
        durationValue='One of its kind'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/dm/mdm.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Master’s Digital Marketing Program Different?"
        highlightTitle="in Mumbai?"
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