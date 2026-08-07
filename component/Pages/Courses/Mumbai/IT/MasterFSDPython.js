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

export default function MasterFSD() {

  const pgdmStatsData = [
    { src: '/images/Icons/formicon/ficon1.webp', hover: "/images/Icons/formicon/ficon5.webp", label: '15+ Industry Tools' },
    { src: '/images/Icons/formicon/ficon2.webp', hover: "/images/Icons/formicon/ficon6.webp", label: '22+ Live Projects' },
    { src: '/images/Icons/formicon/ficon3.webp', hover: "/images/Icons/formicon/ficon7.webp", label: '200+ Hours Training' },
    { src: '/images/Icons/formicon/ficon4.webp', hover: "/images/Icons/formicon/ficon8.webp", label: '10,000+ Students Trained' },
  ];

  const mbaFeatures = [
    {
      title: "Get a 3-Month Internship Letter to Begin a Successful Career",
      description: "Add value to your career profile by obtaining a 3-month internship letter which will showcase your hands-on experience in practical development. Gain hands-on experience and work on projects to be exposed to the industry, which is necessary for Python Full Stack Developer candidates.",
      imageSrc: "/images/banner-image/dm/Placement.jpg"
    },
    {
      title: " Get Professional Certifications for Front-End, Back-End and Python Full Stack Development",
      description: "Obtain professional certifications in Front-End Development, Back-End Development, and Python Full Stack Development. Showcase your knowledge in technology through certifications in order to stand out among recruiters.",
      imageSrc: "/images/USP/certificate.jpg"
    },
    {
      title: "Create Live Projects, Coding Problems and Real Industry Case Studies",
      description: "Make a strong portfolio by developing live projects, coding problems and case studies of the industry. Solve business problems using Python, Django, databases, APIs and latest web technologies.",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Get Overseas and International Mentorship and Training",
      description: "Learn through mentorship and training provided by overseas and international mentors and experienced software developers who have global software development practice and industry level expertise.",
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
      description: "Every instructor here has actually built and shipped software you're not learning Django from someone who read about it. Classes are run by people who've sat in engineering teams and know what a hiring manager actually screens for.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop",
      alt: "Live Project Budgets and Marketing Analytics Performance",
      theme: "blue"
    },
    {
      badge: "Placement & Beyond",
      title: "Post Course Support",
      description: "The support doesn't stop at graduation. You've got access to mentors and the career panel after the course ends too for interview prep, resume checks, or just working through a problem you're stuck on at your first job.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
      alt: "Post Course Lifelong Career Guidance and Executive Networking",
      theme: "emerald"
    }
  ];

  const overviewSectionData = {
    title: "Overview of",
    highlightTitle: "Python Full Stack Developer Course in Mumbai",
    paragraphs: [
      { 
        text: "If you're after real technical depth and not just a certificate to put on LinkedIn, this is built for that. The course takes you through frontend development, backend architecture and database management, and you'll get comfortable with Python, HTML, CSS, ReactJS, NextJS, Bootstrap, Angular, MySQL and Django along the way.It's a 10-month program, and it leans hard into classroom practice over theory. You'll work on real engineering projects alongside other students, which is how the portfolio actually gets built not from assignments you do alone and forget. By the end you've got industry certifications behind you, plus the placement guarantee that gets you talking to hiring companies directly.",
        alwaysVisible: true 
      }
    ],
    keyFeatures: [
      { title: "Placements ", text: "A dedicated career panel supports your job search from day one, backed by a 100% placement guarantee connecting you directly with hiring IT companies.", alwaysVisible: true },
      { title: "Industry Tools ", text: "You'll get hands-on depth in the tools employers actually ask for: Python, HTML, CSS, ReactJS, NextJS, Bootstrap, Angular, MySQL, and Django.", alwaysVisible: false },
      { title: "Certifications ", text: "You graduate with Professional Certifications in Front-end, Back-end, and Python Full Stack development credentials that hold up on a resume or LinkedIn profile.", alwaysVisible: false },
      { title: "Global Mentorship ", text: "Overseas tech mentors run code reviews and architecture sessions, giving you engineering feedback most bootcamps don't offer.", alwaysVisible: false },
      { title: "Practical Training ", text: "The 10-month curriculum is weighted toward doing, not lecturing classroom assignments and real coding projects drive the pace.", alwaysVisible: false },
    ]
  };

  const toolsSectionData = {
    title: "Master",
    highlightTitle: "Industry-Standard Design Tools",
    caption: "Learn the same software used by professional designers, creative agencies, marketing teams, and production studios worldwide.",
    tools: [
      { name: "Visual Studio", image: "images/toolslogo/IT/vs.png" },
      { name: "Github", image: "images/toolslogo/IT/github.png" },
      { name: "Git", image: "images/toolslogo/IT/git.png" },
      { name: "Vercel", image: "images/toolslogo/IT/vercel.png" },
      { name: "AI Tools like Lovable", image: "images/toolslogo/IT/lovable.webp" },
      { name: "Cursor", image: "images/toolslogo/IT/cursor.png" },
    ],
  };

  const toggleData = {
  digifine: {
    subheading: "Life With Digifine",
    description: "We designed this learning experience to actually help you build useful skills, get real exposure to the industry, and walk into career opportunities feeling like you're ready for them.",
    cards: [
      { text: "100% Guaranteed Placement with direct hiring partners", icon: "Briefcase" },
      { text: "3-Month Internship Letter to build your professional resume", icon: "FileText" },
      { text: "Next-Gen Tech Stack including Python, ReactJS, and NodeJS", icon: "Layers" },
      { text: "Exclusive NextJS Module taught nowhere else in India", icon: "Globe" },
      { text: "80% Hands-On Coding via live projects and real clones", icon: "Laptop" },
      { text: "International Mentorship from global tech leaders", icon: "Users" },
      { text: "3 Professional Certifications (Front-End, Back-End, & Full-Stack)", icon: "Award" },
      { text: "Lifetime Post-Course Support with trainers (Only in Asia)", icon: "Lightbulb" },
      { text: "Continuous Coding Assessments with interactive feedback", icon: "CheckSquare" },
      { text: "Job-Ready Technical Portfolio that proves you can build real apps", icon: "TrendingUp" }
    ]
  },
  without: {
    subheading: "Imagine Without Digifine",
    description: "And here's what usually happens when training misses the mark—no real hands-on work, nothing that matches what the industry actually needs, and zero support when it comes to your career.",
    cards: [
      { text: "No Placement Guarantees or direct recruiter access", icon: "Briefcase" },
      { text: "No Internship Experience to show on your resume", icon: "FileText" },
      { text: "Outdated Tech Stack failing to meet modern industry standards", icon: "Layers" },
      { text: "No Advanced NextJS Training for modern web dev roles", icon: "Globe" },
      { text: "80% Lecture-Heavy Theory with minimal actual keyboard time", icon: "Laptop" },
      { text: "No Global Mentorship or industry-level exposure", icon: "Users" },
      { text: "Single Generic Certificate that recruiters ignore", icon: "Award" },
      { text: "Ghosted After Graduation with zero technical support", icon: "Lightbulb" },
      { text: "No Hands-On Coding Assessments or direct feedback", icon: "CheckSquare" },
      { text: "Empty Developer Portfolio making it hard to stand out", icon: "TrendingUp" }
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
    title: 'Frontend Developer / Developer Trainee',
    description: 'Start by learning HTML, CSS, JavaScript, and modern UI libraries to build responsive and user-friendly web interfaces.',
    icon: <Lightbulb size={32} strokeWidth={1.5} />,
  },
  {
    id: '02',
    title: 'Backend Developer',
    description: 'Independently design server-side logic, build secure REST APIs, manage databases, and optimize backend server performance.',
    icon: <Rocket size={32} strokeWidth={1.5} />,
  },
  {
    id: '03',
    title: 'Python Developer',
    description: 'Write clean, executable Python scripts for automation, data processing, backend microservices, or AI/ML model integrations.',
    icon: <Gauge size={32} strokeWidth={1.5} />,
  },
  {
    id: '04',
    title: 'Full stack Developer',
    description: 'Handle both client-side and server-side architectures seamlessly, connecting robust databases with modern frontends.',
    icon: <BarChart3 size={32} strokeWidth={1.5} />,
  },
  {
    id: '05',
    title: 'Software Engineer',
    description: 'Architect scalable enterprise systems, implement system design patterns, and lead software development cycles.',
    icon: <Castle size={32} strokeWidth={1.5} />,
  },
];

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



  const [testimonials, setTestimonials] = useState([]);
  const [customCertificates , setcustomCertificates] = useState([]);
  const [categories , setcategories] = useState([])
  const [steps, setSteps] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    import("./data/MasterFSDPython/testimonials")
    
      .then((m) => setTestimonials(m.default))
      .catch((err) => console.error("Testimonial data load fail:", err));
    import("./data/MasterFSDPython/customCertificates").then((m)=> setcustomCertificates(m.default))
    import('./data/PGDSMLAI/boxcard').then((m)=>setcategories(m.default))
    import("./data/MasterFSDPython/faqs").then((m) => setFaqs(m.default));
  }, []);

  return (
    <>
      <CourseCard
        title="Python Full Stack Developer"
        highlightText="Course in Mumbai"
        description="Most coding courses hand you a stack of slides and call it training. Digifine works differently you build and deploy real applications from week one, with senior software engineers reviewing your work the way a lead developer would review a junior's PR. By the time you finish, you've covered Python, Django, frontend frameworks and databases, and you walk away with a portfolio of projects you actually built, not just followed along with. The course comes with recognized tech certifications and a 100% placement guarantee into IT companies."
        emi="Placements"
        startDate="Internship letter"
        startDateby='3 Months'
        duration="Top Mentors"
        durationValue='Practical Training from'
        appliedText=""
        contactNumber=""
        imageUrl="/images/banner-image/it/fsdpy.webp"
        redirectlink = "/course-brochures"
      />
      
      <MyComponent 
        title="What Makes Digifine's Python Full Stack Developer Course Different "
        highlightTitle="in Mumbai"
        statsSubheading="100% Placement Assurance Upon Course Completion"
        statsData={pgdmStatsData}
        redirectlink="course-brochures"
      />
      
      <PlacementStats />
      <FeaturesSection featuresData={mbaFeatures} columns={4} />
      <SupportSection supportData={supportSectionData} />
      <ToolsMastered toolsData={toolsSectionData} />
      <CareerPath 
        mainDescription="Prepare for high-demand careers in Front-End, Back-End, Python, and Full-Stack Development."
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